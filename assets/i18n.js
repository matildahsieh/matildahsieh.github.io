/*
  Swedish → English for the case study pages and "Om mig".
  The pages are written in Swedish; this file swaps visible text, aria-labels,
  alt texts, the page title and the meta description when English is chosen.
  The choice is shared with the homepage through localStorage ('mh-lang').
  To add or change a translation: the key is the Swedish text exactly as it
  reads on the page (whitespace collapsed), the value is the English text.
*/
(function () {
  'use strict';

  var EN = {
    /* ---------- Shared: banner, navbar, footer, contact ---------- */
    'Hoppa till innehållet': 'Skip to content',
    'Söker praktik · Vinter 2026': 'Searching for an internship · Winter 2026',
    'Kontakta mig': 'Contact me',
    'Meny': 'Menu',
    'Projekt': 'Projects',
    'Om mig': 'About',
    'Kontakt': 'Contact',
    'Meddelande': 'Announcement',
    'Stäng meddelandet': 'Close announcement',
    'Matilda Hsieh, UX Designer – startsida': 'Matilda Hsieh, UX Designer – home',
    'Huvudmeny': 'Main menu',
    'Välj språk:': 'Choose language:',
    'Taggar': 'Tags',
    '(öppnas i ny flik)': '(opens in a new tab)',
    '✓ E-postadressen kopierades': '✓ Email address copied',
    '← Alla projekt': '← All projects',
    'Ladda ner CV (svenska)': 'Download CV (Swedish)',

    /* ---------- Om mig ---------- */
    'Om mig · Matilda Hsieh': 'About · Matilda Hsieh',
    'Om Matilda Hsieh, UX-designer med rötter i Sverige och Taiwan, som söker LIA-plats vinter 2026.':
      'About Matilda Hsieh, UX designer with roots in Sweden and Taiwan, looking for an internship in Winter 2026.',
    'Hej, jag är': 'Hi, I’m',
    'Jag är UX-designer med rötter i Sverige och Taiwan, och den blandningen formar hur jag ser på design. Jag tar med mig den svenska traditionen av enkelhet och tillgänglighet, och den taiwanesiska förmågan att lägga märke till detaljer som annars missas.':
      'I’m a UX designer with roots in Sweden and Taiwan, and that mix shapes how I see design. I bring the Swedish tradition of simplicity and accessibility, and the Taiwanese eye for details that otherwise get missed.',
    'Just nu studerar jag UX-design på Nackademin i Stockholm och söker LIA-plats till vinter 2026. Jag jobbar bäst i gränslandet mellan research och design. Jag vill förstå varför innan jag ritar hur.':
      'Right now I’m studying UX design at Nackademin in Stockholm and looking for an internship for Winter 2026. I work best where research meets design. I want to understand why before I sketch how.',
    'Tillgänglighet': 'Accessibility',
    'Bilden är AI-genererad.': 'This picture is AI-generated.',
    'Illustrerat porträtt av Matilda med långt brunt hår, runda glasögon och mörk kavaj':
      'Illustrated portrait of Matilda with long brown hair, round glasses and a dark blazer',
    'Kompetenser': 'Skills',
    'Om loggan': 'About the logo',
    'Ett tecken, mitt namn': 'One character, my name',
    '謝 är mitt efternamn på kinesiska. Så klart fick det bli min logga.':
      '謝 is my last name in Chinese. Of course it had to be my logo.',
    'Kul detalj: 謝 betyder också ”tack”.': 'Fun fact: 謝 also means “thank you”.',
    'Hur jag arbetar': 'How I work',
    'Mitt arbetssätt': 'My way of working',
    'Jag skapar förståelse innan jag skapar lösningar': 'I build understanding before I build solutions',
    'Jag vill först förstå vad uppdragsgivaren försöker uppnå, vem användaren är och vilken problematik som faktiskt finns. Jag är särskilt intresserad av relationen mellan verksamhetens mål och användarens verklighet. Stämmer organisationens bild med vad användaren faktiskt upplever?':
      'First I want to understand what the client is trying to achieve, who the user is and what the real problem is. I’m especially interested in the gap between business goals and the user’s reality. Does the organisation’s picture match what users actually experience?',
    'Användarresearch': 'User research',
    'Behovsanalys': 'Needs analysis',
    'Jag är frågedriven snarare än metoddriven': 'I’m driven by questions, not methods',
    'Jag börjar inte med att bestämma ”nu ska vi göra intervjuer”. Jag börjar med att förstå vad vi behöver ta reda på, och väljer sedan metoden som bäst ger oss den kunskapen. Om frågorna är oklara använder jag gärna workshop för att tillsammans formulera mål och kunskapsbehov.':
      'I don’t start by deciding “now we’ll do interviews”. I start by understanding what we need to find out, then pick the method that best gets us there. If the questions are unclear, I like to run a workshop so we can define goals and knowledge gaps together.',
    'Metodval': 'Choosing methods',
    'Jag tänker bäst tillsammans med andra': 'I think best together with others',
    'Att bolla idéer är en viktig del av min process. Jag fungerar bäst i miljöer där design får vara dialog och iteration snarare än ett ensamt arbete. Inkludering handlar för mig inte bara om slutprodukten, utan också om att öppna upp designprocessen.':
      'Bouncing ideas around is a big part of my process. I do my best work where design is dialogue and iteration rather than a solo job. To me, inclusion isn’t only about the end product, it’s also about opening up the design process.',
    'Samarbete': 'Collaboration',
    'Jag tänker gärna ”och” innan jag tänker ”eller”': 'I think “and” before I think “or”',
    'När två idéer står mot varandra är min första impuls att undersöka om något från båda går att kombinera. Jag tycker om att öppna upp möjlighetsutrymmet och bygga vidare innan jag börjar välja bort. Det gör mitt arbetssätt ganska divergent och utforskande i början.':
      'When two ideas compete, my first instinct is to see whether parts of both can be combined. I like to widen the space of possibilities and build on it before I start ruling things out, which makes my process quite divergent and exploratory early on.',
    'Divergent tänkande': 'Divergent thinking',
    'Utforskande': 'Exploratory',
    'Hur jag arbetar med AI': 'How I work with AI',
    'AI som verktyg,': 'AI as a tool,',
    'inte ersättning': 'not a replacement',
    'Research och analys': 'Research and analysis',
    'Jag använder AI för att snabbare hitta mönster i data och transkriptioner, men tolkningen och slutsatserna drar jag själv.':
      'I use AI to find patterns in data and transcripts faster, but the interpretation and the conclusions are mine.',
    'Idéutveckling': 'Ideation',
    'AI hjälper mig att brainstorma bredare och snabbare. Sedan väljer och bearbetar jag det som faktiskt funkar för användaren.':
      'AI helps me brainstorm wider and faster. Then I choose and refine what actually works for the user.',
    'Tempo och fokus': 'Pace and focus',
    'Repetitiva uppgifter delegerar jag till AI, så att jag kan lägga mer tid på det som kräver mänsklig empati och omdöme.':
      'I hand repetitive tasks to AI, so I can spend more time on what needs human empathy and judgement.',
    'Erfarenhet': 'Experience',
    'Bakgrund': 'Background',
    '2025 – nu': '2025 – present',
    '2026 – nu': '2026 – present',
    'YH UX-designer': 'UX Designer (higher vocational education)',
    'Utbildning inom användarcentrerad design: research, behovsanalys, prototyping, användbarhetstestning och tillgänglighet.':
      'Education in user-centred design: research, needs analysis, prototyping, usability testing and accessibility.',
    'Uppdrag hos ett e-handelsföretag inom skönhet. Har skärpt min förmåga att lyssna på användarnas faktiska problem och kommunicera lösningar enkelt och tydligt. Det är en direkt parallell till UX-arbetet.':
      'An assignment at a beauty e-commerce company. It has sharpened my ability to listen to users’ real problems and explain solutions simply and clearly. It’s a direct parallel to UX work.',
    'Kundärenden på ett snabbväxande logistikbolag. Fick inblick i hur dålig UX skapar onödiga supportärenden, och hur rätt information vid rätt tillfälle kan lösa problem innan de uppstår.':
      'Customer cases at a fast-growing logistics company. I saw how poor UX creates unnecessary support tickets, and how the right information at the right moment can solve problems before they happen.',
    'Låter det intressant?': 'Sound interesting?',
    'Jag söker LIA-plats till vinter 2026 och är nyfiken på att lära mig mer om hur ni arbetar.':
      'I’m looking for an internship for Winter 2026 and I’m curious to learn more about how you work.',
    'Skriv till mig': 'Write to me',

    /* ---------- Hemly ---------- */
    'Hemly · Matilda Hsieh': 'Hemly · Matilda Hsieh',
    'Case study: Hemly. UI-design av en app för expresshandling, för den spontana myskvällen.':
      'Case study: Hemly. UI design of an express shopping app for the spontaneous movie night.',
    'Case study · UI-design · Soloprojekt': 'Case study · UI design · Solo project',
    'Skafferiet är tomt och filmen har redan börjat. En app för expresshandling: snacks, godis och dryck hemma inom tio minuter.':
      'The pantry is empty and the movie has already started. An express shopping app: snacks, sweets and drinks at your door within ten minutes.',
    'Roll': 'Role',
    'Research, designsystem & UI': 'Research, design system & UI',
    'Soloprojekt': 'Solo project',
    'Plattform': 'Platform',
    'Mobilapp': 'Mobile app',
    '[Hemly startskärm]': '[Hemly home screen]',
    '01 · Projektöversikt': '01 · Project overview',
    'Den spontana myskvällen': 'The spontaneous movie night',
    'Målgrupp': 'Target group',
    'Unga vuxna 20–35 år': 'Young adults aged 20–35',
    'Bor i storstad': 'Living in a big city',
    'Värderar snabbhet och enkelhet': 'Value speed and simplicity',
    'Gör spontana köp': 'Make spontaneous purchases',
    'Att snabbt och enkelt kunna beställa snacks, godis och dryck när skafferiet är tomt och filmen redan har startat.':
      'Quickly and easily ordering snacks, sweets and drinks when the pantry is empty and the movie has already started.',
    'Mål': 'Goal',
    'Expresshandling inom': 'Express shopping within',
    'minuter, snabb, intuitiv och visuellt tilltalande.': 'minutes, fast, intuitive and visually appealing.',
    '02 · Processen': '02 · The process',
    'Inspiration → struktur → visuellt': 'Inspiration → structure → visuals',
    'Referensappar som foodora, Mathem och Willys, plus Dribbble och Mobbin, för att förstå konventionerna inom grocery.':
      'Reference apps like foodora, Mathem and Willys, plus Dribbble and Mobbin, to understand the conventions of grocery apps.',
    'Struktur': 'Structure',
    'Ett mini-designsystem först: färgpalett, typskala och komponenter.': 'A mini design system first: colour palette, type scale and components.',
    'Visuellt': 'Visuals',
    'Vyerna, med ett konsekvent uttryck utan att fatta samma beslut om och om igen.':
      'The screens, with a consistent look, without making the same decisions over and over.',
    '03 · Designsystemet': '03 · The design system',
    'Bestäm en gång, använd överallt': 'Decide once, use everywhere',
    'Färg': 'Colour',
    'Plommon · #382349': 'Plum · #382349',
    'Kräm · #FFF4E8': 'Cream · #FFF4E8',
    'Typskala': 'Type scale',
    'Rubrik': 'Heading',
    'Underrubrik': 'Subheading',
    'Brödtext · IBM Plex Sans 16': 'Body text · IBM Plex Sans 16',
    'Liten text · etiketter': 'Small text · labels',
    'Komponenter': 'Components',
    'Lägg i varukorg': 'Add to cart',
    'Se alla': 'See all',
    '[Produktkort från Figma]': '[Product card from Figma]',
    '04 · Vyerna': '04 · The screens',
    'Från tomt skafferi till leverans': 'From empty pantry to delivery',
    '[Vad skärmen visar]': '[What the screen shows]',
    '[Kategori]': '[Category]',
    '[Varukorg]': '[Cart]',
    '[Kassa]': '[Checkout]',
    'Hemlys startsida med leveransadress, Myspaketet och populära snacks': 'Hemly home screen with delivery address, the movie-night bundle and popular snacks',
    'Startsidan: Myspaketet och snacks direkt till hands.': 'Home: the movie-night bundle and snacks right at hand.',
    'Startsidan med Myspaketet och populära snacks': 'Home screen with the movie-night bundle and popular snacks',
    'Kategorier i stora, tydliga kort, så att det går snabbt att hitta rätt.': 'Categories as large, clear cards, so the right thing is quick to find.',
    'Kategorisidan med kort för chips, popcorn, nötter, ost och kex, pinnar och dipp': 'Category screen with cards for crisps, popcorn, nuts, cheese and crackers, pretzel sticks and dips',
    'Varukorgen visar totalen och leveranstiden innan du betalar.': 'The cart shows the total and delivery time before you pay.',
    'Varukorgen med tre varor, ordersammanfattning och knappen Betala': 'Cart with three items, an order summary and the Pay button',
    'Orderbekräftelsen: beräknad leveranstid på 8 minuter.': 'Order confirmation: estimated delivery in 8 minutes.',
    'Orderbekräftelse med beräknad leveranstid på 8 minuter och beställningens innehåll': 'Order confirmation with an estimated delivery time of 8 minutes and the order contents',
    '05 · Reflektion': '05 · Reflection',
    'Mitt första misstag var att inte börja med style guiden. Det gjorde att det tog längre tid. Med en struktur från start hade designprocessen gått mycket smidigare.':
      'My first mistake was not starting with the style guide. It made everything take longer. With structure from the start, the design process would have gone much more smoothly.',
    '”Good enough, sen iterera. Inte sitta i timmar för att få det pixel perfect.”':
      '“Good enough, then iterate. Don’t spend hours making it pixel perfect.”',

    /* ---------- Vikingaappen ---------- */
    'Case study: Vikingaappen, en quiz-app och ny webbsida för The Viking Museum, designad för barn med privacy by design.':
      'Case study: Vikingaappen, a quiz app and new website for The Viking Museum, designed for children with privacy by design.',
    'Kliv in i vikingatiden · The Viking Museum': 'Step into the Viking Age · The Viking Museum',
    'Hur gör man vikingatiden till något folk faktiskt vill klicka på? En quiz-app som guidar barn genom museet, och en ny webbsida som får fler att hitta dit.':
      'How do you make the Viking Age something people actually want to click on? A quiz app that guides children through the museum, and a new website that helps more people find it.',
    'Min roll': 'My role',
    'Idégenerering & visuellt koncept': 'Ideation & visual concept',
    'Grupprojekt': 'Group project',
    'Mobilapp & webb': 'Mobile app & web',
    'Tid': 'Timeline',
    'Aug–sep 2026': 'Aug–Sep 2026',
    'Sal 1 · Uppdraget': 'Room 1 · The brief',
    'Fyra beslut vi tog som grupp': 'Four decisions we made as a group',
    'Briefen var öppen: en digital lösning för barnfamiljer och turister, gärna med infotainment, och etik lika viktigt som idé, funktion och design. Hur vi skulle lösa det bestämde vi själva i gruppen.':
      'The brief was open: a digital solution for families and tourists, ideally infotainment, with ethics as important as idea, function and design. How to solve it was up to us as a group.',
    'Vi valde: barnen i fokus': 'We chose: children first',
    'Välj språk direkt och hur många som spelar.': 'Pick a language right away, and how many are playing.',
    'Vi valde: lära genom att göra': 'We chose: learning by doing',
    'Runor, pärlhalsband och quiz i utställningen.': 'Runes, bead necklaces and quizzes in the exhibition.',
    'Vi valde: integritet först': 'We chose: privacy first',
    'Vi valde: en väg in i museet': 'We chose: a way into the museum',
    'Inga namn, ingen inloggning, frivillig delning.': 'No names, no login, optional sharing.',
    'En kod att visa i Gift Shop som belöning.': 'A code to show in the Gift Shop as a reward.',
    'Sal 2 · Visuellt koncept · mitt ansvar': 'Room 2 · Visual concept · my responsibility',
    'Färger hämtade ur utställningen': 'Colours taken from the exhibition',
    'Appen skulle kännas som en förlängning av museet, inte som ett spel som råkar handla om vikingar. Referenserna: snidade dörrar, runstenar, runalfabetet, torshammare och långskepp.':
      'The app should feel like an extension of the museum, not a game that happens to be about Vikings. The references: carved doors, runestones, the runic alphabet, Thor’s hammers and longships.',
    '[Snidad dörr]': '[Carved door]',
    '[Runsten]': '[Runestone]',
    '[Runalfabet]': '[Runic alphabet]',
    '[Torshammare]': '[Thor’s hammer]',
    '[Långskepp]': '[Longship]',
    'Trä': 'Wood',
    'Ben': 'Bone',
    'Mossa': 'Moss',
    'Skog': 'Forest',
    'Runröd': 'Rune red',
    'Ockra': 'Ochre',
    'Sal 3 · Appen': 'Room 3 · The app',
    'En vandring i sex stationer': 'A walk through six stations',
    'Startsida': 'Home screen',
    'Välkommen, välj språk, börja.': 'Welcome, choose a language, start.',
    'Inställningar': 'Settings',
    'Textstorlek, tillgänglighet, mörkt läge, deltagare, svårighet.': 'Text size, accessibility, dark mode, players, difficulty.',
    'Välj mellan olika äventyr.': 'Choose between different adventures.',
    'Uppgifter': 'Tasks',
    'Stationer, runskrift, fråga guiderna, pärlhalsband, quiz.': 'Stations, rune writing, ask the guides, bead necklace, quiz.',
    'Positiv feedback oavsett resultat. Kod till Gift Shop.': 'Positive feedback whatever the result. A code for the Gift Shop.',
    'Sista sidan': 'Final screen',
    'Belöning, och dela om man vill.': 'A reward, and sharing if you want to.',
    'Startsidan: sex stationer och en knapp för att börja.': 'Start: six stations and one button to begin.',
    'En station: uppgiften och hur långt man har kommit.': 'A station: the task and how far you’ve come.',
    'Sista sidan: koden att visa i Gift Shop.': 'Last page: the code to show in the Gift Shop.',
    'Startsidan för Vikingjakten med en vikingahjälm, sex stationer och knappen Starta äventyret':
      'The Vikingjakten start screen with a Viking helmet, six stations and the Start the adventure button',
    'Station 2 av 6, Runstenen, med en uppgift om att hitta den stora runstenen och knappen Jag är redo':
      'Station 2 of 6, the Rune Stone, with a task to find the big rune stone and an I’m ready button',
    'Sista sidan, Jakten är klar, med en belöningskod att visa i Gift Shop':
      'The last page, The hunt is done, with a reward code to show in the Gift Shop',
    'Sal 4 · Etik som designmaterial': 'Room 4 · Ethics as design material',
    'Ingen delar sitt namn.': 'Nobody shares their name.',
    'Förvalt namn': 'Preset name',
    'Barnen väljer ett förvalt eller slumpat vikinganamn i stället för sitt eget.': 'Children pick a preset or random Viking name instead of their own.',
    'Ingen inloggning': 'No login',
    'Inget konto, ingen data som kan kopplas till ett barn. Byggt utifrån privacy by design och EU:s regler.':
      'No account, no data that can be linked to a child. Built on privacy by design and EU rules.',
    'Frivillig delning': 'Optional sharing',
    'Bara om barnet vill, via telefonens egen delningsfunktion. Och alla får positiv feedback, oavsett resultat.':
      'Only if the child wants to, through the phone’s own share feature. And everyone gets positive feedback, whatever the result.',
    'Sal 5 · Webbsidan': 'Room 5 · The website',
    'En ny webbsida för museet': 'A new website for the museum',
    'Startsidan på den nya webbsidan, desktop.': 'The home page of the new website, desktop.',
    'Startsidan på den nya webbsidan för The Viking Museum: museets namn i guld över ett vikingaskepp framför stora fönster mot vattnet, med knapparna Utforska utställningar och Boka biljett':
      'The home page of the new website for The Viking Museum: the museum’s name in gold above a Viking ship in front of large windows facing the water, with the buttons Explore exhibitions and Book a ticket',
    'Utgång · Vad jag lärde mig': 'Exit · What I learned',
    '”Att designa för barn är att designa för trygghet.”': '“Designing for children means designing for safety.”',
    'Det roliga var lätt att få till. Det svåra var allt runt omkring: vad händer med det barnet skriver in, vem ser det, och hur känns det att svara fel?':
      'The fun part was easy. The hard part was everything around it: what happens to what the child types in, who sees it, and how does it feel to get an answer wrong?',
    'Vikingaappens logga: en runsten med flätade drakmotiv': 'Vikingaappen logo: a runestone with interlaced dragon motifs',

    /* ---------- Tillgänglighet ---------- */
    'Tillgänglighet · Matilda Hsieh': 'Accessibility · Matilda Hsieh',
    'Case study: tillgänglighetsgranskning av Nordic Feels e-handel enligt WCAG 2.2.':
      'Case study: an accessibility audit of Nordic Feel’s online store against WCAG 2.2.',
    'RAPPORT · WCAG 2.2 · NIVÅ [AA]': 'REPORT · WCAG 2.2 · LEVEL [AA]',
    'Inkluderar vår webbsida alla som älskar skönhet?': 'Does our website include everyone who loves beauty?',
    'En tillgänglighetsgranskning av Nordic Feels e-handel. Vem kommer hela vägen till kassan, och vem fastnar på vägen?':
      'An accessibility audit of Nordic Feel’s online store. Who makes it all the way to checkout, and who gets stuck along the way?',
    'ROLL': 'ROLE',
    'Granskning, analys & förslag': 'Audit, analysis & recommendations',
    'PLATTFORM': 'PLATFORM',
    'TID': 'TIMELINE',
    'Maj 2026': 'May 2026',
    'Webb · e-handel': 'Web · e-commerce',
    '01 · SAMMANFATTNING': '01 · SUMMARY',
    'sidor granskade': 'pages audited',
    'brister hittade': 'issues found',
    'kritiska, stoppar ett köp': 'critical, they block a purchase',
    '02 · METOD': '02 · METHOD',
    'Fyra principer, en köpresa': 'Four principles, one purchase journey',
    '1. MÖJLIG ATT UPPFATTA': '1. PERCEIVABLE',
    'Kontrast, alt-texter, text i bilder.': 'Contrast, alt text, text in images.',
    '2. HANTERBAR': '2. OPERABLE',
    'Tangentbord, fokus, klickytor.': 'Keyboard, focus, click targets.',
    '3. BEGRIPLIG': '3. UNDERSTANDABLE',
    'Formulär, felmeddelanden, språk.': 'Forms, error messages, language.',
    'Skärmläsare och hjälpmedel.': 'Screen readers and assistive technology.',
    '03 · FYND': '03 · FINDINGS',
    'Där köpresan bryts': 'Where the purchase journey breaks',
    'KRITERIUM': 'CRITERION',
    'VAR': 'WHERE',
    'ALLVARLIGHET': 'SEVERITY',
    '[Produktsida]': '[Product page]',
    '[Vad som var fel]': '[What was wrong]',
    'Kritisk': 'Critical',
    'Hög': 'High',
    '[Formulär]': '[Form]',
    'Medel': 'Medium',
    '04 · FÖRSLAG': '04 · RECOMMENDATIONS',
    'Före och efter': 'Before and after',
    '[Före: skärmdump]': '[Before: screenshot]',
    'Före.': 'Before.',
    '[Vad användaren möter]': '[What the user runs into]',
    '[Efter: ditt förslag]': '[After: your proposal]',
    'Efter.': 'After.',
    '[Vad som ändrats och varför]': '[What changed and why]',
    '05 · VAD JAG LÄRDE MIG': '05 · WHAT I LEARNED',
    '[Din lärdom, i en eller två meningar]': '[Your learning, in one or two sentences]'
  };

  var LANG_KEY = 'mh-lang';
  var SKIP = { SCRIPT: 1, STYLE: 1, NOSCRIPT: 1 };
  var ATTRS = ['aria-label', 'alt', 'title'];
  var textNodes = [];   // [{node, sv, lead, trail}]
  var attrNodes = [];   // [{el, attr, sv}]
  var norm = function (s) { return s.replace(/\s+/g, ' ').trim(); };

  // Collect everything once, remembering the Swedish original.
  function collect() {
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        for (var p = n.parentNode; p && p !== document.body; p = p.parentNode) {
          if (SKIP[p.nodeName] || p.nodeName === 'defs' || p.nodeName === 'symbol') return NodeFilter.FILTER_REJECT;
        }
        return EN[norm(n.nodeValue)] !== undefined ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    for (var n; (n = walker.nextNode());) {
      var v = n.nodeValue;
      textNodes.push({ node: n, sv: norm(v), lead: v.match(/^\s*/)[0] ? ' ' : '', trail: v.match(/\s*$/)[0] ? ' ' : '' });
    }
    document.querySelectorAll('[aria-label],[alt],[title]').forEach(function (el) {
      ATTRS.forEach(function (a) {
        var v = el.getAttribute(a);
        if (v && EN[norm(v)] !== undefined) attrNodes.push({ el: el, attr: a, sv: norm(v) });
      });
    });
    var meta = document.querySelector('meta[name="description"]');
    if (meta && EN[meta.content] !== undefined) attrNodes.push({ el: meta, attr: 'content', sv: meta.content });
  }

  var svTitle = document.title;

  function apply(lang) {
    var en = lang === 'en';
    textNodes.forEach(function (t) { t.node.nodeValue = t.lead + (en ? EN[t.sv] : t.sv) + t.trail; });
    attrNodes.forEach(function (a) { a.el.setAttribute(a.attr, en ? EN[a.sv] : a.sv); });
    document.title = en && EN[svTitle] ? EN[svTitle] : svTitle;
    document.documentElement.lang = en ? 'en' : 'sv';
    window.__mhLang = lang;
    updateSwitcher(lang);
    try { window.localStorage.setItem(LANG_KEY, lang); } catch (e) { /* ignore */ }
  }

  /* ---------- Language switcher (same markup and behaviour as the homepage) ---------- */
  var btn, menu, options, label, flagUse;
  var META = { sv: { flag: '#flag-se', label: 'Svenska' }, en: { flag: '#flag-gb', label: 'English' } };

  function updateSwitcher(lang) {
    if (!btn) return;
    label.textContent = META[lang].label;
    flagUse.setAttribute('href', META[lang].flag);
    options.forEach(function (o) {
      var on = o.getAttribute('data-lang') === lang;
      o.classList.toggle('is-active', on);
      if (on) o.setAttribute('aria-current', 'true'); else o.removeAttribute('aria-current');
    });
  }
  function openMenu() {
    btn.setAttribute('aria-expanded', 'true');
    menu.classList.add('is-open');
    options.forEach(function (o) { o.setAttribute('tabindex', '0'); });
    options[0].focus();
  }
  function closeMenu() {
    btn.setAttribute('aria-expanded', 'false');
    menu.classList.remove('is-open');
    options.forEach(function (o) { o.setAttribute('tabindex', '-1'); });
  }

  function initSwitcher() {
    btn = document.getElementById('lang-toggle');
    menu = document.getElementById('lang-menu');
    if (!btn || !menu) return;
    options = Array.prototype.slice.call(menu.querySelectorAll('.lang-option'));
    label = btn.querySelector('.lang-label');
    flagUse = btn.querySelector('.lang-flag use');
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      menu.classList.contains('is-open') ? closeMenu() : openMenu();
    });
    options.forEach(function (o) {
      o.addEventListener('click', function () { apply(o.getAttribute('data-lang')); closeMenu(); btn.focus(); });
    });
    menu.addEventListener('keydown', function (e) {
      var i = options.indexOf(document.activeElement);
      if (e.key === 'ArrowDown') { e.preventDefault(); options[(i + 1) % options.length].focus(); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); options[(i - 1 + options.length) % options.length].focus(); }
      else if (e.key === 'Tab' && !e.shiftKey && i === options.length - 1) closeMenu();
      else if (e.key === 'Tab' && e.shiftKey && i === 0) { e.preventDefault(); closeMenu(); btn.focus(); }
    });
    document.addEventListener('click', closeMenu);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('is-open')) { closeMenu(); btn.focus(); }
    });
  }

  collect();
  initSwitcher();
  var stored = null;
  try { stored = window.localStorage.getItem(LANG_KEY); } catch (e) { /* ignore */ }
  apply(stored === 'en' ? 'en' : 'sv');
})();
