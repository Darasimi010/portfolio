"use client";

import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  useSyncExternalStore,
} from "react";
import { Volume2, VolumeX, Maximize2, Minimize2 } from "lucide-react";

const HIGH_SCORE_STORAGE_KEY = "block_breaker_high_score";
const HIGH_SCORE_CHANGE_EVENT = "block-breaker-high-score-change";
let highScoreFallback = 0;

function getHighScoreSnapshot(): number {
  if (typeof window === "undefined") return highScoreFallback;

  try {
    const saved = Number(window.localStorage.getItem(HIGH_SCORE_STORAGE_KEY));
    if (Number.isFinite(saved)) {
      return Math.max(highScoreFallback, saved);
    }
  } catch {
    // Continue with the in-memory score when storage is unavailable.
  }

  return highScoreFallback;
}

function getServerHighScoreSnapshot(): number {
  return 0;
}

function subscribeToHighScore(onStoreChange: () => void): () => void {
  if (typeof window === "undefined") return () => undefined;

  window.addEventListener("storage", onStoreChange);
  window.addEventListener(HIGH_SCORE_CHANGE_EVENT, onStoreChange);

  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(HIGH_SCORE_CHANGE_EVENT, onStoreChange);
  };
}

function saveHighScore(score: number): void {
  highScoreFallback = Math.max(highScoreFallback, score);

  try {
    window.localStorage.setItem(
      HIGH_SCORE_STORAGE_KEY,
      String(highScoreFallback),
    );
  } catch {
    // Keep the score in memory when storage is unavailable.
  }

  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(HIGH_SCORE_CHANGE_EVENT));
  }
}

// Web Audio API sound synthesizer - zero external sound files needed
class SoundController {
  private ctx: AudioContext | null = null;
  public enabled: boolean = true;

  private initCtx() {
    if (!this.ctx && typeof window !== "undefined") {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  playPaddleHit() {
    if (!this.enabled) return;
    this.initCtx();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const now = this.ctx.currentTime;
    osc.type = "sine";
    osc.frequency.setValueAtTime(280, now);
    osc.frequency.exponentialRampToValueAtTime(440, now + 0.08);
    gain.gain.setValueAtTime(0.18, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.08);
  }

  playBrickHit(combo: number) {
    if (!this.enabled) return;
    this.initCtx();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const now = this.ctx.currentTime;
    osc.type = "triangle";
    // Scale pitch up with combo
    const baseFreq = 420 + Math.min(combo * 45, 600);
    osc.frequency.setValueAtTime(baseFreq, now);
    osc.frequency.exponentialRampToValueAtTime(baseFreq * 1.3, now + 0.09);
    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.09);
  }

  playPowerup() {
    if (!this.enabled) return;
    this.initCtx();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(320, now);
    osc.frequency.linearRampToValueAtTime(650, now + 0.12);
    osc.frequency.linearRampToValueAtTime(880, now + 0.22);
    gain.gain.setValueAtTime(0.22, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.22);
  }

  playLoseLife() {
    if (!this.enabled) return;
    this.initCtx();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const now = this.ctx.currentTime;
    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(260, now);
    osc.frequency.exponentialRampToValueAtTime(90, now + 0.28);
    gain.gain.setValueAtTime(0.22, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.28);
  }

  playWin() {
    if (!this.enabled) return;
    this.initCtx();
    if (!this.ctx) return;
    const notes = [440, 554.37, 659.25, 880];
    const now = this.ctx.currentTime;
    notes.forEach((freq, idx) => {
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const t = now + idx * 0.1;
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, t);
      gain.gain.setValueAtTime(0.2, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.25);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t);
      osc.stop(t + 0.25);
    });
  }
}

interface Brick {
  id: number;
  x: number;
  y: number;
  w: number;
  h: number;
  hp: number;
  maxHp: number;
  color: string;
  glowColor: string;
  points: number;
  powerup?: "multiball" | "laser" | "expand" | "fireball";
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  size: number;
  alpha: number;
  life: number;
  maxLife: number;
}

interface Ball {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  speed: number;
  isFireball: boolean;
  trail: { x: number; y: number }[];
}

interface DropItem {
  id: number;
  x: number;
  y: number;
  type: "multiball" | "laser" | "expand" | "fireball";
  vy: number;
}

interface FloatingText {
  id: number;
  text: string;
  x: number;
  y: number;
  alpha: number;
  color: string;
}

const PALETTE = [
  {
    main: "#10b981",
    glow: "rgba(16, 185, 129, 0.7)",
    border: "#6ee7b7",
    points: 100,
  }, // Emerald
  {
    main: "#06b6d4",
    glow: "rgba(6, 182, 212, 0.7)",
    border: "#67e8f9",
    points: 80,
  }, // Cyan
  {
    main: "#6366f1",
    glow: "rgba(99, 102, 241, 0.7)",
    border: "#a5b4fc",
    points: 60,
  }, // Indigo
  {
    main: "#f59e0b",
    glow: "rgba(245, 158, 11, 0.7)",
    border: "#fcd34d",
    points: 40,
  }, // Amber
  {
    main: "#ec4899",
    glow: "rgba(236, 72, 153, 0.7)",
    border: "#f472b6",
    points: 20,
  }, // Pink
];

export default function BlockBreakerGame() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const soundRef = useRef<SoundController | null>(null);

  // Subscribe to persisted high-score changes without reading browser storage in an effect.
  const highScore = useSyncExternalStore(
    subscribeToHighScore,
    getHighScoreSnapshot,
    getServerHighScoreSnapshot,
  );
  const [score, setScore] = useState<number>(0);
  const [lives, setLives] = useState<number>(3);
  const [level, setLevel] = useState<number>(1);
  const [combo, setCombo] = useState<number>(0);
  const [gameState, setGameState] = useState<
    "ready" | "playing" | "paused" | "gameover" | "victory"
  >("ready");
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  // Active powerup state display
  const [activeBuff, setActiveBuff] = useState<string | null>(null);

  // Mutable Game Loop State
  const gameRef = useRef({
    width: 800,
    height: 520,
    paddle: {
      x: 350,
      y: 480,
      w: 110,
      baseW: 110,
      h: 13,
      targetX: 350,
      speed: 14,
    },
    balls: [] as Ball[],
    bricks: [] as Brick[],
    particles: [] as Particle[],
    powerups: [] as DropItem[],
    floatingTexts: [] as FloatingText[],
    keys: { left: false, right: false },
    lastFrameTime: 0,
    comboTimer: 0,
    currentScore: 0,
    currentCombo: 0,
    currentLevel: 1,
    currentLives: 3,
    activePowerupTimer: 0,
    fireballTimer: 0,
    expandTimer: 0,
    nextTextId: 0,
    nextPowerupId: 0,
    running: false,
    screenShake: 0,
  });

  // Initialize the audio controller. High scores are read through useSyncExternalStore.
  useEffect(() => {
    soundRef.current = new SoundController();
    return () => {
      soundRef.current = null;
    };
  }, []);

  const toggleSound = () => {
    if (soundRef.current) {
      soundRef.current.enabled = !soundRef.current.enabled;
      setSoundEnabled(soundRef.current.enabled);
    }
  };

  // Build Levels
  const createBricks = useCallback((lvl: number, width: number): Brick[] => {
    const bricks: Brick[] = [];
    const rows = Math.min(4 + lvl, 7);
    const cols = 9;
    const paddingX = 10;
    const paddingY = 9;
    const topOffset = 64;
    const sideMargin = 38;
    const totalSpacingX = (cols - 1) * paddingX;
    const brickW = (width - sideMargin * 2 - totalSpacingX) / cols;
    const brickH = 22;

    let id = 0;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        // Different shapes based on level
        if (lvl === 1 && r === 0 && (c === 0 || c === cols - 1)) continue;
        if (lvl === 2 && (r + c) % 2 === 1 && r > 3) continue; // Checkered bottom
        if (lvl >= 3 && r === 2 && (c === 3 || c === 4 || c === 5)) continue; // Shield tunnel

        const colorScheme = PALETTE[r % PALETTE.length];
        const isDurable =
          (lvl >= 2 && r === 0) ||
          (lvl >= 3 && r === 1 && (c === 2 || c === 6));
        const maxHp = isDurable ? 2 : 1;

        // Random powerups (15% chance)
        let powerup: "multiball" | "laser" | "expand" | "fireball" | undefined =
          undefined;
        const roll = Math.random();
        if (roll < 0.05) powerup = "multiball";
        else if (roll < 0.09) powerup = "expand";
        else if (roll < 0.13) powerup = "fireball";

        bricks.push({
          id: id++,
          x: sideMargin + c * (brickW + paddingX),
          y: topOffset + r * (brickH + paddingY),
          w: brickW,
          h: brickH,
          hp: maxHp,
          maxHp: maxHp,
          color: colorScheme.main,
          glowColor: colorScheme.glow,
          points: colorScheme.points * maxHp,
          powerup,
        });
      }
    }
    return bricks;
  }, []);

  const spawnParticles = useCallback(
    (x: number, y: number, color: string, count = 12) => {
      const { particles } = gameRef.current;
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 4.5 + 1.2;
        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          color,
          size: Math.random() * 3.5 + 1.5,
          alpha: 1,
          life: 0,
          maxLife: Math.random() * 24 + 16,
        });
      }
    },
    [],
  );

  const spawnFloatingText = useCallback(
    (text: string, x: number, y: number, color = "#6ee7b7") => {
      gameRef.current.floatingTexts.push({
        id: gameRef.current.nextTextId++,
        text,
        x,
        y,
        alpha: 1,
        color,
      });
    },
    [],
  );

  const resetBallAndPaddle = useCallback(() => {
    const g = gameRef.current;
    g.paddle.w = g.paddle.baseW;
    g.paddle.x = (g.width - g.paddle.w) / 2;
    g.paddle.targetX = g.paddle.x;
    g.fireballTimer = 0;
    g.expandTimer = 0;
    setActiveBuff(null);

    const initialSpeed = 5.2 + Math.min(g.currentLevel * 0.4, 2.0);
    const angle = Math.PI / 4 + Math.random() * (Math.PI / 2); // Upward trajectory
    g.balls = [
      {
        x: g.width / 2,
        y: g.paddle.y - 12,
        vx: initialSpeed * Math.cos(angle) * (Math.random() > 0.5 ? 1 : -1),
        vy: -Math.abs(initialSpeed * Math.sin(angle)),
        radius: 6,
        speed: initialSpeed,
        isFireball: false,
        trail: [],
      },
    ];
  }, []);

  // Start / Restart
  const startGame = useCallback(() => {
    const g = gameRef.current;
    g.currentScore = 0;
    g.currentCombo = 0;
    g.currentLevel = 1;
    g.currentLives = 3;
    g.screenShake = 0;
    g.powerups = [];
    g.particles = [];
    g.floatingTexts = [];
    g.bricks = createBricks(1, g.width);
    resetBallAndPaddle();
    g.running = true;

    setScore(0);
    setLives(3);
    setLevel(1);
    setCombo(0);
    setGameState("playing");
  }, [createBricks, resetBallAndPaddle]);

  const nextLevel = useCallback(() => {
    const g = gameRef.current;
    g.currentLevel += 1;
    setLevel(g.currentLevel);
    g.bricks = createBricks(g.currentLevel, g.width);
    g.powerups = [];
    g.particles = [];
    resetBallAndPaddle();
    spawnFloatingText(
      `LEVEL ${g.currentLevel}`,
      g.width / 2 - 40,
      g.height / 2,
      "#38bdf8",
    );
    if (soundRef.current) soundRef.current.playWin();
  }, [createBricks, resetBallAndPaddle, spawnFloatingText]);

  const checkHighScore = useCallback((finalScore: number) => {
    if (finalScore > getHighScoreSnapshot()) {
      saveHighScore(finalScore);
    }
  }, []);

  // Resize canvas to container resolution
  const handleResize = useCallback(() => {
    if (!canvasRef.current || !containerRef.current) return;
    const canvas = canvasRef.current;
    const container = containerRef.current;
    const rect = container.getBoundingClientRect();

    // Internal game virtual coordinate system
    const targetW = 800;
    const targetH = 520;

    canvas.width = targetW;
    canvas.height = targetH;
    gameRef.current.width = targetW;
    gameRef.current.height = targetH;
    gameRef.current.paddle.y = targetH - 34;

    // Responsive scaling CSS
    canvas.style.width = "100%";
    canvas.style.height = `${(targetH / targetW) * rect.width}px`;
    canvas.style.maxHeight = "520px";
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  // Keyboard and pointer event handlers
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "ArrowLeft" || e.code === "KeyA") {
        gameRef.current.keys.left = true;
      }
      if (e.code === "ArrowRight" || e.code === "KeyD") {
        gameRef.current.keys.right = true;
      }
      if (e.code === "Space") {
        e.preventDefault();
        if (
          gameState === "ready" ||
          gameState === "gameover" ||
          gameState === "victory"
        ) {
          startGame();
        } else if (gameState === "playing") {
          setGameState("paused");
        } else if (gameState === "paused") {
          setGameState("playing");
        }
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.code === "ArrowLeft" || e.code === "KeyA") {
        gameRef.current.keys.left = false;
      }
      if (e.code === "ArrowRight" || e.code === "KeyD") {
        gameRef.current.keys.right = false;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [gameState, startGame]);

  // Pointer / Mouse move on canvas
  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const scaleX = gameRef.current.width / rect.width;
    const clientX = e.clientX - rect.left;
    const gameX = clientX * scaleX;
    gameRef.current.paddle.targetX = Math.max(
      0,
      Math.min(
        gameRef.current.width - gameRef.current.paddle.w,
        gameX - gameRef.current.paddle.w / 2,
      ),
    );
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas || e.touches.length === 0) return;
    const touch = e.touches[0];
    const rect = canvas.getBoundingClientRect();
    const scaleX = gameRef.current.width / rect.width;
    const clientX = touch.clientX - rect.left;
    const gameX = clientX * scaleX;
    gameRef.current.paddle.targetX = Math.max(
      0,
      Math.min(
        gameRef.current.width - gameRef.current.paddle.w,
        gameX - gameRef.current.paddle.w / 2,
      ),
    );
  };

  // Main Animation & Physics Loop
  useEffect(() => {
    let animId: number;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const game = gameRef.current;

    const loop = (timestamp: number) => {
      if (!game.lastFrameTime) game.lastFrameTime = timestamp;
      const dt = Math.min((timestamp - game.lastFrameTime) / 1000, 0.1);
      game.lastFrameTime = timestamp;

      // 1. UPDATE PHYSICS (if playing)
      if (gameState === "playing") {
        // Paddle keyboard motion interpolation
        if (game.keys.left) {
          game.paddle.targetX -= game.paddle.speed;
        }
        if (game.keys.right) {
          game.paddle.targetX += game.paddle.speed;
        }
        game.paddle.targetX = Math.max(
          0,
          Math.min(game.width - game.paddle.w, game.paddle.targetX),
        );

        // Smooth paddle follow
        game.paddle.x += (game.paddle.targetX - game.paddle.x) * 0.35;

        // Timers for buffs
        if (game.fireballTimer > 0) {
          game.fireballTimer -= dt;
          if (game.fireballTimer <= 0) {
            game.balls.forEach((b) => (b.isFireball = false));
            setActiveBuff(null);
          }
        }
        if (game.expandTimer > 0) {
          game.expandTimer -= dt;
          if (game.expandTimer <= 0) {
            game.paddle.w = game.paddle.baseW;
            setActiveBuff(null);
          }
        }

        // Combo decay
        if (game.comboTimer > 0) {
          game.comboTimer -= dt;
          if (game.comboTimer <= 0) {
            game.currentCombo = 0;
            setCombo(0);
          }
        }

        // Screen shake decay
        if (game.screenShake > 0) {
          game.screenShake -= dt * 18;
          if (game.screenShake < 0) game.screenShake = 0;
        }

        // Powerup drops
        for (let i = game.powerups.length - 1; i >= 0; i--) {
          const item = game.powerups[i];
          item.y += item.vy * (dt * 60);

          // Check paddle catch
          if (
            item.y >= game.paddle.y &&
            item.y <= game.paddle.y + game.paddle.h &&
            item.x >= game.paddle.x &&
            item.x <= game.paddle.x + game.paddle.w
          ) {
            // Caught powerup!
            soundRef.current?.playPowerup();
            spawnParticles(item.x, item.y, "#38bdf8", 16);
            if (item.type === "multiball") {
              // Spawn 2 new balls from existing ball
              if (game.balls.length > 0) {
                const base = game.balls[0];
                game.balls.push(
                  {
                    ...base,
                    vx: base.vx * 0.8 + 2.5,
                    vy: -Math.abs(base.vy),
                    trail: [],
                  },
                  {
                    ...base,
                    vx: base.vx * 0.8 - 2.5,
                    vy: -Math.abs(base.vy),
                    trail: [],
                  },
                );
              }
              spawnFloatingText("MULTI-BALL!", item.x, item.y - 10, "#38bdf8");
              setActiveBuff("Multi-Ball Active");
            } else if (item.type === "expand") {
              game.paddle.w = Math.min(game.paddle.baseW * 1.5, 180);
              game.expandTimer = 10;
              spawnFloatingText(
                "EXPAND PADDLE!",
                item.x,
                item.y - 10,
                "#34d399",
              );
              setActiveBuff("Paddle Expanded (10s)");
            } else if (item.type === "fireball") {
              game.fireballTimer = 7;
              game.balls.forEach((b) => (b.isFireball = true));
              spawnFloatingText(
                "FIREBALL BURST!",
                item.x,
                item.y - 10,
                "#fbbf24",
              );
              setActiveBuff("Fireball (Destroys Everything!)");
            }

            game.powerups.splice(i, 1);
            continue;
          }

          // Off screen bottom
          if (item.y > game.height) {
            game.powerups.splice(i, 1);
          }
        }

        // Balls update & collision
        for (let bi = game.balls.length - 1; bi >= 0; bi--) {
          const b = game.balls[bi];

          // Trail history
          b.trail.push({ x: b.x, y: b.y });
          if (b.trail.length > 7) b.trail.shift();

          b.x += b.vx * (dt * 60);
          b.y += b.vy * (dt * 60);

          // Wall bounce (Left/Right)
          if (b.x - b.radius <= 0) {
            b.x = b.radius;
            b.vx = Math.abs(b.vx);
            spawnParticles(b.x, b.y, "#94a3b8", 4);
          } else if (b.x + b.radius >= game.width) {
            b.x = game.width - b.radius;
            b.vx = -Math.abs(b.vx);
            spawnParticles(b.x, b.y, "#94a3b8", 4);
          }

          // Top bounce
          if (b.y - b.radius <= 0) {
            b.y = b.radius;
            b.vy = Math.abs(b.vy);
            spawnParticles(b.x, b.y, "#94a3b8", 4);
          }

          // Paddle bounce
          if (
            b.y + b.radius >= game.paddle.y &&
            b.y - b.radius <= game.paddle.y + game.paddle.h &&
            b.x >= game.paddle.x - 4 &&
            b.x <= game.paddle.x + game.paddle.w + 4 &&
            b.vy > 0
          ) {
            soundRef.current?.playPaddleHit();
            spawnParticles(b.x, game.paddle.y, "#34d399", 8);

            // Compute reflection angle based on where it hit paddle (-1 to 1)
            const hitOffset =
              (b.x - (game.paddle.x + game.paddle.w / 2)) / (game.paddle.w / 2);
            const clampedOffset = Math.max(-0.9, Math.min(0.9, hitOffset));
            const maxBounceAngle = Math.PI * 0.42; // Up to ~75 degrees
            const bounceAngle = clampedOffset * maxBounceAngle;

            const currentSpeed = Math.hypot(b.vx, b.vy);
            const newSpeed = Math.min(currentSpeed * 1.015, 11); // Slight speedup
            b.vx = newSpeed * Math.sin(bounceAngle);
            b.vy = -newSpeed * Math.cos(bounceAngle);
            b.y = game.paddle.y - b.radius;
          }

          // Brick collision check
          for (let bri = game.bricks.length - 1; bri >= 0; bri--) {
            const brick = game.bricks[bri];

            // Nearest point on rectangle to circle
            const closestX = Math.max(
              brick.x,
              Math.min(b.x, brick.x + brick.w),
            );
            const closestY = Math.max(
              brick.y,
              Math.min(b.y, brick.y + brick.h),
            );
            const distanceX = b.x - closestX;
            const distanceY = b.y - closestY;
            const distSq = distanceX * distanceX + distanceY * distanceY;

            if (distSq < b.radius * b.radius) {
              // Brick hit!
              if (!b.isFireball) {
                // Determine collision side
                const overlapLeft = b.x + b.radius - brick.x;
                const overlapRight = brick.x + brick.w - (b.x - b.radius);
                const overlapTop = b.y + b.radius - brick.y;
                const overlapBottom = brick.y + brick.h - (b.y - b.radius);

                const minOverlapX = Math.min(overlapLeft, overlapRight);
                const minOverlapY = Math.min(overlapTop, overlapBottom);

                if (minOverlapX < minOverlapY) {
                  b.vx = -b.vx;
                } else {
                  b.vy = -b.vy;
                }
              }

              // Apply damage
              const damage = b.isFireball ? brick.hp : 1;
              brick.hp -= damage;

              // Combo increment
              game.currentCombo += 1;
              game.comboTimer = 2.4;
              setCombo(game.currentCombo);

              const comboMultiplier = 1 + (game.currentCombo - 1) * 0.2;
              const pointsEarned = Math.round(brick.points * comboMultiplier);
              game.currentScore += pointsEarned;
              setScore(game.currentScore);
              checkHighScore(game.currentScore);

              soundRef.current?.playBrickHit(game.currentCombo);
              spawnParticles(
                closestX,
                closestY,
                brick.color,
                b.isFireball ? 20 : 12,
              );

              if (game.currentCombo >= 3) {
                spawnFloatingText(
                  `+${pointsEarned} x${game.currentCombo.toFixed(1)}!`,
                  brick.x,
                  brick.y,
                  brick.color,
                );
              }

              // Destroy brick
              if (brick.hp <= 0) {
                // Drop powerup if available
                if (brick.powerup) {
                  game.powerups.push({
                    id: game.nextPowerupId++,
                    x: brick.x + brick.w / 2,
                    y: brick.y + brick.h / 2,
                    type: brick.powerup,
                    vy: 2.2,
                  });
                }
                game.bricks.splice(bri, 1);
                game.screenShake = 2.5;
              }

              // Fireball continues through bricks, normal bounces
              if (!b.isFireball) break;
            }
          }

          // Check bottom bounds (lost ball)
          if (b.y - b.radius > game.height) {
            game.balls.splice(bi, 1);
          }
        }

        // Check if all balls lost
        if (game.balls.length === 0) {
          game.currentLives -= 1;
          setLives(game.currentLives);
          soundRef.current?.playLoseLife();
          game.screenShake = 6;
          game.currentCombo = 0;
          setCombo(0);

          if (game.currentLives <= 0) {
            setGameState("gameover");
            checkHighScore(game.currentScore);
          } else {
            resetBallAndPaddle();
          }
        }

        // Check level clear
        if (game.bricks.length === 0) {
          if (game.currentLevel >= 4) {
            setGameState("victory");
            checkHighScore(game.currentScore);
            soundRef.current?.playWin();
          } else {
            nextLevel();
          }
        }
      }

      // 2. PARTICLES & FLOATING TEXT UPDATE
      for (let i = game.particles.length - 1; i >= 0; i--) {
        const p = game.particles[i];
        p.x += p.vx * (dt * 60);
        p.y += p.vy * (dt * 60);
        p.life += dt * 60;
        p.alpha = 1 - p.life / p.maxLife;
        if (p.life >= p.maxLife) {
          game.particles.splice(i, 1);
        }
      }

      for (let i = game.floatingTexts.length - 1; i >= 0; i--) {
        const ft = game.floatingTexts[i];
        ft.y -= 1.2 * (dt * 60);
        ft.alpha -= 0.02 * (dt * 60);
        if (ft.alpha <= 0) {
          game.floatingTexts.splice(i, 1);
        }
      }

      // 3. RENDER CANVAS
      ctx.save();

      // Screen shake translation
      if (game.screenShake > 0) {
        const sx = (Math.random() - 0.5) * game.screenShake;
        const sy = (Math.random() - 0.5) * game.screenShake;
        ctx.translate(sx, sy);
      }

      // Background clear
      ctx.fillStyle = "#08110c";
      ctx.fillRect(0, 0, game.width, game.height);

      // Subtle background grid
      ctx.strokeStyle = "rgba(110, 231, 183, 0.045)";
      ctx.lineWidth = 1;
      const gridSize = 32;
      for (let x = 0; x < game.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, game.height);
        ctx.stroke();
      }
      for (let y = 0; y < game.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(game.width, y);
        ctx.stroke();
      }

      // Draw Bricks
      game.bricks.forEach((brick) => {
        ctx.save();
        ctx.shadowColor = brick.glowColor;
        ctx.shadowBlur = 10;
        ctx.fillStyle = brick.color;

        // Dim if damaged multi-hit brick
        if (brick.hp < brick.maxHp) {
          ctx.globalAlpha = 0.6;
        }

        // Rounded rect for brick
        const r = 4;
        ctx.beginPath();
        ctx.roundRect(brick.x, brick.y, brick.w, brick.h, r);
        ctx.fill();

        // Inner bevel highlight
        ctx.strokeStyle = "rgba(255, 255, 255, 0.35)";
        ctx.lineWidth = 1.2;
        ctx.stroke();

        // If brick has powerup, show pulsing symbol
        if (brick.powerup) {
          ctx.fillStyle = "#ffffff";
          ctx.beginPath();
          ctx.arc(
            brick.x + brick.w / 2,
            brick.y + brick.h / 2,
            3,
            0,
            Math.PI * 2,
          );
          ctx.fill();
        }

        ctx.restore();
      });

      // Draw Powerups
      game.powerups.forEach((pu) => {
        ctx.save();
        const colors: Record<string, string> = {
          multiball: "#38bdf8",
          expand: "#34d399",
          fireball: "#f59e0b",
        };
        const color = colors[pu.type] || "#ffffff";
        ctx.shadowColor = color;
        ctx.shadowBlur = 12;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(pu.x, pu.y, 8, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "#0f172a";
        ctx.font = "bold 9px monospace";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        const letter =
          pu.type === "multiball" ? "M" : pu.type === "expand" ? "E" : "F";
        ctx.fillText(letter, pu.x, pu.y);
        ctx.restore();
      });

      // Draw Particles
      game.particles.forEach((p) => {
        ctx.save();
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 6;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // Draw Paddle
      ctx.save();
      const isExpanded = game.paddle.w > game.paddle.baseW;
      const paddleGlow = isExpanded ? "#34d399" : "#10b981";
      ctx.shadowColor = paddleGlow;
      ctx.shadowBlur = 16;

      // Gradient paddle
      const paddleGrad = ctx.createLinearGradient(
        game.paddle.x,
        game.paddle.y,
        game.paddle.x,
        game.paddle.y + game.paddle.h,
      );
      paddleGrad.addColorStop(0, "#a7f3d0");
      paddleGrad.addColorStop(0.5, "#10b981");
      paddleGrad.addColorStop(1, "#047857");

      ctx.fillStyle = paddleGrad;
      ctx.beginPath();
      ctx.roundRect(
        game.paddle.x,
        game.paddle.y,
        game.paddle.w,
        game.paddle.h,
        6,
      );
      ctx.fill();

      // Top paddle reflective line
      ctx.strokeStyle = "rgba(255, 255, 255, 0.75)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(game.paddle.x + 6, game.paddle.y + 1);
      ctx.lineTo(game.paddle.x + game.paddle.w - 6, game.paddle.y + 1);
      ctx.stroke();
      ctx.restore();

      // Draw Balls & Trails
      game.balls.forEach((b) => {
        ctx.save();

        // Trail render
        b.trail.forEach((point, idx) => {
          const ratio = (idx + 1) / b.trail.length;
          ctx.beginPath();
          ctx.arc(point.x, point.y, b.radius * ratio * 0.75, 0, Math.PI * 2);
          ctx.fillStyle = b.isFireball
            ? `rgba(245, 158, 11, ${ratio * 0.4})`
            : `rgba(52, 211, 153, ${ratio * 0.35})`;
          ctx.fill();
        });

        // Main Ball
        ctx.shadowColor = b.isFireball ? "#f59e0b" : "#34d399";
        ctx.shadowBlur = b.isFireball ? 20 : 12;
        ctx.fillStyle = b.isFireball ? "#fef08a" : "#ecfdf5";
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      });

      // Draw Floating Texts
      game.floatingTexts.forEach((ft) => {
        ctx.save();
        ctx.globalAlpha = Math.max(0, ft.alpha);
        ctx.fillStyle = ft.color;
        ctx.shadowColor = ft.color;
        ctx.shadowBlur = 8;
        ctx.font = "bold 13px sans-serif";
        ctx.fillText(ft.text, ft.x, ft.y);
        ctx.restore();
      });

      // Bottom death line indicator
      ctx.save();
      ctx.strokeStyle = "rgba(110, 231, 183, 0.16)";
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(0, game.height - 2);
      ctx.lineTo(game.width, game.height - 2);
      ctx.stroke();
      ctx.restore();

      ctx.restore(); // Undo screen shake

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [
    gameState,
    nextLevel,
    createBricks,
    checkHighScore,
    resetBallAndPaddle,
    spawnParticles,
    spawnFloatingText,
  ]);

  // Fullscreen toggle for container
  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-2xl border border-emerald-900/30 bg-[#08110c] text-white shadow-[0_24px_70px_-38px_rgba(16,185,129,0.42)] select-none"
    >
      {/* Compact game HUD */}
      <div className="z-10 flex w-full flex-wrap items-center justify-between gap-x-4 gap-y-2 border-b border-emerald-900/40 bg-[#0d1b12] px-4 py-3 sm:px-5">
        <div className="flex min-w-0 items-center gap-4 sm:gap-5">
          <div className="flex items-center gap-2">
            <span
              className="h-1.5 w-1.5 rounded-full bg-emerald-400"
              aria-hidden="true"
            />
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-200">
              Level {String(level).padStart(2, "0")}
            </span>
          </div>
          <div className="hidden text-[11px] text-slate-400 sm:block">
            Best{" "}
            <span className="ml-1 font-semibold tabular-nums text-slate-200">
              {highScore.toLocaleString()}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 sm:gap-5">
          {combo > 1 && (
            <span className="hidden rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-emerald-200 sm:inline-flex">
              {combo}× COMBO
            </span>
          )}
          <div className="text-right">
            <span className="mr-1.5 text-[10px] font-medium uppercase tracking-wider text-slate-400">
              Score
            </span>
            <span className="font-mono text-sm font-semibold tabular-nums text-white">
              {score.toLocaleString()}
            </span>
          </div>
          <div
            className="flex items-center gap-1.5"
            aria-label={`${lives} lives remaining`}
            title={`${lives} lives remaining`}
          >
            <span className="mr-0.5 text-[10px] font-medium uppercase tracking-wider text-slate-400">
              Lives
            </span>
            {Array.from({ length: 3 }).map((_, i) => (
              <span
                key={i}
                className={`h-1.5 w-1.5 rounded-full transition-colors ${i < lives ? "bg-emerald-400" : "bg-slate-700"}`}
                aria-hidden="true"
              />
            ))}
          </div>
        </div>

        <div className="flex w-full items-center justify-end gap-1 border-t border-emerald-900/30 pt-2 sm:w-auto sm:border-0 sm:pt-0">
          {gameState === "playing" && (
            <button
              type="button"
              onClick={() => setGameState("paused")}
              className="rounded-lg px-2.5 py-1.5 text-[11px] font-medium text-slate-300 transition hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              Pause
            </button>
          )}
          <button
            type="button"
            onClick={toggleSound}
            aria-label={soundEnabled ? "Mute sound" : "Enable sound"}
            aria-pressed={soundEnabled}
            className="rounded-lg px-2.5 py-1.5 text-[11px] font-medium text-slate-300 transition hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
          >
            {soundEnabled ? (
              <Volume2 className="mr-1 inline h-3.5 w-3.5" />
            ) : (
              <VolumeX className="mr-1 inline h-3.5 w-3.5" />
            )}
            <span>{soundEnabled ? "Sound on" : "Sound off"}</span>
          </button>
          <button
            type="button"
            onClick={toggleFullscreen}
            aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
            className="hidden rounded-lg px-2.5 py-1.5 text-[11px] font-medium text-slate-300 transition hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 sm:inline-flex sm:items-center"
          >
            {isFullscreen ? (
              <Minimize2 className="mr-1 h-3.5 w-3.5" />
            ) : (
              <Maximize2 className="mr-1 h-3.5 w-3.5" />
            )}
            {isFullscreen ? "Exit" : "Expand"}
          </button>
        </div>
      </div>

      {/* A quiet status label replaces the bouncing power-up badge. */}
      {activeBuff && gameState === "playing" && (
        <div className="pointer-events-none absolute left-1/2 top-16 z-20 -translate-x-1/2 rounded-full border border-emerald-400/25 bg-[#0d1b12]/90 px-3 py-1 text-[10px] font-medium tracking-wide text-emerald-200 shadow-lg backdrop-blur-sm">
          {activeBuff}
        </div>
      )}

      {/* Canvas */}
      <div className="relative flex w-full items-center justify-center overflow-hidden">
        <canvas
          ref={canvasRef}
          onPointerMove={handlePointerMove}
          onTouchMove={handleTouchMove}
          aria-label="Block Breaker game board. Move your pointer or use the left and right arrow keys to control the paddle."
          className="block w-full touch-none cursor-ew-resize"
        />

        {/* Minimal game-state overlays */}
        {gameState !== "playing" && (
          <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-[#050b07]/78 p-5 text-center backdrop-blur-[3px] sm:p-8">
            {gameState === "ready" && (
              <div className="max-w-md space-y-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-emerald-300">
                  A little arcade break
                </p>
                <div>
                  <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Block Breaker<span className="text-emerald-400">.</span>
                  </h3>
                  <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-slate-300">
                    Keep the ball in play, clear the blocks and see how far you
                    can get.
                  </p>
                </div>
                <p className="text-xs text-slate-400">
                  Move with your pointer,{" "}
                  <kbd className="rounded border border-white/15 bg-white/5 px-1.5 py-0.5 font-mono text-[10px] text-slate-200">
                    A
                  </kbd>{" "}
                  /{" "}
                  <kbd className="rounded border border-white/15 bg-white/5 px-1.5 py-0.5 font-mono text-[10px] text-slate-200">
                    D
                  </kbd>{" "}
                  or the arrow keys.
                </p>
                <p className="text-[11px] text-slate-500">
                  Catch power-ups for multi-ball, a wider paddle or fireball.
                </p>
                <button
                  type="button"
                  onClick={startGame}
                  className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-7 py-3 text-sm font-semibold text-[#062014] shadow-[0_8px_30px_-12px_rgba(52,211,153,0.65)] transition duration-200 hover:-translate-y-0.5 hover:bg-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#08110c] active:translate-y-0"
                >
                  Start playing
                </button>
                <p className="text-[10px] text-slate-500">
                  Press Space to start
                </p>
              </div>
            )}

            {gameState === "paused" && (
              <div className="space-y-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
                  Take your time
                </p>
                <h3 className="text-3xl font-bold tracking-tight text-white">
                  Game paused
                </h3>
                <button
                  type="button"
                  onClick={() => setGameState("playing")}
                  className="rounded-full bg-emerald-400 px-6 py-2.5 text-sm font-semibold text-[#062014] transition hover:bg-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
                >
                  Resume game
                </button>
                <p className="text-[10px] text-slate-500">
                  Press Space to resume
                </p>
              </div>
            )}

            {gameState === "gameover" && (
              <div className="max-w-xs space-y-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Run complete
                </p>
                <h3 className="text-3xl font-bold tracking-tight text-white">
                  Game over<span className="text-emerald-400">.</span>
                </h3>
                <p className="text-sm text-slate-300">
                  Final score{" "}
                  <span className="font-mono font-semibold tabular-nums text-white">
                    {score.toLocaleString()}
                  </span>
                </p>
                {score >= highScore && score > 0 && (
                  <p className="text-xs font-semibold text-emerald-300">
                    A new personal best.
                  </p>
                )}
                <button
                  type="button"
                  onClick={startGame}
                  className="rounded-full bg-emerald-400 px-6 py-2.5 text-sm font-semibold text-[#062014] transition hover:bg-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
                >
                  Play again
                </button>
              </div>
            )}

            {gameState === "victory" && (
              <div className="max-w-xs space-y-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
                  All levels cleared
                </p>
                <h3 className="text-3xl font-bold tracking-tight text-white">
                  Nicely done<span className="text-emerald-400">.</span>
                </h3>
                <p className="text-sm text-slate-300">
                  Final score{" "}
                  <span className="font-mono font-semibold tabular-nums text-white">
                    {score.toLocaleString()}
                  </span>
                </p>
                <button
                  type="button"
                  onClick={startGame}
                  className="rounded-full bg-emerald-400 px-6 py-2.5 text-sm font-semibold text-[#062014] transition hover:bg-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
                >
                  Play again
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Small, useful control hint */}
      <div className="flex w-full flex-wrap items-center justify-between gap-2 border-t border-emerald-900/40 bg-[#0d1b12] px-4 py-2.5 text-[10px] text-slate-400 sm:px-5">
        <span>Move: pointer / A D / ← →</span>
        <span className="text-slate-500">
          Space: pause · Clear every block to advance
        </span>
      </div>
    </div>
  );
}
