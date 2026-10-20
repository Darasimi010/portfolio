"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  GitPullRequest,
  Lock,
} from "lucide-react";

export default function FeaturedWork() {
  const projects = [
    {
      id: "braandly",
      slug: "braandly",
      title: "Braandly",
      role: "Frontend Developer",
      subtitle: "Engineering a More Capable Brand Management Platform",
      headlineFocus: "Feature Engineering & Architecture",
      tagline:
        "Product engineering at scale: Branding Checklist suite, optimistic cache rollback, and design systems.",
      heroSummary:
        "Engineered a multi-page branding diagnostic suite, synchronized optimistic UI priority mutations across three TanStack Query cache scopes, created a universal dark-mode ThemeSkeleton across 33+ files, and eradicated complex event-handling and stacking-context defects.",
      problem:
        "Users needed a structured way to assess brand maturity and work through branding tasks. Meanwhile, task priority updates were prone to UI inconsistency, comment reaction scanning was inefficient, and default dark-mode loading skeletons were inconsistent across 33+ files.",
      strongestContribution:
        "Built the multi-page Branding Checklist suite (71 files, 10,792+ additions); engineered optimistic UI state updates with cache rollback across individual, project, and workspace cache scopes; standardized dark-mode loading states across 33+ files.",
      techStack: [
        "Next.js",
        "React.js",
        "TypeScript",
        "TanStack React Query",
        "Zustand",
        "Redux Toolkit",
        "Tailwind CSS",
        "HeroUI",
        "Framer Motion",
      ],
      caseStudyUrl: "/work/braandly",
      liveUrl: "https://braandly.com",
      isPrivateRepo: true,
      repoName: "Private Enterprise Repository",
      keyMetrics: [
        {
          label: "Files Delivered",
          value: "71+",
          detail: "Created or refined across the checklist suite",
        },
        {
          label: "Lines Added",
          value: "10,792+",
          detail: "Documented in contribution report",
        },
        {
          label: "Files Migrated",
          value: "33+",
          detail: "Universal ThemeSkeleton standardization",
        },
        {
          label: "Cache Scopes",
          value: "3 scopes",
          detail: "Synchronized TanStack Query optimistic mutations",
        },
      ],
      engineeringAreas: [
        "Feature Architecture",
        "React State Management",
        "Optimistic UI & Cache Rollback",
        "Reusable Design Systems",
        "Responsive Engineering",
        "Role-Based Access Control",
        "Image Delivery Optimization",
      ],
      highlights: [
        "Built multi-page workflow spanning tool hub, brand audit quiz, diagnostic results, checklist workspace, and checklist catalog.",
        "Engineered optimistic task priority updates with automatic rollback across individual tasks, project tasks, and workspace tasks.",
        "Designed memoized Map lookup for comment reactions, replacing expensive repeated member array searches with O(1) lookups.",
        "Created a reusable ThemeSkeleton component with explicit light- and dark-mode tokens, eliminating theme shimmer glitches across 33+ files.",
        "Diagnosed and resolved subtle UI defects including filter-tray outside-click race conditions and sticky header z-index clashes.",
        "Restricted admin dashboard navigation with an explicit role allowlist and optimized marketing images with responsive WebP sizing.",
      ],
      challenges: [
        "Users needed a structured diagnostic engine to evaluate brand maturity and generate actionable tasks without feeling overwhelmed.",
        "Task priority updates needed to feel instantaneous in the UI while ensuring network failure wouldn't leave the UI out of sync with the server.",
        "Comment reaction tags needed to display real member names without incurring O(N×M) array scanning overhead on every render.",
        "The default component library shimmer produced jarring visual artifacts in dark mode across core dashboards.",
        "Dropdown navigation and outside-click handlers suffered from race conditions that reopened trays immediately after closing.",
      ],
      solutions: [
        "Designed a multi-step guided workflow (Checklist Setup → Diagnostic Quiz → Results → Workspace) that breaks down the complex process into manageable chunks.",
        "Engineered optimistic UI updates with optimistic-state persistence and automatic rollback to ensure sub-second UI responsiveness while maintaining data integrity during network operations.",
        "Implemented a memoized Map lookup strategy that reduced member lookup time from O(N×M) to O(1), ensuring comment reactions display instantly without blocking renders.",
        "Created a ThemeSkeleton component with explicit light/dark mode tokens, eliminating shimmer artifacts and creating a cohesive dark-mode aesthetic throughout the application.",
        "Resolved event-handling race conditions using a ref-based pointer lock pattern that ensures dropdowns open and close reliably regardless of event timing.",
        "Enforced security by restricting admin dashboard access to explicitly allowed roles and optimized marketing image delivery using responsive WebP sizing with Next.js Image.",
      ],
      badgeColor:
        "bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800/50",
      accentBorder: "group-hover:border-indigo-500/50",
      gradient: "from-indigo-500/10 via-indigo-500/5 to-transparent",
      accentColor: "indigo",
      sections: [
        {
          heading: "1. Built the Branding Checklist Suite",
          subheading: "From Diagnostic Quiz to Actionable Task Catalog",
          content:
            "I implemented a multi-page branding workflow spanning the tool hub, brand audit quiz, diagnostic results, checklist workspace, and checklist catalog.\n\nThe quiz evaluates brand maturity and generates tailored recommendations. The results view presents category-level diagnostics, while the checklist workspace supports task completion, progress tracking, search, checklist switching, archiving, and duplication.\n\nI also implemented supporting engagement features, including a contextual AI chat assistant, milestone badge unlocks, and a confetti celebration component. I fixed a state-reset defect that prevented celebrations from triggering again and corrected checklist-sharing URL generation.",
          technicalDeepDive: {
            title: "Architecture & Scale Evidence",
            description:
              "71 files created or modified, with more than 10,792 additions recorded in the contribution report.",
            points: [
              "Quiz Diagnostic Engine: Computes category-level scores across Strategy, Identity, Voice, and Assets.",
              "Dynamic Workspace: Handles search filtering, progress percentage calculations, archiving, and cloning.",
              "Interactive Celebrations: Built a reusable confetti trigger with proper state cleanup to support repeat milestones.",
              "Contextual AI Assistant: Embedded sidebar assistant that provides guided branding prompts based on active checklist category.",
            ],
          },
        },
        {
          heading:
            "2. Improved Task Priority Management and Optimistic Updates",
          subheading: "Multi-Scope Cache Synchronization with Rollback",
          content:
            "I implemented priority selection workflows across task panels and sidebar menus, including clearer interaction targets, color-coded priority options, and viewport-aware dropdown positioning.\n\nI also worked on synchronizing optimistic priority updates across three TanStack React Query cache scopes: individual tasks, project tasks, and workspace tasks. The implementation included rollback behavior when a server mutation failed, helping avoid inconsistent UI state.",
          technicalDeepDive: {
            title: "Optimistic Mutation Coordination",
            description:
              "How three React Query cache scopes stay in sync during network mutations:",
            points: [
              "Scope 1: `['task', taskId]` — single task detail view.",
              "Scope 2: `['project', projectId, 'tasks']` — current project task list.",
              "Scope 3: `['workspace', workspaceId, 'tasks']` — global workspace overview.",
              "Rollback Mechanism: Captures previous snapshot for all three keys before mutation; reverts all three if the mutation rejects.",
            ],
          },
        },
        {
          heading: "3. Made Task Collaboration More Informative",
          subheading:
            "Slack/Trello-Style Reaction Attribution with Memoized O(1) Lookups",
          content:
            "I built Slack/Trello-style comment reaction attribution so users could identify who reacted to a task comment.\n\nTo avoid repeatedly scanning workspace member arrays for each reaction, I created a memoized `Map` keyed by user ID. I also implemented readable name formatting and capped the number of displayed names, with an additional count for remaining participants.",
          technicalDeepDive: {
            title: "Performance & Rendering Optimization",
            description:
              "Avoiding quadratic scanning in comment lists with dense reaction emojis:",
            points: [
              "Constructs a `new Map(members.map(m => [m.id, m]))` memoized with `useMemo` on member list change.",
              "Reaction hover tooltip achieves instant O(1) lookup per reaction actor ID.",
              "Formats display strings cleanly (e.g., 'Sarah, Alex, and 2 others') with proper pluralization.",
            ],
          },
        },
        {
          heading: "4. Standardized Dark-Mode Loading States",
          subheading: "Universal ThemeSkeleton Across 33+ Core Files",
          content:
            "The default HeroUI skeleton shimmer conflicted with the application's dark theme, resulting in glaring white flashes and broken contrast.\n\nI created a reusable `ThemeSkeleton` component with explicit light- and dark-mode background and shimmer colors, then migrated more than 33 core files to use it. This addressed the problem at the shared-component level instead of maintaining separate visual patches across individual pages.",
          technicalDeepDive: {
            title: "Design System Reliability",
            description: "Eliminating visual bugs at the design system root:",
            points: [
              "Encapsulates CSS variable tokens for base background, pulse highlight, and shimmer gradients.",
              "Provides polymorphic shapes: avatar, text-line, card, and complex table rows.",
              "Replaced 33+ scattered inline pulse styles with a single authoritative component.",
            ],
          },
        },
        {
          heading:
            "5. Resolved Complex UI Behavior & Responsive Layout Defects",
          subheading:
            "Root-Cause Debugging in Stacking Contexts and Event Ordering",
          content:
            "I investigated and fixed several issues across the palette, gradient, brand identity, and task management interfaces:\n\n- Corrected dropdown navigation actions that failed because of nested link and component event handling.\n- Fixed an outside-click race condition that caused a filter tray to reopen immediately after closing.\n- Aligned gradient search query parameters with the values read by the page.\n- Corrected z-index conflicts between sticky headers, swatches, action buttons, and fullscreen modals.\n- Improved horizontal category scrolling and toolbar layouts at laptop and tablet widths.\n- Prevented footer social icons from overlapping adjacent content.",
          technicalDeepDive: {
            title: "The Filter-Tray Race Condition",
            description:
              "Why outside-click handlers fail without explicit event ordering:",
            points: [
              "Root Cause: Clicking the trigger button fired both the outside-click listener on the tray (closing it) and the button's onClick (re-opening it immediately).",
              "Solution: Excluded the trigger element ref from the outside-click hit test and coordinated mouseup/mousedown listener phases.",
              "Result: Stable, deterministic tray toggling across all devices.",
            ],
          },
        },
        {
          heading: "6. Strengthened Access-Control Visibility & Media Delivery",
          subheading: "Explicit Role Allowlists and Responsive WebP Delivery",
          content:
            "I replaced a negative role check with an explicit admin-role allowlist for the admin dashboard navigation link, restricting its visibility to admins and the local development environment.\n\nI also replaced outdated marketing-page preview assets with WebP versions and added responsive Next.js image `sizes` attributes to better match image delivery to viewport widths.",
        },
      ],
      engineeringDecisions: [
        {
          title: "Fix root causes rather than symptoms",
          decision:
            "Treated the filter-tray defect as an event-ordering and reference problem rather than patching it with timers.",
          rationale:
            "Excluding the trigger from outside-click detection eliminated the race condition deterministically.",
          tradeoff:
            "Required inspecting DOM ref hierarchies rather than applying a quick `setTimeout` debounce.",
        },
        {
          title: "Reuse shared components across the design system",
          decision:
            "Created a universal `ThemeSkeleton` component with explicit theme tokens instead of ad-hoc CSS tweaks.",
          rationale:
            "Allowed 33+ core views to achieve visual consistency with one single source of truth.",
          tradeoff:
            "Required a broad migration across existing PRs and templates to standardize imports.",
        },
        {
          title:
            "Keep interactive state consistent with multi-scope cache rollback",
          decision:
            "Coordinated optimistic priority mutations across three React Query caches with atomic rollback.",
          rationale:
            "Prevented stale task lists and broken priority badges when network requests failed.",
          tradeoff:
            "Higher initial mutation configuration complexity compared to local useState toggles.",
        },
        {
          title: "Make responsive behavior intentional for laptop viewports",
          decision:
            "Engineered dedicated intermediate breakpoint constraints rather than relying only on standard mobile/desktop breakpoints.",
          rationale:
            "Laptop screens (1024px-1366px) exhibited horizontal scrolling and clipped toolbars under high-density layouts.",
          tradeoff:
            "Added tailored Tailwind media classes to header toolbars and horizontal category navigation.",
        },
      ],
      outcome:
        "My contributions expanded Braandly's branding workflow and improved consistency across its task management, brand tooling, loading states, and responsive layouts. They also addressed role-based navigation visibility and improved marketing image delivery. The work demonstrates my ability to develop substantial product features, investigate non-obvious frontend defects, and improve shared application architecture within an existing multi-contributor codebase.",
    },
    {
      id: "holford-homes",
      slug: "holford-homes",
      title: "Holford Homes",
      role: "Frontend Engineer: API Integration",
      subtitle:
        "Building an International Cross-border real estate Consultation Booking System",
      headlineFocus: "Booking Systems & Timezones",
      tagline:
        "Systems-oriented case study: Server-side API proxying, 42-day booking calendar, and timezone normalization.",
      heroSummary:
        "Engineered a resilient consultation booking flow connecting Nigerians living abroad with Nigerian real estate experts. Built three Next.js App Router route handlers with server-side credential injection, a dynamic 42-day availability calendar, and timezone-aware appointment translation.",
      problem:
        "Diaspora customers in the UK and US required real-time property consultation scheduling in Nigeria, but the prototype had hardcoded calendar slots, lacked timezone translation, and risked exposing private upstream endpoint URLs and keys.",
      strongestContribution:
        "Engineered 3 Next.js App Router route handlers for secure API proxying and upstream credential isolation; Replaced mock booking interactions with a production-ready Next.js backend-for-frontend proxy layer, automated 42-day calendar generation, and robust timezone translation between UK/diaspora users and Lagos business hours.",
      techStack: [
        "Next.js",
        "React.js",
        "TypeScript",
        "JavaScript",
        "REST APIs",
        "Tailwind CSS",
      ],
      caseStudyUrl: "/work/holford-homes",
      liveUrl: "https://www.holfordhomes.com",
      isPrivateRepo: true,
      repoName: "Private Enterprise Repository",
      keyMetrics: [
        {
          label: "API Proxy Routes",
          value: "3 routes",
          detail: "Server-side credential injection & proxying",
        },
        {
          label: "Calendar Grid",
          value: "42 days",
          detail: "Dynamic 6-week rolling availability matrix",
        },
        {
          label: "Timezone Engine",
          value: "Intl / UTC",
          detail: "Browser local display vs normalized UTC payload",
        },
        {
          label: "PRs Shipped",
          value: "PR #2, #3",
          detail: "feature/booking-availability-flow branch",
        },
      ],
      engineeringAreas: [
        "Backend-for-Frontend (BFF) Architecture",
        "REST API Integration",
        "Timezone & Locale Handling",
        "Dynamic Calendar Generation",
        "Environment-Based Configuration",
        "Defensive Asynchronous UI Design",
      ],
      highlights: [
        "Implemented three Next.js App Router API handlers acting as a secure boundary between browser and upstream backend.",
        "Engineered server-side credential injection with `X-Frontend-Key`, preventing sensitive API tokens from leaking into client bundles.",
        "Forwarded user IP metadata via `X-User-IP` header while preserving upstream HTTP status codes and error payloads.",
        "Developed a 42-day availability calendar that derives selectable slots dynamically from live backend availability arrays.",
        "Separated user-local 24-hour display times from normalized UTC ISO serialization submitted to backend endpoints.",
        "Replaced simulated form submission with consultation UUID chaining, passing the created lead record to the booking scheduler.",
      ],
      challenges: [
        "Serving Nigerians in the UK, US, and Europe booking appointments with consultants in Lagos required bulletproof timezone handling.",
        "Browser bundles could not contain upstream secret keys, necessitating server-side proxy route handlers.",
        "Form submission errors needed to be surfaced with contextual toast notifications rather than generic browser alerts.",
        "Calendar state needed defensive guarding against asynchronous race conditions when switching months or abandoning views.",
      ],
      solutions: [
        "Implemented three Next.js App Router API handlers acting as a secure boundary between browser and upstream backend.",
        "Engineered server-side credential injection with `X-Frontend-Key`, preventing sensitive API tokens from leaking into client bundles.",
        "Forwarded user IP metadata via `X-User-IP` header while preserving upstream HTTP status codes and error payloads.",
        "Developed a 42-day availability calendar that derives selectable slots dynamically from live backend availability arrays.",
        "Separated user-local 24-hour display times from normalized UTC ISO serialization submitted to backend endpoints.",
        "Replaced simulated form submission with consultation UUID chaining, passing the created lead record to the booking scheduler.",
      ],
      badgeColor:
        "bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800/50",
      accentBorder: "group-hover:border-amber-500/50",
      gradient: "from-amber-500/10 via-amber-500/5 to-transparent",
      accentColor: "amber",
      sections: [
        {
          heading: "1. A Server-Side API Proxy Layer",
          subheading: "Next.js App Router Handlers as a Secure Gateway",
          content:
            "I implemented three Next.js App Router route handlers:\n\n- `POST /api/consultations` — forwards lead submissions to the upstream service.\n- `GET /api/consultations/availabilities` — retrieves live booking availability.\n- `POST /api/consultations/[uuid]/date` — submits the selected appointment time for a consultation.\n\nThe handlers use environment-based backend configuration and inject the `X-Frontend-Key` on the server side instead of exposing the credential in the browser bundle. They also forward available user IP metadata using the `X-User-IP` header.\n\nThe proxy routes preserve upstream HTTP status codes and response content types. I subsequently corrected base URL concatenation issues and removed hardcoded staging endpoint references.",
          technicalDeepDive: {
            title: "Proxy Architecture & Security Boundary",
            description:
              "Keeping client bundles clean of upstream API secrets:",
            points: [
              "Client -> `/api/consultations` (Internal Next.js server).",
              "Next.js Server: Reads `process.env.UPSTREAM_API_KEY`, appends `X-Frontend-Key` header, attaches `X-User-IP` from incoming request headers.",
              "Next.js Server -> Upstream API Endpoint.",
              "Preserves upstream HTTP statuses (400, 404, 422, 500) and forwards JSON error details directly to client toast notifications.",
            ],
          },
        },
        {
          heading: "2. Timezone-Aware Appointment Selection",
          subheading:
            "Separating Local Display Time from Normalized UTC Payloads",
          content:
            "The booking interface needed to present appointment times in a way that international customers could understand while preserving the timestamp format expected by the backend.\n\nI implemented date and time conversion utilities using JavaScript's `Date`, `Date.UTC()`, and `Intl.DateTimeFormat` APIs. The flow detects the browser's IANA timezone, renders available times in the user's local 24-hour format, and serializes the selected appointment into the backend's expected UTC timestamp representation.\n\nThe interface keeps the human-readable display time separate from the timestamp submitted to the backend. This avoids treating a localized display string as the booking record itself.",
          technicalDeepDive: {
            title: "Timezone Engine Implementation",
            description: "How slot timestamps are evaluated and normalized:",
            points: [
              "User Timezone Detection: Resolved via `Intl.DateTimeFormat().resolvedOptions().timeZone`.",
              "Display Formatter: Renders slot times in local 12/24-hour format with timezone label (e.g. '14:30 GMT+1').",
              "Serialization: Combines selected slot date and time in UTC, formatting as ISO 8601 string (`YYYY-MM-DDTHH:mm:ss.sssZ`).",
              "Defensive Boundary: Avoids client-side assumptions about backend DST rules by submitting unambiguous UTC timestamps.",
            ],
          },
        },
        {
          heading: "3. A Dynamic 42-Day Availability Calendar",
          subheading: "Six-Week Availability Matrix with Slot Differentiation",
          content:
            "I replaced hardcoded slot arrays with availability data fetched from the backend.\n\nThe calendar generates a six-week (42-day) grid, evaluates each date against returned availability, and identifies selectable dates. The slot interface maps available backend times into readable local times and distinguishes video consultations from phone calls.\n\nI also added loading and error states and guarded against applying asynchronous results after the component had been abandoned. Memoized calculations keep calendar and slot data derived from their relevant state rather than rebuilding it indiscriminately.",
          technicalDeepDive: {
            title: "Calendar Algorithm & State Derivation",
            description:
              "Efficient 42-day grid generation and slot classification:",
            points: [
              "Grid Generation: Computes start of month, fills leading padding days from previous month, and ensures 42 contiguous cells.",
              "Slot Classification: Distinguishes between Video Consultation (Google Meet/Zoom) and Phone Call options.",
              "Defensive Cleanup: Flags stale async responses when users change calendar months rapidly.",
            ],
          },
        },
        {
          heading: "4. Lead Capture and Booking Flow Integration",
          subheading: "Consultation UUID Chaining and Contextual Error States",
          content:
            "I replaced simulated form submission with asynchronous API requests. On successful lead creation, the application captures the returned consultation UUID and uses it to continue the booking process.\n\nI aligned budget and property-type values with the backend schema while preserving human-readable labels for the interface. I also replaced generic browser alerts with contextual toast notifications, improved submission error handling, and added client IP discovery for the request flow.",
        },
        {
          heading: "5. Configuration and Integration Hardening",
          subheading: "Environment Hygiene & Dynamic Route Pathing",
          content:
            "I moved upstream endpoint configuration into environment variables, corrected duplicated consultation path segments, encoded the dynamic consultation UUID in the booking route, and refined the mapping between backend enum values and user-facing labels.\n\nThese changes made the integration more maintainable and reduced the risk of endpoint configuration errors when moving between environments.",
        },
      ],
      engineeringDecisions: [
        {
          title: "Keep upstream credentials server-side",
          decision:
            "Built Next.js App Router route handlers to proxy all consultation requests rather than calling upstream APIs directly from the browser.",
          rationale:
            "Kept sensitive frontend keys and upstream URLs out of the client JavaScript bundle.",
          tradeoff:
            "Introduced an extra hop through Next.js server runtime, requiring careful status and header forwarding.",
        },
        {
          title: "Separate display time from booking timestamp",
          decision:
            "Rendered localized strings with Intl APIs while transmitting normalized UTC timestamps to the backend.",
          rationale:
            "Prevented localized formatting ambiguities from corrupting database scheduling records.",
          tradeoff:
            "Required conversion functions between slot selection and form submission.",
        },
        {
          title: "Use backend availability as the source of truth",
          decision:
            "Derived all selectable dates and slots dynamically from backend availability endpoints.",
          rationale:
            "Eliminated double-booking risks caused by relying on static local calendar assumptions.",
          tradeoff:
            "Required skeleton loading states and robust network retry handlers for calendar interactions.",
        },
        {
          title: "Make failures visible and recoverable",
          decision:
            "Replaced generic browser alerts with contextual toast notifications that present upstream error messages.",
          rationale:
            "Empowered international users to understand validation failures without losing filled form state.",
          tradeoff:
            "Required mapping upstream HTTP error payloads into user-friendly messages.",
        },
      ],
      outcome:
        "I replaced a mock booking experience with an API-connected lead capture and consultation scheduling flow. The implementation introduced live availability retrieval, timezone-aware slot presentation, server-side request proxying, backend-aligned form values, and clearer error handling. The work demonstrates practical experience with Next.js server-side routing, API integration, date/time normalization, asynchronous state management, and the engineering challenges of serving users across different timezones.",
      credibilityNote:
        "Honest Technical Boundary: The implementation converts and transmits unambiguous UTC timestamps. It does not claim to solve all upstream daylight-saving or server calendar nuances, nor does IP forwarding represent foolproof fraud prevention; rather, it handles request metadata responsibly across the frontend-to-backend boundary.",
    },
    {
      id: "cyclelink",
      slug: "cyclelink",
      title: "CycleLink",
      role: "Frontend Engineer",
      subtitle:
        "Connecting Household and Collector Workflows to Real Backend Services",
      headlineFocus: "API Integration & Systems Security",
      tagline:
        "From frontend MVP to backend integration: Multi-role coordination, auth architecture, and data integrity.",
      heroSummary:
        "Transitioned an MVP waste collection platform from simulated, local-only states to a reliable, backend-integrated system. Aligned household and collector workflows with live REST APIs, restructured role-aware onboarding boundaries, audited local storage to safeguard sensitive PII, and enforced OpenAPI contracts.",
      problem:
        "A waste collection MVP relied heavily on  browser localStorage for sensitive KYC information, simulated driver timers, and hardcoded data, without role-specific authorization boundaries or contract alignment. Critical workflows lacked real API contracts, and sensitive credentials were at risk in localStorage. The app’s logic for matching collectors to households was also brittle, using a hardcoded round_id approach that couldn’t adapt to dynamic pickup needs. My goal was to transition the frontend to a robust, backend-integrated system that could support both household and collector workflows with distinct roles, permissions, and data management needs.",
      strongestContribution:
        "Engineered the transition from mock behavior to live backend API integration across household and collector flows. Protected sensitive KYC and password data by removing local storage persistence while championing security improvements and identifying the delegated pickup-handler persistence requirement. Also, aligned pickup contracts with OpenAPI documentation",
      techStack: [
        "Next.js",
        "React.js",
        "TypeScript",
        "Tailwind CSS",
        "REST APIs",
        "OpenAPI",
        "ESLint",
      ],
      caseStudyUrl: "/work/cyclelink",
      liveUrl: "https://cyclelink.vercel.app",
      isPrivateRepo: true,
      repoName: "Private Enterprise Repository",
      keyMetrics: [
        {
          label: "Workflows Connected",
          value: "2 roles",
          detail: "Household & Collector operational workflows",
        },
        {
          label: "Security Audit",
          value: "PII Removed",
          detail:
            "Eliminated plaintext credentials & KYC photos from localStorage",
        },
        {
          label: "Contract Alignment",
          value: "OpenAPI",
          detail: "Validated request payloads, statuses, and pagination",
        },
        {
          label: "Auth Flow Fix",
          value: "Journey-based",
          detail: "Separated public landing from role-protected onboarding",
        },
      ],
      engineeringAreas: [
        "API Integration & Lifecycle",
        "Authentication & Onboarding Architecture",
        "Role-Aware Multi-Persona Interfaces",
        "Data Consistency & Persistence Auditing",
        "Form Validation & Error Recovery",
        "OpenAPI Specification Inspection",
        "TypeScript Contract Enforcement",
      ],
      highlights: [
        "Integrated household and collector pickup experiences with live backend endpoints, replacing mock data and fake timers.",
        "Refined authentication and onboarding flow so introductory pages stay public while household/collector setups enforce prerequisites.",
        "Identified and championed the delegated pickup handler contract requirement, ensuring assigned drivers are persisted on backend.",
        "Conducted a security overhaul removing plaintext passwords, national identity numbers, and KYC photos from browser storage.",
        "Engineered pickup history pagination, drop-off availability displays, and pending account verification dashboard states.",
        "Validated frontend payload structures against OpenAPI specs using strict TypeScript interfaces and ESLint rules.",
      ],
      challenges: [
        "Household users and waste collectors have fundamentally different operational workflows, permission sets, and UI requirements.",
        "Simulated delays and mock drivers masked missing backend API endpoints that needed to be formally identified.",
        "Storing sensitive KYC photos and national IDs in unencrypted localStorage created significant data privacy risks.",
        "Indiscriminate auth redirect logic was locking public prospective users out of introductory informational pages.",
      ],
      solution:
        "Transitioned to a backend-integrated architecture by aligning household and collector workflows with live REST APIs. Established role-specific authentication and onboarding boundaries, ensuring that public landing pages remain accessible while internal flows enforce prerequisites. Removed sensitive PII from localStorage and implemented API-driven state management for pickup history, drop-off availability, and pending verification statuses.",
      badgeColor:
        "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/50",
      accentBorder: "group-hover:border-emerald-500/50",
      gradient: "from-emerald-500/10 via-emerald-500/5 to-transparent",
      accentColor: "emerald",
      sections: [
        {
          heading: "1. Implemented Backend-Connected Pickup Workflows",
          subheading:
            "Replacing Simulated Delays and Mock Drivers with Real REST APIs",
          content:
            "I integrated household and collector pickup experiences with live backend endpoints, removing simulated timers, mock driver data, notifications, and activity logs where the real API workflows replaced them.\n\nI worked on assigned pickups, upcoming and later views, pickup history, pagination, and drop-off availability. I also refined access to dashboard functionality while verification was pending.\n\nThis moved key parts of the interface toward backend-driven behavior rather than relying on hardcoded examples.",
          technicalDeepDive: {
            title: "Pickup Lifecycle Architecture",
            description:
              "Transition from local mocks to verified backend state machine:",
            points: [
              "Request Creation: Household submits waste categories and scheduled time -> `POST /pickups`.",
              "Collector Assignment: Collector claims run -> state transitions to `ASSIGNED` with real vehicle and driver metadata.",
              "Collection & Drop-Off: In-transit state updates and verified drop-off at authorized recycling centers.",
              "Pagination & History: Live cursor/page-based fetching for completed collection records.",
            ],
          },
        },
        {
          heading: "2. Refined Authentication and Onboarding Behavior",
          subheading: "Treating Authentication as a Progressive User Journey",
          content:
            "I investigated the relationship between access-token retrieval, the current-user endpoint, and onboarding route resolution.\n\nAn important architectural distinction was that the introductory onboarding page should remain accessible before authentication, while household and collector setup pages should enforce the relevant account requirements.\n\nI used the expected user journey to challenge an incorrect redirect approach rather than applying authentication checks indiscriminately to every onboarding route.",
          technicalDeepDive: {
            title: "Journey-Aware Routing Architecture",
            description:
              "Differentiating public introductory routes from role-gated setup steps:",
            points: [
              "Public Route: `/onboarding` (Exploration and value proposition — open to unauthenticated visitors).",
              "Authenticated Route: `/onboarding/household` (Requires valid JWT session).",
              "Role-Gated Route: `/onboarding/collector` (Requires KYC document submission and pending verification badge).",
              "Token Lifecycle: Graceful redirect to login only when attempting to mutate protected state.",
            ],
          },
        },
        {
          heading: "3. Improved Frontend/Backend Contract Alignment",
          subheading:
            "OpenAPI Inspection & Delegated Pickup-Handler Persistence",
          content:
            "I reviewed OpenAPI documentation and pickup endpoint contracts to understand how the frontend should interact with backend resources.\n\nThis included reviewing pickup retrieval, cancellation, reassignment, and rating endpoints, and identifying a backend API requirement for persisting the name and phone number of the person actually handling a collection.\n\nFor collection workflows, this distinction matters because a collector account holder may assign the physical pickup to an employee or another delegate. I identified the need to persist these details so they are not lost when the user changes devices or clears browser data.",
        },
        {
          heading: "4. Reduced Dependence on Local Browser Persistence",
          subheading: "Eliminating Security Risks and Stale Local State",
          content:
            "I worked on moving important application workflows away from local-only state and toward backend responses as the source of truth.\n\nI also identified and addressed security concerns around storing sensitive information in browser storage, including plaintext passwords, national identification numbers, and KYC photographs.\n\nThe broader objective was to prevent stale or sensitive local data from silently repopulating forms and to make the interface reflect persisted application state.",
          technicalDeepDive: {
            title: "LocalStorage Security & State Remediation",
            description:
              "Why browser storage must not replace backend persistence:",
            points: [
              "Identified Vulnerability: Early MVP stored user national ID numbers and KYC base64 images directly in `window.localStorage`.",
              "Remediation: Removed local persistence of sensitive PII; migrated form flows to transient React state with direct multipart API uploads.",
              "State Sync: Form fields populate exclusively from authenticated `/me` and `/pickups` backend responses.",
            ],
          },
        },
        {
          heading:
            "5. Improved Validation, Error Handling, and Maintainability",
          subheading: "Defensive TypeScript and Structured Lint Verification",
          content:
            "I worked through frontend defects involving form behavior, address handling, API errors, timestamps, icons, and mobile layouts.\n\nI also used TypeScript checks, ESLint, structured lint reports, OpenAPI inspection, and command-line tooling to investigate issues and validate changes.\n\nThis helped make the work more systematic: understand the existing behavior, identify the underlying contract or state problem, implement a targeted change, and validate the result.",
        },
      ],
      engineeringDecisions: [
        {
          title: "Keep the backend authoritative",
          decision:
            "Moved persistent pickup and account information to live backend responses instead of silently restoring stale local state.",
          rationale:
            "Ensured users seeing pickup statuses on mobile or web saw identical real-time status updates.",
          tradeoff:
            "Required adding loading skeletons and handling offline/reconnection edge cases in UI state.",
        },
        {
          title: "Respect role-specific operational workflows",
          decision:
            "Maintained clear separation between household request flows and collector dispatch workflows.",
          rationale:
            "Household users prioritize pickup scheduling while collectors require route views and drop-off facility statuses.",
          tradeoff:
            "Required distinct route hierarchies and role-aware navigation menus.",
        },
        {
          title: "Treat authentication as an intentional user journey",
          decision:
            "Refactored route middleware to allow prospective users to explore onboarding before requiring authentication.",
          rationale:
            "Prevented bounce rates caused by aggressive, premature authentication walls.",
          tradeoff:
            "Required conditional rendering based on authentication presence on onboarding overview pages.",
        },
        {
          title: "Protect sensitive user information",
          decision:
            "Eliminated client localStorage storage of credentials, national identity numbers, and KYC media.",
          rationale:
            "Eliminated critical client-side security vulnerabilities and aligned with data privacy regulations.",
          tradeoff:
            "Users who refresh midway through multi-step onboarding must re-upload KYC files if not yet submitted to the backend.",
        },
      ],
      outcome:
        "My contributions advanced CycleLink from a frontend MVP toward a backend-integrated product, improving pickup workflows, role-aware navigation, onboarding behavior, and the consistency of application data. The work also exposed areas where frontend behavior depended on missing or incomplete backend contracts, allowing those dependencies to be identified rather than hidden behind local-only workarounds.",
      credibilityNote:
        "Credibility & Scope Transparency: The delegated-handler persistence was identified and documented as an architectural contract requirement. The case study honors the distinction between completed frontend contributions and integration areas that remained dependent on backend service readiness.",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 border-t border-slate-200/80 dark:border-slate-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 text-xs font-semibold border border-indigo-200 dark:border-indigo-800 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Selected Projects
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            I build and improve web applications by combining frontend
            engineering, API integration, and problem-solving. Here are some of
            the professional products where I took ownership of core user
            workflows, resolved bottlenecks, and delivered features.
          </p>
        </div>

        {/* 3 Project Cards with Equal Treatment */}
        <div className="space-y-12">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`group relative rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-6 sm:p-10 shadow-sm hover:shadow-xl transition-all duration-300 ${project.accentBorder} overflow-hidden`}
            >
              {/* Subtle accent corner gradient */}
              <div
                className={`absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl ${project.gradient} rounded-bl-full pointer-events-none -z-0 opacity-70 group-hover:opacity-100 transition-opacity`}
              />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Column: Project Overview & Context */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full border ${project.badgeColor}`}
                    >
                      {project.headlineFocus}
                    </span>
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                      Role: {project.role}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Problem & Contribution */}
                  <div className="space-y-3 pt-1">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                        The Challenge We Faced
                      </h4>
                      <p className="mt-1 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                        {project.problem}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/70 dark:border-slate-800/80">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                        What I Owned & Engineered
                      </h4>
                      <p className="mt-1 text-sm font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
                        {project.strongestContribution}
                      </p>
                    </div>
                  </div>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Column: Key Highlights & Actions */}
                <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6 lg:pl-4">
                  <div className="p-5 rounded-2xl bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 space-y-3">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Key Technical Highlights
                    </div>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                      {project.highlights.map((item, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Links / Buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <Link
                      href={project.caseStudyUrl}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs hover:shadow-indigo-500/20 active:scale-98 transition-all"
                    >
                      <span>Read Full Case Study</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-semibold bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-750 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 shadow-2xs transition-colors"
                    >
                      <span>Visit Live Site</span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                    </a>
                    {project.isPrivateRepo && (
                      <span className="inline-flex items-center gap-1 text-[11px] text-slate-400 dark:text-slate-500 font-medium">
                        <Lock className="w-3 h-3 text-amber-500/80" />
                        <span>Private Repository</span>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
