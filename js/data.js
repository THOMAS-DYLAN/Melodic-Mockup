/* =========================================================
   MELODIC ARTISAN — product catalog
   No backend — this file IS the "database".
   ========================================================= */

const SHOP = {
  name: "Melodic Artisan",
  handle: "MelodicArtisan",
  tagline: "Artisan Factory — Create products with passion.",
  location: "Hải Dương, Vietnam",
  founded: 2021,
  ordersShipped: 23243,
  rating: 4.9,
  reviewCount: 5522,
  yearsInBusiness: 4,
  subscribers: 4211,
  topRated: true,
  ownerName: "Tuan Anh",
  ownerRole: "Owner, Maker, Designer",
  ownerBlurb: "My name is Tuan Anh, I am the owner of a handmade goods factory. I love art, especially products with epoxy resin material. I always try every day to make the product I make the best.",
  story: "Before this shop existed, our team were strangers with day jobs — engineers, teachers, a cook training to be a chef. When COVID hit, we all lost our work at the same time. What we had in common was a love of art. One afternoon we watched a video on pouring epoxy resin into keycaps and got hooked on how magical the results looked. That afternoon became a workshop, and the workshop became Melodic Artisan.",
  shopIcon: "https://i.etsystatic.com/32520004/r/isla/58f06c/52537685/isla_500x500.52537685_kwtcnehc.jpg",
  ownerPhoto: "https://i.etsystatic.com/isc/17d407/1069168880301/isc_90x90.1069168880301_cpbu.jpg",
  banners: [
    "https://i.etsystatic.com/32520004/r/isbl/1b81f7/82657643/isbl_1680x420.82657643_6jaf0e0v.jpg",
    "https://i.etsystatic.com/32520004/r/isbl/75d612/80499354/isbl_1680x420.80499354_gpo1rtwa.jpg",
    "https://i.etsystatic.com/32520004/r/isbl/42bedd/81445205/isbl_1680x420.81445205_fyqu5hnl.jpg",
    "https://i.etsystatic.com/32520004/r/isbl/f74c02/79942506/isbl_1680x420.79942506_qbbuhoty.jpg"
  ],
  aboutPhotos: [
    "https://i.etsystatic.com/isa/faea88/1036795794150/isa_760xN.1036795794150_5vqi.jpg",
    "https://i.etsystatic.com/isa/e457d3/1059241447881/isa_760xN.1059241447881_cerd.jpg",
    "https://i.etsystatic.com/isa/4ab851/1036795805694/isa_760xN.1036795805694_di1s.jpg",
    "https://i.etsystatic.com/isa/007c95/1036795816312/isa_760xN.1036795816312_575g.jpg",
    "https://i.etsystatic.com/isa/77418c/1036795821292/isa_760xN.1036795821292_jfj4.jpg"
  ],
  announcement: "BUY 1 GET 1 FREE on every listing marked \u201CBuy 1 Get 1 Free.\u201D Order any product and we'll toss in one random keycap on the house \u2014 never a duplicate. Thank you for visiting our little workshop!",
  payments: ["PayPal", "Visa", "Mastercard", "Discover", "Apple Pay", "Klarna"],
  policies: {
    shipping: "Ships from Hải Dương, Vietnam. See each listing for estimated arrival \u2014 most resin lamps run 2\u20133 weeks, keycaps ship faster. Buyers are responsible for customs & import taxes.",
    returns: "Returns & exchanges accepted within 30 days of delivery. Buyer covers return shipping; items must come back in original condition.",
    cancellations: "Cancellations are not accepted once an order enters production \u2014 message the shop right away if something's wrong."
  }
};

const CATEGORIES = [
  { id: "all",          label: "All Items" },
  { id: "epoxy-lamp",   label: "Epoxy Lamps" },
  { id: "anime-keycap", label: "Anime Artisan Keycaps" },
  { id: "game-keycap",  label: "Game Keycaps" },
  { id: "koi-sea",      label: "Koi Fish & Sea Creatures" },
  { id: "spacebar",     label: "Spacebar Keycaps" },
  { id: "3d-keycap",    label: "3D Keycaps" },
  { id: "halloween",    label: "Halloween Keycaps" },
  { id: "clearance",    label: "Clearance" }
];

/* Real photography pulled from the shop's listing pages, pooled by subject
   so every card shows an authentic Melodic Artisan photo. */
const IMG = {
  spiderman:   "https://i.etsystatic.com/32520004/r/il/9e6ae1/7470832421/il_794xN.7470832421_anii.jpg",
  spiderman2:  "https://i.etsystatic.com/32520004/r/il/72232f/7457369713/il_794xN.7457369713_ip5d.jpg",
  spiderman3:  "https://i.etsystatic.com/32520004/r/il/7c3ddc/7462677621/il_794xN.7462677621_688j.jpg",
  spiderman4:  "https://i.etsystatic.com/32520004/r/il/2739d4/7414770322/il_794xN.7414770322_eq87.jpg",
  hollow:      "https://i.etsystatic.com/32520004/r/il/a47e8c/7529395742/il_794xN.7529395742_5gus.jpg",
  hollow2:     "https://i.etsystatic.com/32520004/r/il/8747f5/7435052805/il_794xN.7435052805_tlce.jpg",
  hollow3:     "https://i.etsystatic.com/32520004/r/il/b862f2/7372925242/il_794xN.7372925242_s3i7.jpg",
  hollow4:     "https://i.etsystatic.com/32520004/r/il/50f7bd/7372914784/il_794xN.7372914784_49zn.jpg",
  koiset:      "https://i.etsystatic.com/32520004/r/il/b1c498/8175596045/il_794xN.8175596045_7htw.jpg",
  koiset2:     "https://i.etsystatic.com/32520004/r/il/f7cfe4/8127681024/il_794xN.8127681024_gp1a.jpg",
  koiset3:     "https://i.etsystatic.com/32520004/r/il/cd2064/8175593337/il_794xN.8175593337_s53z.jpg",
  koiset4:     "https://i.etsystatic.com/32520004/r/il/55d6cc/8175593385/il_794xN.8175593385_p2y3.jpg",
  koiset5:     "https://i.etsystatic.com/32520004/r/il/953989/8175593315/il_794xN.8175593315_rdvl.jpg",
  koiset6:     "https://i.etsystatic.com/32520004/r/il/e64ec1/8127681054/il_794xN.8127681054_jt4f.jpg",
  about1:      "https://i.etsystatic.com/isa/faea88/1036795794150/isa_760xN.1036795794150_5vqi.jpg",
  about2:      "https://i.etsystatic.com/isa/e457d3/1059241447881/isa_760xN.1059241447881_cerd.jpg",
  about3:      "https://i.etsystatic.com/isa/4ab851/1036795805694/isa_760xN.1036795805694_di1s.jpg",
  about4:      "https://i.etsystatic.com/isa/007c95/1036795816312/isa_760xN.1036795816312_575g.jpg",
  about5:      "https://i.etsystatic.com/isa/77418c/1036795821292/isa_760xN.1036795821292_jfj4.jpg",
  banner1:     "https://i.etsystatic.com/32520004/r/isbl/1b81f7/82657643/isbl_1680x420.82657643_6jaf0e0v.jpg",
  banner2:     "https://i.etsystatic.com/32520004/r/isbl/75d612/80499354/isbl_1680x420.80499354_gpo1rtwa.jpg"
};

const LAMP_GALLERY = [IMG.hollow, IMG.hollow2, IMG.hollow3, IMG.hollow4, IMG.spiderman, IMG.spiderman2];
const HERO_GALLERY  = [IMG.spiderman, IMG.spiderman2, IMG.spiderman3, IMG.spiderman4, IMG.hollow, IMG.hollow2];
const KEYCAP_GALLERY = [IMG.koiset, IMG.koiset2, IMG.koiset3, IMG.koiset4, IMG.koiset5, IMG.koiset6];
const ABOUT_GALLERY = [IMG.about1, IMG.about2, IMG.about3, IMG.about4, IMG.about5];

function pick(pool, seed) { return pool[seed % pool.length]; }

/* Each product: id (stable slug), listingId (internal SKU reference),
   title, price, originalPrice, category, image, gallery[], badge,
   description, materials, variants[] */
const PRODUCTS = [
  {
    id: "spiderman-venom-lamp", listingId: "1610721664",
    title: "Spider-Man & Ve.nom Night Light — Custom Hero Resin Lamp, Black Monster Personalized Night Light",
    price: 53.67, originalPrice: 214.66, category: "epoxy-lamp", badge: "Bestseller",
    image: IMG.spiderman, gallery: HERO_GALLERY,
    rating: 4.8, reviews: 20,
    description: "Two rival heroes cast in one resin diorama. Every figure is hand-poured and hand-painted in layered epoxy so the black symbiote ink seems to swirl under the LED glow. Sits on a USB-powered wooden magnetic stand with a 10-colour remote (batteries not included per customs rules).",
    materials: "Epoxy, resin, acrylic, hand-mixed metallic pigment",
    variants: [
      { label: "Small (12cm)", price: 53.59 },
      { label: "Medium (14.4cm)", price: 73.44 },
      { label: "Large (16cm)", price: 111.15 },
      { label: "Clearance — Small (light flaws)", price: 37.71 }
    ]
  },
  {
    id: "hollow-knight-lamp", listingId: "1750660758",
    title: "Hollow Knight Resin Lamp — Handmade LED Night Light, Indie Game Diorama Decor",
    price: 25.44, originalPrice: 101.77, category: "epoxy-lamp", badge: "Bestseller",
    image: IMG.hollow, gallery: LAMP_GALLERY,
    rating: 4.8, reviews: 62,
    description: "Hallownest poured in transparent resin. A detailed 3D diorama sits inside layered clear epoxy so the whole scene glows from within on soft LED light — one of the shop's most-gifted pieces every holiday season.",
    materials: "Epoxy, resin, acrylic, 3D print detailing",
    variants: [
      { label: "Medium (12cm)", price: 49.69 },
      { label: "Large (14.4cm)", price: 73.54 },
      { label: "XL (16cm)", price: 111.31 },
      { label: "1u Keycap only", price: 25.44 }
    ]
  },
  {
    id: "koi-fish-keycap-set", listingId: "4520690471",
    title: "Set of 5 Koi Fish Keycaps — Sea Creature Keycaps for Mechanical Keyboard, Handmade Resin",
    price: 9.94, originalPrice: 39.75, category: "koi-sea", badge: "Clearance Pick",
    image: IMG.koiset, gallery: KEYCAP_GALLERY,
    rating: 4.9, reviews: 0,
    description: "A grab-bag set of hand-poured sea-creature keycaps — koi, jellyfish, axolotl, stingray, shark, and more, randomly selected from shop stock at a steep clearance price. Some pieces are flawless, a few carry tiny cosmetic quirks; all are one-of-one resin art.",
    materials: "SA-profile resin, fits Cherry MX and clones, 1u size",
    variants: [
      { label: "Set of 5 (random)", price: 9.94 },
      { label: "Set of 9 (random)", price: 17.89 },
      { label: "Set of 18 (random)", price: 35.78 }
    ]
  },
  { id: "custom-anime-lamp-1", listingId: "4470117734", title: "Custom Lamp — Custom Anime Night Lamp, Epoxy Resin, Handmade Resin Wood Lamp", price: 49.69, originalPrice: 198.76, category: "epoxy-lamp", image: pick(LAMP_GALLERY,1), gallery: LAMP_GALLERY, rating: 4.9, reviews: 8, description: "Send your favorite character and the workshop hand-pours a fully custom resin diorama lamp around it, mounted on a magnetic wooden USB base.", materials: "Epoxy, resin, wood base", variants: [{label:"Standard", price:49.69}] },
  { id: "anime-night-light-1", listingId: "1858577385", title: "Anime Night Light — CUSTOM Epoxy Lamp, Personalized Night Light Home Decor", price: 49.69, originalPrice: 198.76, category: "epoxy-lamp", image: pick(LAMP_GALLERY,2), gallery: LAMP_GALLERY, rating: 4.9, reviews: 6, description: "A personalized anime scene poured entirely in clear epoxy, lit from beneath with a warm LED base. Great gift for him.", materials: "Epoxy, resin, LED wood stand", variants: [{label:"Standard", price:49.69}] },
  { id: "link-zelda-lamp", listingId: "4351314141", title: "Li.nk Zel.da Resin Lamp — Link & Master Sword Resin Table Lamp, Custom Night Light", price: 34.78, originalPrice: 139.13, category: "epoxy-lamp", image: pick(LAMP_GALLERY,3), gallery: LAMP_GALLERY, rating: 4.9, reviews: 4, description: "The hero and the Master Sword suspended in layered clear resin, hand-painted before casting so the color holds true under the glow.", materials: "Epoxy, resin", variants: [{label:"Standard", price:34.78}] },
  { id: "link-lamp-2", listingId: "4431955202", title: "Li.nk Resin Lamp — Link & Master Sword Anime Lamp, Custom Resin Night Light", price: 37.76, originalPrice: 151.06, category: "epoxy-lamp", image: pick(LAMP_GALLERY,4), gallery: LAMP_GALLERY, rating: 4.9, reviews: 3, description: "A companion piece to the Zelda lamp series — same hand-poured diorama technique, different pose and base color options on request.", materials: "Epoxy, resin", variants: [{label:"Standard", price:37.76}] },
  { id: "lucy-johnny-lamp", listingId: "1632494665", title: "Lu.cy & John.ny Artisan Resin Lamp — Cyberpunk Character Handmade Resin Lamp", price: 37.76, originalPrice: 151.06, category: "epoxy-lamp", badge: "Customer Favorite", image: pick(LAMP_GALLERY,5), gallery: LAMP_GALLERY, rating: 5.0, reviews: 5, description: "Neon-soaked Night City rendered in resin — this one comes up again and again in the shop's five-star reviews for how the colors pop under LED light.", materials: "Epoxy, resin, metallic pigment", variants: [{label:"Standard", price:37.76}] },
  { id: "darth-vader-lamp", listingId: "4429703297", title: "Dar.th Va.der Night Light — Star War.s Epoxy Lamp, Stormtrooper Lightsaber Diorama", price: 37.76, originalPrice: 151.06, category: "epoxy-lamp", image: pick(HERO_GALLERY,2), gallery: HERO_GALLERY, rating: 4.8, reviews: 7, description: "A moody galactic diorama with the lightsaber cast to glow brightest at the blade — a favorite for gaming-room shelves.", materials: "Epoxy, resin, hand-painted detail", variants: [{label:"Standard", price:37.76}] },
  { id: "custom-knob-keycap", listingId: "4346157015", title: "Custom Knob Keycap — Volume Knob for Mechanical Keyboard, Gaming Gear", price: 27.43, originalPrice: 109.72, category: "keycap", image: pick(KEYCAP_GALLERY,1), gallery: KEYCAP_GALLERY, rating: 4.7, reviews: 2, description: "A hand-cast volume knob keycap sized for Keychron and most rotary-encoder boards — resin core with a smooth-turning fit.", materials: "Resin, brass insert", variants: [{label:"Standard", price:27.43}] },
  { id: "blind-box-keycap", listingId: "4354676282", title: "Blind Box Keycaps — Custom Artisan Keycap, SA Profile, Cherry MX Mechanical Gaming Keyboard", price: 14.51, originalPrice: 58.04, category: "3d-keycap", badge: "Mystery Pick", image: pick(KEYCAP_GALLERY,2), gallery: KEYCAP_GALLERY, rating: 4.6, reviews: 3, description: "You don't know which artisan sculpt you'll get until it arrives — a mystery-box format the shop runs through its 3D keycap catalog.", materials: "SA-profile resin, 1u", variants: [{label:"1 Blind Box", price:14.51}] },
  { id: "anime-night-light-2", listingId: "1768081606", title: "Anime Night Light — CUSTOM Epoxy Lamp, Personalized Resin Wood Lamp, Gifts for Him", price: 49.69, originalPrice: 198.76, category: "epoxy-lamp", image: pick(LAMP_GALLERY,0), gallery: LAMP_GALLERY, rating: 4.9, reviews: 5, description: "A second colorway of the shop's signature personalized anime lamp — same hand-pour process, different character on request.", materials: "Epoxy, resin, wood", variants: [{label:"Standard", price:49.69}] },
  { id: "anime-resin-lamp-game", listingId: "4336354047", title: "Anime Resin Lamp — Game Inspired Epoxy Art Night Light, Handmade Resin Wood Lamp", price: 53.67, originalPrice: 214.66, category: "epoxy-lamp", image: pick(LAMP_GALLERY,1), gallery: LAMP_GALLERY, rating: 4.9, reviews: 4, description: "Built for game-inspired dioramas with denser detail work — extra pouring passes to get the depth right on busy scenes.", materials: "Epoxy, resin", variants: [{label:"Standard", price:53.67}] },
  { id: "clearance-anime-lamp", listingId: "1613326378", title: "CLEARANCE Anime Lamp — Custom Anime Night Lamp, Epoxy Resin & Wood Lamp", price: 23.85, originalPrice: 95.41, category: "clearance", badge: "Clearance", image: pick(LAMP_GALLERY,2), gallery: LAMP_GALLERY, rating: 4.7, reviews: 6, description: "Small cosmetic imperfections — a stray bubble, a touch of dust in the pour — at a steep discount. Still fully handmade, still glows the same.", materials: "Epoxy, resin (B-grade cosmetic)", variants: [{label:"Clearance unit", price:23.85}] },
  { id: "clearance-shark-lamp", listingId: "4401226816", title: "CLEARANCE Epoxy Lamp — Shark Lamp, Custom Resin Wood Lamp, Handcrafted Gift", price: 29.81, originalPrice: 119.26, category: "clearance", badge: "Clearance", image: pick(LAMP_GALLERY,3), gallery: LAMP_GALLERY, rating: 4.7, reviews: 4, description: "A shark diorama pulled from clearance stock — minor surface marks only, priced to clear ahead of new molds.", materials: "Epoxy, resin (B-grade cosmetic)", variants: [{label:"Clearance unit", price:29.81}] },
  { id: "clearance-night-light", listingId: "1742669438", title: "CLEARANCE Night Light — Custom Anime Night Lamp, Epoxy Resin & Wood Lamp", price: 23.85, originalPrice: 95.41, category: "clearance", badge: "Clearance", image: pick(LAMP_GALLERY,4), gallery: LAMP_GALLERY, rating: 4.6, reviews: 3, description: "Same hand-pour lamp line, offered at clearance pricing for units with slight haze in the resin.", materials: "Epoxy, resin (B-grade cosmetic)", variants: [{label:"Clearance unit", price:23.85}] },
  { id: "game-artisan-keycap-1", listingId: "1630005280", title: "Game Artisan Keycap — ESC Resin Keycap, Anime Character Custom Keycap Game Decoration", price: 24.85, originalPrice: 99.38, category: "game-keycap", image: pick(KEYCAP_GALLERY,3), gallery: KEYCAP_GALLERY, rating: 4.8, reviews: 5, description: "An ESC-key-sized sculpt built for character detail — the extra surface area over a standard 1u lets the paintwork breathe.", materials: "Resin, ESC profile", variants: [{label:"Standard", price:24.85}] },
  { id: "anime-artisan-keycap-1", listingId: "1574944250", title: "Gaming Keycap — Artisan Keycap, Anime Artisan Keycaps, Custom Keycap Resin", price: 24.85, originalPrice: 99.38, category: "anime-keycap", image: pick(KEYCAP_GALLERY,4), gallery: KEYCAP_GALLERY, rating: 4.8, reviews: 2, description: "Part of the shop's core anime-keycap line — 1u SA profile, hand painted before the final clear-coat pour.", materials: "Resin, SA profile", variants: [{label:"Standard", price:24.85}] },
  { id: "master-sword-keycap", listingId: "1879130556", title: "Master Sword & Shield Keycap — Legend of Z Resin Keycap, Gaming Keycap Gifts", price: 24.85, originalPrice: 99.38, category: "game-keycap", image: pick(KEYCAP_GALLERY,5), gallery: KEYCAP_GALLERY, rating: 4.9, reviews: 3, description: "The sword-and-shield motif cast in layered resin with gold-leaf pigment on the hilt detailing.", materials: "Resin, gold-leaf pigment, SA profile", variants: [{label:"Standard", price:24.85}] },
  { id: "custom-keycap-anime-2", listingId: "1800606859", title: "Custom Keycap — Gaming Keycap, Anime Artisan Keycaps, Custom Keycap Resin", price: 24.85, originalPrice: 99.38, category: "anime-keycap", image: pick(KEYCAP_GALLERY,0), gallery: KEYCAP_GALLERY, rating: 4.8, reviews: 1, description: "Send a reference image and the shop hand-sculpts a one-off character keycap to match, cast in clear resin.", materials: "Resin, SA profile", variants: [{label:"Standard", price:24.85}] },
  { id: "game-artisan-keycap-2", listingId: "1589100335", title: "Game Artisan Keycap — ESC Resin Keycap, Resin Handmade Keycap, Game Decoration", price: 13.91, originalPrice: 55.65, category: "game-keycap", image: pick(KEYCAP_GALLERY,1), gallery: KEYCAP_GALLERY, rating: 4.7, reviews: 2, description: "A smaller-run ESC keycap sculpt at an entry price point — same resin process, simpler silhouette.", materials: "Resin, ESC profile", variants: [{label:"Standard", price:13.91}] },
  { id: "pip-boy-keycap", listingId: "1257937932", title: "Pi.p B.oy Keycap — Fallout Pi.p B.oy Keycap, Custom Artisan Resin Keycap Set", price: 8.35, originalPrice: 33.39, category: "3d-keycap", image: pick(KEYCAP_GALLERY,2), gallery: KEYCAP_GALLERY, rating: 4.6, reviews: 4, description: "A wasteland-terminal sculpt with the screen detail hand-painted before the clear pour locks it in.", materials: "Resin, SA profile", variants: [{label:"Standard", price:8.35}] },
  { id: "sea-turtle-spacebar", listingId: "1588260688", title: "Sea Turtle Spacebar — Turtle Resin OEM SA Profile Key Cap, Custom Spacebar", price: 15.11, originalPrice: 60.42, category: "spacebar", image: pick(KEYCAP_GALLERY,3), gallery: KEYCAP_GALLERY, rating: 4.8, reviews: 3, description: "A full-width spacebar with a turtle drifting through swirled blue-green resin — one continuous pour, no seams.", materials: "Resin, OEM/SA spacebar profile", variants: [{label:"Standard", price:15.11}] },
  { id: "blue-koi-spacebar", listingId: "1507292831", title: "Blue Koi Spacebar — Koi Fish Resin OEM SA Profile Key Cap, Custom Spacebar", price: 13.12, originalPrice: 52.47, category: "spacebar", image: pick(KEYCAP_GALLERY,4), gallery: KEYCAP_GALLERY, rating: 4.9, reviews: 6, description: "The koi-fish spacebar that started the shop's whole sea-creature line — deep blue swirl with a single white-and-red koi.", materials: "Resin, OEM/SA spacebar profile", variants: [{label:"Standard", price:13.12}] },
  { id: "purple-koi-keycap", listingId: "1572237303", title: "Purple Blue Koi Fish OEM Keycap — SA Profile Handmade Artisan Keycap", price: 13.12, originalPrice: 52.47, category: "koi-sea", image: pick(KEYCAP_GALLERY,5), gallery: KEYCAP_GALLERY, rating: 4.9, reviews: 2, description: "Cooler purple-blue water tones with the same hand-placed koi figure as the rest of the series.", materials: "Resin, SA profile", variants: [{label:"Standard", price:13.12}] },
  { id: "red-koi-keycap", listingId: "1541351302", title: "Red Koi Keycap — Koi Fish for Cherry MX Keycap, Artisan Resin Keycap", price: 13.12, originalPrice: 52.47, category: "koi-sea", image: pick(KEYCAP_GALLERY,0), gallery: KEYCAP_GALLERY, rating: 4.9, reviews: 3, description: "Warm red-and-gold koi swimming through translucent resin — the shop's most-favorited single-key koi design.", materials: "Resin, 1u SA profile", variants: [{label:"Standard", price:13.12}] },
  { id: "green-koi-spacebar", listingId: "4347277206", title: "Green Koi Spacebar — Koi Fish Resin OEM SA Profile Key Cap, Custom Spacebar", price: 13.12, originalPrice: 52.47, category: "spacebar", image: pick(KEYCAP_GALLERY,1), gallery: KEYCAP_GALLERY, rating: 4.8, reviews: 1, description: "A jade-green colorway of the koi spacebar line, same casting process as the blue and purple versions.", materials: "Resin, OEM/SA spacebar profile", variants: [{label:"Standard", price:13.12}] },
  { id: "stingray-keycap", listingId: "4471186986", title: "Ocean Stingray Artisan Keycap — Sea Creature Cherry MX Keycap, Resin Keyboard Keycap", price: 13.12, originalPrice: 52.47, category: "koi-sea", image: pick(KEYCAP_GALLERY,2), gallery: KEYCAP_GALLERY, rating: 4.8, reviews: 1, description: "A stingray gliding through deep-blue resin — part of the same clearance-adjacent sea-creature drop as the koi keycaps.", materials: "Resin, 1u SA profile", variants: [{label:"Standard", price:13.12}] },
  { id: "custom-keycap-character", listingId: "4347798705", title: "Custom Keycap — Anime Keycap, Character Custom Keycap, Cherry MX Resin Keycap", price: 21.47, originalPrice: 85.86, category: "anime-keycap", image: pick(KEYCAP_GALLERY,3), gallery: KEYCAP_GALLERY, rating: 4.8, reviews: 2, description: "Custom character request keycap — send your reference art, the shop sculpts and casts a one-off.", materials: "Resin, 1u profile", variants: [{label:"Standard", price:21.47}] },
  { id: "majora-mask-lamp-2", listingId: "1883550168", title: "Diorama M.a.jor.a Mask Resin Lamp — Legend of Z Resin Night Light, Epoxy Lamp Gift", price: 45.71, originalPrice: 182.86, category: "epoxy-lamp", image: pick(LAMP_GALLERY,5), gallery: LAMP_GALLERY, rating: 4.9, reviews: 9, description: "One of the shop's most-reviewed dioramas — reviewers regularly mention the moon glows brightest of anything on the lamp.", materials: "Epoxy, resin", variants: [{label:"Standard", price:45.71}] },
  { id: "destiny-night-light-2", listingId: "1903873469", title: "De.s.ti.ny2 Night Light — Custom Anime Night Lamp, Epoxy Resin & Wood Lamp", price: 46.01, originalPrice: 184.05, category: "epoxy-lamp", image: pick(LAMP_GALLERY,0), gallery: LAMP_GALLERY, rating: 4.8, reviews: 4, description: "A Guardian-class diorama in layered resin, cast to catch light along the armor edges.", materials: "Epoxy, resin", variants: [{label:"Standard", price:46.01}] },
  { id: "miku-resin-lamp", listingId: "1897711313", title: "Miku Resin Lamp — Custom Anime Night Lamp, Epoxy Resin & Wood Lamp, Handcrafted Gift", price: 30.31, originalPrice: 121.24, category: "epoxy-lamp", image: pick(LAMP_GALLERY,1), gallery: LAMP_GALLERY, rating: 4.9, reviews: 5, description: "Teal-and-white color work on this one, poured in thin layers to keep the figure crisp under the LED base.", materials: "Epoxy, resin", variants: [{label:"Standard", price:30.31}] },
  { id: "anime-epoxy-lamp-2", listingId: "1626439559", title: "Anime Epoxy Lamp — Custom Anime Night Lamp, Handmade Resin & Wood Lamp", price: 29.81, originalPrice: 119.26, category: "epoxy-lamp", image: pick(LAMP_GALLERY,2), gallery: LAMP_GALLERY, rating: 4.8, reviews: 3, description: "Entry-price lamp in the anime diorama line — smaller scene, same hand-pour finish.", materials: "Epoxy, resin", variants: [{label:"Standard", price:29.81}] },
  { id: "halloween-artisan-keycap", listingId: "1546447097", title: "Halloween Artisan Keycap — Horror Keycap, Skull Keycap, Cherry MX Keycaps", price: 24.85, originalPrice: 99.38, category: "halloween", badge: "Seasonal", image: pick(KEYCAP_GALLERY,4), gallery: KEYCAP_GALLERY, rating: 4.8, reviews: 4, description: "A skull sculpt cast in smoked resin for the October rotation of the shop's catalog — glows faintly under keyboard backlight.", materials: "Resin, SA profile", variants: [{label:"Standard", price:24.85}] },
  { id: "game-keycap-anime-3", listingId: "1583764356", title: "Game Keycap — Custom Keycap, Artisan Keycap, Anime Keycaps, Resin, Handmade", price: 21.47, originalPrice: 85.86, category: "game-keycap", image: pick(KEYCAP_GALLERY,5), gallery: KEYCAP_GALLERY, rating: 4.7, reviews: 2, description: "General game-keycap listing covering several in-stock character sculpts — check the shop for current options.", materials: "Resin, SA profile", variants: [{label:"Standard", price:21.47}] },
  { id: "custom-spacebar-character", listingId: "1259051437", title: "Custom Keycap — Custom Spacebar Keycap, Character Custom Keycap, Resin Keycap Set", price: 21.47, originalPrice: 85.86, category: "spacebar", image: pick(KEYCAP_GALLERY,0), gallery: KEYCAP_GALLERY, rating: 4.8, reviews: 1, description: "Full custom spacebar sculpt built around your character request, same clear-resin process as the standard koi spacebars.", materials: "Resin, OEM/SA spacebar profile", variants: [{label:"Standard", price:21.47}] },
  { id: "koi-fish-spacebar-custom", listingId: "1602375501", title: "Koi Fish Spacebar — Custom Spacebar, Custom Koi Resin Handmade Keycap", price: 47.70, originalPrice: 190.81, category: "spacebar", badge: "Premium", image: pick(KEYCAP_GALLERY,1), gallery: KEYCAP_GALLERY, rating: 4.9, reviews: 2, description: "The shop's most detailed spacebar build — multiple koi in a full aquatic scene across the whole key.", materials: "Resin, OEM/SA spacebar profile", variants: [{label:"Standard", price:47.70}] }
];

function getProduct(id) {
  return PRODUCTS.find(p => p.id === id);
}
function getCategoryLabel(id) {
  const c = CATEGORIES.find(c => c.id === id);
  return c ? c.label : id;
}
function pctOff(p) {
  return Math.round((1 - p.price / p.originalPrice) * 100);
}
function money(n) {
  return "$" + n.toFixed(2);
}

/* =========================================================
   Order history — seeded sample history so the dashboard and
   orders page have something real to show. New orders placed
   through checkout are appended on top of this in localStorage.
   ========================================================= */

const ORDER_STATUS_STEPS = ["Processing", "Shipped", "Delivered"];

const CUSTOMER = {
  name: "Jordan Ellis",
  email: "jordan.ellis@example.com",
  memberSince: "2025-02-11",
  address: { name: "Jordan Ellis", line1: "412 Birchwood Ave", city: "Kansas City", region: "MO", zip: "64105", country: "United States" }
};

const SEED_ORDERS = [
  {
    id: "MA-10482",
    date: "2026-06-18",
    status: "Delivered",
    address: CUSTOMER.address,
    items: [
      { productId: "hollow-knight-lamp", variantLabel: "Medium (12cm)", unitPrice: 49.69, qty: 1 },
      { productId: "koi-fish-keycap-set", variantLabel: "Set of 5 (random)", unitPrice: 9.94, qty: 1 }
    ]
  },
  {
    id: "MA-10391",
    date: "2026-05-30",
    status: "Delivered",
    address: CUSTOMER.address,
    items: [
      { productId: "spiderman-venom-lamp", variantLabel: "Medium (14.4cm)", unitPrice: 73.44, qty: 1 }
    ]
  },
  {
    id: "MA-10233",
    date: "2026-05-02",
    status: "Delivered",
    address: CUSTOMER.address,
    items: [
      { productId: "blue-koi-spacebar", variantLabel: "Standard", unitPrice: 13.12, qty: 1 },
      { productId: "green-koi-spacebar", variantLabel: "Standard", unitPrice: 13.12, qty: 1 }
    ]
  },
  {
    id: "MA-10312",
    date: "2026-06-24",
    status: "Shipped",
    address: CUSTOMER.address,
    items: [
      { productId: "master-sword-keycap", variantLabel: "Standard", unitPrice: 24.85, qty: 2 },
      { productId: "halloween-artisan-keycap", variantLabel: "Standard", unitPrice: 24.85, qty: 1 }
    ]
  },
  {
    id: "MA-10095",
    date: "2026-06-27",
    status: "Processing",
    address: CUSTOMER.address,
    items: [
      { productId: "miku-resin-lamp", variantLabel: "Standard", unitPrice: 30.31, qty: 1 }
    ]
  }
];
