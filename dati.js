/*
  DIDASCALIE E POST DI NOVEMBRE

  Questo è l'unico file da toccare per cambiare le didascalie.
  Si apre con Blocco note. Dopo aver salvato, basta ricaricare la pagina.

  Per ogni post:
  - la didascalia va scritta tra i due accenti gravi ` ... `
    (si può andare a capo normalmente, i ritorni a capo restano)
  - la nota è un avviso per chi approva; se non serve, lasciare `` vuoto
  - non togliere le virgole alla fine delle righe e le parentesi graffe
*/

const POSTS = [

  {
    id: "2026-11-02",
    data: "Lunedì 2 novembre, mattina",
    titolo: "Il nostro ritmo",
    formato: "Carosello · 2 slide",
    media: [{ type: "image", src: "media/orari_1.jpg" }, { type: "image", src: "media/orari_2.jpg" }],
    caption: `Ogni luogo ha il suo ritmo. Anche noi, da novembre, cambiamo un po' il nostro.
Abbiamo scelto orari nuovi pensando a come far vivere Grotta ogni giorno, e alle persone che ci lavorano insieme a noi.
E la domenica ci trovi anche a pranzo.

Lun - Gio: 18:00 / 00:00
Ven: 18:00 / 02:00
Sab: 17:00 / 02:00
Dom: 11:00 / 00:00

Il nostro ritmo cambia. Il piacere di ritrovarci resta.`,
    note: `Esce la mattina, non alle 18, perché gli orari nuovi partono quel giorno.`
  },

  {
    id: "2026-11-06-pizza",
    data: "Venerdì 6 novembre",
    titolo: "Questa non è una pizza",
    formato: "Foto",
    media: [{ type: "image", src: "media/pizza_teaser.jpg" }],
    caption: `Questa non è una pizza.`,
    note: `Primo indizio: il progetto IED si scopre il 10.`
  },

  {
    id: "2026-11-10-ied",
    data: "Martedì 10 novembre",
    titolo: "Questa non è una t-shirt",
    formato: "Carosello · 5 slide",
    media: [{ type: "image", src: "media/ied_1.jpg" }, { type: "image", src: "media/ied_2.jpg" }, { type: "image", src: "media/ied_3.jpg" }, { type: "image", src: "media/ied_4.jpg" }, { type: "image", src: "media/ied_5.jpg" }],
    caption: `Questa non è una t-shirt. O almeno, non soltanto.
Nel 2025 un gruppo di studenti dello IED di Cagliari ha immaginato Grotta con un progetto fatto di ironia e illustrazioni surreali.
Il progetto vincitore, Questa non è una presentazione, si ispira a Magritte e trasforma oggetti di tutti i giorni in qualcosa di inaspettato.
Oggi quelle idee sono ancora qui: sulle divise del nostro staff, sui sottobicchieri e in tanti dettagli della vita in Grotta.
Ci piace pensare che un progetto nato per una presentazione sia diventato parte di questo posto.
Grazie a chi ha immaginato tutto questo.
[Crediti del progetto e degli studenti]`,
    note: `Il progetto degli studenti IED. Prima di pubblicare: ok degli studenti e loro tag.`
  },

  {
    id: "2026-11-13-calice",
    data: "Venerdì 13 novembre",
    titolo: "Questo non è un calice",
    formato: "Foto",
    media: [{ type: "image", src: "media/calice_teaser.jpg" }],
    caption: `Questo non è un calice.`,
    note: ``
  },

  {
    id: "2026-11-18-pranzo",
    data: "Mercoledì 18 novembre",
    titolo: "Il pranzo della domenica",
    formato: "Foto",
    media: [{ type: "image", src: "media/pranzo_2.jpg" }],
    caption: `La domenica ha un altro ritmo.

Da novembre, il pranzo della domenica diventa un appuntamento fisso: per ritrovarsi intorno a un tavolo, prendersi il proprio tempo e vivere il locale in un momento diverso della giornata.

La stessa Grotta, un altro momento da condividere.
La domenica apriamo alle 11:00.

Ci vediamo in Grotta.`,
    note: ``
  },

  {
    id: "2026-11-21-comanda",
    data: "Sabato 21 novembre",
    titolo: "La comanda",
    formato: "Foto",
    media: [{ type: "image", src: "media/comanda.jpg" }],
    caption: `Un dettaglio curato parte sempre da chi lo prepara.
In Grotta facciamo formazione con la nostra squadra, dai corsi di vendita al servizio in sala.
E qualcosa si impara anche così, una comanda alla volta.`,
    note: `Serve il consenso delle due persone in foto. Da confermare con Angelo che i corsi riguardano anche il servizio in sala.`
  },

  {
    id: "2026-11-27",
    data: "Venerdì 27 novembre",
    titolo: "La galleria del telefono",
    formato: "Reel · 11 secondi",
    media: [{ type: "video", src: "media/reel_rullino.mp4" }],
    caption: `Lo sappiamo, succede a tutti.
Quante foto avete scattato l’ultima volta in Grotta?`,
    note: `Versione di prova: il ritmo verrà reso più veloce. La silhouette e la birra Messina restano solo se approvate.`
  }

];
