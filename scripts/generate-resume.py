"""Generate a simple multi-page Helvetica resume PDF at public/resume.pdf."""

from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "resume.pdf"

PAGE_W, PAGE_H = 612, 792
MARGIN = 54
LINE = 14
CONTENT_W = PAGE_W - MARGIN * 2


def escape(text: str) -> str:
    return (
        text.replace("\\", "\\\\")
        .replace("(", "\\(")
        .replace(")", "\\)")
        .replace("•", "-")
        .replace("—", "-")
        .replace("–", "-")
        .replace("'", "'")
        .replace("'", "'")
        .replace(""", '"')
        .replace(""", '"')
    )


def wrap(text: str, width: int) -> list[str]:
    words = text.split()
    lines: list[str] = []
    current = ""
    for word in words:
        trial = f"{current} {word}".strip()
        if len(trial) <= width:
            current = trial
        else:
            if current:
                lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines or [""]


blocks: list[tuple[str, str, int]] = []


def add(kind: str, text: str, size: int = 10) -> None:
    blocks.append((kind, text, size))


add("title", "Muhammad Naeem Muhammad Iqbal", 18)
add("sub", "Flutter Developer  |  Karachi, Pakistan  |  3 years experience", 10)
add("sub", "tfanaeem@gmail.com  |  +92 321 8914005", 10)
add("space", "", 8)
add("h", "Summary", 12)
add(
    "p",
    "Results-driven Flutter developer with 3 years of experience shipping production apps across social, e-commerce, live-streaming, and productivity domains. Expertise in BLoC and Riverpod, Firebase, Agora SDK, and RevenueCat. Apps with 500K+ combined downloads.",
    10,
)
add("space", "", 8)
add("h", "Skills", 12)
add("p", "Languages: Dart, TypeScript, JavaScript, Python", 10)
add("p", "Frameworks: Flutter, Node.js, Nest.js", 10)
add("p", "State Management: BLoC, Riverpod, Provider, GetX", 10)
add("p", "Tools: Firebase, Google Maps, Git/GitHub, Platform Channels, npm, CLI Development", 10)
add(
    "p",
    "Features: Video/Multimedia, Live Streaming/Agora, Real-Time Chat, In-App Purchases, AdMob, AI Integration, FFmpeg, Role-Based Access",
    10,
)
add("space", "", 8)
add("h", "Experience", 12)
add("job", "Maze Digital  -  Mid-level Flutter Developer  |  04/2024-Present  |  Karachi", 10)
add(
    "b",
    "Shipped production Flutter apps across social, live-streaming, and productivity domains, contributing to products with 500K+ combined downloads.",
    10,
)
add(
    "b",
    "Built a client-side FFmpeg composition pipeline (HDR/SDR detection, layout overlays, skip-reencode) and a dual Socket.IO manager for chat and live notifications.",
    10,
)
add(
    "b",
    "Implemented Agora live streaming, RevenueCat subscriptions, Firebase auth/data, and role-based access in BLoC/Riverpod architectures.",
    10,
)
add(
    "b",
    "Partnered with design and backend teams to deliver pixel-perfect iOS and Android releases with queued uploads, offline caches, and performance-tuned video playback.",
    10,
)
add("space", "", 6)
add("job", "VativeApps  -  Junior Flutter Developer  |  11/2023-03/2024  |  Karachi", 10)
add(
    "b",
    "Delivered Flutter features for client products using Provider/GetX, Firebase Authentication, Firestore, and Cloud Messaging.",
    10,
)
add(
    "b",
    "Integrated Google Maps, in-app purchases, and AdMob; profiled jank and reduced crash-prone media paths before store submission.",
    10,
)
add(
    "b",
    "Collaborated in Agile sprints with senior engineers, writing reusable widgets and handling REST API integrations on Android and iOS.",
    10,
)
add("space", "", 6)
add("job", "Visech Technologies  -  Junior Flutter Developer  |  04/2023-10/2023  |  Karachi", 10)
add(
    "b",
    "Built Flutter screens and reusable UI components for early-stage mobile products, wiring REST APIs and local persistence.",
    10,
)
add(
    "b",
    "Implemented authentication flows, form validation, and basic state management while learning production Git and code-review practices.",
    10,
)
add(
    "b",
    "Supported QA and store-readiness checklists for Android/iOS builds, fixing layout and navigation bugs across device sizes.",
    10,
)
add("space", "", 8)
add("h", "Projects", 12)
add("job", "floom-cli  -  Node.js, TypeScript, npm, Dart/Flutter, Firebase", 10)
add(
    "b",
    "Designed and built an npm-published Flutter scaffolder (like NestJS schematics) with composable architecture, state, networking, DI, and optional Firebase templates.",
    10,
)
add(
    "b",
    "Added a generate command that detects existing architecture/state libraries and emits correctly-wired modules, repositories, and pages — plus CI-friendly flag-driven setup.",
    10,
)
add("space", "", 4)
add("job", "Knock Knock  -  Flutter, FFmpeg, Socket.IO, AWS S3, Provider, GetIt, Hive", 10)
add(
    "b",
    "Built a client-side FFmpeg composition pipeline with HDR/SDR detection, movable video layout, and skip-reencode when no overlays are needed.",
    10,
)
add(
    "b",
    "Designed a dual Socket.IO manager (chat + notifications) with auth, reconnect/backoff, and facades for DMs, groups, and live updates.",
    10,
)
add(
    "b",
    "Shipped a Stories/Posts creator (camera, drawing, text, GIFs/stickers, collage) and a queued upload flow to S3, plus deep-link referrals and Hive chat caches.",
    10,
)
add("space", "", 4)
add("job", "Viewveer  -  Flutter, Agora, Firebase, Riverpod, Live Streaming", 10)
add(
    "b",
    "Implemented short-video feed playback and live-streaming rooms with Agora SDK, including host/viewer roles and in-room chat.",
    10,
)
add(
    "b",
    "Built voice and video calling flows, social interactions, gift/coin monetization, and media upload paths.",
    10,
)
add("space", "", 4)
add("job", "Alpha Arc  -  Flutter, Riverpod, RevenueCat, Firebase, AI Integration", 10)
add(
    "b",
    "Developed habit tracking, journaling, breathwork, and hydration modules for iOS and Android.",
    10,
)
add(
    "b",
    "Integrated AI coaching, members-only sales training, role-based access, and RevenueCat subscriptions.",
    10,
)
add("space", "", 4)
add("job", "Matchify  -  Flutter, Agora, Firebase, Riverpod, Real-Time Chat", 10)
add(
    "b",
    "Built swipe matching, profile discovery, and realtime messaging with presence and push notifications.",
    10,
)
add(
    "b",
    "Integrated Agora audio/video calls, Firebase auth/chat, and AI-assisted matching recommendations.",
    10,
)
add("space", "", 8)
add("h", "Education", 12)
add(
    "p",
    "B.B.I.T.  -  Bachelor of Business & Information Technology (currently pursuing), Karachi, Sindh. Expected 08/2025.",
    10,
)


def layout_pages() -> list[list[tuple[str, int, str]]]:
    pages: list[list[tuple[str, int, str]]] = []
    y = PAGE_H - MARGIN
    page: list[tuple[str, int, str]] = []

    def new_page() -> None:
        nonlocal y, page
        pages.append(page)
        page = []
        y = PAGE_H - MARGIN

    for kind, text, size in blocks:
        if kind == "space":
            y -= 10
            continue
        width = 92 if kind in {"p", "b"} else 78 if kind == "job" else 60
        if kind == "title":
            width = 42
        if kind == "b":
            lines = wrap(f"- {text}", 92)
        else:
            lines = wrap(text, width)
        needed = len(lines) * (size + 4) + (6 if kind == "h" else 0)
        if y - needed < MARGIN:
            new_page()
        if kind == "h":
            y -= 6
        for line in lines:
            y -= size + 4
            page.append((kind, y, line))
    pages.append(page)
    return pages


def stream_for(page: list[tuple[str, int, str]]) -> str:
    cmds = ["BT", "/F1 10 Tf"]
    current_size = 10
    for kind, y, line in page:
        size = 18 if kind == "title" else 12 if kind == "h" else 10
        font = "F2" if kind in {"title", "h", "job"} else "F1"
        if size != current_size:
            cmds.append(f"/{font} {size} Tf")
            current_size = size
        else:
            cmds.append(f"/{font} {size} Tf")
        cmds.append(f"1 0 0 1 {MARGIN} {y} Tm")
        cmds.append(f"({escape(line)}) Tj")
    cmds.append("ET")
    return "\n".join(cmds) + "\n"


pages = layout_pages()
objects: list[bytes] = []


def obj(body: str) -> int:
    objects.append(body.encode("latin-1", "replace"))
    return len(objects)


obj("<< /Type /Catalog /Pages 2 0 R >>")
page_ids: list[int] = []

# placeholder for pages object
obj("%PAGES%")

obj("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>")
obj("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>")
font_regular, font_bold = 3, 4

content_ids: list[int] = []
for page in pages:
    stream = stream_for(page)
    content_ids.append(
        obj(f"<< /Length {len(stream)} >>\nstream\n{stream}endstream")
    )

for content_id in content_ids:
    page_ids.append(
        obj(
            "<< /Type /Page /Parent 2 0 R "
            f"/MediaBox [0 0 {PAGE_W} {PAGE_H}] "
            f"/Contents {content_id} 0 R "
            f"/Resources << /Font << /F1 {font_regular} 0 R /F2 {font_bold} 0 R >> >> >>"
        )
    )

kids = " ".join(f"{pid} 0 R" for pid in page_ids)
objects[1] = f"<< /Type /Pages /Count {len(page_ids)} /Kids [{kids}] >>".encode()

buffer = bytearray(b"%PDF-1.4\n")
offsets = [0]
for i, body in enumerate(objects, start=1):
    offsets.append(len(buffer))
    buffer.extend(f"{i} 0 obj\n".encode())
    buffer.extend(body)
    buffer.extend(b"\nendobj\n")

xref = len(buffer)
buffer.extend(f"xref\n0 {len(objects) + 1}\n".encode())
buffer.extend(b"0000000000 65535 f \n")
for off in offsets[1:]:
    buffer.extend(f"{off:010d} 00000 n \n".encode())
buffer.extend(
    f"trailer\n<< /Size {len(objects) + 1} /Root 1 0 R >>\nstartxref\n{xref}\n%%EOF\n".encode()
)

OUTPUT.write_bytes(buffer)
print(f"Wrote {OUTPUT} ({len(buffer)} bytes, {len(pages)} page(s))")
