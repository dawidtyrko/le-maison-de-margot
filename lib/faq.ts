// Frequently-asked guest questions. This single source feeds both the visible
// <Faq> accordion and the FAQPage JSON-LD (see components/FaqJsonLd.tsx), so the
// structured data always matches what's on the page — a Google requirement.
//
// Content is based on the owner's (Eva's) own answers about the apartment and
// the surrounding area. The questions deliberately mirror what guests actually
// type into search ("dove parcheggiare a Monopoli", "come arrivare da Bari"),
// which is where the SEO value comes from.
//
// Check-out time confirmed by Eva (2026-07-06). Late check-out is by request,
// subject to availability, and carries a supplement (see the check-in answer).
export const CHECKOUT_TIME = "10:00";

import type { Lang } from "@/components/Providers";

// A string localised into all four site languages.
export type L = { it: string; en: string; de: string; pl: string };

export type FaqAnswer = {
  // Leading paragraph(s). Use "\n\n" to separate paragraphs.
  text: L;
  // Optional grouped lists (e.g. restaurants by category). Item strings are
  // proper nouns and stay identical across languages; only the group label is
  // translated.
  groups?: { label?: L; items: string[] }[];
};

export type FaqItem = {
  id: string;
  q: L;
  a: FaqAnswer;
};

export function pick(l: L, lang: Lang): string {
  return l[lang] ?? l.en;
}

// Flattens an answer (paragraphs + grouped lists) into a single plain-text
// string for the JSON-LD acceptedAnswer.
export function answerText(a: FaqAnswer, lang: Lang): string {
  const parts = [pick(a.text, lang)];
  for (const g of a.groups ?? []) {
    const label = g.label ? `${pick(g.label, lang)}: ` : "";
    parts.push(label + g.items.join(", "));
  }
  return parts.join(" ").replace(/\s+/g, " ").trim();
}

export const FAQ: FaqItem[] = [
  {
    id: "parcheggio",
    q: {
      it: "Dove possono parcheggiare gli ospiti?",
      en: "Where can guests park?",
      de: "Wo können Gäste parken?",
      pl: "Gdzie goście mogą zaparkować?",
    },
    a: {
      text: {
        it: "Gli ospiti trovano parcheggio nelle vie e piazze appena fuori dal centro storico: nei pressi di Piazza Manzoni e Piazza Vittorio Emanuele II, oppure in Largo Porta Vecchia (vicino allo skatepark), via Pirano, via Quasimodo, via Verga e via Europa Libera. Le strisce bianche sono parcheggio libero e gratuito, quelle blu sono a pagamento. Tutte queste zone distano circa 15–20 minuti a piedi dall'appartamento, che si trova in zona a traffico limitato (ZTL).",
        en: "Guests can park on the streets and squares just outside the old town: near Piazza Manzoni and Piazza Vittorio Emanuele II, or in Largo Porta Vecchia (by the skatepark), via Pirano, via Quasimodo, via Verga and via Europa Libera. White lines mean free parking, blue lines are paid. All of these areas are about a 15–20 minute walk from the apartment, which sits in a limited-traffic zone (ZTL).",
        de: "Gäste können in den Straßen und auf den Plätzen direkt außerhalb der Altstadt parken: in der Nähe der Piazza Manzoni und der Piazza Vittorio Emanuele II oder in Largo Porta Vecchia (beim Skatepark), Via Pirano, Via Quasimodo, Via Verga und Via Europa Libera. Weiße Linien bedeuten kostenloses Parken, blaue Linien sind kostenpflichtig. Alle diese Bereiche sind etwa 15–20 Gehminuten von der Wohnung entfernt, die in einer verkehrsbeschränkten Zone (ZTL) liegt.",
        pl: "Goście mogą parkować na ulicach i placach tuż poza starówką: w pobliżu Piazza Manzoni i Piazza Vittorio Emanuele II albo przy Largo Porta Vecchia (koło skateparku), via Pirano, via Quasimodo, via Verga i via Europa Libera. Białe linie oznaczają parkowanie bezpłatne, niebieskie — płatne. Wszystkie te miejsca są oddalone o około 15–20 minut spacerem od apartamentu, który znajduje się w strefie ograniczonego ruchu (ZTL).",
      },
    },
  },
  {
    id: "come-arrivare",
    q: {
      it: "Come si arriva da Bari o dall'aeroporto?",
      en: "How do I get here from Bari or the airport?",
      de: "Wie komme ich von Bari oder dem Flughafen an?",
      pl: "Jak dojechać z Bari lub z lotniska?",
    },
    a: {
      text: {
        it: "Dall'aeroporto di Bari il modo più semplice è prendere la navetta fino alla stazione ferroviaria di Bari e da lì il treno per Monopoli. Dalla stazione di Monopoli l'appartamento è a circa 10–15 minuti a piedi, una bella passeggiata nel centro. In alternativa ci sono autobus, taxi o servizio NCC: ti forniamo noi tutti i contatti utili.",
        en: "From Bari airport the easiest way is to take the shuttle to Bari railway station and then the train to Monopoli. From Monopoli station the apartment is about a 10–15 minute walk, a pleasant stroll through the centre. Alternatively there are buses, taxis or a private NCC transfer — we'll give you all the useful contacts.",
        de: "Vom Flughafen Bari nehmen Sie am einfachsten den Shuttle zum Bahnhof Bari und von dort den Zug nach Monopoli. Vom Bahnhof Monopoli ist die Wohnung etwa 10–15 Gehminuten entfernt, ein schöner Spaziergang durch das Zentrum. Alternativ gibt es Busse, Taxis oder einen privaten NCC-Transfer — wir geben Ihnen alle nützlichen Kontakte.",
        pl: "Z lotniska w Bari najprościej wsiąść w bus do dworca kolejowego w Bari, a stamtąd pojechać pociągiem do Monopoli. Ze stacji Monopoli apartament jest oddalony o około 10–15 minut spacerem — miły spacer przez centrum. Alternatywnie dostępne są autobusy, taksówki lub prywatny transfer NCC — przekażemy wszystkie potrzebne kontakty.",
      },
    },
  },
  {
    id: "check-in",
    q: {
      it: "A che ora sono il check-in e il check-out?",
      en: "What are the check-in and check-out times?",
      de: "Wann sind Check-in und Check-out?",
      pl: "O której godzinie jest zameldowanie i wymeldowanie?",
    },
    a: {
      text: {
        it: `Il check-in si effettua dalle 14:00 alle 21:00 e le chiavi ti vengono consegnate di persona: saremo felici di accoglierti e di mostrarti l'appartamento. Per un late check-in è previsto un supplemento di € 30 (fino a mezzanotte) o € 50 (dopo mezzanotte); ti chiediamo gentilmente di avvisarci in anticipo per organizzare al meglio l'accoglienza. Il check-out è entro le ore ${CHECKOUT_TIME}; eventuali richieste di late check-out saranno valutate in base alla disponibilità e comportano un supplemento.`,
        en: `Check-in is from 14:00 to 21:00 and the keys are handed over in person — we'll be glad to welcome you and show you around. For a late check-in there is a supplement of € 30 (until midnight) or € 50 (after midnight); please let us know in advance so we can arrange your arrival. Check-out is by ${CHECKOUT_TIME}; any late check-out request is considered subject to availability and carries a supplement.`,
        de: `Der Check-in ist von 14:00 bis 21:00 Uhr, die Schlüssel werden persönlich übergeben — wir begrüßen Sie gern und zeigen Ihnen die Wohnung. Für einen späten Check-in fällt ein Zuschlag von € 30 (bis Mitternacht) bzw. € 50 (nach Mitternacht) an; bitte informieren Sie uns vorab, damit wir Ihre Ankunft optimal organisieren können. Der Check-out ist bis ${CHECKOUT_TIME} Uhr; ein späterer Check-out ist auf Anfrage je nach Verfügbarkeit möglich und mit einem Aufschlag verbunden.`,
        pl: `Zameldowanie odbywa się w godzinach 14:00–21:00, a klucze przekazujemy osobiście — z przyjemnością Cię powitamy i oprowadzimy po apartamencie. Za późne zameldowanie obowiązuje dopłata € 30 (do północy) lub € 50 (po północy); prosimy o wcześniejszą informację, abyśmy mogli jak najlepiej zorganizować Twoje przybycie. Wymeldowanie do godziny ${CHECKOUT_TIME}; ewentualne prośby o późne wymeldowanie rozpatrujemy w zależności od dostępności i wiążą się z dopłatą.`,
      },
    },
  },
  {
    id: "capienza",
    q: {
      it: "Quante persone ospita l'appartamento?",
      en: "How many people does the apartment sleep?",
      de: "Für wie viele Personen ist die Wohnung?",
      pl: "Dla ilu osób jest apartament?",
    },
    a: {
      text: {
        it: "L'appartamento ospita fino a 4 persone, bambini di ogni età inclusi. Dispone di un letto matrimoniale e di un divano letto matrimoniale; su richiesta è disponibile una culla.",
        en: "The apartment sleeps up to 4 people, children of any age included. It has a double bed and a double sofa bed; a cot is available on request.",
        de: "Die Wohnung bietet Platz für bis zu 4 Personen, Kinder jeden Alters inbegriffen. Sie verfügt über ein Doppelbett und ein Schlafsofa (Doppelbett); ein Kinderbett ist auf Anfrage verfügbar.",
        pl: "Apartament pomieści do 4 osób, w tym dzieci w każdym wieku. Dysponuje łóżkiem podwójnym i rozkładaną sofą dwuosobową; łóżeczko dziecięce dostępne na życzenie.",
      },
    },
  },
  {
    id: "distanze",
    q: {
      it: "Quanto dista dal mare e dal centro storico?",
      en: "How far is it from the sea and the old town?",
      de: "Wie weit ist es zum Meer und zur Altstadt?",
      pl: "Jak daleko jest do morza i starówki?",
    },
    a: {
      text: {
        it: "L'appartamento è a soli 50 metri dal centro storico e a circa 400 metri a piedi dal mare.",
        en: "The apartment is just 50 metres from the old town and about 400 metres on foot from the sea.",
        de: "Die Wohnung liegt nur 50 Meter von der Altstadt und etwa 400 Meter zu Fuß vom Meer entfernt.",
        pl: "Apartament znajduje się zaledwie 50 metrów od starówki i około 400 metrów pieszo od morza.",
      },
    },
  },
  {
    id: "servizi",
    q: {
      it: "Quali servizi offre l'appartamento?",
      en: "What amenities does the apartment offer?",
      de: "Welche Ausstattung bietet die Wohnung?",
      pl: "Jakie udogodnienia oferuje apartament?",
    },
    a: {
      text: {
        it: "L'appartamento offre Wi-Fi gratuito, aria condizionata, lavatrice, lavastoviglie, cucina attrezzata, ferro e asse da stiro e attrezzatura da mare per goderti la spiaggia.",
        en: "The apartment offers free Wi-Fi, air conditioning, a washing machine, a dishwasher, a fully equipped kitchen, an iron and ironing board, and beach equipment so you can enjoy the seaside.",
        de: "Die Wohnung bietet kostenloses WLAN, Klimaanlage, Waschmaschine, Geschirrspüler, voll ausgestattete Küche, Bügeleisen und Bügelbrett sowie Strandausrüstung, damit Sie den Strand genießen können.",
        pl: "Apartament oferuje bezpłatne Wi-Fi, klimatyzację, pralkę, zmywarkę, w pełni wyposażoną kuchnię, żelazko z deską oraz sprzęt plażowy, byś mógł cieszyć się morzem.",
      },
    },
  },
  {
    id: "animali",
    q: {
      it: "Sono ammessi animali domestici?",
      en: "Are pets allowed?",
      de: "Sind Haustiere erlaubt?",
      pl: "Czy zwierzęta są dozwolone?",
    },
    a: {
      text: {
        it: "Purtroppo non sono ammessi animali domestici.",
        en: "Unfortunately, pets are not allowed.",
        de: "Leider sind Haustiere nicht erlaubt.",
        pl: "Niestety zwierzęta domowe nie są dozwolone.",
      },
    },
  },
  {
    id: "dintorni",
    q: {
      it: "Cosa c'è nei dintorni? Supermercato e ristoranti",
      en: "What's nearby? Supermarket and restaurants",
      de: "Was gibt es in der Nähe? Supermarkt und Restaurants",
      pl: "Co jest w pobliżu? Supermarket i restauracje",
    },
    a: {
      text: {
        it: "A pochi passi trovi il supermercato Numeri Primi, in Piazza Vittorio Emanuele II. Per mangiare, ecco alcuni dei nostri indirizzi preferiti a Monopoli:",
        en: "A few steps away is the Numeri Primi supermarket, in Piazza Vittorio Emanuele II. For dining, here are some of our favourite spots in Monopoli:",
        de: "Nur wenige Schritte entfernt liegt der Supermarkt Numeri Primi an der Piazza Vittorio Emanuele II. Zum Essen hier einige unserer Lieblingsadressen in Monopoli:",
        pl: "Kilka kroków dalej znajduje się supermarket Numeri Primi przy Piazza Vittorio Emanuele II. A oto kilka naszych ulubionych miejsc na posiłek w Monopoli:",
      },
      groups: [
        {
          label: {
            it: "Pesce",
            en: "Seafood",
            de: "Fisch",
            pl: "Ryby i owoce morza",
          },
          items: [
            "Porto Bianco",
            "Porto Rosso",
            "La Locanda dei Mercanti",
            "Il Cavaliere",
            "L'Ancora",
          ],
        },
        {
          label: { it: "Pasta", en: "Pasta", de: "Pasta", pl: "Makarony" },
          items: ["Trattoria Maccaroni", "Trattoria Perricci", "Cime di Tapas"],
        },
        {
          label: { it: "Pizza", en: "Pizza", de: "Pizza", pl: "Pizza" },
          items: ["L'isola che non c'è", "Piazzetta 10", "Cucunci"],
        },
        {
          label: {
            it: "Taglieri, salumi e formaggi",
            en: "Cured meats & cheese boards",
            de: "Wurst- und Käseplatten",
            pl: "Deski wędlin i serów",
          },
          items: ["Magnapulia", "La tana del luppolo"],
        },
        {
          label: {
            it: "Gelaterie",
            en: "Ice-cream parlours",
            de: "Eisdielen",
            pl: "Lodziarnie",
          },
          items: ["Caffè Roma 1", "Iridium café", "Frescolatte"],
        },
      ],
    },
  },
  {
    id: "spiagge",
    q: {
      it: "Quali sono le spiagge più belle e vicine?",
      en: "Which are the nicest beaches nearby?",
      de: "Welche sind die schönsten Strände in der Nähe?",
      pl: "Które plaże w pobliżu są najładniejsze?",
    },
    a: {
      text: {
        it: "Vicino al centro trovi Porto Rosso, Porto Bianco e I Tre Buchi, spiagge libere di sabbia. Poco più fuori: Lido Pantano (attrezzata), Porto Ghiacciolo (libera e attrezzata, con zona bar), Lido Santo Stefano (attrezzata) e la zona di Capitolo, da Lido Azzurro in poi, con un susseguirsi di spiagge di sabbia libere e attrezzate.",
        en: "Close to the centre you'll find Porto Rosso, Porto Bianco and I Tre Buchi, free sandy beaches. A little further out: Lido Pantano (serviced), Porto Ghiacciolo (both free and serviced, with a bar area), Lido Santo Stefano (serviced) and the Capitolo area, from Lido Azzurro onwards, with a succession of free and serviced sandy beaches.",
        de: "In der Nähe des Zentrums finden Sie Porto Rosso, Porto Bianco und I Tre Buchi, kostenlose Sandstrände. Etwas weiter draußen: Lido Pantano (mit Service), Porto Ghiacciolo (kostenlos und mit Service, mit Barbereich), Lido Santo Stefano (mit Service) und das Gebiet von Capitolo, ab Lido Azzurro, mit einer Reihe freier und bewirtschafteter Sandstrände.",
        pl: "Blisko centrum znajdziesz Porto Rosso, Porto Bianco i I Tre Buchi — darmowe, piaszczyste plaże. Nieco dalej: Lido Pantano (z udogodnieniami), Porto Ghiacciolo (zarówno darmowa, jak i z udogodnieniami, ze strefą baru), Lido Santo Stefano (z udogodnieniami) oraz rejon Capitolo, od Lido Azzurro dalej, z ciągiem piaszczystych plaż darmowych i płatnych.",
      },
    },
  },
  {
    id: "escursioni",
    q: {
      it: "Quali borghi visitare nei dintorni?",
      en: "Which nearby towns are worth visiting?",
      de: "Welche Orte in der Umgebung lohnen sich?",
      pl: "Które okoliczne miasteczka warto zwiedzić?",
    },
    a: {
      text: {
        it: "Da Monopoli raggiungi facilmente alcuni dei borghi più belli della Puglia:",
        en: "From Monopoli you can easily reach some of the loveliest towns in Puglia:",
        de: "Von Monopoli aus erreichen Sie leicht einige der schönsten Orte Apuliens:",
        pl: "Z Monopoli łatwo dojedziesz do najpiękniejszych miasteczek Apulii:",
      },
      groups: [
        {
          items: [
            "Polignano a Mare — 8,5 km",
            "Alberobello — 21,2 km",
            "Locorotondo — 26,1 km",
            "Cisternino — 33,9 km",
            "Ostuni — 41,6 km",
          ],
        },
      ],
    },
  },
];
