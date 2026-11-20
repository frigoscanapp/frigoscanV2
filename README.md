# ❄️ FrigoScan — Inventario Frigo, Dispensa & Assistente Vocale

**FrigoScan** è una Progressive Web App (PWA) veloce, leggera e senza necessità di backend complesso, progettata per organizzare al meglio le scorte di casa, ridurre gli sprechi alimentari e sincronizzare la lista della spesa con tutta la famiglia e con **Amazon Alexa**.

---

## ✨ Funzionalità Principali

* **❄️ Gestione Doppia (Frigo & Dispensa):** Separa facilmente gli alimenti freschi conservati in frigorifero dalle scorte secche in dispensa (pasta, conserve, olio, farine, ecc.), con ricerca istantanea e controllo rapido delle quantità (`+` / `−`).
* **⏰ Monitoraggio Scadenze Intelligente:**
  * Panoramica immediata dei prodotti **Scaduti** e **In Scadenza**.
  * **Soglia di preavviso personalizzabile** (da 1 a 14 giorni) direttamente dal menu impostazioni (`⚙`).
* **🎙️ Assistente Vocale Integrato (in Italiano):**
  * Controlla l'app a mani libere tramite riconoscimento vocale e sintesi vocale dedicata (`Voce: Italiano`), attivabile anche dal pulsante flottante trascinabile.
  * **Esempi di comandi supportati:**
    * *"Quando scade la mozzarella?"* / *"Cosa sta per scadere?"*
    * *"Metti in dispensa 3 pacchi di pasta"* / *"Aggiungi in frigo 2 litri di latte"*
    * *"Ho consumato 1 latte fresco"* / *"Ho finito lo yogurt"*
    * *"Aggiungi alla lista della spesa uova e pomodori"*
* **🛒 Lista della Spesa & Spostamento Rapido:** Aggiungi articoli a mano, a voce o tramite Alexa. Una volta spuntati nel carrello, puoi trasferirli direttamente **in Frigo** o **in Dispensa** con un solo tocco.
* **🍳 Ricette Anti-Spreco:** Suggerisce idee di piatti in base agli ingredienti già presenti in casa e permette di aggiungere gli ingredienti mancanti alla lista della spesa con un clic.
* **🔊 Codice Famiglia & Bridge Alexa:** Condividi lo stesso inventario e la stessa lista spesa con i membri della famiglia e collega Amazon Alexa tramite Cloudflare Worker (`worker.js`).
* **🛡️ Salvataggio Sicuro & Aggiornamenti Senza Perdita Dati:**
  * Dati salvati localmente sul dispositivo con doppio backup automatico (`SafeStorage`) ed esportazione/importazione manuale in formato **JSON**.
  * Notifica discreta quando è disponibile una nuova versione, preservando sempre l'inventario salvato.

---

## 📱 Installazione su Smartphone (PWA)

FrigoScan può essere installata come una vera app nativa senza passare dagli store:

* **🤖 Android (Google Chrome):** Apri il link dell'app, tocca il menu **⋮** in alto a destra e seleziona **"Installa app"** o **"Aggiungi a schermata Home"**.
* **🍎 iPhone / iPad (Safari):** Apri il link in Safari, tocca l'icona **Condividi** in basso e seleziona **"Aggiungi alla schermata Home"**.

---

## ☁️ Configurazione Sync Famiglia & Alexa (Opzionale)

Per abilitare la sincronizzazione cloud tra più telefoni e i webhook di Amazon Alexa:

1. Crea un nuovo Worker su **Cloudflare Workers** e incolla il contenuto del file `worker.js` incluso nel pacchetto.
2. Associa un namespace **KV** chiamato `FRIGOSCAN_KV` al Worker.
3. Inserisci l'URL del tuo Worker nella scheda **🔊 Alexa & Sync** all'interno dell'app.

---

## 📂 Struttura del Progetto

```text
├── index.html      # Applicazione completa (UI, logica, assistente vocale, storage)
├── sw.js           # Service Worker (strategia network-first e gestione aggiornamenti)
├── manifest.json   # Manifest PWA per installazione su Android e iOS
├── icon.svg        # Icona vettoriale ad alta risoluzione
├── worker.js       # Script Cloudflare Worker per sincronizzazione e webhook Alexa
└── README.md       # Documentazione del progetto
```

---

## 💡 Supporto e Suggerimenti

Hai idee per migliorare FrigoScan o vuoi segnalare un problema? Puoi inviare un feedback direttamente dall'app tramite il menu **⚙ → Segnalazioni e Suggerimenti** oppure scrivere a `frigoscanapp@gmail.com`.