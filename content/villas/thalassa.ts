import type { Villa } from "@/content/types";

// Demo villa — Vasilikos, Zakynthos.
export const thalassa: Villa = {
  slug: "thalassa",
  name: "Villa Thalassa",
  tagline: {
    en: "A quiet retreat above the Ionian, minutes from turtle beaches.",
    el: "Ένα ήσυχο καταφύγιο πάνω από το Ιόνιο, λίγα λεπτά από τις παραλίες της καρέτα.",
  },
  heroImages: [
    "/villas/thalassa/hero-1.jpg",
    "/villas/thalassa/hero-2.jpg",
    "/villas/thalassa/hero-3.jpg",
    "/villas/thalassa/hero-4.jpg",
  ],
  defaultLocale: "en",
  location: {
    area: { en: "Vasilikos · Zakynthos", el: "Βασιλικός · Ζάκυνθος" },
    lat: 37.710631,
    lon: 20.988453,
  },
  host: {
    name: "Michael",
    photo: "/villas/thalassa/host.jpg",
    note: {
      en: "Welcome to Villa Thalassa! In this guide you will find everything for a comfortable stay — from the Wi-Fi password to the beaches and tavernas we love ourselves. Message me on WhatsApp any time, for anything at all. Kalos irthate! — George",
      el: "Καλώς ήρθατε στη Villa Thalassa! Σε αυτόν τον οδηγό θα βρείτε ό,τι χρειάζεστε για μια άνετη διαμονή — από τον κωδικό Wi-Fi μέχρι τις παραλίες και τις ταβέρνες που αγαπάμε κι εμείς. Στείλτε μου μήνυμα στο WhatsApp οποιαδήποτε στιγμή, για οτιδήποτε. — Γιώργος",
    },
    phone: "+306977616178",
    whatsapp: "+306977616178",
    email: "pixeldesignzakynthos@gmail.com", // TODO
  },
  social: {
    instagram: "https://www.instagram.com/mikeszante/",
    facebook: "https://www.facebook.com/georgizas.michael?locale=el_GR",
  },
  ctas: [
    {
      kind: "whatsapp",
      icon: "chat",
      label: { en: "WhatsApp host", el: "WhatsApp" },
    },
    {
      kind: "checkin",
      icon: "checkin",
      label: { en: "Check-in form", el: "Φόρμα check-in" },
    },
  ],
  footer: {
    address: {
      en: "Vasilikos 290 91, Zakynthos",
      el: "Βασιλικός 290 91, Ζάκυνθος",
    },
  },
  sections: [
    {
      slug: "arrival",
      icon: "arrival",
      title: { en: "Arrival & keys", el: "Άφιξη & κλειδιά" },
      intro: {
        en: "Everything you need for a smooth first hour — and a smooth last one.",
        el: "Ό,τι χρειάζεστε για μια εύκολη πρώτη ώρα — και μια εύκολη τελευταία.",
      },
      blocks: [
        {
          type: "info",
          rows: [
            { label: { en: "Check-in", el: "Άφιξη" }, value: "15:00" },
            { label: { en: "Check-out", el: "Αναχώρηση" }, value: "11:00" },
            {
              label: { en: "Parking", el: "Πάρκινγκ" },
              value: "Free, on the property",
            },
            {
              label: { en: "Directions", el: "Οδηγίες" },
              value: "Open in Google Maps",
              href: "https://www.google.com/maps/dir/?api=1&destination=37.710631,20.988453",
            },
          ],
        },
        {
          type: "steps",
          title: { en: "Getting in", el: "Είσοδος" },
          items: [
            {
              en: "From Zakynthos Airport (ZTH) follow signs to Argassi, then Vasilikos — about 25 minutes.",
              el: "Από το αεροδρόμιο (ZTH) ακολουθήστε προς Αργάσι και μετά Βασιλικό — περίπου 25 λεπτά.",
            },
            {
              en: "The gate is open on arrival day. Park under the olive trees.",
              el: "Η αυλόπορτα είναι ανοιχτή την ημέρα άφιξης. Παρκάρετε κάτω από τις ελιές.",
            },
            {
              en: "The key box is by the front door — we send you the code on WhatsApp the morning of your arrival.",
              el: "Το κλειδοκιβώτιο είναι δίπλα στην είσοδο — σας στέλνουμε τον κωδικό στο WhatsApp το πρωί της άφιξης.",
            },
          ],
        },
        {
          type: "notice",
          tone: "info",
          body: {
            en: "Arriving early or leaving late? Message us — we can usually store luggage or adjust times.",
            el: "Έρχεστε νωρίτερα ή φεύγετε αργότερα; Στείλτε μας μήνυμα — συνήθως μπορούμε να κρατήσουμε αποσκευές ή να προσαρμόσουμε τις ώρες.",
          },
        },
        {
          type: "steps",
          title: { en: "Before you leave", el: "Πριν φύγετε" },
          items: [
            {
              en: "Switch off the A/C and close the windows.",
              el: "Κλείστε τα κλιματιστικά και τα παράθυρα.",
            },
            {
              en: "Leave the keys in the key box.",
              el: "Αφήστε τα κλειδιά στο κλειδοκιβώτιο.",
            },
            {
              en: "That's it — safe travels, and we hope to see you again!",
              el: "Αυτό ήταν — καλό ταξίδι, και ελπίζουμε να σας ξαναδούμε!",
            },
          ],
        },
      ],
    },
    {
      slug: "house",
      icon: "house",
      title: { en: "The house", el: "Το σπίτι" },
      intro: {
        en: "Wi-Fi, appliances and the few house rules that keep everything lovely.",
        el: "Wi-Fi, συσκευές και οι λίγοι κανόνες που κρατούν τα πάντα όμορφα.",
      },
      blocks: [
        {
          type: "info",
          title: { en: "Wi-Fi", el: "Wi-Fi" },
          rows: [
            { label: { en: "Network", el: "Δίκτυο" }, value: "Thalassa_Guest" },
            {
              label: { en: "Password", el: "Κωδικός" },
              value: "ionian2026!",
              copyable: true,
            },
          ],
        },
        {
          type: "text",
          title: { en: "Air conditioning", el: "Κλιματισμός" },
          body: {
            en: "Each bedroom has its own remote. Please keep windows closed while it runs — 26°C keeps the house cool and the island's grid happy.",
            el: "Κάθε υπνοδωμάτιο έχει δικό του χειριστήριο. Κρατήστε τα παράθυρα κλειστά όσο λειτουργεί — οι 26°C αρκούν.",
          },
        },
        {
          type: "text",
          title: { en: "Pool", el: "Πισίνα" },
          body: {
            en: "Cleaned Monday and Thursday mornings. No glass by the water, please — plastic cups are in the kitchen.",
            el: "Καθαρίζεται Δευτέρα και Πέμπτη πρωί. Όχι γυάλινα δίπλα στο νερό — πλαστικά ποτήρια θα βρείτε στην κουζίνα.",
          },
        },
        {
          type: "text",
          title: { en: "Water heater", el: "Θερμοσίφωνας" },
          body: {
            en: "Hot water is solar. On cloudy days flip the boost switch in the hallway for 20 minutes before showering.",
            el: "Το ζεστό νερό είναι ηλιακό. Τις συννεφιασμένες μέρες ανοίξτε τον διακόπτη στον διάδρομο για 20 λεπτά πριν το ντους.",
          },
        },
        {
          type: "notice",
          tone: "warning",
          body: {
            en: "Tap water is fine for washing, but we recommend bottled water for drinking — you'll find a starter pack in the fridge.",
            el: "Το νερό της βρύσης είναι εντάξει για πλύσιμο, αλλά προτείνουμε εμφιαλωμένο για πόσιμο — θα βρείτε ένα πακέτο στο ψυγείο.",
          },
        },
        {
          type: "text",
          title: { en: "Quiet hours & rules", el: "Ώρες ησυχίας & κανόνες" },
          body: {
            en: "Quiet hours: 15:00–17:30 and 23:00–07:00. No smoking indoors, no parties. In summer, please keep sea-facing lights low after dark — loggerhead turtles nest on the beaches below.",
            el: "Ώρες κοινής ησυχίας: 15:00–17:30 και 23:00–07:00. Όχι κάπνισμα μέσα, όχι πάρτι. Το καλοκαίρι κρατήστε χαμηλά τα φώτα προς τη θάλασσα μετά τη δύση — οι καρέτα γεννούν στις παραλίες από κάτω.",
          },
        },
        {
          type: "text",
          title: { en: "Rubbish & recycling", el: "Σκουπίδια & ανακύκλωση" },
          body: {
            en: "Bins are at the end of the driveway — green for general, blue for recycling. Collection is Tuesday and Friday.",
            el: "Οι κάδοι είναι στο τέλος του δρόμου — πράσινος για κοινά, μπλε για ανακύκλωση. Αποκομιδή Τρίτη και Παρασκευή.",
          },
        },
      ],
    },
    {
      slug: "beaches",
      icon: "beaches",
      title: { en: "Beaches nearby", el: "Παραλίες κοντά" },
      intro: {
        en: "The Vasilikos peninsula has the calmest, clearest water on the island. These are our favourites, nearest first.",
        el: "Η χερσόνησος του Βασιλικού έχει τα πιο ήρεμα, καθαρά νερά του νησιού. Οι αγαπημένες μας, από την πιο κοντινή.",
      },
      blocks: [
        {
          type: "places",
          items: [
            {
              name: "Porto Roma",
              tagline: {
                en: "Small pebble-and-sand cove",
                el: "Μικρός όρμος με βότσαλο και άμμο",
              },
              description: {
                en: "Our local beach — quiet, family-run taverna right on the water.",
                el: "Η παραλία της γειτονιάς — ήσυχη, με οικογενειακή ταβέρνα πάνω στο κύμα.",
              },
              distance: { en: "4 min drive", el: "4′ με αυτοκίνητο" },
              image: "/villas/thalassa/porto-roma.jpg",
              mapUrl:
                "https://www.google.com/maps/search/?api=1&query=Porto+Roma+Beach+Zakynthos",
            },
            {
              name: "St. Nicholas",
              tagline: { en: "Watersports hub", el: "Κέντρο θαλάσσιων σπορ" },
              description: {
                en: "Organised beach with jet skis, paddleboards and a diving centre.",
                el: "Οργανωμένη παραλία με jet ski, SUP και καταδυτικό κέντρο.",
              },
              distance: { en: "6 min drive", el: "6′ με αυτοκίνητο" },
              image: "/villas/thalassa/st-nicholas.jpg",
              mapUrl:
                "https://www.google.com/maps/search/?api=1&query=Agios+Nikolaos+Beach+Vasilikos+Zakynthos",
            },
            {
              name: "Gerakas",
              slug: "gerakas",
              tagline: {
                en: "Turtle nesting beach",
                el: "Παραλία ωοτοκίας καρέτα",
              },
              description: {
                en: "Protected National Marine Park beach — wide golden sand, shallow water, best in the morning.",
                el: "Προστατευόμενη παραλία του Θαλάσσιου Πάρκου — πλατιά χρυσή άμμος, ρηχά νερά, ιδανική το πρωί.",
              },
              distance: { en: "7 min drive", el: "7′ με αυτοκίνητο" },
              image: "/villas/thalassa/gerakas.jpg",
              mapUrl:
                "https://www.google.com/maps/search/?api=1&query=Gerakas+Beach+Zakynthos",
              details: {
                body: {
                  en: "Gerakas is the jewel of the Vasilikos peninsula — a long crescent of golden sand inside the National Marine Park of Zakynthos, and one of the most important loggerhead turtle (Caretta caretta) nesting beaches in the Mediterranean.\n\nBecause of the nesting season (roughly May to October), the beach closes at sunset and umbrellas are only allowed in the first rows near the water. Go in the morning: the light is beautiful, the water is glass-calm and shallow for a long way out, and it's much quieter.\n\nThere's a small info point about the turtles at the entrance path — worth five minutes before you head down.",
                  el: "Το Γέρακας είναι το στολίδι της χερσονήσου του Βασιλικού — μια μεγάλη χρυσή αμμουδιά μέσα στο Εθνικό Θαλάσσιο Πάρκο Ζακύνθου και μία από τις σημαντικότερες παραλίες ωοτοκίας της καρέτα (Caretta caretta) στη Μεσόγειο.\n\nΛόγω της περιόδου ωοτοκίας (περίπου Μάιο–Οκτώβριο), η παραλία κλείνει στη δύση και οι ομπρέλες επιτρέπονται μόνο στις πρώτες σειρές κοντά στο νερό. Πηγαίνετε πρωί: το φως είναι υπέροχο, τα νερά ήρεμα και ρηχά, και έχει πολύ λιγότερο κόσμο.\n\nΣτο μονοπάτι της εισόδου υπάρχει ένα μικρό ενημερωτικό σημείο για τις χελώνες — αξίζει πέντε λεπτά πριν κατέβετε.",
                },
                gallery: [
                  "/villas/thalassa/gerakas-2.jpg",
                  "/villas/thalassa/gerakas-3.jpg",
                ],
                hours: {
                  en: "Sunrise to sunset (nesting season)",
                  el: "Ανατολή έως δύση (περίοδος ωοτοκίας)",
                },
              },
            },
            {
              name: "Porto Zorro",
              tagline: {
                en: "Dark sand & rock islets",
                el: "Σκούρα άμμος & βραχονησίδες",
              },
              distance: { en: "7 min drive", el: "7′ με αυτοκίνητο" },
              image: "/villas/thalassa/porto-zorro.jpg",
              mapUrl:
                "https://www.google.com/maps/search/?api=1&query=Porto+Zorro+Beach+Zakynthos",
            },
            {
              name: "Banana",
              tagline: {
                en: "The long, lively one",
                el: "Η μεγάλη και ζωντανή",
              },
              description: {
                en: "The island's longest beach — beach bars, music, sunbeds for days.",
                el: "Η μεγαλύτερη παραλία του νησιού — beach bars, μουσική, ξαπλώστρες παντού.",
              },
              distance: { en: "8 min drive", el: "8′ με αυτοκίνητο" },
              image: "/villas/thalassa/banana.jpg",
              mapUrl:
                "https://www.google.com/maps/search/?api=1&query=Banana+Beach+Zakynthos",
            },
            {
              name: "Dafni",
              tagline: { en: "Wild & unspoiled", el: "Άγρια & ανέγγιχτη" },
              description: {
                en: "The last stretch of road is unpaved — worth it. Two tavernas, turtle territory.",
                el: "Ο τελευταίος δρόμος είναι χωματόδρομος — αξίζει. Δύο ταβέρνες, περιοχή της καρέτα.",
              },
              distance: { en: "12 min drive", el: "12′ με αυτοκίνητο" },
              image: "/villas/thalassa/dafni.jpg",
              mapUrl:
                "https://www.google.com/maps/search/?api=1&query=Dafni+Beach+Zakynthos",
            },
            {
              name: "Marathonisi",
              tagline: {
                en: "“Turtle Island” — by boat",
                el: "«Νησί της χελώνας» — με σκάφος",
              },
              description: {
                en: "Uninhabited islet in Laganas Bay. Boats leave from Laganas and Keri — no facilities, pure postcard.",
                el: "Ακατοίκητη νησίδα στον κόλπο του Λαγανά. Σκάφη από Λαγανά και Κερί — χωρίς υποδομές, σκέτη καρτ ποστάλ.",
              },
              image: "/villas/thalassa/marathonisi.jpg",
              mapUrl:
                "https://www.google.com/maps/search/?api=1&query=Marathonisi+Zakynthos",
            },
          ],
        },
      ],
    },
    {
      slug: "dining",
      icon: "dining",
      title: { en: "Where to eat", el: "Πού να φάτε" },
      intro: {
        en: "The places we actually eat at ourselves — book ahead in July and August.",
        el: "Τα μέρη όπου τρώμε πραγματικά κι εμείς — κλείστε τραπέζι Ιούλιο και Αύγουστο.",
      },
      blocks: [
        {
          type: "places",
          items: [
            {
              name: "Lithies Taverna",
              slug: "lithies",
              sponsored: true, // DEMO flag only — not a real sponsorship. Remove before production.
              tagline: {
                en: "Farm-to-table, under the vines",
                el: "Από το κτήμα στο τραπέζι, κάτω από την κληματαριά",
              },
              description: {
                en: "Everything from the family farm — ask for the day's specials and the whole roasted sea bass.",
                el: "Όλα από το οικογενειακό κτήμα — ζητήστε τα πιάτα ημέρας και το ολόκληρο ψητό λαβράκι.",
              },
              distance: { en: "5 min drive", el: "5′ με αυτοκίνητο" },
              image: "/villas/thalassa/lithies.jpg",
              mapUrl:
                "https://www.google.com/maps/search/?api=1&query=Lithies+Taverna+Vasilikos+Zakynthos",
              details: {
                body: {
                  en: "A countryside taverna where almost everything on your plate came from the family's own farm — vegetables, olive oil, wine, even the chicken. Checkered tablecloths under a leafy arbor, house wine served in earthenware jugs, and fruit from their trees to finish the meal.\n\nAsk what today's specials are — the farm rooster, rabbit stifado and whole roasted sea bass are the dishes people come back for. It fills up on summer evenings, so arrive early or ask us to call ahead for you.",
                  el: "Μια εξοχική ταβέρνα όπου σχεδόν ό,τι φτάνει στο πιάτο σας έρχεται από το κτήμα της οικογένειας — λαχανικά, λάδι, κρασί, ακόμα και το κοτόπουλο. Καρό τραπεζομάντηλα κάτω από την κληματαριά, χύμα κρασί σε πήλινα κανάτια και φρούτα από τα δέντρα τους στο τέλος.\n\nΡωτήστε τα πιάτα ημέρας — ο κόκορας, το στιφάδο κουνέλι και το ολόκληρο ψητό λαβράκι είναι αυτά για τα οποία ο κόσμος επιστρέφει. Γεμίζει τα καλοκαιρινά βράδια — πηγαίνετε νωρίς ή πείτε μας να τηλεφωνήσουμε για εσάς.",
                },
                gallery: [
                  "/villas/thalassa/lithies-2.jpg",
                  "/villas/thalassa/lithies-3.jpg",
                ],
                hours: {
                  en: "Dinner from 18:00 (May–Oct)",
                  el: "Δείπνο από 18:00 (Μάιο–Οκτ)",
                }, // TODO verify
                perk: {
                  en: "Show this guide for a complimentary dessert with your meal.",
                  el: "Δείξτε αυτόν τον οδηγό για ένα κέρασμα γλυκό με το γεύμα σας.",
                }, // DEMO perk — agree real perks with each partner
              },
            },
            {
              name: "Kostas Brother",
              slug: "kostas-brother",
              tagline: {
                en: "Hidden garden taverna",
                el: "Κρυφή ταβέρνα σε κήπο",
              },
              description: {
                en: "Live guitar most evenings, courgette fritters to die for, watermelon on the house.",
                el: "Ζωντανή κιθάρα τα βράδια, κολοκυθοκεφτέδες που δεν ξεχνιούνται, καρπούζι κέρασμα.",
              },
              distance: { en: "6 min drive", el: "6′ με αυτοκίνητο" },
              image: "/villas/thalassa/kostas-brother.jpg",
              mapUrl:
                "https://www.google.com/maps/search/?api=1&query=Kostas+Brother+Taverna+Vasilikos",
              details: {
                body: {
                  en: "A concealed garden oasis just off the Vasilikos road — you'd drive past it if you didn't know. Tables scattered between trees, cats wandering about, and live guitar most summer evenings that never overwhelms the conversation.\n\nStart with the cheese pies and the courgette fritters — both legendary. Portions are generous, the welcome is genuinely warm, and there's almost always watermelon on the house to finish.",
                  el: "Μια κρυμμένη όαση-κήπος λίγο έξω από τον δρόμο του Βασιλικού — θα την προσπερνούσατε αν δεν την ξέρατε. Τραπέζια ανάμεσα στα δέντρα, γάτες που τριγυρνούν, και ζωντανή κιθάρα τα καλοκαιρινά βράδια που δεν σκεπάζει ποτέ την κουβέντα.\n\nΞεκινήστε με τις τυρόπιτες και τους κολοκυθοκεφτέδες — και τα δύο θρυλικά. Οι μερίδες είναι γενναιόδωρες, η υποδοχή αληθινά ζεστή, και σχεδόν πάντα υπάρχει καρπούζι κέρασμα στο τέλος.",
                },
                gallery: [
                  "/villas/thalassa/kostas-brother-2.jpg",
                  "/villas/thalassa/kostas-brother-3.jpg",
                ],
                hours: {
                  en: "Evenings (summer season)",
                  el: "Βράδια (καλοκαιρινή σεζόν)",
                }, // TODO verify
              },
            },
            {
              name: "Nikos Taverna",
              tagline: {
                en: "Seafood over Porto Roma",
                el: "Θαλασσινά πάνω από το Πόρτο Ρόμα",
              },
              distance: { en: "4 min drive", el: "4′ με αυτοκίνητο" },
              image: "/villas/thalassa/nikos.jpg",
              mapUrl:
                "https://www.google.com/maps/search/?api=1&query=Nikos+Taverna+Porto+Roma+Zakynthos",
            },
            {
              name: "Mais",
              tagline: {
                en: "The village classic",
                el: "Το κλασικό του χωριού",
              },
              description: {
                en: "Honest Greek cooking near the school crossroads — big portions, warm welcome.",
                el: "Τίμια ελληνική κουζίνα κοντά στη διασταύρωση του σχολείου — μεγάλες μερίδες, ζεστή υποδοχή.",
              },
              distance: { en: "3 min drive", el: "3′ με αυτοκίνητο" },
              image: "/villas/thalassa/mais.jpg",
              mapUrl:
                "https://www.google.com/maps/search/?api=1&query=Mais+Restaurant+Vasilikos+Zakynthos",
            },
            {
              name: "Coffee House Vasilikos",
              tagline: {
                en: "Breakfast & the famous apple pie",
                el: "Πρωινό & η διάσημη μηλόπιτα",
              },
              distance: { en: "3 min drive", el: "3′ με αυτοκίνητο" },
              image: "/villas/thalassa/coffee-house.jpg",
              mapUrl:
                "https://www.google.com/maps/search/?api=1&query=Coffee+House+Vasilikos+Zakynthos",
            },
            {
              name: "Casa Playa",
              tagline: {
                en: "Sunset drinks on Banana",
                el: "Ποτά στη δύση, στην Banana",
              },
              distance: { en: "8 min drive", el: "8′ με αυτοκίνητο" },
              image: "/villas/thalassa/casa-playa.jpg",
              mapUrl:
                "https://www.google.com/maps/search/?api=1&query=Casa+Playa+Banana+Beach+Zakynthos",
            },
          ],
        },
      ],
    },
    {
      slug: "attractions",
      icon: "attractions",
      title: { en: "Things to see", el: "Αξιοθέατα" },
      blocks: [
        {
          type: "places",
          items: [
            {
              name: "Navagio viewpoint",
              slug: "navagio",
              tagline: {
                en: "The shipwreck panorama",
                el: "Το πανόραμα του Ναυαγίου",
              },
              description: {
                en: "The most photographed view in Greece.",
                el: "Η πιο φωτογραφημένη θέα της Ελλάδας.",
              },
              distance: { en: "55 min drive", el: "55′ με αυτοκίνητο" },
              image: "/villas/thalassa/navagio.jpg",
              mapUrl:
                "https://www.google.com/maps/search/?api=1&query=Navagio+Viewpoint+Zakynthos",
              details: {
                body: {
                  en: "The white cliffs, the impossible turquoise, the rusting shipwreck on the sand — this is the postcard of Zakynthos and one of the most photographed views in the world.\n\nImportant: the beach itself has been closed to visitors for safety in recent seasons, and access rules for the clifftop viewpoint change — ask us for the current status before making the drive. Go in the afternoon when the sun lights the cove, and hold children's hands near the edge; the drops are real.\n\nCombine it with the Blue Caves — they're in the same corner of the island.",
                  el: "Οι λευκοί βράχοι, το αδύνατα γαλάζιο νερό, το σκουριασμένο ναυάγιο στην άμμο — αυτή είναι η καρτ ποστάλ της Ζακύνθου και μία από τις πιο φωτογραφημένες θέες στον κόσμο.\n\nΣημαντικό: η ίδια η παραλία παραμένει κλειστή για λόγους ασφαλείας τα τελευταία χρόνια, και οι κανόνες πρόσβασης στο σημείο θέασης αλλάζουν — ρωτήστε μας πριν κάνετε τη διαδρομή. Πηγαίνετε απόγευμα που ο ήλιος φωτίζει τον όρμο, και κρατήστε τα παιδιά από το χέρι κοντά στο χείλος.\n\nΣυνδυάστε το με τις Γαλάζιες Σπηλιές — είναι στην ίδια γωνιά του νησιού.",
                },
                gallery: [
                  "/villas/thalassa/navagio-2.jpg",
                  "/villas/thalassa/navagio-3.jpg",
                ],
              },
            },
            {
              name: "Blue Caves",
              tagline: {
                en: "Glowing water at Cape Skinari",
                el: "Νερά που λάμπουν στο Ακρωτήρι Σκινάρι",
              },
              description: {
                en: "Take a small boat from Agios Nikolaos (Volimes) — morning light is best.",
                el: "Με βαρκάκι από τον Άγιο Νικόλαο Βολιμών — το πρωινό φως είναι το καλύτερο.",
              },
              distance: { en: "60 min drive", el: "60′ με αυτοκίνητο" },
              image: "/villas/thalassa/blue-caves.jpg",
              mapUrl:
                "https://www.google.com/maps/search/?api=1&query=Blue+Caves+Zakynthos",
            },
            {
              name: "Keri & Mizithres",
              tagline: {
                en: "Lighthouse cliffs at sunset",
                el: "Ο φάρος και τα βράχια στη δύση",
              },
              distance: { en: "40 min drive", el: "40′ με αυτοκίνητο" },
              image: "/villas/thalassa/keri.jpg",
              mapUrl:
                "https://www.google.com/maps/search/?api=1&query=Keri+Lighthouse+Zakynthos",
            },
            {
              name: "Bochali",
              tagline: {
                en: "The balcony over Zante Town",
                el: "Το μπαλκόνι πάνω από τη Χώρα",
              },
              description: {
                en: "Venetian castle ruins and the best evening view of the town lights.",
                el: "Ενετικό κάστρο και η καλύτερη βραδινή θέα στα φώτα της πόλης.",
              },
              distance: { en: "25 min drive", el: "25′ με αυτοκίνητο" },
              image: "/villas/thalassa/bochali.jpg",
              mapUrl:
                "https://www.google.com/maps/search/?api=1&query=Bochali+Zakynthos",
            },
            {
              name: "Zakynthos Town",
              tagline: {
                en: "Evening volta & Agios Dionysios",
                el: "Βραδινή βόλτα & Άγιος Διονύσιος",
              },
              distance: { en: "20 min drive", el: "20′ με αυτοκίνητο" },
              image: "/villas/thalassa/zante-town.jpg",
              mapUrl:
                "https://www.google.com/maps/search/?api=1&query=Solomos+Square+Zakynthos",
            },
            {
              name: "Aristeon Olive Press",
              tagline: {
                en: "Oil tasting in Lithakia",
                el: "Γευσιγνωσία λαδιού στη Λιθακιά",
              },
              distance: { en: "30 min drive", el: "30′ με αυτοκίνητο" },
              image: "/villas/thalassa/aristeon.jpg",
              mapUrl:
                "https://www.google.com/maps/search/?api=1&query=Aristeon+Olive+Press+Lithakia+Zakynthos",
            },
          ],
        },
      ],
    },
    {
      slug: "activities",
      icon: "activities",
      title: { en: "Activities", el: "Δραστηριότητες" },
      blocks: [
        {
          type: "places",
          items: [
            {
              name: "Turtle-spotting cruise",
              tagline: {
                en: "Caretta caretta in Laganas Bay",
                el: "Καρέτα καρέτα στον κόλπο του Λαγανά",
              },
              description: {
                en: "Glass-bottom boats leave Laganas and Keri all morning. Go early for calm water.",
                el: "Σκάφη με γυάλινο πάτο φεύγουν από Λαγανά και Κερί όλο το πρωί. Πηγαίνετε νωρίς για ήρεμη θάλασσα.",
              },
              distance: { en: "20 min drive", el: "20′ με αυτοκίνητο" },
              image: "/villas/thalassa/turtles.jpg",
              mapUrl:
                "https://www.google.com/maps/search/?api=1&query=Laganas+port+Zakynthos",
            },
            {
              name: "Scuba diving",
              tagline: {
                en: "Dive centre at St. Nicholas",
                el: "Καταδυτικό κέντρο στον Άγιο Νικόλαο",
              },
              distance: { en: "6 min drive", el: "6′ με αυτοκίνητο" },
              image: "/villas/thalassa/diving.jpg",
              mapUrl:
                "https://www.google.com/maps/search/?api=1&query=diving+center+Vasilikos+Zakynthos",
            },
            {
              name: "Sea kayaking",
              tagline: {
                en: "Paddle the marine park coast",
                el: "Κωπηλασία στις ακτές του πάρκου",
              },
              image: "/villas/thalassa/kayak.jpg",
              mapUrl:
                "https://www.google.com/maps/search/?api=1&query=sea+kayak+Zakynthos",
            },
            {
              name: "Horse riding",
              tagline: {
                en: "Trails through the olive groves",
                el: "Μονοπάτια μέσα στους ελαιώνες",
              },
              image: "/villas/thalassa/horses.jpg",
              mapUrl:
                "https://www.google.com/maps/search/?api=1&query=horse+riding+Vasilikos+Zakynthos",
            },
          ],
        },
      ],
    },
    {
      slug: "essentials",
      icon: "essentials",
      title: { en: "Essentials", el: "Τα απαραίτητα" },
      intro: {
        en: "Daily-life stuff: where to shop, refuel and find a pharmacy.",
        el: "Καθημερινά: πού θα ψωνίσετε, θα βάλετε βενζίνη και θα βρείτε φαρμακείο.",
      },
      blocks: [
        {
          type: "info",
          rows: [
            {
              label: { en: "Mini market", el: "Μίνι μάρκετ" },
              value: "Vasilikos village · 3 min",
              href: "https://www.google.com/maps/search/?api=1&query=mini+market+Vasilikos+Zakynthos",
            },
            {
              label: { en: "Supermarket", el: "Σούπερ μάρκετ" },
              value: "Argassi · 12 min",
              href: "https://www.google.com/maps/search/?api=1&query=supermarket+Argassi+Zakynthos",
            },
            {
              label: { en: "Pharmacy", el: "Φαρμακείο" },
              value: "Argassi · 12 min",
              href: "https://www.google.com/maps/search/?api=1&query=pharmacy+Argassi+Zakynthos",
            },
            {
              label: { en: "ATM", el: "ATM" },
              value: "Argassi · 12 min",
              href: "https://www.google.com/maps/search/?api=1&query=ATM+Argassi+Zakynthos",
            },
            {
              label: { en: "Fuel", el: "Βενζινάδικο" },
              value: "Argassi road · 10 min",
              href: "https://www.google.com/maps/search/?api=1&query=gas+station+Argassi+Zakynthos",
            },
            {
              label: { en: "Bakery", el: "Φούρνος" },
              value: "Vasilikos village · 3 min",
              href: "https://www.google.com/maps/search/?api=1&query=bakery+Vasilikos+Zakynthos",
            },
          ],
        },
        {
          type: "notice",
          tone: "info",
          body: {
            en: "Most places take cards, but small tavernas and beach bars sometimes prefer cash — keep some on you.",
            el: "Τα περισσότερα μέρη δέχονται κάρτες, αλλά μικρές ταβέρνες και beach bars συχνά προτιμούν μετρητά — έχετε λίγα μαζί σας.",
          },
        },
      ],
    },
    {
      slug: "transport",
      icon: "transport",
      title: { en: "Getting around", el: "Μετακινήσεις" },
      blocks: [
        {
          type: "text",
          body: {
            en: "Vasilikos is quiet and spread out — a car is the way. Buses to town are rare. We can arrange a taxi or have a rental car delivered to the villa; just message us.",
            el: "Ο Βασιλικός είναι ήσυχος και απλωμένος — το αυτοκίνητο είναι η λύση. Τα λεωφορεία για τη Χώρα είναι αραιά. Μπορούμε να κανονίσουμε ταξί ή παράδοση ενοικιαζόμενου στη βίλα — στείλτε μας μήνυμα.",
          },
        },
        {
          type: "info",
          rows: [
            {
              label: { en: "Airport transfer", el: "Μεταφορά αεροδρομίου" },
              value: "~25 min · ask us to book", // TODO: verify current price
            },
            {
              label: { en: "Radio taxi", el: "Ραδιοταξί" },
              value: "+30 26950 00000", // TODO: verify real number
              href: "tel:+302695000000",
            },
          ],
        },
      ],
    },
    {
      slug: "emergency",
      icon: "emergency",
      title: { en: "Emergency", el: "Έκτακτη ανάγκη" },
      intro: {
        en: "Save these — and remember, you can call us any hour.",
        el: "Αποθηκεύστε τα — και θυμηθείτε, μπορείτε να μας πάρετε οποιαδήποτε ώρα.",
      },
      blocks: [
        {
          type: "contacts",
          items: [
            {
              label: {
                en: "Your host — Michael",
                el: "Οικοδεσπότης — Μιχάλης",
              },
              value: "+306977616178",
              kind: "whatsapp",
            },
            {
              label: {
                en: "European emergency",
                el: "Ευρωπαϊκός αριθμός έκτακτης ανάγκης",
              },
              value: "112",
              kind: "tel",
            },
            {
              label: { en: "Police", el: "Αστυνομία" },
              value: "100",
              kind: "tel",
            },
            {
              label: { en: "Ambulance", el: "ΕΚΑΒ" },
              value: "166",
              kind: "tel",
            },
            {
              label: { en: "Coast guard", el: "Λιμενικό" },
              value: "108",
              kind: "tel",
            },
            {
              label: {
                en: "Zakynthos General Hospital",
                el: "Γενικό Νοσοκομείο Ζακύνθου",
              },
              value: "+30 26950 00000", // TODO: verify real number
              kind: "tel",
            },
          ],
        },
        {
          type: "notice",
          tone: "info",
          body: {
            en: "Pharmacies rotate late-night duty — message us and we'll tell you which one is open tonight.",
            el: "Τα φαρμακεία διανυκτερεύουν εκ περιτροπής — στείλτε μας μήνυμα και θα σας πούμε ποιο είναι ανοιχτό απόψε.",
          },
        },
      ],
    },
  ],
};
