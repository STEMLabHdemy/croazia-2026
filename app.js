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

const STORAGE_KEY = 'croazia-2026-custom-data-v1';
const GUIDE_ID = 'croazia-2026';
const OWNER_EMAIL = 'stemlabhdemy@proton.me';
const defaults = JSON.parse(JSON.stringify({ days: trip.days, places, utilities }));
const cloud = { client: null, user: null, initialized: false, available: false, channel: null, dirty: false, saving: false };

function replaceArray(target, source) {
  target.splice(0, target.length, ...source);
}

function validData(data) {
  return data && Array.isArray(data.days) && data.days.length > 0 && data.days.every(day => Array.isArray(day.items)) && Array.isArray(data.places) && Array.isArray(data.utilities);
}

function applyData(data) {
  if (!validData(data)) throw new Error('Formato del backup non valido');
  replaceArray(trip.days, data.days);
  replaceArray(places, data.places);
  replaceArray(utilities, data.utilities);
}

function loadData() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (validData(saved)) applyData(saved);
  } catch (error) {
    console.warn('Impossibile caricare le personalizzazioni:', error);
  }
}

function saveData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ version: 1, days: trip.days, places, utilities }));
  cloud.dirty = true;
  updateSaveControls();
}

loadData();

const app = document.querySelector('#app');

function escapeHtml(value = '') {
  return String(value).replace(/[&<>'"]/g, character => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
  })[character]);
}

function showToast(message) {
  document.querySelector('.toast')?.remove();
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.setAttribute('role', 'status');
  toast.textContent = message;
  document.body.append(toast);
  setTimeout(() => toast.remove(), 2600);
}

function isStandalone() {
  return window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
}

function currentData() {
  return { version: 1, days: trip.days, places, utilities };
}

function stableStringify(value) {
  if (Array.isArray(value)) return `[${value.map(stableStringify).join(',')}]`;
  if (value && typeof value === 'object') {
    return `{${Object.keys(value).sort().map(key => `${JSON.stringify(key)}:${stableStringify(value[key])}`).join(',')}}`;
  }
  return JSON.stringify(value);
}

function setSaveStatus(message) {
  const status = document.querySelector('#save-status');
  if (status) status.textContent = message;
}

function updateSaveControls() {
  const button = document.querySelector('#save-all-changes');
  const status = document.querySelector('#save-status');
  if (button) {
    button.disabled = !cloud.dirty || cloud.saving;
    button.textContent = cloud.saving ? 'Salvataggio…' : 'Salva modifiche';
  }
  if (status) status.dataset.state = cloud.saving ? 'saving' : cloud.dirty ? 'dirty' : 'saved';
  if (cloud.saving) setSaveStatus('Invio delle modifiche…');
  else if (cloud.dirty) setSaveStatus('Modifiche non ancora salvate');
  else setSaveStatus('Tutto sincronizzato');
}

async function initCloud() {
  const config = window.CROAZIA_CLOUD;
  if (!config?.supabaseUrl || !config?.publishableKey || !window.supabase?.createClient) {
    cloud.initialized = true;
    return;
  }

  cloud.client = window.supabase.createClient(config.supabaseUrl, config.publishableKey, {
    auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true }
  });

  const { data: { session } } = await cloud.client.auth.getSession();
  cloud.user = session?.user || null;
  cloud.initialized = true;
  await loadCloudGuide();
  subscribeToCloud();

  cloud.client.auth.onAuthStateChange((_event, nextSession) => {
    cloud.user = nextSession?.user || null;
    if (location.hash.startsWith('#personalizza')) route();
  });

  if (location.hash.startsWith('#personalizza')) route();
}

async function loadCloudGuide() {
  if (!cloud.client) return false;
  const { data, error } = await cloud.client
    .from('travel_guides')
    .select('content, updated_at')
    .eq('id', GUIDE_ID)
    .maybeSingle();

  if (error) {
    cloud.available = false;
    console.warn('Cloud non ancora configurato:', error.message);
    return false;
  }

  cloud.available = true;
  if (data?.content && validData(data.content)) {
    applyData(data.content);
    cloud.dirty = false;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data.content));
    route();
    return true;
  }
  return false;
}

function subscribeToCloud() {
  if (!cloud.client || cloud.channel) return;
  cloud.channel = cloud.client
    .channel('croazia-2026-live')
    .on('postgres_changes', {
      event: '*', schema: 'public', table: 'travel_guides', filter: `id=eq.${GUIDE_ID}`
    }, payload => {
      const incoming = payload.new?.content;
      if (!validData(incoming) || stableStringify(incoming) === stableStringify(currentData())) return;
      if (cloud.dirty) {
        showToast('Aggiornamento cloud disponibile: salva prima la tua bozza');
        return;
      }
      applyData(incoming);
      cloud.dirty = false;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(incoming));
      route();
      showToast('Guida aggiornata dal cloud');
    })
    .subscribe();
}

async function saveCloudData() {
  if (!cloud.client || !cloud.user || cloud.saving) return false;
  cloud.saving = true;
  updateSaveControls();
  const payload = currentData();
  const { error } = await cloud.client.from('travel_guides').upsert({
    id: GUIDE_ID,
    owner_id: cloud.user.id,
    content: payload,
    updated_at: new Date().toISOString()
  }, { onConflict: 'id' });

  if (error) {
    cloud.saving = false;
    setSaveStatus('Errore di sincronizzazione');
    showToast('Non è stato possibile salvare nel cloud');
    updateSaveControls();
    return false;
  }

  cloud.available = true;
  cloud.saving = false;
  cloud.dirty = false;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  updateSaveControls();
  showToast('Modifiche salvate e sincronizzate');
  return true;
}

async function signInToCloud(password) {
  const { data, error } = await cloud.client.auth.signInWithPassword({ email: OWNER_EMAIL, password });
  if (error) throw error;
  cloud.user = data.user;
  const hasGuide = await loadCloudGuide();
  if (!hasGuide) await saveCloudData();
}

async function signOutFromCloud() {
  if (!cloud.client) return;
  if (cloud.dirty && !confirm('Hai modifiche non salvate. Vuoi uscire comunque dalla modalità modifica?')) return;
  await cloud.client.auth.signOut();
  cloud.user = null;
  route();
}

function mapSearch(query) {
  return `https://maps.apple.com/?q=${encodeURIComponent(query)}`;
}

function directions(destination, mode = 'd') {
  return `https://maps.apple.com/?daddr=${encodeURIComponent(destination)}&dirflg=${mode}`;
}

function safeExternalUrl(value) {
  try {
    const url = new URL(value);
    return ['http:', 'https:'].includes(url.protocol) ? escapeHtml(url.href) : '#';
  } catch { return '#'; }
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
    ${item.url ? `<a class="button" href="${safeExternalUrl(item.url)}" target="_blank" rel="noopener">${icons.link} Sito</a>` : ''}
  </div>`;
}

function tags(items = []) {
  if (!items.length) return '';
  return `<div class="tip-list">${items.map(item => `<span class="pill warning">${escapeHtml(item)}</span>`).join('')}</div>`;
}

function getTripState() {
  const now = new Date();
  const fallbackItem = day => day?.items?.[0] || { title: 'Giornata da programmare', text: 'Non hai ancora inserito tappe per questa giornata.' };
  if (now < trip.start) {
    const days = Math.ceil((trip.start - now) / 86400000);
    const unit = days === 1 ? 'giorno' : 'giorni';
    return { kicker: 'Il viaggio si avvicina', title: `${days} ${unit} alla partenza`, day: trip.days[0], item: fallbackItem(trip.days[0]) };
  }
  if (now > trip.end) {
    return { kicker: 'Il vostro viaggio', title: 'Croazia 2026', day: trip.days[0], item: fallbackItem(trip.days[0]) };
  }
  const todayKey = new Intl.DateTimeFormat('sv-SE', { timeZone: 'Europe/Rome' }).format(now);
  const day = trip.days.find(entry => entry.date === todayKey) || trip.days[0];
  return { kicker: 'Il programma di oggi', title: `${day.weekday} ${day.number}`, day, item: fallbackItem(day) };
}

function renderHome() {
  const state = getTripState();
  const heroTitle = escapeHtml(state.title).replace(' alla ', '<br>alla ');
  const firstLodging = places.find(place => place.category === 'alloggi');
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
          <span class="next-time">PRIMA TAPPA · ${escapeHtml(state.day.weekday.toUpperCase())} ${escapeHtml(state.day.number)}</span>
          <h2>${escapeHtml(state.item.title)}</h2>
        </div>
        <span class="pill warning">Da preparare</span>
      </div>
      <p>${escapeHtml(state.item.text)}</p>
      ${itemActions(state.item)}
    </section>

    <section class="section">
      <div class="section-head"><h2>Accesso rapido</h2></div>
      <div class="quick-grid">
        <a class="card quick-card" href="#itinerario"><span class="quick-icon">☼</span><strong>7 giornate</strong><small>Programma completo</small></a>
        <a class="card quick-card" href="${directions(firstLodging?.address || 'Baška, Croatia')}" target="_blank" rel="noopener"><span class="quick-icon">⌂</span><strong>${escapeHtml(firstLodging?.name || 'Alloggio Baška')}</strong><small>Apri indicazioni</small></a>
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
    <div class="timeline-time">${escapeHtml(item.time)}</div>
    <h3>${escapeHtml(item.title)}</h3>
    <p>${escapeHtml(item.text)}</p>
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
            <span class="date-block"><strong>${escapeHtml(day.number)}</strong><small>AGO</small></span>
            <span class="day-title"><strong>${escapeHtml(day.title)}</strong><small>${escapeHtml(day.weekday)} · ${escapeHtml(day.subtitle)}</small></span>
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
      <div><h2>${escapeHtml(place.name)}</h2><p class="place-area">${escapeHtml(place.area)}</p></div>
      <span class="place-icon" aria-hidden="true">${escapeHtml(place.icon)}</span>
    </div>
    <p>${escapeHtml(place.note)}</p>
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
          <span class="utility-icon" aria-hidden="true">${escapeHtml(item.icon)}</span>
          <span><strong>${escapeHtml(item.name)}</strong><small>${escapeHtml(item.subtitle)}</small></span>
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

function editorField(label, value, data, options = {}) {
  const attributes = Object.entries(data).map(([key, item]) => `data-${key}="${escapeHtml(item)}"`).join(' ');
  const content = escapeHtml(value ?? '');
  if (options.type === 'textarea') {
    return `<label class="editor-field"><span>${label}</span><textarea ${attributes}>${content}</textarea></label>`;
  }
  if (options.type === 'select') {
    return `<label class="editor-field"><span>${label}</span><select ${attributes}>${options.choices.map(([key, text]) => `<option value="${key}" ${value === key ? 'selected' : ''}>${text}</option>`).join('')}</select></label>`;
  }
  return `<label class="editor-field"><span>${label}</span><input type="${options.type || 'text'}" value="${content}" ${attributes}></label>`;
}

function itineraryEditor() {
  return `<div class="editor-stack">
    ${trip.days.map((day, dayIndex) => `<details class="card editor-group" ${dayIndex === 0 ? 'open' : ''}>
      <summary>
        <span class="editor-number">${escapeHtml(day.number)}</span>
        <span><strong>${escapeHtml(day.weekday)} · ${escapeHtml(day.title)}</strong><small>${day.items.length} tappe o attività</small></span>
      </summary>
      <div class="editor-content">
        <div class="editor-fields">
          ${editorField('Titolo della giornata', day.title, { kind: 'day', day: dayIndex, field: 'title' })}
          ${editorField('Sottotitolo', day.subtitle, { kind: 'day', day: dayIndex, field: 'subtitle' })}
        </div>
        ${day.items.map((item, itemIndex) => `<section class="editor-item">
          <div class="editor-item-head"><strong>Tappa ${itemIndex + 1}</strong><button class="text-button danger" type="button" data-delete-item data-day="${dayIndex}" data-item="${itemIndex}">Elimina</button></div>
          <div class="editor-fields">
            ${editorField('Orario o momento', item.time, { kind: 'item', day: dayIndex, item: itemIndex, field: 'time' })}
            ${editorField('Titolo', item.title, { kind: 'item', day: dayIndex, item: itemIndex, field: 'title' })}
            ${editorField('Descrizione', item.text, { kind: 'item', day: dayIndex, item: itemIndex, field: 'text' }, { type: 'textarea' })}
            ${editorField('Destinazione Apple Maps', item.place || '', { kind: 'item', day: dayIndex, item: itemIndex, field: 'place' })}
            ${editorField('Sito o prenotazione', item.url || '', { kind: 'item', day: dayIndex, item: itemIndex, field: 'url' }, { type: 'url' })}
            ${editorField('Note brevi, separate da virgola', (item.tags || []).join(', '), { kind: 'item', day: dayIndex, item: itemIndex, field: 'tags' })}
          </div>
        </section>`).join('')}
        <button class="button editor-add" type="button" data-add-item="${dayIndex}">+ Aggiungi tappa</button>
      </div>
    </details>`).join('')}
  </div>`;
}

function placesEditor() {
  const categories = [['spiagge', 'Spiagge'], ['attivita', 'Attività e rent'], ['trasporti', 'Trasporti'], ['alloggi', 'Alloggi']];
  return `<div class="editor-stack">
    ${places.map((place, index) => `<details class="card editor-group">
      <summary>
        <span class="editor-number">${escapeHtml(place.icon || '•')}</span>
        <span><strong>${escapeHtml(place.name)}</strong><small>${escapeHtml(place.area)}</small></span>
      </summary>
      <div class="editor-content">
        <div class="editor-item-head"><strong>Informazioni del luogo</strong><button class="text-button danger" type="button" data-delete-place="${index}">Elimina</button></div>
        <div class="editor-fields">
          ${editorField('Nome', place.name, { kind: 'place', index, field: 'name' })}
          ${editorField('Zona', place.area, { kind: 'place', index, field: 'area' })}
          ${editorField('Categoria', place.category, { kind: 'place', index, field: 'category' }, { type: 'select', choices: categories })}
          ${editorField('Destinazione Apple Maps', place.address, { kind: 'place', index, field: 'address' })}
          ${editorField('Descrizione', place.note, { kind: 'place', index, field: 'note' }, { type: 'textarea' })}
        </div>
      </div>
    </details>`).join('')}
    <button class="button editor-add" type="button" data-add-place>+ Aggiungi luogo</button>
  </div>`;
}

function utilitiesEditor() {
  return `<div class="editor-stack">
    <div class="notice"><span>i</span><div><strong>Come funzionano le parole chiave</strong><p>Apple Maps cerca il testo esattamente come se lo digitassi tu. Puoi provare, per esempio, “Benzinska postaja”, “Ljekarna” o il nome preciso di un’attività.</p></div></div>
    ${utilities.map((utility, index) => `<details class="card editor-group" ${index === 0 ? 'open' : ''}>
      <summary>
        <span class="editor-number">${escapeHtml(utility.icon || '⌕')}</span>
        <span><strong>${escapeHtml(utility.name)}</strong><small>Ricerca: ${escapeHtml(utility.query)}</small></span>
      </summary>
      <div class="editor-content">
        <div class="editor-item-head"><strong>Ricerca rapida</strong><button class="text-button danger" type="button" data-delete-utility="${index}">Elimina</button></div>
        <div class="editor-fields">
          ${editorField('Nome del pulsante', utility.name, { kind: 'utility', index, field: 'name' })}
          ${editorField('Parole chiave per Apple Maps', utility.query, { kind: 'utility', index, field: 'query' })}
          ${editorField('Sottotitolo', utility.subtitle, { kind: 'utility', index, field: 'subtitle' })}
        </div>
      </div>
    </details>`).join('')}
    <button class="button editor-add" type="button" data-add-utility>+ Aggiungi ricerca rapida</button>
  </div>`;
}

function customizerHeader(description) {
  return `<header class="customizer-head">
    <a class="back-button" href="#home" aria-label="Torna alla guida">‹</a>
    <div><h1>Personalizza</h1><p>${description}</p></div>
  </header>`;
}

function renderStandaloneEditorInfo() {
  const editorUrl = `${location.origin}${location.pathname}#personalizza`;
  app.innerHTML = `
    ${customizerHeader('La PWA resta pulita e riceve automaticamente le modifiche salvate online.')}
    <section class="card cloud-card">
      <span class="cloud-card-icon">↗</span>
      <h2>Modifica dal browser</h2>
      <p>Apri l’editor in Safari oppure sul PC. Questa app aggiornerà itinerario, luoghi e ricerche dal cloud senza bisogno della tastiera.</p>
      <a class="button primary wide" href="${editorUrl}" target="_blank" rel="noopener">Apri l’editor nel browser</a>
    </section>
    <p class="editor-note cloud-note">I contenuti disponibili offline sono l’ultima versione sincronizzata.</p>`;
}

function renderCloudLogin() {
  app.innerHTML = `
    ${customizerHeader('Accedi per modificare la guida condivisa da PC o Safari.')}
    <section class="card cloud-card">
      <span class="cloud-card-icon">⌁</span>
      <h2>Accesso alla modifica</h2>
      <p>Le modifiche salvate qui compariranno automaticamente nella PWA su iPhone e iPad.</p>
      <form id="cloud-login-form" class="cloud-login-form">
        <label class="editor-field"><span>Email</span><input type="email" value="${OWNER_EMAIL}" readonly></label>
        <label class="editor-field"><span>Password</span><input id="cloud-password" type="password" autocomplete="current-password" required></label>
        <button class="button primary wide" type="submit">Accedi</button>
        <p class="form-error" id="cloud-login-error" role="alert"></p>
      </form>
    </section>`;

  document.querySelector('#cloud-login-form').addEventListener('submit', async event => {
    event.preventDefault();
    const button = event.currentTarget.querySelector('button');
    const errorBox = document.querySelector('#cloud-login-error');
    button.disabled = true; button.textContent = 'Accesso…'; errorBox.textContent = '';
    try {
      await signInToCloud(document.querySelector('#cloud-password').value);
      renderCustomizer();
    } catch (error) {
      errorBox.textContent = error.message === 'Invalid login credentials' ? 'Email o password non corretti.' : `Accesso non riuscito: ${error.message}`;
      button.disabled = false; button.textContent = 'Accedi';
    }
  });
}

function renderCustomizer(activePane = 'itinerario') {
  if (isStandalone()) return renderStandaloneEditorInfo();
  if (!cloud.initialized) {
    app.innerHTML = `${customizerHeader('Connessione al salvataggio condiviso…')}<section class="card cloud-card"><span class="loading-dot"></span><h2>Caricamento</h2><p>Sto verificando la sincronizzazione cloud.</p></section>`;
    return;
  }
  if (!cloud.user) return renderCloudLogin();

  app.innerHTML = `
    <header class="customizer-head">
      <a class="back-button" href="#home" aria-label="Torna alla guida">‹</a>
      <div><h1>Personalizza</h1><p>Modifica liberamente e salva tutto insieme quando hai finito.</p></div>
    </header>
    <div class="editor-tabs" role="tablist">
      <button class="editor-tab ${activePane === 'itinerario' ? 'active' : ''}" data-editor-tab="itinerario" type="button">Itinerario</button>
      <button class="editor-tab ${activePane === 'luoghi' ? 'active' : ''}" data-editor-tab="luoghi" type="button">Luoghi e posizioni</button>
      <button class="editor-tab ${activePane === 'ricerche' ? 'active' : ''}" data-editor-tab="ricerche" type="button">Ricerche rapide</button>
    </div>
    <div class="editor-save-bar">
      <span class="save-status" id="save-status" role="status">Tutto sincronizzato</span>
      <button class="button primary" id="save-all-changes" type="button">Salva modifiche</button>
    </div>
    <section class="editor-pane" data-editor-pane="itinerario" ${activePane !== 'itinerario' ? 'hidden' : ''}>${itineraryEditor()}</section>
    <section class="editor-pane" data-editor-pane="luoghi" ${activePane !== 'luoghi' ? 'hidden' : ''}>${placesEditor()}</section>
    <section class="editor-pane" data-editor-pane="ricerche" ${activePane !== 'ricerche' ? 'hidden' : ''}>${utilitiesEditor()}</section>
    <footer class="editor-footer">
      <button class="button wide" id="reset-data" type="button">Ripristina contenuti originali</button>
      <button class="text-button" id="cloud-sign-out" type="button">Esci dalla modalità modifica</button>
      <p class="editor-note">Le modifiche restano in bozza finché non premi “Salva modifiche”.</p>
    </footer>`;

  bindCustomizer();
  updateSaveControls();
  document.querySelector('#save-all-changes').addEventListener('click', saveCloudData);
  document.querySelector('#cloud-sign-out').addEventListener('click', signOutFromCloud);
}

function bindCustomizer() {
  document.querySelectorAll('[data-editor-tab]').forEach(button => {
    button.addEventListener('click', () => {
      const pane = button.dataset.editorTab;
      document.querySelectorAll('[data-editor-tab]').forEach(tab => tab.classList.toggle('active', tab === button));
      document.querySelectorAll('[data-editor-pane]').forEach(section => { section.hidden = section.dataset.editorPane !== pane; });
    });
  });

  app.oninput = event => {
    if (!event.target.dataset.kind) return;
    cloud.dirty = true;
    updateSaveControls();
  };
  app.onchange = handleEditorChange;

  document.querySelectorAll('[data-add-item]').forEach(button => button.addEventListener('click', () => {
    const dayIndex = Number(button.dataset.addItem);
    trip.days[dayIndex].items.push({ time: 'Da definire', title: 'Nuova tappa', text: '', place: '', tags: [] });
    saveData(); renderCustomizer('itinerario');
  }));
  document.querySelectorAll('[data-delete-item]').forEach(button => button.addEventListener('click', () => {
    if (!confirm('Eliminare questa tappa?')) return;
    trip.days[Number(button.dataset.day)].items.splice(Number(button.dataset.item), 1);
    saveData(); renderCustomizer('itinerario');
  }));
  document.querySelector('[data-add-place]')?.addEventListener('click', () => {
    places.push({ name: 'Nuovo luogo', area: 'Croazia', category: 'spiagge', icon: '•', address: '', note: '' });
    saveData(); renderCustomizer('luoghi');
  });
  document.querySelectorAll('[data-delete-place]').forEach(button => button.addEventListener('click', () => {
    if (!confirm('Eliminare questo luogo?')) return;
    places.splice(Number(button.dataset.deletePlace), 1); saveData(); renderCustomizer('luoghi');
  }));
  document.querySelector('[data-add-utility]')?.addEventListener('click', () => {
    utilities.push({ name: 'Nuova ricerca', subtitle: 'Ricerca in Apple Maps', icon: '⌕', query: '' });
    saveData(); renderCustomizer('ricerche');
  });
  document.querySelectorAll('[data-delete-utility]').forEach(button => button.addEventListener('click', () => {
    if (!confirm('Eliminare questa ricerca rapida?')) return;
    utilities.splice(Number(button.dataset.deleteUtility), 1); saveData(); renderCustomizer('ricerche');
  }));
  document.querySelector('#reset-data')?.addEventListener('click', () => {
    if (!confirm('Ripristinare tutti i contenuti originali? Le tue modifiche verranno eliminate.')) return;
    applyData(JSON.parse(JSON.stringify(defaults))); saveData(); renderCustomizer('itinerario'); showToast('Contenuti originali ripristinati nella bozza');
  });
}

function handleEditorChange(event) {
  const input = event.target;
  const kind = input.dataset.kind;
  if (!kind) return;
  const field = input.dataset.field;
  let target;
  if (kind === 'day') target = trip.days[Number(input.dataset.day)];
  if (kind === 'item') target = trip.days[Number(input.dataset.day)].items[Number(input.dataset.item)];
  if (kind === 'place') target = places[Number(input.dataset.index)];
  if (kind === 'utility') target = utilities[Number(input.dataset.index)];
  if (!target) return;
  target[field] = field === 'tags' ? input.value.split(',').map(value => value.trim()).filter(Boolean) : input.value.trim();
  saveData();
}

function route() {
  const name = location.hash.replace('#', '').split('/')[0] || 'home';
  const routes = { home: renderHome, itinerario: renderItinerary, luoghi: renderPlaces, utili: renderUtilities, personalizza: renderCustomizer };
  (routes[name] || renderHome)();
  document.querySelectorAll('.bottom-nav a').forEach(link => link.classList.toggle('active', link.dataset.route === name));
  window.scrollTo(0, 0);
}

document.querySelector('#app-menu-button').addEventListener('click', () => {
  location.hash = '#personalizza';
});

app.addEventListener('touchend', event => {
  const field = event.target.closest('.editor-field input, .editor-field textarea');
  if (field && document.activeElement !== field) field.focus();
}, { passive: true });
window.addEventListener('hashchange', route);
window.addEventListener('beforeunload', event => {
  if (!cloud.dirty) return;
  event.preventDefault();
  event.returnValue = '';
});
route();
initCloud();

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js'));
}
