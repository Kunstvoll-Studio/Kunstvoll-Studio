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
        backToTop: "Nach oben",
        prevImage: "Vorheriges Bild",
        nextImage: "Nächstes Bild",
        closeImage: "Schließen",
        aboutTitle: "Über mich",
        aboutHeading: "Meine künstlerische Reise",
        aboutP1: "Kunst ist für mich weit mehr als kreativer Ausdruck, ein Handwerk, das Leidenschaft, Können und kontinuierliche Weiterentwicklung vereint. Große Freude bereitet es mir, meine Ideen und Emotionen durch unterschiedliche künstlerische Techniken sichtbar zu machen.",
        aboutP2: "Dabei arbeite ich bevorzugt mit dem Spachtel, dessen Vielseitigkeit und Ausdruckskraft meinen Werken eine besondere Struktur und Tiefe verleihen. Die handwerklichen Aspekte meiner Arbeit sind für mich von großer Bedeutung, ebenso wie der kreative Prozess selbst, vom ersten Impuls bis zur Vollendung eines Werkes.",
        aboutP3: "Eine meiner wichtigsten Inspirationsquellen ist die Natur. Ihre Schönheit, Vielfalt und ständige Veränderung spiegeln sich in vielen meiner Arbeiten wieder. Gleichzeitig bin ich stets auf der Suche nach neuen Techniken, Materialien und Ideen, um meinen künstlerischen Ausdruck weiterzuentwickeln und neue Perspektiven zu eröffnen.",
        aboutP4: "Jedes Werk ist ein Unikat, geschaffen um Farbe und Lebendigkeit in Ihre Räumlichkeiten zu bringen. Entdecken Sie die faszinierende Struktur meiner Werke, die durch das Zusammenspiel zahlreicher Schichten entsteht. Gefertigt aus hochwertigen Materialien, signiert und fertig zum Aufhängen.",
        aboutP5: "Vielen Dank für Ihren Besuch auf meiner Website. Ich wünsche Ihnen viel Freude beim Entdecken meiner Werke und hoffe, dass sie Sie ebenso inspirieren und berühren, wie mich ihre Entstehung begeistert hat."
    },
    nl: {
        home: "Home",
        about: "Over mij",
        gallery: "Galerij",
        heroTitle: "Ontdek de kunst van creativiteit",
        heroText: "Ontdek mijn collectie kunstwerken die realisme met abstracte elementen verenigen.",
        contact: "Contact",
        unavailable: "Niet meer verkrijgbaar",
        backToTop: "Naar boven",
        prevImage: "Vorige afbeelding",
        nextImage: "Volgende afbeelding",
        closeImage: "Sluiten",
        aboutTitle: "Over mij",
        aboutHeading: "Mijn artistieke reis",
        aboutP1: "Kunst is voor mij veel meer dan creatieve expressie: een ambacht dat passie, vakmanschap en voortdurende ontwikkeling verenigt. Het geeft mij veel vreugde om mijn ideeën en emoties zichtbaar te maken via uiteenlopende artistieke technieken.",
        aboutP2: "Daarbij werk ik bij voorkeur met het paletmes, waarvan de veelzijdigheid en zeggingskracht mijn werken een bijzondere structuur en diepte geven. De ambachtelijke aspecten van mijn werk zijn voor mij van groot belang, net als het creatieve proces zelf – van de eerste impuls tot de voltooiing van een werk.",
        aboutP3: "Een van mijn belangrijkste inspiratiebronnen is de natuur. Haar schoonheid, verscheidenheid en voortdurende verandering weerspiegelen zich in veel van mijn werken. Tegelijkertijd ben ik altijd op zoek naar nieuwe technieken, materialen en ideeën om mijn artistieke expressie verder te ontwikkelen en nieuwe perspectieven te openen.",
        aboutP4: "Elk werk is een unicum, gemaakt om kleur en levendigheid in uw ruimtes te brengen. Ontdek de fascinerende structuur van mijn werken, die ontstaat door het samenspel van talrijke lagen. Vervaardigd uit hoogwaardige materialen, gesigneerd en klaar om op te hangen.",
        aboutP5: "Hartelijk dank voor uw bezoek aan mijn website. Ik wens u veel plezier bij het ontdekken van mijn werken en hoop dat zij u evenzeer inspireren, als hun ontstaan mij heeft geïnspireerd en geboeid."
    },
    fr: {
        home: "Accueil",
        about: "À propos",
        gallery: "Galerie",
        heroTitle: "Découvrez l'art de la créativité",
        heroText: "Découvrez ma collection d'œuvres d'art qui allient réalisme et éléments abstraits.",
        contact: "Contact",
        unavailable: "Plus disponible",
        backToTop: "En haut de page",
        prevImage: "Image précédente",
        nextImage: "Image suivante",
        closeImage: "Fermer",
        aboutTitle: "À propos de moi",
        aboutHeading: "Mon parcours artistique",
        aboutP1: "L'art est pour moi bien plus qu'une expression créative : un artisanat qui unit passion, savoir-faire et perfectionnement continu. Je prends grand plaisir à rendre visibles mes idées et mes émotions à travers diverses techniques artistiques.",
        aboutP2: "Je travaille de préférence au couteau à peindre, dont la polyvalence et la force expressive confèrent à mes œuvres une structure et une profondeur particulières. Les aspects artisanaux de mon travail me tiennent particulièrement à cœur, tout comme le processus créatif lui-même, de la première impulsion à l'achèvement d'une œuvre.",
        aboutP3: "La nature est l'une de mes principales sources d'inspiration. Sa beauté, sa diversité et son évolution permanente se reflètent dans nombre de mes travaux. En même temps, je suis toujours à la recherche de nouvelles techniques, de nouveaux matériaux et de nouvelles idées pour développer mon expression artistique et ouvrir de nouvelles perspectives.",
        aboutP4: "Chaque œuvre est une pièce unique, créée pour apporter couleur et vivacité à vos espaces. Découvrez la structure fascinante de mes œuvres, née de l'interaction de nombreuses couches. Réalisée à partir de matériaux de haute qualité, signée et prête à être accrochée.",
        aboutP5: "Merci beaucoup de votre visite sur mon site. Je vous souhaite beaucoup de plaisir à découvrir mes œuvres et j'espère qu'elles vous inspireront et vous toucheront autant que leur création m'a passionné."
    },
    en: {
        home: "Home",
        about: "About",
        gallery: "Gallery",
        heroTitle: "Discover the Art of Creativity",
        heroText: "Discover my collection of artworks that combine realism with abstract elements.",
        contact: "Contact",
        unavailable: "No longer available",
        backToTop: "Back to top",
        prevImage: "Previous image",
        nextImage: "Next image",
        closeImage: "Close",
        aboutTitle: "About Me",
        aboutHeading: "My Artistic Journey",
        aboutP1: "For me, art is far more than creative expression: it is a craft that unites passion, skill and continuous development. It gives me great joy to make my ideas and emotions visible through a variety of artistic techniques.",
        aboutP2: "I prefer to work with the palette knife, whose versatility and expressive power lend my works a distinctive structure and depth. The craftsmanship of my work is of great importance to me, as is the creative process itself – from the first impulse to the completion of a piece.",
        aboutP3: "Nature is one of my most important sources of inspiration. Its beauty, diversity and constant change are reflected in many of my works. At the same time, I am always searching for new techniques, materials and ideas to further develop my artistic expression and open up new perspectives.",
        aboutP4: "Each work is a unique piece, created to bring colour and vibrancy to your spaces. Discover the fascinating structure of my works, which emerges from the interplay of numerous layers. Made from high-quality materials, signed and ready to hang.",
        aboutP5: "Thank you very much for visiting my website. I wish you great pleasure in discovering my works and hope they inspire and move you just as much as creating them has delighted me."
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

    // Übersetzte aria-Labels, z. B. für die Lightbox-Pfeile
    document.querySelectorAll("[data-i18n-aria]").forEach(el => {
        const text = TRANSLATIONS[lang][el.dataset.i18nAria];
        if (text) el.setAttribute("aria-label", text);
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
