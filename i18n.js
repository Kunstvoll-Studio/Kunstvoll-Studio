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
        aboutP5: "Vielen Dank für Ihren Besuch auf meiner Website.",
        // Über mich: Abschnitt "Ausstellungen, Projekte & mehr"
        moreHeading: "Ausstellungen, Projekte & mehr",
        instagramLabel: "Instagram:",
        permHeading: "Meine Kunst, dauerhaft vor Ort:",
        permDevkTitle: "Deutschland: DEVK – Leichlingen",
        permDevkText: "Seit 2023 sind meine Kunstwerke hier im Rahmen einer wechselnden Ausstellung zu sehen.",
        permBrolTitle: "Belgien: Brolsjiek – Oostende",
        permBrolText1: "Brolsjiek bietet eine vielseitige Auswahl an Kunst und besonderen Dingen, alles mit Liebe handgemacht! ❤️",
        permBrolText2: "Außerdem gibt es abwechslungsreiche Workshops, bei denen ihr selbst kreativ werden könnt.",
        permBrolInsta: "Schaut gerne auch auf Instagram vorbei:",
        tempHeading: "Meine Kunst, auf Zeit zu sehen:",
        tempEnyouLabel: "Leichlingen:",
        tempEnyouText: "während der Kunst- und Klangmeile 2026 in Leichlingen hat mir das Bekleidungsgeschäft Enyou sein Schaufenster zur Verfügung gestellt. Mit viel Liebe zum Detail wurden Kleidung und Accessoires harmonisch auf meine Kunstwerke abgestimmt. So entstand eine wunderschöne Präsentation, die meine Bilder auf ganz besondere Weise zur Geltung brachte.",
        tempFarbraumTitle: "Solingen-Ohligs: Atelier Farbraum",
        tempFarbraumText1: "Das tolle Team Chrissie und Daniela stellt mir für Oktober und November 2026 eines seiner Schaufenster zur Verfügung. Darüber freue ich mich sehr! ❤️",
        tempFarbraumText2: "Im Atelier Farbraum findet ihr viele tolle und vielseitige Möglichkeiten, selbst kreativ zu werden und euch künstlerisch auszuprobieren. Schaut doch einfach mal vorbei, es lohnt sich!",
        juryHeading: "Jurierungen Leichlingen:",
        jury2024: "Teilnahme an der jurierten Jahresausstellung 2024",
        jury2025: "Teilnahme an der jurierten Jahresausstellung 2025",
        projHeading: "Projekte",
        projP1: "Gemeinsam mit meiner Kollegin Angela Graul habe ich im Rahmen der Kunst- und Klangmeile 2026 das Projekt „Kunst von und für Leichlinger*innen“, in Zusammenarbeit mit der Stadt Leichlingen umgesetzt. Leinwände sowie verschiedene Mal- und Gestaltungsmaterialien standen den Teilnehmerinnen und Teilnehmern zur Verfügung und luden dazu ein, kreativ zu experimentieren, neue Techniken auszuprobieren und gemeinsam Kunst entstehen zu lassen.",
        projP2: "Jeder war eingeladen, seine ganz persönliche Spur auf einer der Leinwände zu hinterlassen. Zu unserer großen Freude fühlten sich Menschen aller Altersgruppen angesprochen und verewigten sich mit viel Begeisterung auf den Leinwänden. Aus diesen vielen individuellen Spuren entstand nach und nach ein beeindruckendes Gemeinschaftswerk, das die Vielfalt, Kreativität und den gemeinschaftlichen Gedanken der Menschen in Leichlingen widerspiegelt.",
        projP3: "Dieses besondere Werk haben wir anschließend bei der 37. Jurierten Jahresausstellung der Leichlinger Künstlerinnen und Künstler 2026 eingereicht. Zu unserer Freude wurde das Bild für die Ausstellung ausgewählt!",
        projExhibLabel: "Ausstellung:",
        projExhibDate: "22. November bis einschließlich 6. Dezember 2026",
        projQuote: "Jeder Pinselstrich erzählt eine Geschichte und jede Geschichte verdient einen Namen.",
        catalogLabel: "Katalog (PDF)",
        xmasHeading: "Atelier Farbraum auf dem Weihnachtsdürpel am 06. Dezember 2026",
        xmasP1: "Ich freue mich sehr, dass mir das Atelier Farbraum die Möglichkeit gibt, in diesem Jahr am Weihnachtsdürpel teilzunehmen.",
        xmasWhere: "Ihr findet uns:",
        xmasP2: "Kommt vorbei, lasst euch inspirieren und entdeckt die Vielfalt unserer Kunst und kreativen Arbeiten. Wir freuen uns auf euren Besuch, nette Gespräche und viele schöne Begegnungen! ✨",
        heikeText: "Für Aquarellmalerei und Fotografie kann ich euch meine Kollegin Heike wärmstens empfehlen. Sie ist unglaublich vielseitig, beherrscht ihr Handwerk mit viel Können und fertigt ihre Arbeiten mit großer Liebe zum Detail an.",
        heikeInsta: "Schaut doch einfach mal auf ihrem Instagram-Profil vorbei:",
        altProject: "Das Gemeinschaftswerk: vier schwarz-weiß bemalte Leinwände, präsentiert im Park",
        altSignatures1: "Unterschriftenblatt mit den Namen der Teilnehmerinnen und Teilnehmer (Blatt 1)",
        altSignatures2: "Unterschriftenblatt mit den Namen der Teilnehmerinnen und Teilnehmer (Blatt 2)",
        altCatalog: "Katalogseite zum Gemeinschaftswerk – PDF öffnen",
        altPoster: "Plakat: Weihnachts-Kreativmarkt, Düsseldorfer Str. 94 / Ecke Weststr., Sonntag, 6. Dezember, 11–17 Uhr"
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
        aboutP5: "Hartelijk dank voor uw bezoek aan mijn website.",
        moreHeading: "Tentoonstellingen, projecten & meer",
        instagramLabel: "Instagram:",
        permHeading: "Mijn kunst, permanent te zien:",
        permDevkTitle: "Duitsland: DEVK – Leichlingen",
        permDevkText: "Sinds 2023 zijn mijn kunstwerken hier te zien in het kader van een wisselende tentoonstelling.",
        permBrolTitle: "België: Brolsjiek – Oostende",
        permBrolText1: "Brolsjiek biedt een veelzijdige keuze aan kunst en bijzondere dingen, allemaal met liefde handgemaakt! ❤️",
        permBrolText2: "Daarnaast zijn er afwisselende workshops waarin jullie zelf creatief aan de slag kunnen.",
        permBrolInsta: "Neem ook gerust een kijkje op Instagram:",
        tempHeading: "Mijn kunst, tijdelijk te zien:",
        tempEnyouLabel: "Leichlingen:",
        tempEnyouText: "tijdens de Kunst- und Klangmeile 2026 in Leichlingen stelde de kledingwinkel Enyou zijn etalage aan mij ter beschikking. Met veel liefde voor detail werden kleding en accessoires harmonieus op mijn kunstwerken afgestemd. Zo ontstond een prachtige presentatie die mijn schilderijen op een heel bijzondere manier tot hun recht liet komen.",
        tempFarbraumTitle: "Solingen-Ohligs: Atelier Farbraum",
        tempFarbraumText1: "Het geweldige team, Chrissie en Daniela, stelt mij in oktober en november 2026 een van zijn etalages ter beschikking. Daar ben ik heel blij mee! ❤️",
        tempFarbraumText2: "In Atelier Farbraum vinden jullie veel leuke en veelzijdige mogelijkheden om zelf creatief bezig te zijn en jullie artistiek uit te leven. Kom gewoon eens langs, het is de moeite waard!",
        juryHeading: "Jureringen Leichlingen:",
        jury2024: "Deelname aan de gejureerde jaartentoonstelling 2024",
        jury2025: "Deelname aan de gejureerde jaartentoonstelling 2025",
        projHeading: "Projecten",
        projP1: "Samen met mijn collega Angela Graul heb ik in het kader van de Kunst- und Klangmeile 2026 het project “Kunst von und für Leichlinger*innen” (kunst van en voor de inwoners van Leichlingen) gerealiseerd, in samenwerking met de stad Leichlingen. Doeken en verschillende schilder- en creatieve materialen stonden ter beschikking van de deelnemers en nodigden uit om creatief te experimenteren, nieuwe technieken uit te proberen en samen kunst te laten ontstaan.",
        projP2: "Iedereen was uitgenodigd om een heel persoonlijk spoor achter te laten op een van de doeken. Tot onze grote vreugde voelden mensen van alle leeftijden zich aangesproken en vereeuwigden ze zich met veel enthousiasme op de doeken. Uit al deze individuele sporen ontstond geleidelijk een indrukwekkend gemeenschapswerk dat de diversiteit, de creativiteit en de gemeenschapszin van de mensen in Leichlingen weerspiegelt.",
        projP3: "Dit bijzondere werk hebben we vervolgens ingediend voor de 37e gejureerde jaartentoonstelling van de Leichlinger kunstenaars 2026. Tot onze vreugde werd het werk voor de tentoonstelling geselecteerd!",
        projExhibLabel: "Tentoonstelling:",
        projExhibDate: "22 november tot en met 6 december 2026",
        projQuote: "Elke penseelstreek vertelt een verhaal en elk verhaal verdient een naam.",
        catalogLabel: "Catalogus (PDF)",
        xmasHeading: "Atelier Farbraum op de Weihnachtsdürpel op 6 december 2026",
        xmasP1: "Ik ben erg blij dat Atelier Farbraum mij de kans geeft om dit jaar deel te nemen aan de kerstmarkt Weihnachtsdürpel.",
        xmasWhere: "Jullie vinden ons hier:",
        xmasP2: "Kom langs, laat je inspireren en ontdek de veelzijdigheid van onze kunst en creatieve werken. We kijken uit naar jullie bezoek, leuke gesprekken en veel mooie ontmoetingen! ✨",
        heikeText: "Voor aquarelschilderkunst en fotografie kan ik jullie mijn collega Heike van harte aanbevelen. Ze is ongelooflijk veelzijdig, beheerst haar vak met veel kunde en maakt haar werk met veel liefde voor detail.",
        heikeInsta: "Neem gewoon eens een kijkje op haar Instagram-profiel:",
        altProject: "Het gemeenschapswerk: vier zwart-wit beschilderde doeken, gepresenteerd in het park",
        altSignatures1: "Handtekeningenblad met de namen van de deelnemers (blad 1)",
        altSignatures2: "Handtekeningenblad met de namen van de deelnemers (blad 2)",
        altCatalog: "Cataloguspagina over het gemeenschapswerk – pdf openen",
        altPoster: "Affiche: Weihnachts-Kreativmarkt, Düsseldorfer Str. 94 / hoek Weststr., zondag 6 december, 11–17 uur"
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
        aboutP5: "Merci beaucoup de votre visite sur mon site.",
        moreHeading: "Expositions, projets et plus encore",
        instagramLabel: "Instagram :",
        permHeading: "Mon art, exposé en permanence :",
        permDevkTitle: "Allemagne : DEVK – Leichlingen",
        permDevkText: "Depuis 2023, mes œuvres y sont présentées dans le cadre d'une exposition tournante.",
        permBrolTitle: "Belgique : Brolsjiek – Ostende",
        permBrolText1: "Brolsjiek propose un choix varié d'œuvres d'art et d'objets singuliers, le tout fait main avec amour ! ❤️",
        permBrolText2: "On y trouve aussi des ateliers variés où vous pourrez exprimer votre propre créativité.",
        permBrolInsta: "N'hésitez pas à jeter aussi un œil sur Instagram :",
        tempHeading: "Mon art, exposé temporairement :",
        tempEnyouLabel: "Leichlingen :",
        tempEnyouText: "pendant la Kunst- und Klangmeile 2026 à Leichlingen, la boutique de vêtements Enyou a mis sa vitrine à ma disposition. Avec un grand souci du détail, vêtements et accessoires ont été harmonieusement assortis à mes œuvres. Il en est résulté une magnifique présentation, qui a mis mes tableaux en valeur d'une manière toute particulière.",
        tempFarbraumTitle: "Solingen-Ohligs : Atelier Farbraum",
        tempFarbraumText1: "La formidable équipe, Chrissie et Daniela, met l'une de ses vitrines à ma disposition en octobre et novembre 2026. Je m'en réjouis beaucoup ! ❤️",
        tempFarbraumText2: "À l'Atelier Farbraum, vous trouverez de nombreuses possibilités, aussi belles que variées, d'exprimer votre créativité et de vous essayer à l'art. Passez donc y faire un tour, cela en vaut la peine !",
        juryHeading: "Sélections par jury à Leichlingen :",
        jury2024: "Participation à l'exposition annuelle avec jury 2024",
        jury2025: "Participation à l'exposition annuelle avec jury 2025",
        projHeading: "Projets",
        projP1: "Avec ma collègue Angela Graul, j'ai réalisé, dans le cadre de la Kunst- und Klangmeile 2026, le projet « Kunst von und für Leichlinger*innen » (l'art par et pour les habitants de Leichlingen), en collaboration avec la ville de Leichlingen. Des toiles ainsi que divers matériaux de peinture et de création étaient mis à la disposition des participantes et participants et les invitaient à expérimenter, à essayer de nouvelles techniques et à faire naître de l'art ensemble.",
        projP2: "Chacun était invité à laisser sa trace toute personnelle sur l'une des toiles. À notre grande joie, des personnes de tous âges se sont senties concernées et se sont immortalisées avec beaucoup d'enthousiasme sur les toiles. De ces nombreuses traces individuelles est née peu à peu une impressionnante œuvre collective, qui reflète la diversité, la créativité et l'esprit de communauté des habitants de Leichlingen.",
        projP3: "Nous avons ensuite présenté cette œuvre singulière à la 37e exposition annuelle avec jury des artistes de Leichlingen 2026. À notre grande joie, elle a été retenue pour l'exposition !",
        projExhibLabel: "Exposition :",
        projExhibDate: "Du 22 novembre au 6 décembre 2026 inclus",
        projQuote: "Chaque coup de pinceau raconte une histoire, et chaque histoire mérite un nom.",
        catalogLabel: "Catalogue (PDF)",
        xmasHeading: "L'Atelier Farbraum au Weihnachtsdürpel le 6 décembre 2026",
        xmasP1: "Je me réjouis que l'Atelier Farbraum me donne la possibilité de participer cette année au marché de Noël Weihnachtsdürpel.",
        xmasWhere: "Vous nous trouverez ici :",
        xmasP2: "Venez nous voir, laissez-vous inspirer et découvrez la diversité de notre art et de nos créations. Nous nous réjouissons de votre visite, de sympathiques échanges et de nombreuses belles rencontres ! ✨",
        heikeText: "Pour l'aquarelle et la photographie, je vous recommande chaleureusement ma collègue Heike. Elle est incroyablement polyvalente, maîtrise son métier avec beaucoup de savoir-faire et réalise ses travaux avec un grand amour du détail.",
        heikeInsta: "Allez donc faire un tour sur son profil Instagram :",
        altProject: "L'œuvre collective : quatre toiles peintes en noir et blanc, présentées dans le parc",
        altSignatures1: "Feuille de signatures avec les noms des participantes et participants (feuille 1)",
        altSignatures2: "Feuille de signatures avec les noms des participantes et participants (feuille 2)",
        altCatalog: "Page du catalogue consacrée à l'œuvre collective – ouvrir le PDF",
        altPoster: "Affiche : Weihnachts-Kreativmarkt, Düsseldorfer Str. 94 / angle Weststr., dimanche 6 décembre, 11 h – 17 h"
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
        aboutP5: "Thank you very much for visiting my website.",
        moreHeading: "Exhibitions, Projects & More",
        instagramLabel: "Instagram:",
        permHeading: "My art, on permanent display:",
        permDevkTitle: "Germany: DEVK – Leichlingen",
        permDevkText: "Since 2023, my artworks have been on show here as part of a rotating exhibition.",
        permBrolTitle: "Belgium: Brolsjiek – Ostend",
        permBrolText1: "Brolsjiek offers a varied selection of art and special things, all handmade with love! ❤️",
        permBrolText2: "There are also varied workshops where you can get creative yourselves.",
        permBrolInsta: "Feel free to drop by on Instagram too:",
        tempHeading: "My art, on display for a limited time:",
        tempEnyouLabel: "Leichlingen:",
        tempEnyouText: "during the Kunst- und Klangmeile 2026 in Leichlingen, the clothing shop Enyou let me use its shop window. With great attention to detail, clothing and accessories were harmoniously matched to my artworks. The result was a beautiful presentation that showed off my paintings in a very special way.",
        tempFarbraumTitle: "Solingen-Ohligs: Atelier Farbraum",
        tempFarbraumText1: "The wonderful team, Chrissie and Daniela, is letting me use one of their shop windows in October and November 2026. I'm delighted! ❤️",
        tempFarbraumText2: "At Atelier Farbraum you'll find lots of great and varied ways to get creative and try your hand at art. Just drop by – it's well worth it!",
        juryHeading: "Juried exhibitions, Leichlingen:",
        jury2024: "Participation in the juried annual exhibition 2024",
        jury2025: "Participation in the juried annual exhibition 2025",
        projHeading: "Projects",
        projP1: "Together with my colleague Angela Graul, I carried out the project “Kunst von und für Leichlinger*innen” (art by and for the people of Leichlingen) as part of the Kunst- und Klangmeile 2026, in cooperation with the town of Leichlingen. Canvases and a variety of painting and craft materials were available to the participants, inviting them to experiment creatively, try out new techniques and create art together.",
        projP2: "Everyone was invited to leave their own personal mark on one of the canvases. To our great delight, people of all ages felt drawn in and immortalised themselves on the canvases with great enthusiasm. From these many individual marks, an impressive collective work gradually emerged – one that reflects the diversity, creativity and community spirit of the people of Leichlingen.",
        projP3: "We then submitted this special work to the 37th Juried Annual Exhibition of Leichlingen Artists 2026. To our delight, the piece was selected for the exhibition!",
        projExhibLabel: "Exhibition:",
        projExhibDate: "22 November to 6 December 2026 inclusive",
        projQuote: "Every brushstroke tells a story, and every story deserves a name.",
        catalogLabel: "Catalogue (PDF)",
        xmasHeading: "Atelier Farbraum at the Weihnachtsdürpel on 6 December 2026",
        xmasP1: "I'm delighted that Atelier Farbraum is giving me the chance to take part in the Weihnachtsdürpel Christmas market this year.",
        xmasWhere: "You'll find us here:",
        xmasP2: "Come by, be inspired and discover the variety of our art and creative work. We look forward to your visit, friendly conversations and many lovely encounters! ✨",
        heikeText: "For watercolour painting and photography, I can warmly recommend my colleague Heike. She is incredibly versatile, masters her craft with great skill and creates her work with great attention to detail.",
        heikeInsta: "Just take a look at her Instagram profile:",
        altProject: "The collective work: four canvases painted in black and white, presented in the park",
        altSignatures1: "Signature sheet with the names of the participants (sheet 1)",
        altSignatures2: "Signature sheet with the names of the participants (sheet 2)",
        altCatalog: "Catalogue page about the collective work – open PDF",
        altPoster: "Poster: Weihnachts-Kreativmarkt, Düsseldorfer Str. 94 / corner of Weststr., Sunday 6 December, 11 am – 5 pm"
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

    // Übersetzte Alternativtexte für Bilder
    document.querySelectorAll("[data-i18n-alt]").forEach(el => {
        const text = TRANSLATIONS[lang][el.dataset.i18nAlt];
        if (text) el.setAttribute("alt", text);
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
