# 🌌 AuraMock 3D: Aesthetic App Store Screenshot Builder

AuraMock 3D is a premium, open-source web application designed to create stunning, high-converting app store screenshots in seconds. Combining interactive 3D device mockups with modern design aesthetics like glassmorphism and organic Aurora mesh backdrops, AuraMock 3D makes marketing asset creation simple and beautiful.

---

## ✨ Features

- **Interactive 3D Device Mockups:** Full 3D control over mockups (iPhone 15 Pro, Samsung Galaxy S25) with sliders for Pitch (Tilt), Yaw (Turn), and Roll.
- **Aesthetic Aurora Mesh & Gradients:** Generate organic, multi-colored glowing mesh backgrounds or configure custom multi-stop gradients.
- **Pre-made Design Templates:** Start instantly with 10 beautifully designed preset layouts, accessible via a 3D mouse-tracking interactive grid.
- **In-Canvas Typography Editor:** Double-click to edit headlines and subheadlines inline. Customize font families (Outfit, Inter, Playfair Display, Syne), sizes, weights, and colors.
- **Store Badges & Stickers:** Easily add drag-and-drop App Store/Google Play badges, rating stars, "App of the Day" laurels, and custom graphic uploads.
- **Fast Zipped Exports:** Export your screenshots in high resolution as PNGs, bundled automatically into a single `.zip` file.
- **IndexedDB Auto-Saving:** Fully offline-first. Your projects, screenshots, and settings are saved automatically in your browser's local database.

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/AstraLoay/AuraMock-3D.git
cd AuraMock-3D
```

### 2. Run Locally
Since AuraMock 3D is a pure client-side web application, you can run it with any local static file server.

Using Python:
```bash
python -m http.server 8000
```
Or Node.js (`http-server`):
```bash
npx http-server -p 8000
```

Open `http://localhost:8000` in your web browser.

### Development and validation

AuraMock has no required runtime package dependencies. Node.js 20 or newer is used
for validation and production packaging:

```bash
npm run check
npm test
npm run build
```

Run everything with:

```bash
npm run validate
```

The production-ready static site is written to `dist/`. GitHub Pages deploys only
this allow-listed directory rather than the repository root.

---

## 🛠️ Architecture & Tech Stack

AuraMock 3D is built with performance and simplicity in mind:
- **WebGL Rendering:** Powered by **Three.js** to handle the real-time 3D smartphone rotation and rendering.
- **Canvas Composition:** Standard **HTML5 2D Canvas** coordinates the text layers, stickers, backgrounds, and device overlays for high-resolution exports.
- **Client-Side Storage:** **IndexedDB** handles multi-project states, screenshots, and local file storage.
- **Styling:** Custom CSS with dark mode variables, glassmorphism filters, and smooth 3D CSS transform micro-animations.

## 🔐 Privacy and API keys

Projects and imported screenshots stay in your browser unless you explicitly
export or send content to an AI provider. AI features send the requested text or
images directly to the provider selected in Settings.

API keys use session-only browser storage by default. You can opt into remembering
them on the current device, but browser storage is not encrypted. Avoid saving
keys on shared devices and use **Forget all API keys** when finished.

## 🌐 Browser support

Use a current version of Chrome, Edge, Firefox, or Safari with Canvas, IndexedDB,
WebGL, and ES2021 support enabled. If WebGL is unavailable, use the 2D device mode.

Common recovery steps:

- If a 3D model does not appear, confirm WebGL/hardware acceleration is enabled.
- If a project cannot save, check the browser's site-storage quota and export a backup.
- If an export is interrupted, reduce the number of screenshots or export one language at a time.
- If a saved asset is corrupt, AuraMock restores an empty placeholder and loads the remainder of the project.

## Project compatibility

Backups are JSON files containing versioned project records. Keep backups before
large browser or operating-system migrations. Imported backups are structurally
validated, and older project layouts are migrated when supported.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request or open an Issue.

1. Fork the Project.
2. Create your Feature Branch (`git checkout -b feature/amazing-feature`).
3. Commit your Changes (`git commit -m 'Add some amazing feature'`).
4. Push to the Branch (`git push origin feature/amazing-feature`).
5. Open a Pull Request.

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
