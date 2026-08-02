const icons = {
  map: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18 3 21V6l6-3 6 3 6-3v15l-6 3zM9 3v15m6-12v15"/></svg>',
  route: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 18a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm14-16a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM5 18c0-5 14-3 14-8V6"/></svg>',
  phone: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.5 3h3l1.5 5-2 1.5a15 15 0 0 0 5.5 5.5l1.5-2 5 1.5v3c0 1.7-1.3 3-3 3A15 15 0 0 1 3.5 6c0-1.7 1.3-3 3-3Z"/></svg>',
  link: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10 14a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-2 2m3 4a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l2-2"/></svg>'
};

const trip = {
  start: new Date('2026-08-03T00:00:00+02:00'),
  end: new Date('2026-08-09T23:59:59+02:00'),
  days: [
    {
      date: '2026-08-03', weekday: 'Lunedì', number: 3,
      title: 'Arrivo a Baška', subtitle: 'Viaggio, check-in e taxi boat',
      items: [
        { time: '04:30', title: 'Partenza da casa', text: 'Arrivo previsto a Baška tra le 10:30 e le 12:00.', tags: ['Partenza da inserire'] },
        { time: '10:30–12:00', title: 'Arrivo all’alloggio', text: 'Creska 9, 51523 Baška. Verificare orario effettivo del check-in.', place: 'Creska 9, 51523 Baška, Croatia' },
        { time: 'Pomeriggio', title: 'Storišće Beach', text: 'Prima opzione: taxi boat, indicativamente 12 € a persona A/R. In alternativa 8 minuti in auto più tratto a piedi, oppure circa un’ora a piedi.', place: 'Storišće Beach, Baška, Croatia', tags: ['Taxi boat da confermare'] },
        { time: 'Alternativa', title: 'Vela Luka', text: 'Taxi boat consigliato. Possibile pranzo al ristorante della baia e cambio spiaggia a metà pomeriggio.', place: 'Vela Luka Beach, Baška, Croatia', tags: ['Ristorante da identificare'] }
      ]
    },
    {
      date: '2026-08-04', weekday: 'Martedì', number: 4,
      title: 'Barca a vela e Krk', subtitle: 'Punat, Golden Beach e quattro isole',
      items: [
        { time: '09:00', title: 'Partenza per Punat', text: 'Punto d’incontro: Yacht Town di Punat, molo principale, davanti al Boutique Hotel Marina e vicino alla lanterna verde.', place: 'Antuna Mahnića 14, 51500 Krk, Croatia' },
        { time: '10:15', title: 'Ritrovo per la barca', text: 'Presentarsi 15 minuti prima. Partenza prevista alle 10:30 per Grotta dell’Amore, Golden Beach e giro lungo quattro isole.', place: 'Antuna Mahnića 14, 51500 Krk, Croatia', tags: ['Operatore e prenotazione da aggiungere'] },
        { time: 'Pomeriggio', title: 'Koralj Beach', text: 'Spiaggia probabilmente molto affollata: valutare sul momento.', place: 'Koralj Beach, Krk, Croatia' },
        { time: 'Piano B', title: 'Spiaggia o faro', text: 'Recuperare una spiaggia non fatta il giorno 1 oppure visitare il faro vicino a Baška per il panorama.', place: 'Lighthouse Baška, Croatia', tags: ['Posizione del faro da verificare'] }
      ]
    },
    {
      date: '2026-08-05', weekday: 'Mercoledì', number: 5,
      title: 'Da Krk a Cres', subtitle: 'Traghetto e discesa a Sveti Ivan',
      items: [
        { time: 'Mattina', title: 'Check-out', text: 'Caricare l’auto e partire in anticipo: in estate può esserci traffico all’ingresso del porto.' },
        { time: '08:15–08:30', title: 'Arrivo a Valbiska', text: 'Mettersi in fila con l’auto almeno 30–45 minuti prima della partenza.', place: 'Valbiska Ferry Port, Krk, Croatia' },
        { time: '09:15 → 09:40', title: 'Traghetto Valbiska–Merag', text: 'Traversata prevista di 25 minuti. Alternativa indicata nel PDF: 10:45 → 11:10.', place: 'Valbiska Ferry Port, Krk, Croatia', url: 'https://www.jadrolinija.hr/', tags: ['Verificare biglietto e orario 2026'] },
        { time: 'Dopo lo sbarco', title: 'Secondo alloggio', text: 'Lasciare i bagagli e recuperare acqua e cibo. Indirizzo ancora da inserire.', tags: ['Dato mancante'] },
        { time: 'Pomeriggio', title: 'Lubenice e Sveti Ivan', text: 'Sentiero panoramico: circa un’ora in discesa e più impegnativo al ritorno. Non ci sono bar nei dintorni.', place: 'Sveti Ivan Beach, Lubenice, Cres, Croatia', tags: ['Scarpe da ginnastica', 'Acqua e cibo'] }
      ]
    },
    {
      date: '2026-08-06', weekday: 'Giovedì', number: 6,
      title: 'Baia di Verin', subtitle: 'Cres in bicicletta',
      items: [
        { time: 'Mattina', title: 'Noleggio biciclette', text: 'Valutare bici normali o elettriche da Gonzo Sport a Cres.', place: 'Tuo Gonzo Rent a Bike, Cres, Croatia', tags: ['Telefono e disponibilità da verificare'] },
        { time: 'Giornata', title: 'Baia di Verin', text: 'Percorso su sterrato verso la baia. Controllare autonomia, acqua e condizioni del fondo.', place: 'Verin Bay, Cres, Croatia', tags: ['Accesso preciso da verificare'] }
      ]
    },
    {
      date: '2026-08-07', weekday: 'Venerdì', number: 7,
      title: 'Grotta Azzurra', subtitle: 'Escursione e Plaža Slatina',
      items: [
        { time: 'Da definire', title: 'Escursione alla Grotta Azzurra', text: 'Cercare e prenotare un’escursione compatibile con la giornata.', place: 'Blue Cave Cres, Croatia', tags: ['Escursione da scegliere'] },
        { time: 'Alternativa', title: 'Plaža Slatina', text: 'Spiaggia a Martinšćica, indicata nel PDF come possibile tappa.', place: 'Plaža Slatina, Martinšćica, Croatia' }
      ]
    },
    {
      date: '2026-08-08', weekday: 'Sabato', number: 8,
      title: 'I sette cancelli', subtitle: 'Sentiero per Meli Plat',
      items: [
        { time: 'Mattina', title: 'Verso Srme i Plat', text: 'Dalla strada principale, all’incrocio per Ustrine, seguire Verin e poi Srme i Plat. Lasciare l’auto al bivio per Verin.', place: 'Srme i Plat, Cres, Croatia', tags: ['Parcheggio preciso da verificare'] },
        { time: 'Giornata', title: 'Spiaggia dei sette cancelli', text: 'Circa 20 minuti fino al piccolo molo, poi altri 4–5 minuti fino alla spiaggia. Il nome deriva dai cancelli da oltrepassare lungo il sentiero.', place: 'Meli Plat Beach, Cres, Croatia', tags: ['Scarpe adatte', 'Acqua e cibo'] }
      ]
    },
    {
      date: '2026-08-09', weekday: 'Domenica', number: 9,
      title: 'Krušćica e rientro', subtitle: 'Ultimo trekking e traghetto',
      items: [
        { time: 'Mattina', title: 'Plaža Krušćica', text: 'Baia a pochi chilometri da Merag. L’ultimo tratto è un trekking; al ritorno è più impegnativo.', place: 'Plaža Krušćica, Merag, Cres, Croatia', tags: ['Scarpe adatte'] },
        { time: 'Prima delle 18:15', title: 'Arrivo al porto di Merag', text: 'Presentarsi 30–45 minuti prima con l’auto.', place: 'Merag Ferry Port, Cres, Croatia' },
        { time: '19:00 → 19:25', title: 'Traghetto Merag–Valbiska', text: 'Orario riportato nel riepilogo del PDF. Verificare conferma e biglietto.', place: 'Merag Ferry Port, Cres, Croatia', url: 'https://www.jadrolinija.hr/', tags: ['Verificare orario 2026'] }
      ]
    }
  ]
};

const places = [
  { name: 'Alloggio a Baška', area: 'Baška · Krk', category: 'alloggi', icon: '⌂', address: 'Creska 9, 51523 Baška, Croatia', note: 'Primo alloggio. Telefono e nome della struttura da aggiungere.' },
  { name: 'Storišće Beach', area: 'Baška · Krk', category: 'spiagge', icon: '≈', address: 'Storišće Beach, Baška, Croatia', note: 'Taxi boat oppure auto e sentiero.' },
  { name: 'Vela Luka', area: 'Baška · Krk', category: 'spiagge', icon: '≈', address: 'Vela Luka Beach, Baška, Croatia', note: 'Taxi boat e possibile pranzo al ristorante della baia.' },
  { name: 'Punto barca a Punat', area: 'Punat · Krk', category: 'attivita', icon: '◒', address: 'Antuna Mahnića 14, 51500 Krk, Croatia', note: 'Yacht Town, molo principale, vicino alla lanterna verde.' },
  { name: 'Koralj Beach', area: 'Krk', category: 'spiagge', icon: '≈', address: 'Koralj Beach, Krk, Croatia', note: 'Probabile forte affollamento nel pomeriggio.' },
  { name: 'Porto di Valbiska', area: 'Krk', category: 'trasporti', icon: '⇄', address: 'Valbiska Ferry Port, Krk, Croatia', note: 'Imbarco per Merag. Arrivare 30–45 minuti prima.' },
  { name: 'Porto di Merag', area: 'Cres', category: 'trasporti', icon: '⇄', address: 'Merag Ferry Port, Cres, Croatia', note: 'Collegamento con Valbiska.' },
  { name: 'Sveti Ivan Beach', area: 'Lubenice · Cres', category: 'spiagge', icon: '≈', address: 'Sveti Ivan Beach, Lubenice, Cres, Croatia', note: 'Trekking impegnativo. Nessun bar: portare acqua e cibo.' },
  { name: 'Gonzo Sport', area: 'Cres', category: 'attivita', icon: '⌁', address: 'Tuo Gonzo Rent a Bike, Cres, Croatia', note: 'Noleggio bici ed e-bike; contatto da verificare.' },
  { name: 'Baia di Verin', area: 'Cres', category: 'spiagge', icon: '≈', address: 'Verin Bay, Cres, Croatia', note: 'Accesso su sterrato.' },
  { name: 'Plaža Slatina', area: 'Martinšćica · Cres', category: 'spiagge', icon: '≈', address: 'Plaža Slatina, Martinšćica, Croatia', note: 'Possibile tappa insieme alla Grotta Azzurra.' },
  { name: 'Meli Plat · Sette cancelli', area: 'Cres', category: 'spiagge', icon: '≈', address: 'Meli Plat Beach, Cres, Croatia', note: 'Sentiero con cancelli; portare scarpe adatte.' },
  { name: 'Plaža Krušćica', area: 'Merag · Cres', category: 'spiagge', icon: '≈', address: 'Plaža Krušćica, Merag, Cres, Croatia', note: 'Ultimo tratto a piedi, ritorno impegnativo.' }
];

const utilities = [
  { name: 'Farmacie vicino a me', subtitle: 'Ricerca in Apple Maps', icon: '✚', query: 'pharmacy' },
  { name: 'Distributori vicino a me', subtitle: 'Ricerca in Apple Maps', icon: '⛽', query: 'gas station' },
  { name: 'Supermercati vicino a me', subtitle: 'Ricerca in Apple Maps', icon: '⌑', query: 'supermarket' },
  { name: 'Pronto soccorso vicino a me', subtitle: 'Ricerca in Apple Maps', icon: '♥', query: 'hospital emergency' }
];

const app = document.querySelector('#app');
const installDialog = document.querySelector('#install-dialog');

function mapSearch(query) {
  return `https://maps.apple.com/?q=${encodeURIComponent(query)}`;
}

function directions(destination, mode = 'd') {
  return `https://maps.apple.com/?daddr=${encodeURIComponent(destination)}&dirflg=${mode}`;
}

function mapsButtons(place, compact = false) {
  if (!place) return '';
  return `<div class="actions">
    <a class="button ${compact ? 'soft' : 'primary'}" href="${directions(place)}" target="_blank" rel="noopener">${icons.route} Indicazioni</a>
    ${compact ? '' : `<a class="button" href="${mapSearch(place)}" target="_blank" rel="noopener">${icons.map} Vedi mappa</a>`}
  </div>`;
}

function itemActions(item) {
  if (!item.place && !item.url) return '';
  return `<div class="actions">
    ${item.place ? `<a class="button soft" href="${directions(item.place)}" target="_blank" rel="noopener">${icons.route} Indicazioni</a>` : ''}
    ${item.url ? `<a class="button" href="${item.url}" target="_blank" rel="noopener">${icons.link} Sito</a>` : ''}
  </div>`;
}

function tags(items = []) {
  if (!items.length) return '';
  return `<div class="tip-list">${items.map(item => `<span class="pill warning">${item}</span>`).join('')}</div>`;
}

function getTripState() {
  const now = new Date();
  if (now < trip.start) {
    const days = Math.ceil((trip.start - now) / 86400000);
    const unit = days === 1 ? 'giorno' : 'giorni';
    return { kicker: 'Il viaggio si avvicina', title: `${days} ${unit} alla partenza`, day: trip.days[0], item: trip.days[0].items[0] };
  }
  if (now > trip.end) {
    return { kicker: 'Il vostro viaggio', title: 'Croazia 2026', day: trip.days[0], item: trip.days[0].items[0] };
  }
  const todayKey = new Intl.DateTimeFormat('sv-SE', { timeZone: 'Europe/Rome' }).format(now);
  const day = trip.days.find(entry => entry.date === todayKey) || trip.days[0];
  return { kicker: 'Il programma di oggi', title: `${day.weekday} ${day.number}`, day, item: day.items[0] };
}

function renderHome() {
  const state = getTripState();
  const heroTitle = state.title.replace(' alla ', '<br>alla ');
  app.innerHTML = `
    <section class="hero">
      <p class="eyebrow">${state.kicker}</p>
      <h1>${heroTitle}</h1>
      <div class="hero-meta">
        <span class="pill">3–9 agosto</span>
        <span class="pill">Krk · Cres</span>
      </div>
    </section>

    <section class="card next-card">
      <div class="next-top">
        <div>
          <span class="next-time">PRIMA TAPPA · ${state.day.weekday.toUpperCase()} ${state.day.number}</span>
          <h2>${state.item.title}</h2>
        </div>
        <span class="pill warning">Da preparare</span>
      </div>
      <p>${state.item.text}</p>
      ${itemActions(state.item)}
    </section>

    <section class="section">
      <div class="section-head"><h2>Accesso rapido</h2></div>
      <div class="quick-grid">
        <a class="card quick-card" href="#itinerario"><span class="quick-icon">☼</span><strong>7 giornate</strong><small>Programma completo</small></a>
        <a class="card quick-card" href="${directions('Creska 9, 51523 Baška, Croatia')}" target="_blank" rel="noopener"><span class="quick-icon">⌂</span><strong>Alloggio Baška</strong><small>Apri indicazioni</small></a>
        <a class="card quick-card" href="https://www.jadrolinija.hr/" target="_blank" rel="noopener"><span class="quick-icon">⇄</span><strong>Traghetto</strong><small>Jadrolinija</small></a>
        <a class="card quick-card" href="#utili"><span class="quick-icon">✚</span><strong>Servizi utili</strong><small>Farmacie e benzina</small></a>
      </div>
    </section>

    <section class="section">
      <div class="notice">
        <span>!</span>
        <div><strong>Informazioni da completare</strong><p>Secondo alloggio, telefoni, prenotazione della barca e alcune posizioni di accesso non sono presenti nel PDF.</p></div>
      </div>
    </section>

    <section class="section">
      <div class="section-head"><h2>Documenti</h2></div>
      <a class="card document-card" href="Croazia%202026.pdf" target="_blank">
        <span class="doc-icon">PDF</span>
        <span><strong>Programma originale</strong><small>16 pagine · disponibile come riferimento</small></span>
      </a>
    </section>`;
}

function renderTimelineItem(item) {
  return `<article class="timeline-item">
    <div class="timeline-time">${item.time}</div>
    <h3>${item.title}</h3>
    <p>${item.text}</p>
    ${tags(item.tags)}
    ${itemActions(item)}
  </article>`;
}

function renderItinerary() {
  app.innerHTML = `
    <header class="page-head">
      <p class="page-kicker">3–9 agosto 2026</p>
      <h1>Itinerario</h1>
      <p>Sette giornate tra Krk e Cres. Tocca un giorno per vedere orari, alternative e indicazioni.</p>
    </header>
    <div class="day-list">
      ${trip.days.map((day, index) => `
        <section class="card day-card ${index === 0 ? 'open' : ''}" data-day="${day.date}">
          <button class="day-summary" type="button" aria-expanded="${index === 0}">
            <span class="date-block"><strong>${day.number}</strong><small>AGO</small></span>
            <span class="day-title"><strong>${day.title}</strong><small>${day.weekday} · ${day.subtitle}</small></span>
            <span class="chevron" aria-hidden="true">›</span>
          </button>
          <div class="day-details">
            <div class="timeline">${day.items.map(renderTimelineItem).join('')}</div>
          </div>
        </section>`).join('')}
    </div>`;

  document.querySelectorAll('.day-summary').forEach(button => {
    button.addEventListener('click', () => {
      const card = button.closest('.day-card');
      const open = card.classList.toggle('open');
      button.setAttribute('aria-expanded', String(open));
    });
  });
}

function placeCard(place) {
  return `<article class="card place-card" data-category="${place.category}">
    <div class="place-card-head">
      <div><h2>${place.name}</h2><p class="place-area">${place.area}</p></div>
      <span class="place-icon" aria-hidden="true">${place.icon}</span>
    </div>
    <p>${place.note}</p>
    ${mapsButtons(place.address, true)}
  </article>`;
}

function renderPlaces() {
  const filterLabels = { all: 'Tutti', spiagge: 'Spiagge', attivita: 'Attività e rent', trasporti: 'Trasporti', alloggi: 'Alloggi' };
  app.innerHTML = `
    <header class="page-head">
      <p class="page-kicker">Tutto in un tocco</p>
      <h1>Luoghi</h1>
      <p>Spiagge, porti, attività e alloggi con collegamento diretto ad Apple Maps.</p>
    </header>
    <div class="filters" role="group" aria-label="Filtra i luoghi">
      ${Object.entries(filterLabels).map(([key, label], index) => `<button class="filter ${index === 0 ? 'active' : ''}" data-filter="${key}" type="button">${label}</button>`).join('')}
    </div>
    <div class="place-list">${places.map(placeCard).join('')}</div>`;

  document.querySelectorAll('.filter').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.filter').forEach(item => item.classList.toggle('active', item === button));
      const filter = button.dataset.filter;
      document.querySelectorAll('.place-card').forEach(card => {
        card.hidden = filter !== 'all' && card.dataset.category !== filter;
      });
    });
  });
}

function renderUtilities() {
  app.innerHTML = `
    <header class="page-head">
      <p class="page-kicker">Quando serve davvero</p>
      <h1>Informazioni utili</h1>
      <p>Ricerche rapide intorno alla posizione corrente e collegamenti importanti per il viaggio.</p>
    </header>

    <section>
      <div class="section-head"><h2>Vicino a me</h2></div>
      <div class="utility-grid">
        ${utilities.map(item => `<a class="card utility-card" href="${mapSearch(item.query)}" target="_blank" rel="noopener">
          <span class="utility-icon" aria-hidden="true">${item.icon}</span>
          <span><strong>${item.name}</strong><small>${item.subtitle}</small></span>
          <span class="utility-arrow" aria-hidden="true">›</span>
        </a>`).join('')}
      </div>
    </section>

    <section class="section">
      <div class="section-head"><h2>Trasporti e attività</h2></div>
      <div class="utility-grid">
        <a class="card utility-card" href="https://www.jadrolinija.hr/" target="_blank" rel="noopener">
          <span class="utility-icon">⇄</span><span><strong>Jadrolinija</strong><small>Orari e biglietti traghetto</small></span><span class="utility-arrow">›</span>
        </a>
        <a class="card utility-card" href="${mapSearch('Tuo Gonzo Rent a Bike, Cres, Croatia')}" target="_blank" rel="noopener">
          <span class="utility-icon">⌁</span><span><strong>Noleggio bici</strong><small>Gonzo Sport · Cres</small></span><span class="utility-arrow">›</span>
        </a>
      </div>
    </section>

    <section class="section">
      <div class="notice">
        <span>!</span>
        <div><strong>Numeri ancora da inserire</strong><p>Il PDF non contiene telefoni di hotel, taxi boat, barca a vela o noleggio. Li aggiungeremo dopo aver identificato le strutture corrette.</p></div>
      </div>
    </section>

    <section class="section">
      <div class="section-head"><h2>Backup</h2></div>
      <a class="card document-card" href="Croazia%202026.pdf" target="_blank">
        <span class="doc-icon">PDF</span><span><strong>Apri il PDF originale</strong><small>Programma preparato prima del viaggio</small></span>
      </a>
    </section>`;
}

function route() {
  const name = location.hash.replace('#', '').split('/')[0] || 'home';
  const routes = { home: renderHome, itinerario: renderItinerary, luoghi: renderPlaces, utili: renderUtilities };
  (routes[name] || renderHome)();
  document.querySelectorAll('.bottom-nav a').forEach(link => link.classList.toggle('active', link.dataset.route === name));
  window.scrollTo(0, 0);
  app.focus({ preventScroll: true });
}

document.querySelector('#install-help').addEventListener('click', () => installDialog.showModal());
window.addEventListener('hashchange', route);
route();

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js'));
}
