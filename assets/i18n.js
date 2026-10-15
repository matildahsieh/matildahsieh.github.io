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
    'Söker praktik · Hösten 2026': 'Searching for an internship · Autumn 2026',
    'Kontakta mig': 'Contact me',
    'Nästa projekt': 'Next project',
    'Föregående projekt': 'Previous project',
    'Fler projekt': 'More projects',
    'Hur gör man vikingatiden till något folk faktiskt vill klicka på? Vi svarade med en quiz-app och en ny webbsida för The Viking Museum.': 'How do you make the Viking Age something people actually want to click on? We answered with a quiz app and a new website for The Viking Museum.',
    'Skafferiet är tomt och filmen har redan börjat. En app för expresshandling på under tio minuter.': 'The pantry is empty and the movie has already started. An app for express grocery shopping in under ten minutes.',
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
    'Om Matilda Hsieh, UX-designer med rötter i Sverige och Taiwan, som söker LIA-plats hösten 2026.':
      'About Matilda Hsieh, UX designer with roots in Sweden and Taiwan, looking for an internship in Autumn 2026.',
    'Hej, jag är': 'Hi, I’m',
    'Jag är UX-designer med rötter i Sverige och Taiwan, och den blandningen formar hur jag ser på design. Jag tar med mig den svenska traditionen av enkelhet och tillgänglighet, och den taiwanesiska förmågan att lägga märke till detaljer som annars missas.':
      'I’m a UX designer with roots in Sweden and Taiwan, and that mix shapes how I see design. I bring the Swedish tradition of simplicity and accessibility, and the Taiwanese eye for details that otherwise get missed.',
    'Just nu studerar jag UX-design på Nackademin i Stockholm och söker LIA-plats till hösten 2026. Jag jobbar bäst i gränslandet mellan research och design. Jag vill förstå varför innan jag ritar hur.':
      'Right now I’m studying UX design at Nackademin in Stockholm and looking for an internship for Autumn 2026. I work best where research meets design. I want to understand why before I sketch how.',
    'Tillgänglighet': 'Accessibility',
    'Bilden är AI-genererad.': 'This picture is AI-generated.',
    'Illustrerat porträtt av Matilda med långt brunt hår, runda glasögon och mörk kavaj':
      'Illustrated portrait of Matilda with long brown hair, round glasses and a dark blazer',
    'Kompetenser': 'Skills',
    'Om loggan': 'About the logo',
    'Ett tecken, mitt namn': 'One character, my name',
    '謝 är mitt efternamn på kinesiska. Så klart fick det bli min logga.':
      '謝 is my last name in Chinese. Of course it had to be my logo.',
    'Hsieh är stavningen som är vanlig i Taiwan och uttalas ungefär ”tjä”, som början på ”tjej”.':
      'Hsieh is the spelling that’s common in Taiwan, pronounced roughly “shyeh”.',
    'Kul detalj: säger du mitt efternamn två gånger, 謝謝, har du sagt ”tack” på kinesiska.':
      'Fun fact: say my last name twice, 謝謝, and you’ve just said “thank you” in Chinese.',
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
    'Jag söker LIA-plats till hösten 2026 och är nyfiken på att lära mig mer om hur ni arbetar.':
      'I’m looking for an internship for Autumn 2026 and I’m curious to learn more about how you work.',

    'Runsten utanför museet med en röd orm och en ockragul runslinga': 'Runestone outside the museum with a red serpent and an ochre band of runes',
    'Trädörr med snidade, flätade djurmönster runt dörrkarmen': 'Wooden door with carved, interlaced animal patterns around the frame',
    'Grå runsten med runor och ett kors inristade i rött': 'Grey runestone with runes and a cross carved in red',
    'Snidad tron i trä med ett fårskinn, en vikingahjälm, älghorn och granris': 'Carved wooden throne with a sheepskin, a Viking helmet, moose antlers and pine branches',
    'Referenser vi fotade på museet: runstenar, snidat trä, utställningens miljöer och runrött på skyltarna.': 'References we photographed at the museum: runestones, carved wood, the exhibition’s settings and rune red on the signs.',
    'Museets skylt om nordisk mytologi med en rad runor i rött': 'The museum’s sign about Norse mythology with a row of runes in red',
    'Före besöket': 'Before the visit',
    'Efter besöket': 'After the visit',
    'Kul detalj: de sex första färgerna valde vi innan vi besökte museet, och besöket bekräftade dem. Runröd syns både på runstenarna och på museets skyltar. Efter besöket lade vi till ockra och fjord, inspirerade av guidens kläder.':
      'Fun fact: we chose the first six colours before we visited the museum, and the visit confirmed them. Rune red shows up both on the runestones and on the museum’s signs. After the visit we added ochre and fjord, inspired by our guide’s clothes.',
    /* ---------- Hemly ---------- */
    'Tone of voice': 'Tone of voice',
    'Vänlig': 'Friendly',
    'Direkt': 'Direct',
    'Snabb': 'Fast',
    'Pålitlig': 'Reliable',
    'Skriv såhär': 'Write like this',
    'Undvik': 'Avoid',
    '”Din order är på väg!”': '“Your order is on its way!”',
    '”Perfekt för filmkvällen”': '“Perfect for movie night”',
    '”Levererat på 10 min”': '“Delivered in 10 min”',
    '”Lägg till lite mer mys”': '“Add a little more cosiness”',
    '”Hittade du allt?”': '“Did you find everything?”',
    '”Din transaktion behandlas”': '“Your transaction is being processed”',
    '”Produkt tillagd i varukorg”': '“Product added to cart”',
    '”Beräknad leveranstid: 10 min”': '“Estimated delivery time: 10 min”',
    '”Komplettera din order”': '“Complete your order”',
    '”Sökning gav 0 resultat”': '“Search returned 0 results”',
    'Hemly · Matilda Hsieh': 'Hemly · Matilda Hsieh',
    'Case study: Hemly. UI-design av en app för expresshandling, för den spontana myskvällen.':
      'Case study: Hemly. UI design of an express shopping app for the spontaneous movie night.',
    'Case study · UI-design · Soloprojekt': 'Case study · UI design · Solo project',
    'Skafferiet är tomt och filmen har redan börjat. En app för expresshandling: snacks, godis och dryck hemma inom tio minuter.':
      'The pantry is empty and the movie has already started. An express shopping app: snacks, sweets and drinks at your door within ten minutes.',
    'Roll': 'Role',
    'Designsystem & UI': 'Design system & UI',
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
    'Produktsidan': 'Product page',
    'Produktsidan för Sourcream & Onion från Estrella, 26 kr, med knappen Lägg till i varukorg, produktinformation, innehållsförteckning och liknande produkter':
      'The product page for Estrella Sourcream & Onion, 26 kr, with the Add to cart button, product information, ingredients and similar products',
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

    /* ---------- Vikingjakten ---------- */
    'Case study: Vikingjakten, en quiz-app och ny webbsida för The Viking Museum, designad för barn med privacy by design.':
      'Case study: Vikingjakten, a quiz app and new website for The Viking Museum, designed for children with privacy by design.',
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
    'Vikingjaktens logga: en runsten med flätade drakmotiv': 'Vikingjakten logo: a runestone with interlaced dragon motifs',

    /* (Tillgänglighet case removed) */
    /* ---------- Hela upplevelsen ---------- */
    'Hela upplevelsen · Matilda Hsieh': 'The whole experience · Matilda Hsieh',
    'Case study: Hela upplevelsen, om vad som krävs för att TV4 Play ska vara tillgängligt på riktigt för personer med syn- och hörselnedsättning. Grupprojekt i kvantitativa metoder.':
      'Case study: The whole experience, about what it takes for TV4 Play to be truly accessible for people with visual and hearing impairments. Group project in quantitative methods.',
    'Case study · Kvantitativa metoder · Grupprojekt': 'Case study · Quantitative methods · Group project',
    'Hela upplevelsen': 'The whole experience',
    'Vad krävs för att en streamingtjänst ska vara tillgänglig på riktigt? Vi tittade på TV4 Play med fokus på personer med syn- och hörselnedsättning.':
      'What does it take for a streaming service to be truly accessible? We looked at TV4 Play, focusing on people with visual and hearing impairments.',
    'Tjänst': 'Service',
    'Team': 'Team',
    'Enkät · Workshop · Card sorting · Syntes': 'Survey · Workshop · Card sorting · Synthesis',
    'Februari 2026': 'February 2026',
    '01 · Problembild': '01 · Problem',
    'Krav mot teknisk kapacitet': 'Requirements versus technical capacity',
    'I kursen Kvantitativa metoder på Nackademin valde vi själva att titta på TV4 Play. För att förstå problemet läste vi rapporten med beslutsmodell för krav på tillgänglighet i tv-sändningar och beställ-tv från 2021, utforskade TV4 Plays tillgänglighet och träffade en representant från SRF.':
      'In the Quantitative methods course at Nackademin, we chose to look at TV4 Play. To understand the problem, we read the 2021 report with a decision model for accessibility requirements in TV broadcasts and on-demand TV, explored TV4 Play’s accessibility and met a representative from SRF, the Swedish Association of the Visually Impaired.',
    'Vi kartlade också hela vägen från idé till slutprodukt, för att se var i kedjan tillgängligheten hamnar. Där hittade vi ett teknikgap i direktsänd textning: kraven är högre än vad tekniken klarar idag.':
      'We also mapped the whole way from idea to finished product, to see where in the chain accessibility ends up. That’s where we found a technology gap in live subtitling: the requirements are higher than what the technology can handle today.',
    'Tidslinje från idé till slutprodukt: idé, innehållsskapare och investerare, sedan tillgänglighetsskapare, regulatorer och myndigheter och teknikleverantörer, sedan distributörer, tillgängliggör och annonsör, och sist användarna.':
      'Timeline from idea to finished product: idea, content creators and investors, then accessibility creators, regulators and authorities and technology suppliers, then distributors, accessibility providers and advertisers, and finally the users.',
    'Från idé till slutprodukt. Vi kartlade alla som är inblandade, från idé och innehållsskapare till myndigheter, distributörer och användare.':
      'From idea to finished product. We mapped everyone involved, from the idea and content creators to authorities, distributors and users. The board is in Swedish.',
    '02 · Arbetsprocess': '02 · Process',
    'Tre steg': 'Three steps',
    'Empati': 'Empathy',
    'Analys av beslutsmodellen (2021)': 'Analysis of the decision model (2021)',
    'Utforskning av TV4 Plays tillgänglighet': 'Exploring TV4 Play’s accessibility',
    'Samla insikter': 'Gather insights',
    'Kartläggning av produktionskedjan': 'Mapping the production chain',
    'Utformning av enkät': 'Designing a survey',
    'Omvärldsanalys': 'Environmental scan',
    'Strukturera': 'Structure',
    'Workshop': 'Workshop',
    'Card sorting': 'Card sorting',
    'Sortering av data': 'Sorting the data',
    'AI som Red team': 'AI as a red team',
    '03 · Första hypotesen': '03 · First hypothesis',
    'Ett tekniskt problem?': 'A technical problem?',
    'Vi gick tillbaka till kartan över alla inblandade och valde med dot voting vilken hypotes vi skulle gå vidare med.':
      'We went back to the map of everyone involved and used dot voting to choose which hypothesis to take further.',
    '”Vi tror att bristen på tillgänglighet i direktsändningar beror på en teknisk eftersläpning i produktionskedjan. Om tal-till-text-verktyg blir bättre automatiserade och håller tillräckligt hög kvalitet, så kommer de att möta myndighetens precisionskrav på 60 %, utan dyr mänsklig kontroll.”':
      '“We believe the lack of accessibility in live broadcasts is caused by a technical lag in the production chain. If speech-to-text tools become better automated and keep a high enough quality, they will meet the authority’s accuracy requirement of 60%, without expensive human checking.”',
    'Vår valda hypotes': 'Our chosen hypothesis',
    '04 · Enkät': '04 · Survey',
    'Tio frågor till de som textar': 'Ten questions for the people who subtitle',
    'Vi utformade en enkät till personer som jobbar med textning vid direktsändning. Den skickades aldrig ut, men vi fick feedback på den i en gruppövning.':
      'We designed a survey for people who work with subtitling live broadcasts. It was never sent out, but we got feedback on it in a group exercise.',
    'enkätfrågor': 'survey questions',
    'kärnfrågor: hur många som arbetar med textning, när i processen tillgänglighet beaktas och vilket arbetssätt som används':
      'core questions: how many people work with subtitling, when in the process accessibility is considered and which way of working is used',
    'målgrupp: de som textar direktsändningar': 'target group: the people who subtitle live broadcasts',
    'Språk': 'Language',
    'Felstavningar och en blandning av svenska och engelska.': 'Spelling mistakes and a mix of Swedish and English.',
    'Formulering': 'Wording',
    'Ledande frågor och otydliga eller överlappande svarsalternativ. Vissa frågor behövde preciseras, till exempel ”texten inte rätt i sändning”.':
      'Leading questions and unclear or overlapping answer options. Some questions needed to be more precise, for example “the subtitles are wrong in the broadcast”.',
    'Insikt': 'Insight',
    'Tydliga och neutrala frågor är det som ger tillförlitliga svar.': 'Clear and neutral questions are what give reliable answers.',
    '05 · Workshop': '05 · Workshop',
    'TV4 Play genom någon annans ögon': 'TV4 Play through someone else’s eyes',
    'Med Cards of Humanity och Funkify kombinerade vi en funktionsnedsättning med ett karaktärsdrag och testade TV4 Plays tillgänglighet utifrån den personen.':
      'With Cards of Humanity and Funkify, we combined a disability with a character trait and tested TV4 Play’s accessibility from that person’s point of view.',
    'Ibland blev kombinationerna orealistiska, som en 25-årig kvinna med demens, och personorna var inte alltid rättvist framställda, som ”Hyperactive Henny”.':
      'Sometimes the combinations were unrealistic, like a 25-year-old woman with dementia, and the personas weren’t always fairly portrayed, like “Hyperactive Henny”.',
    'Tillgänglighet är inte bara teknik.': 'Accessibility isn’t just technology.',
    'Det är viktigt med ett verkligt användarperspektiv.': 'A real user perspective matters.',
    '06 · Open card sorting': '06 · Open card sorting',
    'Innehållet finns, men går inte att hitta': 'The content is there, but you can’t find it',
    'Scenariot kom från läraren: syntolkat och teckentolkat material finns, men strukturen gör det svårt att hitta. Problemet handlar alltså om struktur, inte om produktion.':
      'The scenario came from our teacher: audio-described and sign-language content exists, but the structure makes it hard to find. So the problem is about structure, not production.',
    'Med fokus på synnedsättning plockade vi isär TV4 Play: kategorier, etiketter, menyer, innehållstyper och sökord blev egna kort. Tomma kort gav plats för användarens egna ord, så att vi kunde se användarens mentala modell i stället för systemets logik.':
      'Focusing on visual impairment, we took TV4 Play apart: categories, labels, menus, content types and search words each became their own card. Blank cards left room for the user’s own words, so we could see the user’s mental model instead of the system’s logic.',
    '”Användaren vill ha en tydlig väg till syntolkat material.”': '“The user wants a clear path to audio-described content.”',
    'Handskrivna kort på ett bord: Sök, Support, Kanaler, Våra paket, Kategorier och Sport, med whiteboardpennor bredvid.':
      'Handwritten cards on a table, in Swedish: Search, Support, Channels, Our packages, Categories and Sport, with whiteboard pens next to them.',
    'Korten vi gjorde av TV4 Plays nuvarande struktur.': 'The cards we made from TV4 Play’s current structure.',
    '07 · Sortering av data': '07 · Sorting the data',
    'Från 30 citat till mönster': 'From 30 quotes to patterns',
    'Datan var övningsmaterial: ett fiktivt utdrag ur en undersökning om hur personer med syn- och hörselnedsättning upplever streamingtjänster, som läraren tagit fram. Det var alltså inte riktiga användare.':
      'The data was practice material: a fictional excerpt from a study on how people with visual and hearing impairments experience streaming services, written by our teacher. So these weren’t real users.',
    'Först städade, sorterade och filtrerade vi datan i Excel, till exempel funktionsnedsättning kopplat till tjänst. Sedan tog vi 30 citat och sorterade och kategoriserade dem för att hitta de största hindren och klyftan mellan vad AI kan och hur användarna upplever det.':
      'First we cleaned, sorted and filtered the data in Excel, for example disability linked to service. Then we took 30 quotes and sorted and categorised them to find the biggest barriers and the gap between what AI can do and how users experience it.',
    '”Dålig beskrivning av till exempel miljö och tider i bilden.”': '“Poor description of, for example, settings and times in the picture.”',
    '”AI saknar eller missar kontext, ironi och känsla.”': '“AI lacks or misses context, irony and feeling.”',
    'De tre största hindren': 'The three biggest barriers',
    'Inställningar och gränssnitt': 'Settings and interface',
    'Brist på innehåll': 'Lack of content',
    'Kvalitet': 'Quality',
    'FigJam-tavla med citaten från grupp 1, synnedsättning och blindhet, och grupp 2, hörselnedsättning och dövhet, och fyra ytor med lappar: hinder, AI-klyftan, synteser och lösningar.':
      'FigJam board with the quotes from group 1, visual impairment and blindness, and group 2, hearing impairment and deafness, and four areas of sticky notes: barriers, the AI gap, syntheses and solutions.',
    'Citaten sorterade i FigJam: hinder, AI-klyftan, synteser och lösningar.': 'The quotes sorted in FigJam: barriers, the AI gap, syntheses and solutions. The board is in Swedish.',
    '08 · Syntes': '08 · Synthesis',
    'Användare får tillgång till': 'Users get access to',
    'vad som händer': 'what happens',
    ', men exkluderas från': ', but are excluded from',
    'hur det känns': 'how it feels',
    'Det finns en ojämlikhet i den konstnärliga upplevelsen. Om en seende eller hörande person får uppleva spänning genom musik och blickar, får en person med funktionsnedsättning bara uppleva fakta.':
      'There’s an inequality in the artistic experience. While a sighted or hearing person gets to feel suspense through music and glances, a person with a disability only gets the facts.',
    'Får inte hela upplevelsen': 'Doesn’t get the whole experience',
    'leder till': 'leads to',
    'Känsla av exkludering': 'Feeling excluded',
    '09 · Andra hypotesen': '09 · Second hypothesis',
    'Med syntesen i bagaget formulerade vi en ny hypotes, som vi sedan lät AI granska som ett Red team.':
      'With the synthesis in hand, we wrote a new hypothesis, which we then had AI review as a red team.',
    '”Om vi ökar träffsäkerheten med AI-drivna tillgänglighetsfunktioner med 50 %, så kommer nöjdheten hos användare med syn- eller hörselnedsättningar öka med minst 10 %.”':
      '“If we increase the accuracy of AI-driven accessibility features by 50%, satisfaction among users with visual or hearing impairments will increase by at least 10%.”',
    'Andra hypotesen': 'Second hypothesis',
    'AI som Red team i fyra steg': 'AI as a red team in four steps',
    '1. Kritik': '1. Critique',
    '2. Insikter': '2. Insights',
    '3. Stöd': '3. Support',
    '4. Feedback': '4. Feedback',
    '10 · Vad vi lärde oss': '10 · What we learned',
    'Kill your darlings.': 'Kill your darlings.',
    'En bred uppgift gav oss frihet att hitta en egen metod och att testa oss fram.': 'A broad assignment gave us the freedom to find our own method and to try things out.',
    'Utmaningar': 'Challenges',
    'En bred uppgift': 'A broad assignment',
    'Ett annat perspektiv': 'A different perspective',
    'Ingen erfarenhet av medieproduktion': 'No experience of media production',
    'Svårt att veta syftet och ställa rätt frågor': 'Hard to know the purpose and ask the right questions',
    'Lärdomar': 'Lessons',
    'Bred uppgift, egen metod': 'Broad assignment, our own method',
    'Frihet att testa': 'Freedom to try things',
    'Kill your darlings': 'Kill your darlings',
    'Min del': 'My part',
    'Alla i gruppen skrev sina delar. Jag formgav presentationen så att den blev tydlig och intressant att lyssna på.':
      'Everyone in the group wrote their own parts. I designed the presentation so it was clear and interesting to listen to.',
    'Vad krävs för att en streamingtjänst ska vara tillgänglig på riktigt? Vi tittade på TV4 Play med fokus på syn- och hörselnedsättning.':
      'What does it take for a streaming service to be truly accessible? We looked at TV4 Play, focusing on visual and hearing impairments.',

    /* ---------- Quizprojekt ---------- */
    'Nästa case är hemligt': 'The next case is a secret',
    'Men inte så länge till.': 'But not for much longer.',
    'Hur håller man ett quiz roligt när några lag alltid dominerar? Vi läste 39 inlägg och recensioner från quizvärdar och testade idén på riktiga quizvärdar.': 'How do you keep a quiz fun when some teams always dominate? We read 39 posts and reviews from quiz hosts and tested the idea on real quiz hosts.',
    'Case study · Användarcentrerad design · Grupprojekt': 'Case study · User-centred design · Group project',
    'Quizmästarens dilemma': 'The quizmaster’s dilemma',
    'Uppdragsgivare': 'Client',
    'Metod': 'Method',
    'Netnografi · HILS · Comprehension test': 'Netnography · HILS · Comprehension test',
    'Mars 2026': 'March 2026',
    '01 · Uppdraget': '01 · The brief',
    'Värt att bygga, eller inte?': 'Worth building, or not?',
    'Flatwave AB är en startup som ser potential för innovation inom quiz. Vårt uppdrag var en strategisk behovsvalidering i ett tidigt discovery-skede: minska osäkerheten och ta reda på om det finns problem som är värda att bygga en produkt för.': 'Flatwave AB is a startup that sees room for innovation in quizzes. Our brief was a strategic needs validation in an early discovery phase: reduce uncertainty and find out whether there are problems worth building a product for.',
    'Finns det tillräckligt starka och återkommande behov, så kallade HILS-behov, hos quiz-skapare eller quiz-värdar för att motivera vidare investering?': 'Are there strong enough, recurring needs, so-called HILS needs, among quiz creators or quiz hosts to justify further investment?',
    '02 · Metod': '02 · Method',
    'Vi lyssnade där quizvärdar redan pratar': 'We listened where quiz hosts already talk',
    'Med netnografi samlade vi in det quizvärdar själva skriver på Reddit, Trustpilot och i recensioner av quizverktyg. Varje citat fick ett eget ID, en källa, en trådtitel och en länk, så att varje slutsats går att spåra tillbaka till det som faktiskt skrevs.': 'Using netnography we collected what quiz hosts themselves write on Reddit, Trustpilot and in reviews of quiz tools. Every quote got its own ID, a source, a thread title and a link, so every conclusion can be traced back to what was actually written.',
    'evidenspunkter om pubquizvärdar': 'evidence points about pub quiz hosts',
    'evidenspunkter om Kahoot': 'evidence points about Kahoot',
    'comprehension tests med quizvärdar': 'comprehension tests with quiz hosts',
    'Evidensarket i Google Sheets med kolumnerna Evidens-ID, Källa, Tråd, Känslosignal, Citat, Datum och Länk för evidenspunkterna E01 till E08': 'The evidence sheet in Google Sheets with the columns Evidence ID, Source, Thread, Emotion signal, Quote, Date and Link for evidence points E01 to E08',
    'Evidensarket. Varje rad är en evidenspunkt med ID, källa, känslosignal, citat, datum och länk. De ID som är markerade i cyan är evidensen vi gick vidare med.': 'The evidence sheet. Each row is one evidence point with an ID, source, emotion signal, quote, date and link. The IDs marked in cyan are the evidence we went with.',
    '03 · Segmentering': '03 · Segmentation',
    'Två segment, ett val': 'Two segments, one choice',
    'Valt': 'Chosen',
    'Pubquizvärdar': 'Pub quiz hosts',
    'Driver quiz som affärsverksamhet eller regelbunden sidosyssla på lokala barer. Ser sig själva som både skapare och underhållare.': 'Run quizzes as a business or a regular side gig at local bars. See themselves as both creators and entertainers.',
    'Hur ofta': 'How often',
    'Ofta en gång i veckan. En värd håller fem i veckan.': 'Often once a week. One host runs five a week.',
    'Om quizet misslyckas': 'If the quiz fails',
    'Tråkig stämning, deltagare slutar komma och barägaren anlitar någon annan.': 'A dull atmosphere, players stop coming and the bar owner hires someone else.',
    'Bortvalt': 'Not chosen',
    'Lärare': 'Teachers',
    'Använder digitala quiz för att kontrollera kunskap eller repetera inför prov.': 'Use digital quizzes to check knowledge or revise before tests.',
    'Varje vecka, oftast i slutet av veckan.': 'Every week, usually at the end of the week.',
    'Eleverna lär sig inte materialet och lektionstiden känns bortkastad.': 'Students don’t learn the material and the lesson feels wasted.',
    'För pubquizvärden är quizet en produkt som kräver kreativitet, egen stil och att kunna hantera en vuxen publik. För läraren är quizet ett medel för att nå ett pedagogiskt mål. Vi valde pubquizvärdarna.': 'For the pub quiz host, the quiz is a product that takes creativity, a personal style and handling an adult crowd. For the teacher, the quiz is a means to a teaching goal. We chose the pub quiz hosts.',
    '04 · Jobs, pains & gains': '04 · Jobs, pains & gains',
    'Tre jobs, ett i centrum': 'Three jobs, one at the centre',
    'Job 1 · Mest centralt': 'Job 1 · Most central',
    'Skapa och genomföra ett rättvist, engagerande och roligt quiz': 'Create and run a fair, engaging and fun quiz',
    'Misstänkt fusk och dominanta lag. Svårt att balansera frågorna så att alla har en chans.': 'Suspected cheating and dominant teams. Hard to balance the questions so everyone has a chance.',
    'Ett roligt och lättsamt quiz, inget fusk och fler lag som har chans att vinna.': 'A fun and light-hearted quiz, no cheating and more teams with a chance to win.',
    'Skapa quizfrågor snabbare och spara tid': 'Write quiz questions faster and save time',
    'Det tar lång tid att skapa quiz, och andras frågor gör quizet generiskt.': 'Quizzes take a long time to make, and other people’s questions make the quiz generic.',
    'Kunna byta frågor med andra quizmasters och få ett effektivare arbetsflöde.': 'Being able to swap questions with other quizmasters and a more efficient workflow.',
    'Kunna kolla fakta snabbt under quizet': 'Check facts quickly during the quiz',
    'Svårt att hitta tillförlitliga svar snabbt.': 'Hard to find reliable answers quickly.',
    'Snabb faktakoll minskar stressen.': 'Quick fact-checking reduces stress.',
    'Job 1 kom tillbaka i flest evidenspunkter och kopplade till flest pains, så det blev vårt fokus.': 'Job 1 came up in the most evidence points and linked to the most pains, so it became our focus.',
    'FigJam-tavla. Steg 2: jobs hämtade från evidenspunkterna, där de tre mest relevanta prioriteras. Steg 3: pains och gains för E01, E17 och E29.': 'FigJam board. Step 2: jobs taken from the evidence points, with the three most relevant prioritised. Step 3: pains and gains for E01, E17 and E29.',
    'I FigJam gick vi från evidenspunkter till jobs, och sedan till pains och gains för E01, E17 och E29.': 'In FigJam we went from evidence points to jobs, then to pains and gains for E01, E17 and E29.',
    '05 · HILS-bedömning': '05 · HILS assessment',
    'Hur bra löser dagens verktyg jobbet?': 'How well do today’s tools do the job?',
    'Job 1: ett rättvist, engagerande och roligt quiz': 'Job 1: a fair, engaging and fun quiz',
    'Lösning': 'Solution',
    'Hög': 'High',
    'Medel': 'Medium',
    'Fungerar bra': 'Works well',
    'Skapar engagemang och är enkelt att komma igång med.': 'Creates engagement and is easy to get started with.',
    'Fungerar dåligt': 'Works poorly',
    'Otydligt vad som ingår i en betald prenumeration.': 'Unclear what a paid subscription includes.',
    'Hög impact och medel satisfaction betyder att behovet inte är fullt tillgodosett. Det gjorde Job 1 till ett HILS.': 'High impact and medium satisfaction mean the need isn’t fully met. That made Job 1 a HILS.',
    '06 · Beslut': '06 · Decision',
    'Behovet finns kvar hos pubquizvärdarna, men det finns fler jobs att utforska där behovet kan vara ännu mer prioriterat. Därför ett pivot: inte stopp, och inte full fart framåt.': 'The need is still there among pub quiz hosts, but there are more jobs to explore where the need may be even more pressing. Hence a pivot: not a stop, and not full speed ahead.',
    'För': 'For',
    'pubquizvärdar som håller i ett quiz på en pub': 'pub quiz hosts who run a quiz at a pub',
    'och har svårt att skapa ett rättvist spel eftersom': 'and find it hard to create a fair game because',
    'några lag blir för dominerande': 'some teams become too dominant',
    ', hjälper vi dem att': ', we help them',
    'skapa ett mer balanserat och engagerande quiz': 'create a more balanced and engaging quiz',
    'så att': 'so that',
    'Värde': 'Value',
    'fler deltagare håller sig involverade och spelet blir roligare för alla': 'more players stay involved and the game is more fun for everyone',
    '07 · Comprehension test': '07 · Comprehension test',
    'Förstår quizvärdarna vad vi menar?': 'Do quiz hosts get what we mean?',
    'Vi kontaktade quizvärdar i Stockholm och testade value propositionen på tre personer, två på plats och en via Zoom. Vi läste upp förslaget och bad dem återberätta det med egna ord.': 'We contacted quiz hosts in Stockholm and tested the value proposition on three people, two in person and one over Zoom. We read the proposal aloud and asked them to retell it in their own words.',
    'Förstod helt': 'Understood fully',
    'Osäker': 'Unsure',
    'Bara en av tre förstod budskapet helt. Två av testpersonerna hade mest erfarenhet av att skapa quiz, inte av att hålla i dem. Nästa gång skulle vi ha ett manus och öva på presentationen innan.': 'Only one in three understood the message fully. Two of the participants mostly had experience of creating quizzes, not running them. Next time we’d have a script and rehearse the presentation first.',
    '08 · Vad jag lärde mig': '08 · What I learned',
    'När man arbetar med något nytt under tidspress är det lätt att låsa sig fast vid strukturer och mallar.': 'When you work on something new under time pressure, it’s easy to get locked into structures and templates.',
    'Jag snöade in mig på hur en job story skulle formuleras och tappade fokus på vad datan faktiskt sa. Det tar jag med mig framåt.': 'I got hung up on how a job story should be worded and lost sight of what the data actually said. That’s something I’m taking with me.',
    'Mest riskfyllda hypotesen': 'The riskiest hypothesis',
    'Att det nya jobbet verkligen är viktigt för pubquizvärdarna. Är det fel borde beslutet ha varit att inte fortsätta alls.': 'That the new job really matters to pub quiz hosts. If that’s wrong, the decision should have been not to continue at all.',
    'Metodkritik': 'Method critique',
    'Bara en av tre testpersoner hade hållit i ett pubquiz. Och online är det svårt att veta hur mycket man egentligen vet om kontexten bakom ett inlägg.': 'Only one of three participants had run a pub quiz. And online, it’s hard to know how much you really know about the context behind a post.',
    'Vi använde AI som bollplank för formuleringar och för att förklara begrepp, aldrig som källa. Resultaten dubbelkollade vi alltid själva.': 'We used AI as a sounding board for wording and to explain concepts, never as a source. We always double-checked the results ourselves.',
    'Case study: Quizmästarens dilemma, en behovsvalidering med netnografi, HILS och comprehension test för Flatwave AB. Grupprojekt i användarcentrerad design.': 'Case study: The quizmaster’s dilemma, a needs validation using netnography, HILS and comprehension tests for Flatwave AB. Group project in user-centred design.',
    'Quizmästarens dilemma · Matilda Hsieh': 'The quizmaster’s dilemma · Matilda Hsieh',
    'Startsidan': 'Home page',
    'Produktsida': 'Product page',
    'Alla': 'Everyone'
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
