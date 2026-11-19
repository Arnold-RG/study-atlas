# Study Atlas — cross-platform status

Study Atlas is a browser-based study portal, not an app-store mobile application. Its published HTML, CSS and JavaScript can be opened in modern desktop and mobile browsers across Windows, Linux, macOS, Android and iOS, subject to real device/browser validation.

- Source-level CI workflow: `.github/workflows/website-os-smoke.yml` runs on Ubuntu, Windows and macOS. It checks the page's viewport, navigation, HTML, responsive CSS, and required browser scripts.
- Learning content and Python code/tests are separate development workflows. The web front end runs without a local Python installation.
- Full behavior checks still needed: Safari on iPhone, Chrome on Android, desktop Chrome/Firefox/Edge/Safari, keyboard/touch navigation, quizzes, saved progress, searching, theme switching, zoom and reduced-motion.
- Browser delivery does not mean native Windows/Android/iOS binaries.
- Kubernetes is not needed for a browser-only GitHub Pages study portal. Use containers/orchestration only for future backend services if justified.

The site's established educational palette is independent of the retail, travel and ArnovaGroup palettes.
