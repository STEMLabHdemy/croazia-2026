# Croazia 2026

Web app mobile-first per il viaggio tra Krk e Cres dal 3 al 9 agosto 2026.

## Personalizzazione

Il menu in alto apre un’area separata per modificare itinerario, luoghi, destinazioni Apple Maps e parole chiave delle ricerche rapide. La schermata normale resta così pulita e senza comandi di modifica.

## Anteprima locale

Avviare un server statico nella cartella del progetto:

```powershell
python -m http.server 4173
```

Aprire `http://localhost:4173` nel browser. Il server è necessario per provare service worker e modalità offline.

## Contenuti da completare

- nome, indirizzo e telefono del secondo alloggio;
- nome e contatto del taxi boat di Baška;
- operatore e prenotazione della barca a vela di Punat;
- contatto aggiornato del noleggio bici;
- escursione alla Grotta Azzurra;
- accessi e parcheggi precisi per le spiagge più isolate;
- conferma dei traghetti Jadrolinija 2026.

## Pubblicazione

Il progetto è statico e può essere pubblicato direttamente con GitHub Pages. Usa navigazione tramite hash, quindi non richiede regole di riscrittura o un server applicativo.
