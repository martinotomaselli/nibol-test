# Nibol | Test Tecnico

Progetto React/Next.js sviluppato come test tecnico.  
L'app permette di registrarsi, accedere, e utilizzare una dashboard per prenotare spazi di lavoro.

## Tecnologie usate

- Next.js 13+ (App Router)
- React 18
- TypeScript
- Tailwind CSS
- localStorage (per simulare autenticazione)
- Gestione stato login via React Context API

---

## Funzionalità implementate

- [x] Homepage con sfondo grafico e tasti `Login` / `Registrati`
- [x] Sistema di autenticazione simulato con `localStorage`
- [x] Navbar dinamica: cambia in base allo stato login (Home / Login / Logout)
- [x] Dashboard personale con opzioni:
  - Inserimento scrivania (In Office)
  - Selezione modalità di lavoro (Remotely / Not at Work)
- [x] Logout con redirect automatico
- [x] Contesto globale `LoginContext` per sincronizzare stato login tra componenti

---

## Avvio del progetto

```bash
npm install
npm run dev
