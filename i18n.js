// Übersetzungen und Sprachumschaltung (DE / NL / FR) für alle Seiten.
// Neuer Text: data-i18n="schluessel" am HTML-Element setzen und den
// Schlüssel hier in allen drei Sprachen eintragen.
const TRANSLATIONS = {
    de: {
        home: "Home",
        about: "Über mich",
        gallery: "Galerie",
        heroTitle: "Entdecken Sie die Kunst der Kreativität",
        heroText: "Entdecken Sie meine Sammlung von Kunstwerken, die Realismus mit abstrakten Elementen vereinen.",
        contact: "Kontakt",
        unavailable: "Nicht mehr erhältlich",
        aboutTitle: "Über mich",
        aboutHeading: "Meine künstlerische Reise",
        aboutP1: "In meiner Freizeit beschäftige ich mich mit verschiedenen Formen der kreativen Malerei. Für mich ist die Kunst ein Handwerk, ich finde große Freude darin, meine Kreativität durch unterschiedliche künstlerische Techniken auszudrücken.",
        aboutP2: "Ich lege viel Wert auf die handwerklichen Aspekte meiner Arbeit und genieße den kreativen Prozess. Besonders inspiriert mich die Natur, deren Schönheit und Vielfalt ich in meinen Werken festhalten möchte. Ich bin stets auf der Suche nach neuen Techniken und Ideen, um meinen künstlerischen Ausdruck weiterzuentwickeln.",
        aboutP3: "Vielen Dank, dass Sie meine Website besuchen. Ich hoffe, Sie haben genauso viel Freude daran, meine Werke zu entdecken, wie ich sie beim Erschaffen habe."
    },
    nl: {
        home: "Home",
        about: "Over mij",
        gallery: "Galerij",
        heroTitle: "Ontdek de kunst van creativiteit",
        heroText: "Ontdek mijn collectie kunstwerken die realisme met abstracte elementen verenigen.",
        contact: "Contact",
        unavailable: "Niet meer verkrijgbaar",
        aboutTitle: "Over mij",
        aboutHeading: "Mijn artistieke reis",
        aboutP1: "In mijn vrije tijd houd ik me bezig met verschillende vormen van creatief schilderen. Voor mij is kunst een ambacht; ik vind er veel plezier in om mijn creativiteit via uiteenlopende artistieke technieken uit te drukken.",
        aboutP2: "Ik hecht veel waarde aan de ambachtelijke aspecten van mijn werk en geniet van het creatieve proces. Vooral de natuur inspireert mij; haar schoonheid en verscheidenheid wil ik in mijn werken vastleggen. Ik ben altijd op zoek naar nieuwe technieken en ideeën om mijn artistieke expressie verder te ontwikkelen.",
        aboutP3: "Hartelijk dank voor uw bezoek aan mijn website. Ik hoop dat u net zoveel plezier beleeft aan het ontdekken van mijn werken als ik aan het maken ervan."
    },
    fr: {
        home: "Accueil",
        about: "À propos",
        gallery: "Galerie",
        heroTitle: "Découvrez l'art de la créativité",
        heroText: "Découvrez ma collection d'œuvres d'art qui allient réalisme et éléments abstraits.",
        contact: "Contact",
        unavailable: "Plus disponible",
        aboutTitle: "À propos de moi",
        aboutHeading: "Mon parcours artistique",
        aboutP1: "Pendant mon temps libre, je me consacre à différentes formes de peinture créative. Pour moi, l'art est un artisanat ; je prends grand plaisir à exprimer ma créativité à travers diverses techniques artistiques.",
        aboutP2: "J'attache beaucoup d'importance aux aspects artisanaux de mon travail et j'apprécie le processus créatif. La nature m'inspire particulièrement ; je souhaite capturer sa beauté et sa diversité dans mes œuvres. Je suis toujours à la recherche de nouvelles techniques et idées pour développer mon expression artistique.",
        aboutP3: "Merci beaucoup de visiter mon site. J'espère que vous prendrez autant de plaisir à découvrir mes œuvres que j'en ai eu à les créer."
    },
    en: {
        home: "Home",
        about: "About",
        gallery: "Gallery",
        heroTitle: "Discover the Art of Creativity",
        heroText: "Discover my collection of artworks that combine realism with abstract elements.",
        contact: "Contact",
        unavailable: "No longer available",
        aboutTitle: "About Me",
        aboutHeading: "My Artistic Journey",
        aboutP1: "In my free time, I engage in various forms of creative painting. For me, art is a craft; I take great joy in expressing my creativity through a variety of artistic techniques.",
        aboutP2: "I attach great importance to the craftsmanship of my work and enjoy the creative process. I am particularly inspired by nature, whose beauty and diversity I aim to capture in my works. I am always looking for new techniques and ideas to further develop my artistic expression.",
        aboutP3: "Thank you very much for visiting my website. I hope you enjoy discovering my works as much as I enjoyed creating them."
    }
};

const DEFAULT_LANG = "de";

function currentLang() {
    let saved = null;
    try { saved = localStorage.getItem("lang"); } catch (e) {}
    return TRANSLATIONS[saved] ? saved : DEFAULT_LANG;
}

function t(key) {
    const lang = currentLang();
    return TRANSLATIONS[lang][key] || TRANSLATIONS[DEFAULT_LANG][key] || "";
}

function applyLanguage(lang) {
    if (!TRANSLATIONS[lang]) lang = DEFAULT_LANG;
    try { localStorage.setItem("lang", lang); } catch (e) {}
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(el => {
        const text = TRANSLATIONS[lang][el.dataset.i18n];
        if (text) el.textContent = text;
    });

    document.querySelectorAll(".lang-switch button").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.lang === lang);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".lang-switch button").forEach(btn => {
        btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
    });
    applyLanguage(currentLang());
});
