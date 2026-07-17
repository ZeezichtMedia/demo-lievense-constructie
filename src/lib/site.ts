// Central brand + content facts, sourced from lievenseconstructie.nl.
export const site = {
  name: "Lievense Constructie",
  tagline: "Uw partner in landbouwmachines en constructie",
  since: 1966,
  phone: "+31 6 237 323 81",
  phoneHref: "tel:+31623732381",
  email: "info@lievenseconstructie.nl",
  emailHref: "mailto:info@lievenseconstructie.nl",
  region: "Zeeland",
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "Bandoprapers", href: "/bandoprapers" },
  { label: "Diensten", href: "/diensten" },
  { label: "Over ons", href: "/over-ons" },
  { label: "Contact", href: "/contact" },
];

export const services = [
  {
    num: "01",
    title: "Bandoprapers",
    short: "Ontwerp en fabricage van bandoprapers voor maaidorsers.",
    body: "Speciaal ontwikkeld voor het oprapen van voorgemaaide gewassen. Mechanisch of hydraulisch aangedreven en passend op elk merk maaidorser.",
    href: "/bandoprapers",
  },
  {
    num: "02",
    title: "Constructiewerk en aandrijftechniek",
    short: "Maatwerkconstructies, van enkel stuk tot serie.",
    body: "Kleine en middelgrote constructies plus mechanische, hydraulische en elektrische aandrijvingen. We passen bestaande machines aan en moderniseren ze.",
    href: "/diensten#constructie",
  },
  {
    num: "03",
    title: "Onderhoud en reparatie",
    short: "Onderhoud van landbouwmachines en heftrucks.",
    body: "Van periodiek onderhoud tot revisie. Met onze eigen vlakbank vlakken we de dorskorf voor een scherpe en geheel vlakke korf.",
    href: "/diensten#onderhoud",
  },
  {
    num: "04",
    title: "Agrarisch loonwerk",
    short: "Praktische ondersteuning op het land.",
    body: "Meedenkend en flexibel loonwerk in de regio, met dezelfde vakkennis waarmee we de machines bouwen.",
    href: "/diensten#loonwerk",
  },
];

export const values = [
  { key: "Vakmanschap", desc: "Jarenlange ervaring en specialistische kennis, doorgegeven van generatie op generatie." },
  { key: "Maatwerk", desc: "Oplossingen die precies aansluiten bij uw machine, gewas en werkwijze." },
  { key: "Kwaliteit", desc: "Degelijke, duurzame constructies die seizoen na seizoen meegaan." },
  { key: "Flexibiliteit", desc: "Snel schakelen, meedenken en leveren wat het werk op dat moment vraagt." },
];
