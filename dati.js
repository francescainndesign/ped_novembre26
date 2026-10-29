/*
  DIDASCALIE E POST DI OTTOBRE
  
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
    id: "2026-10-02",
    data: "Venerdì 2 ottobre",
    titolo: "Il cuoco",
    formato: "Foto",
    media: [{ type: "image", src: "media/cuoco.jpg" }],
    caption: `Dietro ogni momento trascorso in Grotta c'è il lavoro silenzioso in cucina, la cura nei gesti e la passione nell'impiattare per regalarvi una serata speciale.`,
    note: ``
  },

  {
    id: "2026-10-06",
    data: "Martedì 6 ottobre",
    titolo: "A tavola",
    formato: "Reel · 11 secondi",
    media: [{ type: "video", src: "media/reel_tapas.mp4" }],
    caption: `Un tavolo, quattro forchette e nessuno che aspetta il proprio turno. ✨
Un brindisi insieme, piattini da condividere al centro del tavolo e la voglia di assaggiare tutto subito. La nostra idea di serata è esattamente questa: convivialità pura, buona compagnia e drink che accompagnano ogni assaggio.
📍 Grotta Marcello – Cagliari 📲 Prenota il tuo tavolo dal link in bio`,
    note: ``
  },

  {
    id: "2026-10-09",
    data: "Venerdì 9 ottobre",
    titolo: "La cella",
    formato: "Foto",
    media: [{ type: "image", src: "media/cella.jpg" }],
    caption: `Prima di arrivare in tavola, ogni ingrediente ha il suo tempo.
La scelta, la conservazione, la cura: sono gesti che magari non si vedono, ma fanno parte di ogni piatto.`,
    note: `Post previsto a settembre e non uscito.`
  },

  {
    id: "2026-10-13",
    data: "Martedì 13 ottobre",
    titolo: "La pasta",
    formato: "Reel · 12 secondi",
    media: [{ type: "video", src: "media/reel_pasta.mp4" }],
    caption: `I gesti della cucina, il silenzio prima del servizio, l'attesa al tavolo. ⏱️✨
Il ritmo in Grotta ha una musica tutta sua: fatta di passaggi veloci, impiattamenti precisi e cura costante, per trasformare ogni serata in un'esperienza da gustare con calma.`,
    note: ``
  },

  {
    id: "2026-10-16",
    data: "Venerdì 16 ottobre",
    titolo: "La pizza",
    formato: "Foto",
    media: [{ type: "image", src: "media/pizza.jpg" }],
    caption: `Vederla completare sul banco e sapere che sta arrivando proprio al tuo tavolo. 🍕✨
C'è un momento preciso della serata in cui il profumo anticipa il servizio e l'attesa si trasforma subito in voglia di condividere.`,
    note: ``
  },

  {
    id: "2026-10-20",
    data: "Martedì 20 ottobre",
    titolo: "Il Turriga",
    formato: "Foto",
    media: [{ type: "image", src: "media/turriga.jpg" }],
    caption: `Scegliere la bottiglia giusta è il primo passo per dare la direzione a una grande serata. ✨
Dietro ogni calice versato c'è la ricerca di storie, territorio e produttori che rappresentano l'eccellenza della nostra isola, come @argiolaswine.`,
    note: `Con il tag alla cantina Argiolas.`
  },

  {
    id: "2026-10-23",
    data: "Venerdì 23 ottobre",
    titolo: "Dalla cucina",
    formato: "Foto",
    media: [{ type: "image", src: "media/cameriere.jpg" }],
    caption: `Quel momento esatto in cui vedi il cameriere uscire dalla cucina e speri fortissimo che stia venendo verso il tuo tavolo. 👀
Dal pass alla sala, arriviamo.`,
    note: `Serve il consenso del cameriere.`
  },

  {
    id: "2026-10-27",
    data: "Martedì 27 ottobre",
    titolo: "La carne",
    formato: "Reel · 12 secondi",
    media: [{ type: "video", src: "media/reel_carne.mp4" }],
    caption: `Dal tagliere al fuoco, dal fuoco al piatto. 🔥
Ogni sera lo stesso giro, fatto di fumo, colpi decisi di coltello sul tagliere e quel pizzico di sale prima del servizio. Una sinfonia in cucina che si ripete ogni volta, perché ogni sera c'è qualcuno che al tavolo la sta aspettando.`,
    note: ``
  },

  {
    id: "2026-10-30",
    data: "Venerdì 30 ottobre",
    titolo: "Il banco prima dell'apertura",
    formato: "Foto",
    media: [{ type: "image", src: "media/sala.jpg" }],
    caption: `Le luci si accendono, i tavoli sono pronti e la Grotta si scalda. ✨
C'è un momento di silenzio perfetto prima che la sala si riempia di voci, calici che brindano e risate. È l'istante in cui tutto è al suo posto, pronto per trasformarsi nella vostra serata.`,
    note: ``
  }

];
