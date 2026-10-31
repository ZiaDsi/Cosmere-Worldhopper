# Cosmere Worldhopper

An **unofficial, spoiler-conscious reading companion** for Brandon Sanderson's Cosmere. It uses plain HTML, CSS, and JavaScript, and is suitable for static hosting such as GitHub Pages.

## Features

- 25 selected works, presented in four explorer categories: Mistborn, The Stormlight Archive, Standalone Works & Other Worlds, and Cosmere Secret Projects.
- Suggested and publication reading orders; the White Sand Omnibus is treated as one 2022 entry.
- Reading completion checkboxes that synchronize between galleries and the reading guide.
- Overall and per-category progress bars, saved in your browser.
- Book-detail panels and opt-in, spoiler-protected descriptions for works with prerequisites.
- Live search by title, series, book type, year, or explorer category; result counter and clear control.
- Responsive layouts, keyboard-friendly controls, subtle hover effects, and a back-to-top button.

## Project files

- `index.html` — accessible page structure and navigation.
- `style.css` — dark-and-gold theme, layouts, responsive design, and animations.
- `books.js` — source of truth for all books, the two reading orders, and descriptions. **The book data in the supplied upload was kept unchanged.**
- `script.js` — navigation, rendering, progress, search, and spoiler controls.
- `QA_REPORT.md` — test results and important limitations.

### Images not included

You uploaded the **four source files**, not your `images/` directory. **Keep the original image files and folder hierarchy from your current project.** All references in `books.js` and the CSS are unchanged, including:

- `images/hero_bg.jpg`
- `images/favicon.jpg`
- `images/Cosmere/Mistborn/`
- `images/Cosmere/Stormlight Archive/`
- `images/Cosmere/Standalones/`
- `images/Cosmere/Secret Projects/`

Folder names, spaces, capitalization, apostrophes, and underscores matter on GitHub Pages. The exact image paths could not be verified without the image files.

## Installing this update safely

1. **Back up** your current website folder before replacing anything.
2. Extract this archive and copy its four source files into your existing project directory, replacing the corresponding files. Keep your original `images/` directory in place.
3. Open your site locally, preferably with a local development server (such as VS Code's Live Server), and confirm that all actual covers and the background load.
4. Test completed-book checkboxes, reading-order switching, spoiler warnings, search, and mobile layout using your own saved reading progress.
5. Only after you approve the local result, review the Git diff, commit to the intended branch, push, and verify the actual GitHub Pages deployment.

The existing reading progress storage key is **`fantasyworldguide_cosmere_progress`**. **Do not rename it.** Saved progress generally remains available when you replace the files **on the same website origin**. Note that `localhost`, `file://`, and GitHub Pages use different storage locations; changing origins does not automatically transfer data.

## Security and privacy

This is a client-side static website. Reading progress is stored using `localStorage` in the visitor's browser and is not sent to a server by this code. Clearing browser site data, changing browser/profile/device, or moving to a different origin can reset or separate the visible progress.

## Unofficial project

Cosmere Worldhopper is an independent, unofficial fan-made companion and is not affiliated with or endorsed by Brandon Sanderson or his publishers. Please review rights and permissions for any third-party cover artwork or other assets before publishing them.
