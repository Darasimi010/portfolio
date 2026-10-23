export const projects = [
  {
    id: "zenith-lead-crm-dashboard",
    title: "Zenith Lead CRM Dashboard",
    subtitle:
      "An internal lead management and analytics dashboard for a fictional real estate agency, Zenith Realty Partners.",
    heroSummary:
      "Zenith Lead Dashboard is an internal tool for high-volume real estate agencies that replaces spreadsheet-based lead tracking. Three analytics charts give executives a quick view of pipeline health, while a sortable, filterable data grid lets admins search leads, run bulk actions and export the current view to CSV.",
    strongestContribution:
      "Engineered from scratch after I learnt about CRM dashboards and decided I wanted a lead CRM dashboard in my portfolio. I chose Material UI to get familiar with a UI component library and to give the interface a consistent feel. The part I'm proudest of is the charts: all three are derived from the same filtered lead data, so they update live as filters change.",
    techStack: [
      "React.js",
      "TypeScript",
      "Vite",
      "MUI X DataGrid",
      "Tanstack Query/React Query",
      "Material UI v6",
      "Recharts",
      "Ant Design",
      "Git/Github",
    ],
    caseStudyUrl: "",
    liveUrl: "https://zenith-lead-dashboard.vercel.app",
    isPrivateRepo: false,
    repoURL: "https://github.com/Darasimi010/zenith-lead-dashboard",
    engineeringAreas: [
      "Analytics & Data Visualization",
      "Consistency in UI Components",
      "Data Fetching Using Tanstack Query",
    ],
    highlights: [
      "Integrated an 'Export Report' button that downloads the current filtered view as zenith-leads-report.csv",
      "Three Recharts widgets (pipeline donut, agent performance bars, lead velocity area chart) re-render live as filters change",
      "Loading skeletons across the table, stat cards and charts, plus an error state with a Retry button",
    ],
    challenges: [
      "Keeping the stat cards, three charts and data grid in sync with the same search and status filters, while keeping chart colors consistent with the status tags and agent avatars.",
    ],
    solution:
      "Derived every chart from the single filtered lead array through small transformer functions, and defined status and agent colors once so charts and tags always match.",
    badgeColor:
      "bg-sky-50 dark:bg-sky-950/40 text-sky-700 dark:text-sky-300 border-sky-200 dark:border-sky-800/50",
    accentBorder: "group-hover:border-sky-500/50",
    gradient: "from-sky-500/10 via-sky-500/5 to-transparent",
    accentColor: "sky",
    sections: [
      {
        heading: "Analytics that follow the data",
        subheading:
          "One filtered dataset drives the grid, the stat cards and every chart",
        content:
          "The dashboard is built so an executive can read pipeline health at a glance and an admin can drill into individual leads without switching views. Search and status filters apply everywhere at once, so the numbers in the header, the charts and the grid never disagree with each other.",
        technicalDeepDive: {
          title: "Deriving charts from filtered data",
          description:
            "Instead of feeding charts their own dataset, the app filters the leads once and passes that same array to every consumer.",
          points: [
            "The app shell owns the search text, status filter and selected rows, and a memoised filter produces the single lead array every child component reads.",
            "A chart transformer utility holds three reducers (status counts, value per agent, activity per day) that reshape leads into the formats Recharts expects.",
            "Charts sit inside responsive containers: a donut for pipeline status, a value-sorted bar chart with a currency-formatted axis for agents, and a smooth area chart for daily lead activity.",
            "Status and agent colors are defined once and reused, so a 'Qualified' tag in the grid and its slice in the donut always match.",
          ],
        },
      },
    ],
    engineeringDecisions: [
      {
        title: "Charts read from the filtered leads",
        decision:
          "Feed the charts and stat cards the same filtered array as the data grid instead of a separate dataset.",
        rationale:
          "Executives always see numbers that match the grid below them, and there is no second source of truth to keep consistent.",
        tradeoff:
          "Charts re-aggregate on every filter change. That is fine at this dataset size, but real production volumes would call for server-side aggregation.",
      },
      {
        title: "Bulk actions behind a conditional action bar",
        decision:
          "Show the bulk action bar only when at least one row is selected.",
        rationale:
          "It keeps the default view clean and puts the actions exactly where the selection happens.",
        tradeoff:
          "The actions are demonstrated rather than persisted, since there is no backend to write to.",
      },
    ],
    outcome:
      "A fast, scannable dashboard covering search, sorting, pagination (10, 20 or 50 rows), status filtering, bulk actions, CSV export and graceful loading and error handling, deployed live on Vercel.",
    credibilityNote:
      "Built as a portfolio piece on 60 mock lead records with simulated loading and errors. The 'thousands of leads' goal describes design intent, not tested volume, and bulk actions are demonstrated rather than saved to a backend.",
  },
  //   {
  //     id: "soc-incident-feed",
  //     title: "SOC Incident Feed",
  //     subtitle:
  //       "A Security Operations Center dashboard for monitoring and triaging security alerts",
  //     heroSummary:
  //       "A production-style Security Operations Center (SOC) dashboard that presents critical security alerts as a live incident feed. Alerts can be added, deleted, marked as addressed and re-prioritised by changing their severity, with clear loading and error states throughout.",
  //     strongestContribution:
  //       "Engineered from scratch after I got curious about cybersecurity and went down a rabbit hole on SOC workflows. I decided to build a dashboard of security alerts, and used it as the project to get hands-on with Tanstack Query, which handles the data fetching behind the feed.",
  //     techStack: [
  //       "Next.js",
  //       "React.js",
  //       "TypeScript",
  //       "Tailwind CSS",
  //       "Tanstack Query/React Query",
  //       "Framer Motion",
  //       "Git/Github",
  //     ],
  //     caseStudyUrl: "",
  //     liveUrl: "https://incident-feed.vercel.app",
  //     isPrivateRepo: false,
  //     repoURL: "https://github.com/Darasimi010/Incident-feed",
  //     engineeringAreas: [
  //       "Alert Triage Workflow",
  //       "Data Consistency & Persistence Auditing",
  //       "Data Fetching Using Tanstack Query",
  //     ],
  //     highlights: [
  //       "Alerts can be added, deleted, marked as addressed and re-prioritised by changing severity, mirroring everyday SOC triage.",
  //       "Loading skeletons and clear error messages keep the feed readable while data loads or when a request fails.",
  //     ],
  //     challenges: ["Tanstack Query was entirely new to me."],
  //     solution:
  //       "Read the Tanstack Query documentation to understand what it offers and how to apply it to the alert feed.",
  //     badgeColor:
  //       "bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-800/50",
  //     accentBorder: "group-hover:border-rose-500/50",
  //     gradient: "from-rose-500/10 via-rose-500/5 to-transparent",
  //     accentColor: "rose",
  //     sections: [
  //       {
  //         heading: "Learning Tanstack Query through a real feed",
  //         subheading: "Server state for a live list of security alerts",
  //         content:
  //           "An incident feed is a good fit for a data-fetching library: the list is constantly changing, analysts act on individual items, and the interface has to stay trustworthy when something goes wrong. I built the feed around Tanstack Query so the data layer and the interface could stay separate.",
  //         technicalDeepDive: {
  //           title: "Fetching and acting on alerts",
  //           description:
  //             "The feed treats alert data as server state and keeps the triage actions simple and visible.",
  //           points: [
  //             "Tanstack Query owns fetching for the alert feed, keeping server data separate from interface state.",
  //             "Each alert supports adding, deleting, marking as addressed and changing severity.",
  //             "Loading states render skeleton placeholders so the layout does not jump when data arrives.",
  //             "Failures surface a clear error message instead of an empty or broken feed.",
  //           ],
  //         },
  //       },
  //     ],
  //     engineeringDecisions: [
  //       {
  //         title: "Use Tanstack Query for the feed",
  //         decision:
  //           "Handle data fetching with Tanstack Query instead of hand-written effects and loading flags.",
  //         rationale:
  //           "Its loading and error states map directly onto the skeleton and error UI an alert feed needs, and it was the library I set out to learn.",
  //         tradeoff:
  //           "It adds a dependency and a learning curve to what is otherwise a small app.",
  //       },
  //     ],
  //     outcome:
  //       "A working SOC alert dashboard, deployed on Vercel, covering the core triage actions with handled loading and error states.",
  //     credibilityNote:
  //       "Built as a learning project to explore SOC workflows and Tanstack Query, not as a connected security product.",
  //   },
  {
    id: "saas-landing-page",
    title: "SaaS Landing Page",
    subtitle:
      "A modern, responsive, conversion-focused landing page for SaaS products",
    heroSummary:
      "A responsive landing page for SaaS startups with Hero, Product Showcase, Pricing, Testimonials, Call to Action and Footer sections. Motion is used deliberately to support the message rather than compete with it, and the modular section structure makes it easy to adapt to a new product.",
    strongestContribution:
      "Built from scratch to get familiar with Motion (formerly Framer Motion). The fun part was deciding which parts of the page deserve animation and which are better left still. I see a lot of landing pages where the animations start to overshadow the message, and I wanted the message to land first, because that is what drives conversion.",
    techStack: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "SVGR (SVG icon components)",
      "Git/Github",
    ],
    caseStudyUrl: "",
    liveUrl: "https://darasimi-saas-landing-page.vercel.app/",
    isPrivateRepo: false,
    repoURL: "https://github.com/Darasimi010/saas-product-landing-page",
    engineeringAreas: [
      "Purposeful Animation",
      "Clear Message Hierarchy",
      "Responsive Design",
    ],
    highlights: [
      "Framer Motion was fun to learn. It felt like I was learning CSS or Tailwind all over again.",
      "Each page section (Hero, Product Showcase, Pricing, Testimonials, Call to Action, Footer) is its own component, which keeps the page easy to extend.",
      "Fully responsive across mobile, tablet and desktop, with SVG icons converted to reusable React components.",
    ],
    challenges: [
      "Had a tough issue fixing the hero section overflowing on the x-axis.",
    ],
    solution:
      "Inspected the layout in the browser dev tools to find the element pushing past the viewport, then constrained it so the hero fits the screen width.",
    badgeColor:
      "bg-violet-50 dark:bg-violet-950/40 text-violet-700 dark:text-violet-300 border-violet-200 dark:border-violet-800/50",
    accentBorder: "group-hover:border-violet-500/50",
    gradient: "from-violet-500/10 via-violet-500/5 to-transparent",
    accentColor: "violet",
    sections: [
      {
        heading: "Animation with restraint",
        subheading: "Motion that supports the message instead of upstaging it",
        content:
          "A landing page has one job: get its message across so visitors convert. Animation can help guide the eye, but too much of it turns into noise. This project was my exercise in choosing where motion earns its place, so blocks animate in smoothly while the content that matters stays clear and readable.",
        technicalDeepDive: {
          title: "Structuring a conversion-focused page",
          description:
            "The page is organised so content, layout and motion can each be changed without disturbing the others.",
          points: [
            "Each section lives in its own component under a sections folder, so copy and layout can change without touching the rest of the page.",
            "SVG icons are converted into React components, keeping them crisp at any size and easy to reuse.",
            "Entrance animations are applied selectively to content blocks, with other elements deliberately left still so the page does not feel busy.",
            "Tailwind utilities handle the responsive layout across mobile, tablet and desktop, with shared styles kept in the global stylesheet.",
          ],
        },
      },
    ],
    engineeringDecisions: [
      {
        title: "Animate selectively",
        decision:
          "Limit animation to the blocks that benefit from it instead of animating everything.",
        rationale:
          "It keeps attention on the message and the calls to action, which is what drives conversion.",
        tradeoff:
          "The page is less flashy than animation-heavy landing pages, in exchange for being clearer.",
      },
    ],
    outcome:
      "A polished, responsive SaaS landing page deployed on Vercel, built over 36 commits and easy to adapt for other products.",
    credibilityNote:
      "A template with placeholder product content, not tied to a real customer. The conversion benefits are a design intention and have not been measured with real traffic.",
  },
  {
    id: "spotify-clone",
    title: "Spotify Clone",
    subtitle:
      "A responsive Spotify web player clone with playlists and a custom seekbar",
    heroSummary:
      "A Spotify web player clone that replicates the look and feel of the original. It includes playlists, eight preloaded songs, play, pause and track switching, and an interactive seekbar, all in a responsive layout for desktop, tablet and mobile.",
    strongestContribution:
      "Built from scratch after I learnt enough React.js and decided to try a real project. State management was the real lesson: at first it was hard to remember and understand, but working through it until playback, the seekbar and track switching stayed in sync finally made it click.",
    techStack: ["React.js", "JavaScript", "Tailwind CSS", "Vite", "Git/Github"],
    caseStudyUrl: "",
    liveUrl: "https://darasimi-spotify-clone.netlify.app",
    isPrivateRepo: false,
    repoURL: "https://github.com/Darasimi010/spotify-clone",
    engineeringAreas: [
      "Complex State Management",
      "Playback & Seekbar Control",
      "Responsive Spotify-style UI",
    ],
    highlights: [
      "Implemented playlists and single tracks.",
      "Custom seekbar for controlling playback progress.",
      "Play, pause and track switching across eight preloaded songs.",
    ],
    challenges: [
      "It was my first time handling state management, so I kept reading up on it and implementing what I read. Then I had to figure out why it didn't work before going back to the drawing board.",
    ],
    solution:
      "Read the React.js documentation on state management and applied it step by step, debugging each failure before returning to the docs.",
    badgeColor:
      "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/50",
    accentBorder: "group-hover:border-emerald-500/50",
    gradient: "from-emerald-500/10 via-emerald-500/5 to-transparent",
    accentColor: "emerald",
    sections: [
      {
        heading: "State that drives playback",
        subheading: "Keeping audio, seekbar and track in sync",
        content:
          "A music player looks simple, but everything on screen depends on the same few pieces of state: which track is loaded, whether it is playing, and how far along it is. Getting those to agree across the controls, the seekbar and the playlist view was the core engineering problem of this project.",
        technicalDeepDive: {
          title: "Playback state and the seekbar",
          description:
            "The player is driven by React state so the interface always reflects what the audio is doing.",
          points: [
            "Current track, play or pause status and playback progress are held in React state so the controls and the seekbar always agree.",
            "The custom seekbar both displays progress and lets the listener jump to a different position in the track.",
            "Playlists and single tracks are both supported, with track switching handled from the player controls.",
            "Tailwind CSS utilities provide the responsive layout across desktop, tablet and mobile.",
          ],
        },
      },
    ],
    engineeringDecisions: [
      {
        title: "Use React's built-in state tools",
        decision:
          "Build playback state with React's own state tools and no extra state library.",
        rationale:
          "Learning core React state management was the point of the project, and the player's needs are small enough that it doesn't call for more.",
        tradeoff:
          "State logic sits close to the components, so a larger app would need restructuring, for example with context or a dedicated store.",
      },
    ],
    outcome:
      "A responsive, working music player deployed on Netlify, with playlists, track controls and a seekbar that stays in sync with playback.",
    credibilityNote:
      "A learning project that imitates Spotify's interface. It plays eight preloaded sample tracks, is not connected to Spotify's API or catalog, and is not affiliated with Spotify.",
  },
  {
    id: "ip-address-tracker",
    title: "IP Address Tracker",
    subtitle:
      "An IP and domain lookup tool with an interactive map, built from a Frontend Mentor challenge",
    heroSummary:
      "A tracker that shows the visitor's own IP location on load and lets them search any IP address or domain, displaying key details and the location on an interactive map. It was built as a Frontend Mentor challenge, with a mobile-first layout that works from phone to desktop.",
    strongestContribution:
      "Built from scratch to get familiar with integrating APIs, as my solution to a Frontend Mentor challenge. A fun fact is that it was built in one stretch of about 9 hours. I kept going back to the API and map documentation to make sure I was implementing things correctly. It was an entirely new challenge, and I was excited to start integrating APIs into my projects.",
    techStack: [
      "React.js",
      "Vite",
      "Tailwind CSS",
      "Leaflet.js (React Leaflet)",
      "ipify IP Geolocation API",
      "API Integration",
    ],
    caseStudyUrl: "",
    liveUrl: "https://darasimi-ip-address-tracker.vercel.app",
    isPrivateRepo: false,
    repoURL: "https://github.com/Darasimi010/IP-Address-Tracker",
    engineeringAreas: [
      "Attention to detail",
      "Exact implementation from design given",
      "API Integration",
    ],
    highlights: [
      "Integrating an API taught me a lot and introduced me to environment variables, which keep the API key out of the source code.",
      "Shows the visitor's own IP on the map on first load, and supports searching by IP address or domain.",
      "Mobile-first, responsive layout with hover states on all interactive elements.",
    ],
    challenges: [
      "Had a tough time getting the location marker to show. It was always an unloaded image until I figured out what I was doing wrong.",
    ],
    solution:
      "Read the documentation and looked at other people's implementations to understand where I got the location marker wrong.",
    badgeColor:
      "bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800/50",
    accentBorder: "group-hover:border-amber-500/50",
    gradient: "from-amber-500/10 via-amber-500/5 to-transparent",
    accentColor: "amber",
    sections: [
      {
        heading: "Wiring an API to a map",
        subheading: "From search box to marker on the map",
        content:
          "The core of this project is a single flow: take an IP address or domain, ask a geolocation API about it, and reflect the answer in both an information panel and an interactive map. It was my first time connecting an external API and a mapping library, so the project was as much about learning the workflow as building the interface.",
        technicalDeepDive: {
          title: "Fetching and displaying location data",
          description:
            "One API response updates both the details panel and the map, driven by shared React state.",
          points: [
            "An async fetch function calls the ipify Geolocation API with the searched IP or domain, or with an empty value to look up the visitor's own address, and stores the response in state.",
            "The API key is read from a Vite environment variable instead of being hardcoded in the source.",
            "State and props flow between the search and display components, so a single response updates both the info panel and the map.",
            "React Leaflet renders the interactive map and places the marker from the coordinates the API returns.",
          ],
        },
      },
    ],
    engineeringDecisions: [
      {
        title: "Keep the API key in an environment variable",
        decision:
          "Read the geolocation API key from an environment variable instead of writing it into the code.",
        rationale:
          "It keeps secrets out of the repository and makes the key easy to swap per environment.",
        tradeoff:
          "In a client-only Vite app the value is still bundled into the browser build, so truly hiding the key would need a small backend proxy.",
      },
    ],
    outcome:
      "A responsive IP tracker deployed on Vercel and submitted as a Frontend Mentor solution, with live lookups and an interactive map.",
    credibilityNote:
      "Built from a supplied Frontend Mentor design brief, so the layout follows a given design. Better error handling for invalid IPs and network failures is still on the improvement list, along with accessibility and mobile map interactions.",
  },
];
