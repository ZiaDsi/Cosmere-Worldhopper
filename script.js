/* =========================================================
   COSMERE WORLDHOPPER — INTERFACE
   Book metadata, reading orders and descriptions: books.js
   ========================================================= */

"use strict";


/* ==========================================
   COSMERE WORLDHOPPER — LANGUAGE SYSTEM
   ========================================== */

// Load the visitor's saved language.
// English is the default.
function getSavedCosmereLanguage() {
    try {
        return localStorage.getItem(COSMERE_LANGUAGE_KEY) === "ar"
            ? "ar"
            : "en";
    } catch (error) {
        return "en";
    }
}

let currentCosmereLanguage = getSavedCosmereLanguage();

// Get a translation using a key such as "nav.discover".
// Fall back to English if a translation is missing.
function translateCosmereText(key, variables = {}) {
    const parts = key.split(".");

    function lookup(language) {
        return parts.reduce(
            (value, part) => value?.[part],
            COSMERE_TRANSLATIONS[language]
        );
    }

    const template = lookup(currentCosmereLanguage) ?? lookup("en") ?? key;
    // All translations are assigned with textContent, never interpreted as HTML.
    return String(template).replace(/\{(\w+)\}/g,
        (match, name) => Object.hasOwn(variables, name) ? String(variables[name]) : match);
}

// These are presentation labels only: IDs, series filters, and book titles stay original.
function localizeCosmereSeries(series) {
    return translateCosmereText(`series.${series}`);
}

function localizeCosmereWorkType(type) {
    return translateCosmereText(`types.${type}`);
}

function localizeCosmereDescription(bookId) {
    if (currentCosmereLanguage === "ar") {
        return COSMERE_ARABIC_DESCRIPTIONS[bookId] ?? getCosmereDescription(bookId);
    }
    return getCosmereDescription(bookId);
}

function localizeCosmereBookFacts(book, position = null, total = null) {
    const facts = [
        translateCosmereText("details.author"),
        translateCosmereText("details.series", { series: localizeCosmereSeries(book.series) }),
        translateCosmereText("details.workType", { type: localizeCosmereWorkType(book.type) }),
        translateCosmereText("details.year", { year: book.year })
    ];
    if (Number.isInteger(position) && Number.isInteger(total)) {
        facts.push(translateCosmereText("details.position", { position, total }));
    }
    return facts;
}

// Apply the selected language to the website.

function applyCosmereLanguage() {
    const isArabic = currentCosmereLanguage === "ar";
    document.documentElement.lang = isArabic ? "ar" : "en";
    document.documentElement.dir = isArabic ? "rtl" : "ltr";

    // Preserve the website name and all book titles in English.
    document.title = translateCosmereText("attrs.siteTitle");
    const description = document.querySelector('meta[name="description"]');
    if (description) description.content = translateCosmereText("attrs.siteDescription");

    document.querySelectorAll("[data-i18n]").forEach(element => {
        element.textContent = translateCosmereText(element.dataset.i18n);
    });
    document.querySelectorAll("[data-i18n-aria-label]").forEach(element => {
        element.setAttribute("aria-label", translateCosmereText(element.dataset.i18nAriaLabel));
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
        element.setAttribute("placeholder", translateCosmereText(element.dataset.i18nPlaceholder));
    });

    document.querySelectorAll(".languageCircle").forEach(button => {
        const isSelected = button.dataset.language === currentCosmereLanguage;
        button.setAttribute("aria-pressed", String(isSelected));
    });

    // Update content that script.js generated earlier, without closing open
    // detail panels or revealing any protected descriptions.
    refreshLocalizedCosmereContent();
}

// Change the language and remember the choice.
function setCosmereLanguage(language) {
    currentCosmereLanguage = language === "ar" ? "ar" : "en";

    try {
        localStorage.setItem(
            COSMERE_LANGUAGE_KEY,
            currentCosmereLanguage
        );
    } catch (error) {
        console.warn("Language preference could not be saved:", error);
    }

    applyCosmereLanguage();
}

const MAIN_PAGES = [
    "mainMenu",
    "introduction",
    "cosmereExplorer",
    "creditsPage"
];

const COSMERE_PAGES = [
    "cosmereMenu", "mistbornPage", "stormlightPage",
    "standalonePage", "secretProjectsPage", "cosmereGuidePage"
];

// Keep this key unchanged so existing readers retain their progress.
const COSMERE_PROGRESS_KEY = "fantasyworldguide_cosmere_progress";

// These definitions are shared by gallery rendering AND subcategory progress.
// A series may be a single name or an array, with an optional book type.
const COSMERE_SECTIONS = {
    mistbornPage: [
        {
            galleryId: "mistbornEra1Gallery", progressBarId: "mistbornEra1ProgressBar",
            progressTextId: "mistbornEra1ProgressText", series: ["Mistborn Era 1"]
        },
        {
            galleryId: "mistbornEra2Gallery", progressBarId: "mistbornEra2ProgressBar",
            progressTextId: "mistbornEra2ProgressText", series: ["Mistborn Era 2"]
        },
        {
            galleryId: "mistbornRelatedGallery", progressBarId: "mistbornRelatedProgressBar",
            progressTextId: "mistbornRelatedProgressText", series: ["Mistborn Companion"]
        }
    ],
    stormlightPage: [
        {
            galleryId: "stormlightNovelsGallery", progressBarId: "stormlightNovelsProgressBar",
            progressTextId: "stormlightNovelsProgressText", series: ["The Stormlight Archive"], type: "Novel"
        },
        {
            galleryId: "stormlightNovellasGallery", progressBarId: "stormlightNovellasProgressBar",
            progressTextId: "stormlightNovellasProgressText", series: ["The Stormlight Archive"], type: "Novella"
        }
    ],
    standalonePage: [
        {
            galleryId: "standaloneNovelsGallery", progressBarId: "standaloneNovelsProgressBar",
            progressTextId: "standaloneNovelsProgressText", series: ["Elantris", "Standalone"], type: "Novel"
        },
        {
            galleryId: "standaloneOtherGallery", progressBarId: "standaloneOtherProgressBar",
            progressTextId: "standaloneOtherProgressText",
            series: ["Sel Standalone", "White Sand", "Threnody Standalone"]
        }
    ],
    secretProjectsPage: [
        { galleryId: "secretProjectsGallery", series: ["Cosmere Secret Projects"] }
    ]
};

const COSMERE_SUMMARIES = [
    {
        pageId: "cosmereGuidePage", barId: "cosmereProgressBar", textId: "cosmereProgressText",
        percentageId: "cosmereProgressPercentage", unit: "books"
    },
    {
        pageId: "mistbornPage", barId: "mistbornProgressBar", textId: "mistbornProgressText",
        percentageId: "mistbornProgressPercentage"
    },
    {
        pageId: "stormlightPage", barId: "stormlightProgressBar", textId: "stormlightProgressText",
        percentageId: "stormlightProgressPercentage"
    },
    {
        pageId: "standalonePage", barId: "standaloneProgressBar", textId: "standaloneProgressText",
        percentageId: "standaloneProgressPercentage"
    },
    {
        pageId: "secretProjectsPage", barId: "secretProjectsProgressBar", textId: "secretProjectsProgressText",
        percentageId: "secretProjectsProgressPercentage"
    }
];

const SEARCH_CATEGORY_NAMES = {
    mistbornPage: "Mistborn Scadrial",
    stormlightPage: "Stormlight Archive Roshar",
    standalonePage: "Standalone Works Other Worlds",
    secretProjectsPage: "Secret Projects"
};

function getSectionBooks(section) {
    return COSMERE_BOOKS.filter(book =>
        section.series.includes(book.series) &&
        (!section.type || book.type === section.type)
    );
}

function getPageBooks(pageId) {
    return (COSMERE_SECTIONS[pageId] || []).flatMap(getSectionBooks);
}

/* -------------------- NAVIGATION -------------------- */

function showOnly(pageIds, selectedId) {
    if (!pageIds.includes(selectedId)) return;

    for (const id of pageIds) {
        const screen = document.getElementById(id);
        if (screen) screen.hidden = id !== selectedId;
    }

    window.scrollTo(0, 0);
    updateBackToTopVisibility();

    // Let keyboard and assistive-technology users know the view changed.
    const heading = document.getElementById(selectedId)?.querySelector("h1");
    if (heading) {
        heading.tabIndex = -1;
        heading.focus({ preventScroll: true });
    }
}

function showPage(pageId) {
    showOnly(MAIN_PAGES, pageId);
}

function goBack() {
    showPage("mainMenu");
}

function showCosmerePage(pageId) {
    showOnly(COSMERE_PAGES, pageId);

    for (const section of COSMERE_SECTIONS[pageId] || []) {
        renderCosmereGallery(section.galleryId, getSectionBooks(section));
    }

    refreshAllProgress();
}

function openCosmere() {
    showPage("cosmereExplorer");
    showCosmerePage("cosmereMenu");
}

function backToCosmereMenu() {
    showCosmerePage("cosmereMenu");
}

function openCosmereGuide() {
    showPage("cosmereExplorer");
    showCosmerePage("cosmereGuidePage");
    renderCosmereReadingOrder("suggested");
}

/* -------------------- PERSISTENT PROGRESS -------------------- */

function getCompletedCosmereBooks() {
    try {
        const saved = localStorage.getItem(COSMERE_PROGRESS_KEY);
        if (!saved) return new Set();
        const ids = JSON.parse(saved);
        if (!Array.isArray(ids)) return new Set();

        const validIds = new Set(COSMERE_BOOKS.map(book => book.id));
        return new Set(ids.filter(id => validIds.has(id)));
    } catch (error) {
        console.warn("Could not load reading progress:", error);
        return new Set();
    }
}

function saveCompletedCosmereBooks(completedIds) {
    try {
        localStorage.setItem(COSMERE_PROGRESS_KEY, JSON.stringify([...completedIds]));
        return true;
    } catch (error) {
        console.warn("Could not save reading progress:", error);
        return false;
    }
}

function calculateProgress(books, completedIds) {
    const total = books.length;
    const completed = books.filter(book => completedIds.has(book.id)).length;
    return { total, completed, percentage: total ? Math.round(completed / total * 100) : 0 };
}

function updateProgressPanel(barId, textId, books, completedIds, options = {}) {
    const bar = document.getElementById(barId);
    const text = document.getElementById(textId);
    if (!bar || !text) return;

    const progress = calculateProgress(books, completedIds);
    bar.max = progress.total || 1;
    bar.value = progress.completed;
    const unit = options.unit === "books" ? "books" : "works";
    text.textContent = translateCosmereText(`progress.${unit}`, {
        completed: progress.completed,
        total: progress.total
    }) + (options.showPercent
        ? translateCosmereText("progress.percentage", { percentage: progress.percentage })
        : "");

    if (options.percentageId) {
        const percentage = document.getElementById(options.percentageId);
        if (percentage) percentage.textContent = `${progress.percentage}%`;
    }
}

function refreshAllProgress() {
    const completedIds = getCompletedCosmereBooks();

    for (const summary of COSMERE_SUMMARIES) {
        const books = summary.pageId === "cosmereGuidePage"
            ? COSMERE_BOOKS : getPageBooks(summary.pageId);

        updateProgressPanel(summary.barId, summary.textId, books, completedIds, {
            percentageId: summary.percentageId,
            unit: summary.unit
        });
    }

    // Update the homepage's overall reading progress.
    // Uses the same saved data as every other progress panel.
    updateProgressPanel(
        "homeCosmereProgressBar",
        "homeCosmereProgressText",
        COSMERE_BOOKS,
        completedIds,
        {
            percentageId: "homeCosmereProgressPercentage",
            unit: "works"
        }
    );

    for (const sections of Object.values(COSMERE_SECTIONS)) {
        for (const section of sections) {
            if (!section.progressBarId) continue;
            updateProgressPanel(section.progressBarId, section.progressTextId,
                getSectionBooks(section), completedIds, { showPercent: true });
        }
    }
}

function refreshCompletionLabel(checkbox) {
    const label = checkbox.closest(".cosmereCompletionLabel");
    if (!label) return;

    label.classList.toggle("isCompleted", checkbox.checked);
    const text = label.querySelector("span");
    if (text) text.textContent = translateCosmereText(
        checkbox.checked ? "details.completed" : "details.read");
    checkbox.setAttribute("aria-label", translateCosmereText(
        checkbox.checked ? "details.markUnreadAria" : "details.markReadAria",
        { title: checkbox.dataset.bookTitle }));
}

function syncVisibleCompletionControls() {
    const completedIds = getCompletedCosmereBooks();
    document.querySelectorAll(".cosmereCompletionCheckbox[data-book-id]").forEach(checkbox => {
        checkbox.checked = completedIds.has(checkbox.dataset.bookId);
        refreshCompletionLabel(checkbox);
    });
}

function createCompletionControl(book, completedIds) {
    const label = document.createElement("label");
    label.className = "cosmereCompletionLabel";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "cosmereCompletionCheckbox";
    checkbox.dataset.bookId = book.id;
    checkbox.dataset.bookTitle = book.title;
    checkbox.checked = completedIds.has(book.id);

    const text = document.createElement("span");
    label.append(checkbox, text);
    refreshCompletionLabel(checkbox);

    checkbox.addEventListener("change", () => {
        // Always read current data; gallery and reading-order controls stay in sync.
        const updated = getCompletedCosmereBooks();
        if (checkbox.checked) updated.add(book.id);
        else updated.delete(book.id);

        if (!saveCompletedCosmereBooks(updated)) {
            checkbox.checked = !checkbox.checked;
            refreshCompletionLabel(checkbox);
            window.alert(translateCosmereText("details.readError"));
            return;
        }

        syncVisibleCompletionControls();
        refreshAllProgress();
    });

    return label;
}

window.addEventListener("storage", event => {
    if (event.key === COSMERE_PROGRESS_KEY || event.key === null) {
        syncVisibleCompletionControls();
        refreshAllProgress();
    }
    if (event.key === COSMERE_LANGUAGE_KEY || event.key === null) {
        currentCosmereLanguage = getSavedCosmereLanguage();
        applyCosmereLanguage();
    }
});

/* -------------------- SHARED BOOK DETAILS -------------------- */

function resetCosmereSpoiler(panel) {
    const spoilerText = panel?.querySelector(".cosmereSpoilerText");
    if (!spoilerText) return;

    spoilerText.textContent = "";
    spoilerText.hidden = true;
    panel.querySelector(".cosmereSpoilerMask").hidden = false;

    const button = panel.querySelector(".cosmereSpoilerToggle");
    button.textContent = translateCosmereText("details.revealDescription");
    button.setAttribute("aria-expanded", "false");
}

function createBookDetailsPanel(book, position = null, total = null, scope = "reading-guide") {
    const panel = document.createElement("div");
    panel.className = "cosmereDetailsPanel";
    panel.id = `cosmere-details-${scope}-${book.id}`;
    panel.dataset.bookId = book.id;
    if (Number.isInteger(position) && Number.isInteger(total)) {
        panel.dataset.position = String(position);
        panel.dataset.total = String(total);
    }
    panel.hidden = true;

    const heading = document.createElement("h3");
    heading.textContent = book.title;
    heading.dir = "ltr";
    heading.lang = "en";
    panel.appendChild(heading);

    const facts = localizeCosmereBookFacts(book, position, total);
    for (const fact of facts) {
        const paragraph = document.createElement("p");
        paragraph.className = "cosmereBookFact";
        paragraph.textContent = fact;
        panel.appendChild(paragraph);
    }

    const prerequisites = getCosmereSpoilerPrerequisites(book.id);
    if (!prerequisites.length) {
        const title = document.createElement("h4");
        title.className = "cosmereSpoilerFreeHeading";
        title.textContent = translateCosmereText("details.overview");
        const overview = document.createElement("p");
        overview.className = "cosmereBookOverview";
        overview.textContent = localizeCosmereDescription(book.id);
        panel.append(title, overview);
        return panel;
    }

    const spoilerSection = document.createElement("section");
    spoilerSection.className = "cosmereSpoilerSection";

    const warningHeading = document.createElement("h4");
    warningHeading.textContent = translateCosmereText("details.spoilerHeading");

    const warning = document.createElement("p");
    warning.className = "cosmereSpoilerWarning";
    const warnedBooks = prerequisites.map(id => findCosmereBook(id)?.title || id)
        .join(currentCosmereLanguage === "ar" ? "، " : ", ");
    warning.textContent = translateCosmereText("details.spoilerText", { titles: warnedBooks });

    // Protected descriptions are only inserted into the DOM after explicit consent.
    const mask = document.createElement("div");
    mask.className = "cosmereSpoilerMask";
    mask.setAttribute("aria-hidden", "true");

    const spoilerText = document.createElement("p");
    spoilerText.className = "cosmereBookOverview cosmereSpoilerText";
    spoilerText.id = `cosmere-spoiler-${scope}-${book.id}`;
    spoilerText.hidden = true;

    const button = document.createElement("button");
    button.type = "button";
    button.className = "cosmereSpoilerToggle";
    button.textContent = translateCosmereText("details.revealDescription");
    button.setAttribute("aria-controls", spoilerText.id);
    button.setAttribute("aria-expanded", "false");

    button.addEventListener("click", () => {
        const revealed = button.getAttribute("aria-expanded") === "true";
        if (revealed) {
            resetCosmereSpoiler(panel);
        } else {
            spoilerText.textContent = localizeCosmereDescription(book.id);
            spoilerText.hidden = false;
            mask.hidden = true;
            button.textContent = translateCosmereText("details.hideDescription");
            button.setAttribute("aria-expanded", "true");
        }
    });

    spoilerSection.append(warningHeading, warning, mask, spoilerText, button);
    panel.appendChild(spoilerSection);
    return panel;
}

function createDetailsButton(book, controlledId) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "cosmereDetailsToggle";
    button.dataset.bookTitle = book.title;
    button.setAttribute("aria-controls", controlledId);
    setDetailsButtonState(button, book.title, false);
    return button;
}

function setDetailsButtonState(button, title, expanded) {
    const action = translateCosmereText(expanded ? "details.hideDetails" : "details.viewDetails");
    button.textContent = action;
    button.setAttribute("aria-label", translateCosmereText("details.detailsAria", {
        action, title
    }));
    button.setAttribute("aria-expanded", String(expanded));
}

function createBookCover(book, compact = false) {
    const container = document.createElement("div");
    container.className = compact ? "cosmereReadingCover" : "cosmereGalleryCover";

    if (book.cover) {
        const image = document.createElement("img");
        image.src = book.cover;
        image.alt = translateCosmereText("details.coverAlt", { title: book.title });
        image.loading = "lazy";
        image.decoding = "async";
        container.appendChild(image);
    } else {
        container.classList.add(compact
            ? "cosmereReadingCoverPlaceholder" : "cosmereGalleryCoverPlaceholder");
        container.textContent = translateCosmereText("details.coverSoon");
        container.setAttribute("aria-hidden", "true");
    }
    return container;
}

/* -------------------- BOOK GALLERIES -------------------- */

function renderCosmereGallery(containerId, books) {
    const gallery = document.getElementById(containerId);
    if (!gallery) return;

    const completedIds = getCompletedCosmereBooks();
    gallery.replaceChildren();

    // One detail panel, beneath the entire gallery, is used at a time.
    const hostId = `${containerId}-details-host`;
    let detailsHost = document.getElementById(hostId);
    if (!detailsHost) {
        detailsHost = document.createElement("div");
        detailsHost.id = hostId;
        detailsHost.className = "cosmereGalleryDetailsHost";
        gallery.insertAdjacentElement("afterend", detailsHost);
    }
    detailsHost.replaceChildren();
    detailsHost.hidden = true;

    let activeButton = null;
    let activePanel = null;
    let activeTitle = "";

    for (const book of books) {
        const card = document.createElement("article");
        card.className = "cosmereGalleryCard";
        card.dataset.bookId = book.id;
        const cover = createBookCover(book);

        const title = document.createElement("h3");
        title.textContent = book.title;
        title.dir = "ltr";
        title.lang = "en";
        const metadata = document.createElement("p");
        metadata.className = "cosmereGalleryMeta";
        metadata.textContent = `${localizeCosmereWorkType(book.type)} • ${book.year}`;

        const detailsButton = createDetailsButton(book, hostId);
        detailsButton.addEventListener("click", () => {
            const isClosing = activeButton === detailsButton;
            resetCosmereSpoiler(activePanel);
            if (activeButton) setDetailsButtonState(activeButton, activeTitle, false);
            detailsHost.replaceChildren();
            detailsHost.hidden = true;
            activeButton = activePanel = null;
            activeTitle = "";
            if (isClosing) return;

            const panel = createBookDetailsPanel(book, null, null, containerId);
            panel.hidden = false;

            // Place details immediately after the selected book on mobile.
            // Keep the original position below the gallery on desktop.
            if (window.matchMedia("(max-width: 768px)").matches) {
                card.insertAdjacentElement("afterend", detailsHost);
            } else {
                gallery.insertAdjacentElement("afterend", detailsHost);
            }

            detailsHost.appendChild(panel);
            detailsHost.hidden = false;
            setDetailsButtonState(detailsButton, book.title, true);

            activeButton = detailsButton;
            activePanel = panel;
            activeTitle = book.title;
        });

        const actions = document.createElement("div");
        actions.className = "cosmereGalleryActions";
        actions.append(createCompletionControl(book, completedIds), detailsButton);
        card.append(cover, title, metadata, actions);
        gallery.appendChild(card);
    }
}

/* -------------------- READING ORDER AND SEARCH -------------------- */

let currentReadingOrder = "suggested";

function renderCosmereReadingOrder(orderType = currentReadingOrder) {
    const readingList = document.getElementById("cosmereReadingList");
    if (!readingList) return;

    currentReadingOrder = orderType === "publication" ? "publication" : "suggested";
    const books = getCosmereReadingOrder(currentReadingOrder);
    const completedIds = getCompletedCosmereBooks();
    readingList.replaceChildren();

    let openPanel = null;
    let openButton = null;
    let openTitle = "";

    books.forEach((book, index) => {
        const item = document.createElement("li");
        item.className = "cosmereReadingItem";
        item.dataset.bookId = book.id;

        const position = document.createElement("span");
        position.className = "cosmereReadingNumber";
        position.textContent = String(index + 1);
        position.setAttribute("aria-label", translateCosmereText("details.readingNumber", {
            position: index + 1
        }));
        const cover = createBookCover(book, true);

        const details = document.createElement("div");
        details.className = "cosmereReadingDetails";
        const title = document.createElement("span");
        title.className = "cosmereReadingTitle";
        title.textContent = book.title;
        title.dir = "ltr";
        title.lang = "en";
        const metadata = document.createElement("span");
        metadata.className = "cosmereReadingMeta";
        metadata.textContent = `${localizeCosmereSeries(book.series)} • ${localizeCosmereWorkType(book.type)} • ${book.year}`;

        const panel = createBookDetailsPanel(book, index + 1, books.length);
        const toggle = createDetailsButton(book, panel.id);
        toggle.addEventListener("click", () => {
            const alreadyOpen = !panel.hidden;
            if (openPanel) {
                resetCosmereSpoiler(openPanel);
                openPanel.hidden = true;
                setDetailsButtonState(openButton, openTitle, false);
            }
            openPanel = openButton = null;
            openTitle = "";
            if (alreadyOpen) return;

            panel.hidden = false;
            setDetailsButtonState(toggle, book.title, true);
            openPanel = panel;
            openButton = toggle;
            openTitle = book.title;
        });

        const actions = document.createElement("div");
        actions.className = "cosmereReadingActions";
        actions.append(createCompletionControl(book, completedIds), toggle);
        details.append(title, metadata, actions);
        item.append(position, cover, details, panel);

        const categories = Object.entries(COSMERE_SECTIONS)
            .filter(([, sections]) => sections.some(s =>
                s.series.includes(book.series) && (!s.type || s.type === book.type)))
            .map(([pageId]) => SEARCH_CATEGORY_NAMES[pageId]);
        // Search remains useful in both languages, while spoiler descriptions
        // stay completely outside the search index.
        const arabicCategories = Object.entries(COSMERE_SECTIONS)
            .filter(([, sections]) => sections.some(s =>
                s.series.includes(book.series) && (!s.type || s.type === book.type)))
            .map(([pageId]) => COSMERE_TRANSLATIONS.ar.searchCategories[pageId]);
        item.dataset.search = [
            book.title, book.series, book.type, book.year, ...categories,
            COSMERE_TRANSLATIONS.ar.series[book.series] || "",
            COSMERE_TRANSLATIONS.ar.types[book.type] || "",
            ...arabicCategories
        ].join(" ").toLocaleLowerCase();
        readingList.appendChild(item);
    });

    document.getElementById("suggestedOrderButton")
        ?.setAttribute("aria-pressed", String(currentReadingOrder === "suggested"));
    document.getElementById("publicationOrderButton")
        ?.setAttribute("aria-pressed", String(currentReadingOrder === "publication"));

    filterCosmereReadingOrder();
    refreshAllProgress();
}

function filterCosmereReadingOrder() {
    const input = document.getElementById("cosmereBookSearch");
    const status = document.getElementById("cosmereSearchStatus");
    const clearButton = document.getElementById("clearCosmereBookSearch");
    if (!input) return;

    const term = input.value.trim().replace(/\s+/g, " ").toLocaleLowerCase();
    const items = document.querySelectorAll("#cosmereReadingList .cosmereReadingItem");
    let matches = 0;

    for (const item of items) {
        const matched = item.dataset.search.includes(term);
        item.hidden = !matched;
        if (matched) matches++;
    }

    if (status) {
        status.textContent = !term
            ? translateCosmereText("search.showAll", { total: items.length })
            : matches === 0
                ? translateCosmereText("search.none")
                : translateCosmereText("search.showCount", {
                    matches, total: items.length
                });
        status.dataset.empty = String(Boolean(term) && matches === 0);
        status.hidden = false;
    }
    if (clearButton) clearButton.hidden = !input.value;
}


/* -------------------- TRANSLATE ALREADY RENDERED CONTROLS -------------------- */

function refreshLocalizedCosmereContent() {
    refreshAllProgress();
    syncVisibleCompletionControls();

    document.querySelectorAll(".cosmereGalleryCard[data-book-id]").forEach(card => {
        const book = findCosmereBook(card.dataset.bookId);
        const metadata = card.querySelector(".cosmereGalleryMeta");
        if (book && metadata) {
            metadata.textContent = `${localizeCosmereWorkType(book.type)} • ${book.year}`;
        }
    });

    document.querySelectorAll(".cosmereReadingItem[data-book-id]").forEach(item => {
        const book = findCosmereBook(item.dataset.bookId);
        if (!book) return;
        const metadata = item.querySelector(".cosmereReadingMeta");
        if (metadata) {
            metadata.textContent = `${localizeCosmereSeries(book.series)} • ${localizeCosmereWorkType(book.type)} • ${book.year}`;
        }
        const number = item.querySelector(".cosmereReadingNumber");
        if (number) number.setAttribute("aria-label", translateCosmereText("details.readingNumber", {
            position: number.textContent
        }));
    });

    document.querySelectorAll(".cosmereDetailsPanel[data-book-id]").forEach(panel => {
        const book = findCosmereBook(panel.dataset.bookId);
        if (!book) return;
        const position = panel.dataset.position ? Number(panel.dataset.position) : null;
        const total = panel.dataset.total ? Number(panel.dataset.total) : null;
        const facts = localizeCosmereBookFacts(book, position, total);
        panel.querySelectorAll(".cosmereBookFact").forEach((fact, index) => {
            if (facts[index]) fact.textContent = facts[index];
        });

        const spoilerFree = panel.querySelector(".cosmereSpoilerFreeHeading");
        if (spoilerFree) spoilerFree.textContent = translateCosmereText("details.overview");
        const warningHeading = panel.querySelector(".cosmereSpoilerSection h4");
        if (warningHeading) warningHeading.textContent = translateCosmereText("details.spoilerHeading");
        const warning = panel.querySelector(".cosmereSpoilerWarning");
        if (warning) {
            const titles = getCosmereSpoilerPrerequisites(book.id)
                .map(id => findCosmereBook(id)?.title || id)
                .join(currentCosmereLanguage === "ar" ? "، " : ", ");
            warning.textContent = translateCosmereText("details.spoilerText", { titles });
        }

        // Never insert protected text into a concealed spoiler panel.
        const overview = panel.querySelector(".cosmereBookOverview");
        if (overview && !overview.hidden) {
            overview.textContent = localizeCosmereDescription(book.id);
        }
        const spoilerToggle = panel.querySelector(".cosmereSpoilerToggle");
        if (spoilerToggle) {
            const expanded = spoilerToggle.getAttribute("aria-expanded") === "true";
            spoilerToggle.textContent = translateCosmereText(expanded
                ? "details.hideDescription" : "details.revealDescription");
        }
    });

    document.querySelectorAll(".cosmereDetailsToggle[data-book-title]").forEach(button => {
        setDetailsButtonState(button, button.dataset.bookTitle,
            button.getAttribute("aria-expanded") === "true");
    });
    document.querySelectorAll(".cosmereReadingCover img, .cosmereGalleryCover img").forEach(image => {
        const book = COSMERE_BOOKS.find(entry => entry.cover === image.getAttribute("src"));
        if (book) image.alt = translateCosmereText("details.coverAlt", { title: book.title });
    });
    document.querySelectorAll(".cosmereReadingCoverPlaceholder, .cosmereGalleryCoverPlaceholder").forEach(element => {
        element.textContent = translateCosmereText("details.coverSoon");
    });

    if (document.querySelector("#cosmereReadingList .cosmereReadingItem")) {
        filterCosmereReadingOrder();
    }
    backToTopButton.setAttribute("aria-label", translateCosmereText("details.top"));
    backToTopButton.title = translateCosmereText("details.top");
}

const cosmereBookSearch = document.getElementById("cosmereBookSearch");
if (cosmereBookSearch) {
    cosmereBookSearch.addEventListener("input", filterCosmereReadingOrder);
    document.getElementById("clearCosmereBookSearch")?.addEventListener("click", () => {
        cosmereBookSearch.value = "";
        filterCosmereReadingOrder();
        cosmereBookSearch.focus();
    });
}

/* -------------------- FLOATING BACK-TO-TOP -------------------- */

const backToTopButton = document.createElement("button");
backToTopButton.id = "backToTopButton";
backToTopButton.type = "button";

backToTopButton.innerHTML = `
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true">
        <path d="M12 19V5"></path>
        <path d="m5 12 7-7 7 7"></path>
    </svg>
`;

backToTopButton.setAttribute("aria-label", translateCosmereText("details.top"));
backToTopButton.title = translateCosmereText("details.top");
backToTopButton.hidden = true;
document.body.appendChild(backToTopButton);

function updateBackToTopVisibility() {
    const explorer = document.getElementById("cosmereExplorer");
    backToTopButton.hidden = window.scrollY < 450 || !explorer || explorer.hidden;
}

backToTopButton.addEventListener("click", () => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
});
window.addEventListener("scroll", updateBackToTopVisibility, { passive: true });

// Establish the saved language only after all dynamic controls are initialized.
// This also populates every progress meter in the visitor's language.
applyCosmereLanguage();
