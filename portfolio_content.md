# Portfolio — Projects

---

# floom-cli — Composable Flutter Scaffolder

**Tagline:** Like NestJS schematics, but for Flutter.

**Links:** [GitHub](https://github.com/Naeem47/floom-cli) · [npm](https://www.npmjs.com/package/floom-cli) · [Quick reference](https://github.com/Naeem47/floom-cli/blob/main/CLI_GUIDE.md)

**The problem**
Every new Flutter project starts with the same manual setup: choosing an architecture, wiring a state management library, setting up a networking client, configuring dependency injection, and rebuilding the same folder structure — before writing a single feature.

**What I built**
floom-cli is a Node.js CLI, published to npm, that scaffolds a complete Flutter project from a composable set of templates. Developers pick their stack at creation time:

- **Architecture:** Clean Architecture, Feature First, MVC, or Minimal
- **State management:** Riverpod, Bloc, Provider, or none
- **Networking:** Dio, `http`, or none
- **Dependency injection:** none, `get_it`, or `injectable`
- **Responsive design:** built-in ScreenUtil bootstrap for mobile/tablet/desktop
- **Firebase (optional):** Auth, Firestore, FCM, Storage, and Analytics, with config files and native setup scaffolded automatically

Beyond project creation, floom-cli includes a `generate` command (`floom g module | repository | page | provider | cubit | service`) that detects the existing project's architecture and state library and generates matching, correctly-wired code — repositories with real API calls, not placeholders.

**Key technical details**
- Auto-runs `flutter pub get` after generation and merges required dependencies into `pubspec.yaml`
- Interactive setup wizard, or fully flag-driven for CI / non-interactive use (`-y, --defaults`)
- Ships every generated project with a unified `ApiState` enum and `ApiResult<T>`/`ApiStateBuilder` pattern for consistent async UI handling
- Distributed via npm — `npm install -g floom-cli` or `npx floom-cli`
- Requires Node 18+, targets Flutter's latest stable SDK

**My role**
Designed and built the CLI end-to-end — template system, code generation engine, architecture/state detection logic, Firebase addon, and npm packaging/publishing.

**Tech stack:** Node.js, TypeScript, npm, Dart/Flutter (generated output), Firebase

---

# Knock Knock — Social Creation & Realtime Platform

**One-liner:** A Flutter social app centered on Rooms and Stories, with a production-grade create → compose → upload pipeline and realtime chat/notifications.

**Stack:** Flutter, Dart, FFmpeg Kit, Socket.IO, AWS S3 (presigned), Provider, GetIt, Hive, Better Player, KLIPY, Camera

**Highlights:** FFmpeg HDR-aware video export · Dual socket manager · Rich create canvas · Upload queue · Multi-theme design system · Deep-link referrals

## Case Study 1 — Client-side video composition (FFmpeg)

**Problem**
Stories/posts need stickers, text, and drawing burned into video with correct orientation and HDR sources — server-only re-encode can't match WYSIWYG preview.

**Solution**
Detect HDR/FPS → build layout-aware filter graphs → overlay exported PNG canvas → generate thumbnail; skip FFmpeg when the video is unchanged.

**What I built**
`FfmpegService`, HDR/SDR command builders, FPS/HDR detectors, overlay + story layout (x/y/w/h/rotation), thumbnail generation, wired into the upload queue.

**Stack:** `ffmpeg_kit_flutter_new`, FFprobe, Flutter, Provider upload flow

## Case Study 2 — Realtime chat & notifications

**Problem**
Separate chat and notification channels, flaky mobile networks, and consistent message grouping UX.

**Solution**
Central `SocketManager` owning chat + notification clients, reconnect with backoff, domain facades, sender/day grouping, Hive message caches.

**What I built**
Dual `BaseSocketClient`s, connection status / ensure-connection, group & single chat socket services, message grouping services, offline Hive caches.

**Stack:** `socket_io_client`, GetIt, Provider, Hive

## Case Study 3 — Rich media create → reliable upload

**Problem**
Multi-step create (camera, collage, draw, text, GIFs) must stay snappy and survive failures without losing work.

**Solution**
Local editor canvas → sequential upload queue with retry UI → FFmpeg compose → AWS presigned PUT.

**What I built**
Camera + multi-slot layout/collage, drawing canvas, text-on-image, stickers/quotes, custom KLIPY GIF/sticker tab, `UploadService` queue (`preparing` → thumbnail → uploading…), unified upload tracker.

**Stack:** Camera, custom drawing/text overlays, `klipy_flutter`, Dio, AWS S3, FFmpeg

## Case Study 4 — Theming & share surfaces

**Problem**
Multiple brand skins across chat, share sheet, and stickers without scattered hardcodes.

**Solution**
Central theme registry with per-surface color models and asset packs (Classic, Fashion, Space, Coffee, Dubai, Matcha…).

**Stack:** Provider `ThemeProvider`, custom theme resolvers, themed Lottie/icons, share sheet

## Product features (context)

**Core:** Feed · Discover · Rooms/Communities · Stories · Chat · Profile · Camera/Upload

**Differentiating:**
- Rooms + Communities (beyond a simple follow graph)
- Question of the Day (QOD) — room-owned questions → story replies
- Ticket posts — Event / Life / Arabic event as first-class format
- Theme packs — Dubai, Matcha, Coffee, Space, Fashion…
- Rich create — drawing, text, stickers/quotes, collage/layout, KLIPY GIFs
- Share graph — post/room/profile/QOD → story/chat
- Silent referral — link code → signup body, no code screen

**Accuracy notes:**
- "Collage" = multi-image camera layout (`Layoutprovider` / `DynamicCameraLayout`), not an FFmpeg collage filter
- FFmpeg = video + overlay composition/export (HDR-aware), with optional skip when unchanged — not primarily a size-compress pipeline
- Package/store IDs may differ across docs (`ae.knock.social` vs Play `ae.knockknock`)

---

## Skills / Keywords (portfolio footer)

`Flutter` · `Dart` · `Node.js` · `TypeScript` · `CLI Development` · `npm` · `FFmpeg` · `Socket.IO` · `AWS S3` · `Presigned Uploads` · `GetIt` · `Provider` · `Riverpod` · `Bloc` · `Hive` · `Deep Links` · `Firebase` · `Video Composition` · `Offline Cache` · `Custom Design Systems`
