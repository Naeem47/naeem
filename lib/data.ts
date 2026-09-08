export const profile = {
  fullName: "Muhammad Naeem Muhammad Iqbal",
  firstLine: "Muhammad Naeem",
  secondLine: "Muhammad Iqbal",
  shortName: "Naeem",
  title: "Flutter Developer",
  location: "Karachi, Pakistan",
  email: "tfanaeem@gmail.com",
  phone: "+923218914005",
  phoneDisplay: "+92 321 8914005",
  years: "3 years",
  tagline:
    "3 years building high-performance mobile apps with 500K+ downloads",
  resumeUrl: "/resume.pdf",
  summary:
    "Three years building scalable mobile products — Flutter and Dart on the client, Node.js behind the tooling, and realtime systems, video pipelines and store releases throughout.",
};

export const heroHeadline = {
  lead: "I build software that turns",
  accent: "complex ideas into products.",
};

export const navLinks = [
  { href: "#work", label: "Portfolio" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#stack", label: "Technologies" },
  { href: "#fit", label: "Fit check" },
  { href: "#contact", label: "Let's talk" },
] as const;

export const stats = [
  {
    value: 3,
    suffix: "+",
    label: "Years engineering",
    detail: "Professional Flutter development across three companies.",
  },
  {
    value: 500,
    suffix: "K+",
    label: "Downloads",
    detail: "Reached collectively by the production apps I have shipped.",
  },
  {
    value: 5,
    suffix: "",
    label: "Shipped products",
    detail: "floom-cli, Knock Knock, Viewveer, Alpha Arc and Matchify.",
  },
  {
    value: 3,
    suffix: "",
    label: "Companies",
    detail: "Visech, VativeApps, and Maze Digital — still building.",
  },
] as const;

export const domainMix = [
  { label: "Social", value: 40, projects: ["Knock Knock", "Viewveer", "Matchify"] },
  { label: "Live streaming", value: 22, projects: ["Viewveer"] },
  { label: "Productivity", value: 18, projects: ["Alpha Arc"] },
  { label: "Developer tooling", value: 20, projects: ["floom-cli"] },
] as const;

export const careerPoints = [
  { label: "2023", apps: 1, note: "Visech — first production Flutter work" },
  { label: "2024", apps: 3, note: "VativeApps → Maze Digital" },
  { label: "2025", apps: 4, note: "Knock Knock, Viewveer, Alpha Arc" },
  { label: "2026", apps: 5, note: "floom-cli published to npm" },
] as const;

export const skillGroups = [
  {
    title: "Languages",
    items: ["Dart", "TypeScript", "JavaScript", "Python"],
  },
  {
    title: "Frameworks",
    items: ["Flutter", "Node.js", "Nest.js"],
  },
  {
    title: "State Management",
    items: ["BLoC", "Riverpod", "Provider", "GetX"],
  },
  {
    title: "Tools",
    items: [
      "Firebase",
      "Google Maps",
      "Git/GitHub",
      "Platform Channels",
      "npm",
      "CLI Development",
    ],
  },
  {
    title: "Features",
    items: [
      "Video/Multimedia",
      "Live Streaming/Agora",
      "Real-Time Chat",
      "In-App Purchases",
      "AdMob",
      "AI Integration",
      "FFmpeg",
      "Role-Based Access",
      "Deep Links",
      "Video Composition",
      "Offline Cache",
      "Custom Design Systems",
    ],
  },
] as const;

export const skillKeywords = [
  "Flutter",
  "Dart",
  "Node.js",
  "TypeScript",
  "CLI Development",
  "npm",
  "FFmpeg",
  "Socket.IO",
  "AWS S3",
  "Presigned Uploads",
  "GetIt",
  "Provider",
  "Riverpod",
  "Bloc",
  "Hive",
  "Deep Links",
  "Firebase",
  "Video Composition",
  "Offline Cache",
  "Custom Design Systems",
] as const;

export const experience = [
  {
    code: "VSE",
    company: "Visech Technologies",
    role: "Junior Flutter Developer",
    period: "04/2023 – 10/2023",
    location: "Karachi",
    summary: "Flutter screens, REST APIs and the first production Git habits.",
    bullets: [
      "Built Flutter screens and reusable UI components for early-stage mobile products, wiring REST APIs and local persistence.",
      "Implemented authentication flows, form validation, and basic state management while learning production Git and code-review practices.",
      "Supported QA and store-readiness checklists for Android/iOS builds, fixing layout and navigation bugs across device sizes.",
    ],
    tags: ["Flutter", "REST APIs", "Git"],
  },
  {
    code: "VAT",
    company: "VativeApps",
    role: "Junior Flutter Developer",
    period: "11/2023 – 03/2024",
    location: "Karachi",
    summary: "Client Flutter features, Firebase, Maps, IAP and AdMob.",
    bullets: [
      "Delivered Flutter features for client products using Provider/GetX, Firebase Authentication, Firestore, and Cloud Messaging.",
      "Integrated Google Maps, in-app purchases, and AdMob; profiled jank and reduced crash-prone media paths before store submission.",
      "Collaborated in Agile sprints with senior engineers, writing reusable widgets and handling REST API integrations on Android and iOS.",
    ],
    tags: ["Flutter", "Provider", "GetX", "Firebase", "Google Maps", "AdMob"],
  },
  {
    code: "MFD",
    company: "Maze Digital",
    role: "Mid-level Flutter Developer",
    period: "04/2024 – Present",
    location: "Karachi",
    summary: "Production social, streaming and productivity apps — FFmpeg, Agora, RevenueCat.",
    bullets: [
      "Shipped production Flutter apps across social, live-streaming, and productivity domains, contributing to products with 500K+ combined downloads.",
      "Built a client-side FFmpeg composition pipeline (HDR/SDR detection, layout overlays, skip-reencode) and a dual Socket.IO manager for chat and live notifications.",
      "Implemented Agora live streaming, RevenueCat subscriptions, Firebase auth/data, and role-based access in BLoC/Riverpod architectures.",
      "Partnered with design and backend teams to deliver pixel-perfect iOS and Android releases with queued uploads, offline caches, and performance-tuned video playback.",
    ],
    tags: ["Flutter", "BLoC", "Riverpod", "FFmpeg", "Agora", "Firebase", "RevenueCat"],
  },
] as const;

export type ProjectLink = {
  label: string;
  href: string;
};

export type CaseStudy = {
  title: string;
  problem: string;
  solution: string;
  built: string;
  stack: string;
};

export type Project = {
  name: string;
  oneLiner: string;
  bullets: string[];
  tags: string[];
  mark: string;
    featured?: boolean;
  category?: string;
  tagline?: string;
  problem?: string;
  role?: string;
  highlights?: string[];
  options?: { title: string; detail: string }[];
  links?: ProjectLink[];
  caseStudies?: CaseStudy[];
  features?: {
    core: string[];
    differentiating: string[];
  };
};

export const projects: Project[] = [
  {
    name: "floom-cli",
    mark: "fl",
    featured: true,
    tagline: "Like NestJS schematics, but for Flutter.",
    oneLiner:
      "A Node.js CLI, published to npm, that scaffolds a complete Flutter project from a composable set of templates.",
    problem:
      "Every new Flutter project starts with the same manual setup: choosing an architecture, wiring a state management library, setting up a networking client, configuring dependency injection, and rebuilding the same folder structure — before writing a single feature.",
    role: "Designed and built the CLI end-to-end — template system, code generation engine, architecture/state detection logic, Firebase addon, and npm packaging/publishing.",
    options: [
      {
        title: "Architecture",
        detail: "Clean Architecture, Feature First, MVC, or Minimal",
      },
      {
        title: "State management",
        detail: "Riverpod, Bloc, Provider, or none",
      },
      {
        title: "Networking",
        detail: "Dio, http, or none",
      },
      {
        title: "Dependency injection",
        detail: "none, get_it, or injectable",
      },
      {
        title: "Responsive design",
        detail: "ScreenUtil bootstrap for mobile/tablet/desktop",
      },
      {
        title: "Firebase (optional)",
        detail: "Auth, Firestore, FCM, Storage, and Analytics, with native setup scaffolded automatically",
      },
    ],
    bullets: [
      "Includes a generate command (floom g module | repository | page | provider | cubit | service) that detects the existing architecture and state library and emits correctly-wired code — repositories with real API calls, not placeholders.",
      "Auto-runs flutter pub get after generation and merges required dependencies into pubspec.yaml.",
      "Interactive setup wizard, or fully flag-driven for CI / non-interactive use (-y, --defaults).",
      "Ships every generated project with a unified ApiState enum and ApiResult<T>/ApiStateBuilder pattern for consistent async UI handling.",
      "Distributed via npm — npm install -g floom-cli or npx floom-cli. Requires Node 18+, targets Flutter's latest stable SDK.",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/Naeem47/floom-cli" },
      { label: "npm", href: "https://www.npmjs.com/package/floom-cli" },
      {
        label: "Quick reference",
        href: "https://github.com/Naeem47/floom-cli/blob/main/CLI_GUIDE.md",
      },
    ],
    tags: ["Node.js", "TypeScript", "npm", "Dart/Flutter", "Firebase", "CLI"],
    category: "Tooling / CLI",
  },
  {
    name: "Knock Knock",
    mark: "KK",
    featured: true,
    oneLiner:
      "A Flutter social app centered on Rooms and Stories, with a production-grade create → compose → upload pipeline and realtime chat/notifications.",
    highlights: [
      "FFmpeg HDR-aware video export",
      "Dual socket manager",
      "Rich create canvas",
      "Upload queue",
      "Multi-theme design system",
      "Deep-link referrals",
    ],
    bullets: [
      "Built a client-side FFmpeg composition pipeline (ffmpeg_kit) with HDR/SDR detection, movable video layout, and skip-reencode when no overlays are needed.",
      "Designed a dual Socket.IO manager (chat + notifications) with auth, reconnect/backoff, and facades for DMs, groups, and live updates.",
      "Shipped a Stories/Posts creator: camera, drawing, styled text, GIFs/stickers, collage — then a queued upload flow (compose → thumbnail → S3).",
      "Implemented presigned AWS uploads, modular GetIt DI, a 6-skin theme system, Hive offline chat caches, and silent referral attribution via deep links.",
    ],
    caseStudies: [
      {
        title: "Client-side video composition (FFmpeg)",
        problem:
          "Stories/posts need stickers, text, and drawing burned into video with correct orientation and HDR sources — server-only re-encode can't match WYSIWYG preview.",
        solution:
          "Detect HDR/FPS → build layout-aware filter graphs → overlay exported PNG canvas → generate thumbnail; skip FFmpeg when the video is unchanged.",
        built:
          "FfmpegService, HDR/SDR command builders, FPS/HDR detectors, overlay + story layout (x/y/w/h/rotation), thumbnail generation, wired into the upload queue.",
        stack: "ffmpeg_kit_flutter_new, FFprobe, Flutter, Provider upload flow",
      },
      {
        title: "Realtime chat & notifications",
        problem:
          "Separate chat and notification channels, flaky mobile networks, and consistent message grouping UX.",
        solution:
          "Central SocketManager owning chat + notification clients, reconnect with backoff, domain facades, sender/day grouping, Hive message caches.",
        built:
          "Dual BaseSocketClients, connection status / ensure-connection, group & single chat socket services, message grouping services, offline Hive caches.",
        stack: "socket_io_client, GetIt, Provider, Hive",
      },
      {
        title: "Rich media create → reliable upload",
        problem:
          "Multi-step create (camera, collage, draw, text, GIFs) must stay snappy and survive failures without losing work.",
        solution:
          "Local editor canvas → sequential upload queue with retry UI → FFmpeg compose → AWS presigned PUT.",
        built:
          "Camera + multi-slot layout/collage, drawing canvas, text-on-image, stickers/quotes, custom KLIPY GIF/sticker tab, UploadService queue (preparing → thumbnail → uploading…), unified upload tracker.",
        stack: "Camera, custom drawing/text overlays, klipy_flutter, Dio, AWS S3, FFmpeg",
      },
      {
        title: "Theming & share surfaces",
        problem:
          "Multiple brand skins across chat, share sheet, and stickers without scattered hardcodes.",
        solution:
          "Central theme registry with per-surface color models and asset packs (Classic, Fashion, Space, Coffee, Dubai, Matcha…).",
        built:
          "Provider ThemeProvider, custom theme resolvers, themed Lottie/icons, and share-sheet surfaces.",
        stack: "Provider ThemeProvider, custom theme resolvers, themed Lottie/icons, share sheet",
      },
    ],
    features: {
      core: [
        "Feed",
        "Discover",
        "Rooms/Communities",
        "Stories",
        "Chat",
        "Profile",
        "Camera/Upload",
      ],
      differentiating: [
        "Rooms + Communities (beyond a simple follow graph)",
        "Question of the Day (QOD) — room-owned questions → story replies",
        "Ticket posts — Event / Life / Arabic event as first-class format",
        "Theme packs — Dubai, Matcha, Coffee, Space, Fashion…",
        "Rich create — drawing, text, stickers/quotes, collage/layout, KLIPY GIFs",
        "Share graph — post/room/profile/QOD → story/chat",
        "Silent referral — link code → signup body, no code screen",
      ],
    },
    tags: [
      "Flutter",
      "Dart",
      "FFmpeg Kit",
      "Socket.IO",
      "AWS S3",
      "Provider",
      "GetIt",
      "Hive",
      "Better Player",
      "KLIPY",
      "Camera",
    ],
    category: "Social / Realtime",
  },
  {
    name: "Viewveer",
    mark: "VV",
    oneLiner:
      "Short-video and live-streaming social platform with feed playback, host/viewer rooms, and realtime communication.",
    bullets: [
      "Implemented short-video feed playback and live-streaming rooms with Agora SDK, including host/viewer roles and in-room chat.",
      "Built voice and video calling flows and social interactions (likes, comments, follows) on Firebase-backed user graphs.",
      "Shipped gift/coin monetization and media upload paths, keeping scroll performance stable on mid-range Android devices.",
    ],
    tags: ["Flutter", "Agora", "Firebase", "Riverpod", "Live Streaming"],
    category: "Live streaming / Mobile",
  },
  {
    name: "Alpha Arc",
    mark: "AA",
    oneLiner:
      "Productivity and wellness app for sales professionals — habits, journaling, guided sessions, and members-only training.",
    bullets: [
      "Developed habit tracking, guided journaling, breathwork, and hydration modules in a single Flutter codebase for iOS and Android.",
      "Integrated AI coaching flows and a members-only sales-training area with role-based access for free vs. subscribed users.",
      "Implemented RevenueCat subscriptions and content entitlements so training videos, scripts, and coaching stay behind the paywall.",
    ],
    tags: ["Flutter", "Riverpod", "RevenueCat", "Firebase", "AI Integration"],
    category: "Productivity / Mobile",
  },
  {
    name: "Matchify",
    mark: "M",
    oneLiner:
      "Swipe-based matching app with profile discovery, realtime chat, and in-app audio/video calls.",
    bullets: [
      "Built swipe matching, profile discovery, and realtime messaging with presence and push notifications.",
      "Integrated Agora for audio/video calls and Firebase for authentication, chat delivery, and notification routing.",
      "Added AI-assisted matching recommendations during onboarding and profile interactions to improve first conversations.",
    ],
    tags: ["Flutter", "Agora", "Firebase", "Riverpod", "Real-Time Chat"],
    category: "Social / Matching",
  },
];

export type StackNode = {
  id: string;
  label: string;
  x: number;
  y: number;
  kind: "tech" | "project";
};

export const stackNodes: StackNode[] = [
  { id: "flutter", label: "Flutter", x: 18, y: 28, kind: "tech" },
  { id: "dart", label: "Dart", x: 8, y: 48, kind: "tech" },
  { id: "bloc", label: "BLoC", x: 28, y: 52, kind: "tech" },
  { id: "riverpod", label: "Riverpod", x: 38, y: 34, kind: "tech" },
  { id: "firebase", label: "Firebase", x: 22, y: 72, kind: "tech" },
  { id: "agora", label: "Agora", x: 48, y: 62, kind: "tech" },
  { id: "ffmpeg", label: "FFmpeg", x: 58, y: 28, kind: "tech" },
  { id: "node", label: "Node.js", x: 70, y: 44, kind: "tech" },
  { id: "socket", label: "Socket.IO", x: 62, y: 58, kind: "tech" },
  { id: "revenuecat", label: "RevenueCat", x: 78, y: 68, kind: "tech" },
  { id: "knock", label: "Knock Knock", x: 52, y: 16, kind: "project" },
  { id: "viewveer", label: "Viewveer", x: 84, y: 32, kind: "project" },
  { id: "alpha", label: "Alpha Arc", x: 88, y: 78, kind: "project" },
  { id: "matchify", label: "Matchify", x: 36, y: 84, kind: "project" },
  { id: "floom", label: "floom-cli", x: 86, y: 12, kind: "project" },
];

export const stackCategories = [
  {
    id: "mobile",
    label: "Mobile",
    blurb: "The client layer every shipped app is built on.",
    nodes: ["flutter", "dart", "bloc", "riverpod"],
    extras: ["Provider", "GetX", "Platform Channels"],
  },
  {
    id: "realtime",
    label: "Realtime",
    blurb: "Video, live rooms and chat that have to survive flaky networks.",
    nodes: ["agora", "socket", "ffmpeg"],
    extras: ["Better Player", "Camera", "Voice / video calls"],
  },
  {
    id: "cloud",
    label: "Cloud",
    blurb: "Auth, data, notifications and object storage in production.",
    nodes: ["firebase"],
    extras: ["AWS S3", "Firestore", "FCM", "Presigned uploads"],
  },
  {
    id: "tooling",
    label: "Tooling",
    blurb: "The scaffolder and the Node side of generation.",
    nodes: ["node", "floom"],
    extras: ["TypeScript", "npm", "Nest.js", "CLI generation"],
  },
  {
    id: "product",
    label: "Product",
    blurb: "Subscriptions, ads, maps and the surfaces users actually pay for.",
    nodes: ["revenuecat", "alpha"],
    extras: ["Google Maps", "AdMob", "Hive", "Deep Links", "AI coaching"],
  },
] as const;

export const stackCopy: Record<string, string> = {
  flutter: "Cross-platform client for every shipped app on this site.",
  dart: "The language the Flutter work is written in.",
  bloc: "State architecture used on Maze Digital production apps.",
  riverpod: "Reactive state on Viewveer, Alpha Arc and Matchify.",
  firebase: "Auth, data and notifications across four products.",
  agora: "Live streaming and in-app calls on Viewveer and Matchify.",
  ffmpeg: "Client-side HDR-aware composition on Knock Knock.",
  node: "The runtime behind floom-cli and generation.",
  socket: "Dual chat + notification sockets on Knock Knock.",
  revenuecat: "Entitlements and subscriptions on Alpha Arc.",
  knock: "Social create → compose → upload, plus realtime chat.",
  viewveer: "Short video and live rooms.",
  alpha: "Habits, coaching and members-only training.",
  matchify: "Swipe matching, chat and Agora calls.",
  floom: "npm CLI that scaffolds Flutter from composable templates.",
};

export const stackEdges: [string, string][] = [
  ["flutter", "knock"],
  ["flutter", "viewveer"],
  ["flutter", "alpha"],
  ["flutter", "matchify"],
  ["flutter", "floom"],
  ["dart", "flutter"],
  ["bloc", "flutter"],
  ["riverpod", "viewveer"],
  ["riverpod", "alpha"],
  ["riverpod", "matchify"],
  ["firebase", "viewveer"],
  ["firebase", "alpha"],
  ["firebase", "matchify"],
  ["firebase", "floom"],
  ["agora", "viewveer"],
  ["agora", "matchify"],
  ["ffmpeg", "knock"],
  ["socket", "knock"],
  ["node", "floom"],
  ["node", "socket"],
  ["revenuecat", "alpha"],
];

export const fitVocabulary = [
  { term: "Flutter", aliases: ["flutter", "dart"], evidence: ["Knock Knock", "Viewveer", "Alpha Arc", "Matchify", "floom-cli"] },
  { term: "BLoC", aliases: ["bloc", "flutter_bloc"], evidence: ["Maze Digital"] },
  { term: "Riverpod", aliases: ["riverpod"], evidence: ["Viewveer", "Alpha Arc", "Matchify"] },
  { term: "Firebase", aliases: ["firebase", "firestore", "fcm"], evidence: ["Viewveer", "Alpha Arc", "Matchify", "floom-cli"] },
  { term: "Agora", aliases: ["agora", "live streaming", "webrtc", "video call"], evidence: ["Viewveer", "Matchify"] },
  { term: "FFmpeg", aliases: ["ffmpeg", "video composition", "transcode"], evidence: ["Knock Knock"] },
  { term: "Socket.IO", aliases: ["socket.io", "realtime", "websocket", "real-time chat"], evidence: ["Knock Knock"] },
  { term: "RevenueCat", aliases: ["revenuecat", "in-app purchase", "iap", "subscription"], evidence: ["Alpha Arc"] },
  { term: "Node.js", aliases: ["node", "nodejs", "nest", "cli"], evidence: ["floom-cli"] },
  { term: "GetX", aliases: ["getx"], evidence: ["VativeApps"] },
  { term: "Provider", aliases: ["provider"], evidence: ["Knock Knock", "VativeApps"] },
  { term: "Google Maps", aliases: ["google maps", "maps"], evidence: ["VativeApps"] },
  { term: "AdMob", aliases: ["admob", "ads"], evidence: ["VativeApps"] },
  { term: "AI", aliases: ["ai", "gemini", "openai", "chatgpt"], evidence: ["Alpha Arc", "Matchify"] },
] as const;

export const building = [
  {
    status: "Building",
    title: "floom-cli",
    body: "Composable Flutter scaffolding — architecture, state, networking and Firebase as flags, not a weekend of boilerplate.",
  },
  {
    status: "Building",
    title: "Realtime media pipelines",
    body: "Client-side FFmpeg, Socket.IO and Agora paths that still feel instant on mid-range Android.",
  },
  {
    status: "Exploring",
    title: "AI inside Flutter products",
    body: "Coaching, matching and chat flows where the model is a feature, not a banner.",
  },
] as const;

export const education = {
  school: "B.B.I.T.",
  degree: "Bachelor of Business & Information Technology",
  status: "Currently pursuing",
  location: "Karachi, Sindh",
  expected: "08/2025",
};

export const socials = [
  {
    name: "GitHub",
    href: "https://github.com/Naeem47",
    placeholder: false,
  },
  {
    name: "LinkedIn",
    href: "#",
    placeholder: true,
  },
] as const;
