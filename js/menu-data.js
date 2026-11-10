// ==========================================================================
// DONNÉES DU MENU OFFICIEL COMPLET — AL ANDALOUS Grill&co
// Design Pro & Épuré — Zéro émoticône, Typographie Gastronomique Pure
// ==========================================================================

const RESTAURANT_DATA = {
  info: {
    name: "Al Andalous Grill&co",
    subtitle: "Maison Fondée en 1970 — Steak House & Boucherie d'Exception",
    description: "Toutes nos viandes sont 100% fraîches, certifiées et sélectionnées au quotidien par notre propre Boucherie Al Andalous.",
    logo: "assets/logo/logo.jpg",
    currency: "DH",
    boucherie: {
      name: "Boucherie Al Andalous",
      badge: "Maison familiale depuis 1970",
      description: "Notre savoir-faire d'artisan boucher depuis 3 générations au service de votre table. Commandez également vos viandes fraîches, charcuteries et brochettes marinées pour vos repas à domicile.",
      url: "https://boucheriealandalous.com/",
      whatsapp: "https://wa.me/212666655605?text=Bonjour%20Boucherie%20Al%20Andalous,%20je%20souhaite%20passer%20une%20commande%20de%20viandes.",
      phone: "+212 6 66 65 56 05"
    },
    social: {
      instagram: "https://www.instagram.com/grilladealandalous/",
      facebook: "https://www.facebook.com/grilladealandalous",
      instagramHandle: "@grilladealandalous"
    },
    locations: {
      prestigia: {
        id: "prestigia",
        name: "Prestigia — Hay Riad",
        city: "Rabat",
        address: "Avenue Essanaoubar, Place Al Masjid 'Sayf', Hay Riad, Rabat",
        phone: "05 37 71 73 91",
        hours: "Tous les jours : 11h00 – 00h30",
        wifiSSID: "Al-Andalous-Prestigia",
        wifiPass: "alandalous2024",
        googleMaps: "https://maps.google.com/?q=Boucherie+Al+Andalous+Hay+Riad+Rabat"
      },
      harhoura: {
        id: "harhoura",
        name: "Harhoura — Bord de Mer",
        city: "Harhoura / Témara",
        address: "Avenue Prince Moulay Abdellah, Résidence Oasis 3 / Chems, Harhoura",
        phone: "05 37 58 22 00",
        hours: "Tous les jours : 11h00 – 00h30",
        wifiSSID: "Al-Andalous-Harhoura",
        wifiPass: "alandalous2024",
        googleMaps: "https://maps.google.com/?q=Grillade+Al+Andalous+Harhoura"
      }
    }
  },

  // -------------------------------------------------------------
  // ORDRE GASTRONOMIQUE DES CATÉGORIES (TEXTE ÉPURÉ SANS ÉMOJIS)
  // -------------------------------------------------------------
  categories: [
    { id: "all", name: "Tout le Menu" },
    { id: "starters", name: "Starters & Entrées" },
    { id: "salades", name: "Salades" },
    { id: "steakhouse", name: "Steak House" },
    { id: "brochettes", name: "Brochettes" },
    { id: "tagines", name: "Tagines & Couscous" },
    { id: "burgers", name: "Burgers" },
    { id: "sandwichs", name: "Sandwichs" },
    { id: "enfants", name: "Menu Enfant" },
    { id: "supplements", name: "Suppléments" },
    { id: "desserts", name: "Desserts" },
    { id: "boissons", name: "Jus & Boissons" },
    { id: "chaud", name: "Thés & Cafés" }
  ],

  // -------------------------------------------------------------
  // SUPPLÉMENTS & ACCOMPAGNEMENTS (PRÉSENTATION ÉPURÉE EN LISTE)
  // -------------------------------------------------------------
  supplements: [
    {
      id: "supplement-frites",
      name: "Portion de Frites",
      price: 20,
      badge: "Croustillant",
      description: "Portion généreuse de frites dorées et croustillantes."
    },
    {
      id: "supplement-garniture",
      name: "Garniture au Choix",
      price: 15,
      badge: "Au Choix",
      description: "Portion de riz aux petits légumes, purée maison veloutée ou légumes sautés de saison."
    },
    {
      id: "supplement-fromage",
      name: "Supplément Cheddar Fondu / Fromage",
      price: 10,
      badge: "Gourmand",
      description: "Tranche de cheddar fondant pour agrémenter vos burgers, viandes et frites."
    },
    {
      id: "supplement-oeuf",
      name: "Supplément Œuf au Plat",
      price: 5,
      badge: "Minute",
      description: "Œuf frais préparé au plat pour compléter vos plats ou burgers."
    },
  ],

  dishes: [
    {
      id: "accompagnements-au-choix",
      name: "Accompagnements au Choix",
      category: "supplements",
      price: 15,
      badge: "Au choix",
      image: "assets/dishes/accompagnements-au-choix.jpeg",
      description: "Riz aux petits légumes, légumes sautés, purée maison veloutée ou pommes de terre grillées selon votre préféré.",
      details: "À ajouter à toutes vos grillades et burgers pour un repas complet et équilibré."
    },
    // =============================================================
    // 1. STARTERS & ENTRÉES
    // =============================================================
    {
      id: "pastilla-poulet",
      name: "Pastilla Traditionnelle au Poulet",
      category: "starters",
      price: 65,
      badge: "Spécialité Maison",
      image: "assets/dishes/pastilla-poisson.jpeg",
      description: "Feuilleté croustillant doré au four, effiloché de poulet fermier aux amandes torréfiées concassées, cannelle fine et fleur d'oranger, saupoudré de sucre glace.",
      details: "Le grand fleuron de la gastronomie marocaine fait maison."
    },
    {
      id: "pastilla-poisson",
      name: "Pastilla aux Fruits de Mer & Poisson",
      category: "starters",
      price: 78,
      badge: "Saveurs Marines",
      image: "assets/dishes/pastilla-poulet.jpeg",
      description: "Feuilleté croustillant généreusement garni de crevettes royales, calamars tendres, filets de poisson blanc et vermicelle de riz en charmoula parfumée.",
      details: "Préparée minute avec poissons et fruits de mer frais."
    },
    {
      id: "crispy-chicken-tenders",
      name: "Crispy Chicken Tenders",
      category: "starters",
      price: 67,
      badge: "Croustillant",
      image: "assets/dishes/crispy-chicken-tenders.jpeg",
      description: "Filets de poulet frais marinés, enrobés d'une panure dorée ultra-croustillante, servis avec nos sauces maison.",
      details: "Poulet 100% frais préparé à la commande."
    },
    {
      id: "honey-buffalo-wings",
      name: "Honey Buffalo Chicken Wings",
      category: "starters",
      price: 63,
      badge: "Nouveauté",
      image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=900&q=80",
      description: "Ailes de poulet croustillantes laquées dans une sauce Buffalo gourmande au miel pur et épices douces.",
      details: "Idéal pour commencer votre repas."
    },
    {
      id: "croquettes-maison",
      name: "Croquettes Maison (Fromage / Chili / Poulet)",
      category: "starters",
      price: 55,
      badge: "Fait Maison",
      image: "assets/dishes/croquettes-maison.jpeg",
      description: "Délicieuses croquettes artisanales croustillantes au cœur fondant : Fromage coulant, Chili relevé ou Poulet tendre.",
      details: "Recette maison exclusive Al Andalous."
    },

    // =============================================================
    // 2. SALADES GOURMANDES (Photos réelles)
    // =============================================================
    {
      id: "salade-burrata",
      name: "Salade Burrata Gourmande",
      category: "salades",
      price: 85,
      badge: "Signature",
      image: "assets/dishes/salade-burrata.jpeg",
      description: "Véritable Burrata crémeuse, aubergines rôties, poivrons rôtis, courgettes grillées, tomates cerises confites, glaçage balsamique, basilic frais, huile d'olive vierge et olives kalamata.",
      details: "Une salade généreuse, colorée et pleine de saveurs méditerranéennes."
    },
    {
      id: "salade-cesar",
      name: "Salade César au Poulet",
      category: "salades",
      price: 68,
      badge: "Classique",
      image: "assets/dishes/salade-cesar.jpeg",
      description: "Laitue romaine fraîche, morceaux de poulet mariné et doré, croquants dorés, copeaux de parmesan affiné et tomates cerises avec sauce César.",
      details: "Préparée minute avec sauce César crémeuse."
    },
    {
      id: "salade-variee",
      name: "Salade Variée Complète",
      category: "salades",
      price: 68,
      badge: "Fraîcheur",
      image: "assets/dishes/salade-variee.jpeg",
      description: "Betteraves douces, carottes croquantes, pommes de terre crémeuses, œuf dur, thon de premier choix, oignons au vinaigre, concombres, tomates cerises et sauce ranch onctueuse.",
      details: "La grande salade classique marocaine, fraîche et copieuse."
    },
    {
      id: "salade-al-andalous-new",
      name: "Salade Al Andalous",
      category: "salades",
      price: 72,
      badge: "Signature Maison",
      image: "assets/dishes/salade-al-andalous-new.jpeg",
      description: "Laitue croquante, fromage de chèvre, fruits frais de saison, pulpes d'orange juteuses, noix confites caramélisées, oignons au vinaigre, tomates cerises et vinaigrette balsamique maison.",
      details: "Équilibre parfait entre douceur fruitée et caractère du fromage de chèvre."
    },
    {
      id: "assortiment-marocain",
      name: "Assortiment Traditionnel Marocain",
      category: "salades",
      price: 58,
      badge: "Tradition",
      image: "assets/dishes/assortiment-marocain.jpeg",
      description: "Sélection d'entrées cuisinées marocaines authentiques (Zaalouk d'aubergines fumées, Taktouka de poivrons et tomates confites) à l'huile d'olive d'olive pure.",
      details: "L'accompagnement indispensable avec toutes nos grillades."
    },

    // =============================================================
    // 3. STEAK HOUSE & PIÈCES DE VIANDE NOBLES (Photos réelles)
    // =============================================================
    {
      id: "entrecote-boeuf",
      name: "Entrecôte de Bœuf Grillée",
      category: "steakhouse",
      price: 135,
      badge: "Sélection Bouchère",
      image: "assets/dishes/entrecote-boeuf.jpeg",
      description: "Belle entrecôte persillée grillée à la flamme, accompagnée de sa purée maison veloutée, carottes glacées, haricots verts croquants et sauce au choix.",
      details: "2 accompagnements au choix : Riz aux petits légumes, Légumes sautés ou Purée maison."
    },
    {
      id: "emince-boeuf",
      name: "Émincé de Bœuf Gourmet",
      category: "steakhouse",
      price: 89,
      badge: "Coup de Cœur",
      image: "assets/dishes/emince-boeuf.jpeg",
      description: "Lamelles de filet de bœuf extra-tendres saisies et nappées d'une onctueuse sauce crémeuse aux champignons, purée maison et légumes frais du marché.",
      details: "Servi bien chaud avec garnitures généreuses."
    },
    {
      id: "tomahawk-45j",
      name: "Tomahawk Maturé 45 jours",
      category: "steakhouse",
      price: 600,
      badge: "Pièce d'Exception",
      image: "assets/dishes/tomahawk-45j.jpeg",
      description: "Pièce noble d'environ 1,2 kg à 1,5 kg avec os long, maturée 45 jours sur place pour une tendreté et des arômes intenses de noisette.",
      details: "Viande d'exception de notre boucherie. 4 accompagnements au choix."
    },
    {
      id: "black-angus-steak",
      name: "Black Angus Steak",
      category: "steakhouse",
      price: 450,
      badge: "Prestige",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80",
      description: "Race bovine originaire d'Écosse reconnue mondialement pour son persillage naturel, sa tendreté et son goût beurré incomparable.",
      details: "Riche en oméga-3, faible en cholestérol. 2 accompagnements au choix."
    },
    {
      id: "filet-mignon",
      name: "Filet Mignon",
      category: "steakhouse",
      price: 185,
      badge: "Extra Tendre",
      image: "assets/dishes/filet-mignon2.jpeg",
      description: "Cœur de filet mignon extra-tendre saisi aux braises, servi avec son délicieux pavé de pomme de terre doré.",
      details: "Cuisson au choix. 2 accompagnements au choix."
    },
    {
      id: "souris-agneau",
      name: "Souris d'Agneau (1/2 kg)",
      category: "steakhouse",
      price: 185,
      badge: "Confite Lente",
      image: "assets/dishes/souris-agneau.jpeg",
      description: "Généreuse pièce de 500g confite lentement pendant de longues heures jusqu'à ce que la viande se détache délicatement de l'os.",
      details: "1 accompagnement au choix. Garniture au choix : 15 DH."
    },
    {
      id: "t-bone-steak",
      name: "T-Bone Steak",
      category: "steakhouse",
      price: 155,
      badge: "Gourmet Grill",
      image: "assets/dishes/t-bone-steak.jpeg",
      description: "Le meilleur des deux mondes : le fondant du filet d'un côté et la puissance savoureuse du faux-filet de l'autre, séparés par l'os en T.",
      details: "Grillé à la braise. 2 accompagnements au choix."
    },
    {
      id: "cotelettes-agneau",
      name: "Côtelettes d'Agneau Grillées",
      category: "steakhouse",
      price: 135,
      badge: "Incontournable",
      image: "assets/dishes/cotelettes-agneau2.jpeg",
      description: "Côtelettes d'agneau fraîches de notre boucherie, marinées aux fines herbes et grillées à feu vif pour une chair tendre et juteuse.",
      details: "2 accompagnements au choix."
    },
    {
      id: "supreme-poulet",
      name: "Suprême de Poulet Grillé",
      category: "steakhouse",
      price: 105,
      badge: "Moelleux",
      image: "assets/dishes/supreme-poulet.jpeg",
      description: "Suprême de volaille mariné aux agrumes et herbes fraîches, grillé à cœur pour conserver toute sa tendreté.",
      details: "2 accompagnements au choix."
    },
    {
      id: "cuisses-poulet-desossees",
      name: "Cuisses de Poulet Désossées",
      category: "steakhouse",
      price: 105,
      badge: "Braisé",
      image: "assets/dishes/cuisses-poulet-desossees.jpeg",
      description: "Hauts de cuisse entièrement désossés, marinés dans notre sauce secrète Al Andalous et rôtis au feu de bois.",
      details: "2 accompagnements au choix."
    },
    {
      id: "emince-poulet",
      name: "Émincé de Poulet Mariné",
      category: "steakhouse",
      price: 75,
      badge: "Léger",
      image: "assets/dishes/emince-poulet.jpeg",
      description: "Filet de poulet fermier émincé, mariné aux herbes aromatiques et sauté minute.",
      details: "Accompagné de légumes frais de saison."
    },

    // =============================================================
    // 4. BROCHETTES (2 accompagnements au choix)
    // =============================================================
    {
      id: "brochettes-filet-boeuf",
      name: "Brochettes Filet de Bœuf",
      category: "brochettes",
      price: 110,
      badge: "Premier Choix",
      image: "assets/dishes/brochettes-filet-boeuf.jpeg",
      description: "Cœurs de filet de bœuf extra-tendres taillés en cubes généreux et saisis sur braises ardentes.",
      details: "2 accompagnements au choix : Riz aux petits légumes, Légumes sautés ou Purée maison."
    },
    {
      id: "brochettes-viande-hachee",
      name: "Brochettes de Viande Hachée (Kefta)",
      category: "brochettes",
      price: 98,
      badge: "Spécialité Maison",
      image: "assets/dishes/brochettes-viande-hachee.jpeg",
      description: "Viande hachée fraîche assaisonnée à la marocaine (persil frais, coriandre, oignons doux, cumin et paprika doux).",
      details: "Grillée à la perfection. 2 accompagnements au choix."
    },
    {
      id: "brochettes-boulfaf",
      name: "Brochettes Boulfaf Traditionnelles",
      category: "brochettes",
      price: 125,
      badge: "Authentique",
      image: "assets/dishes/brochettes-boulfaf.jpeg",
      description: "Dés de foie de veau grillés enrobés de fine crépine d'agneau croustillante, saupoudrés de cumin et sel gemme.",
      details: "Le grand classique marocain pour les amateurs de vraies saveurs de grillade."
    },
    {
      id: "brochettes-mixtes",
      name: "Brochettes Mixtes Al Andalous",
      category: "brochettes",
      price: 125,
      badge: "Assortiment",
      image: "assets/dishes/brochettes-mixtes.jpeg",
      description: "Assortiment généreux combinant filet de bœuf, poulet mariné et kefta maison.",
      details: "2 accompagnements au choix."
    },
    {
      id: "brochettes-foie",
      name: "Brochettes de Foie Frais",
      category: "brochettes",
      price: 120,
      badge: "Fondant",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80",
      description: "Foie extra-frais coupé au couteau, assaisonné aux épices douces et grillé rosé.",
      details: "2 accompagnements au choix."
    },
    {
      id: "brochettes-poulet",
      name: "Brochettes de Poulet Fermier",
      category: "brochettes",
      price: 96,
      badge: "Mariné",
      image: "assets/dishes/brochettes-poulet.jpeg",
      description: "Suprêmes de poulet marinés au citron frais, safran, ail et herbes de Provence.",
      details: "2 accompagnements au choix."
    },
    {
      id: "brochettes-saucisse-boeuf",
      name: "Brochettes Saucisse de Bœuf Artisanale",
      category: "brochettes",
      price: 105,
      badge: "Artisanal",
      image: "assets/dishes/brochettes-saucisse-boeuf.jpeg",
      description: "Saucisses artisanales confectionnées par notre Boucherie Al Andalous sans conservateur.",
      details: "2 accompagnements au choix."
    },
    {
      id: "brochettes-saucisse-foie",
      name: "Brochettes Saucisse de Foie",
      category: "brochettes",
      price: 115,
      badge: "Recette Bouchère",
      image: "assets/dishes/brochettes-saucisse-foie.jpeg",
      description: "Saucisse gourmande au foie et épices fines préparée selon la tradition Al Andalous.",
      details: "2 accompagnements au choix."
    },
    {
      id: "brochettes-saucisse-poulet",
      name: "Brochettes Saucisse de Poulet",
      category: "brochettes",
      price: 95,
      badge: "Doux",
      image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=900&q=80",
      description: "Saucisses blanches artisanales de poulet aux herbes fraîches.",
      details: "2 accompagnements au choix."
    },

    // =============================================================
    // 5. TAGINES & COUSCOUS (Photos réelles)
    // =============================================================
    {
      id: "tagine-viande-hachee",
      name: "Tagine de Viande Hachée aux Œufs",
      category: "tagines",
      price: 55,
      badge: "Spécialité",
      image: "assets/dishes/tagine-viande-hachee.jpeg",
      description: "Boulettes de kefta fraîches mijotées dans une délicieuse sauce tomate parfumée à l'ail, coriandre fraîche, cumin et œufs mollets.",
      details: "Cuit lentement en plat de terre cuite traditionnel marocain, servi avec du bon pain chaud."
    },
    {
      id: "tagine-foie",
      name: "Tagine de Foie aux Épices",
      category: "tagines",
      price: 65,
      badge: "Terroir",
      image: "assets/dishes/tagine-foie.jpeg",
      description: "Dés de foie frais revenus en charmoula marocaine, tomates confites, olives et huile d'olive vierge.",
      details: "Plat mijoté authentique du terroir préparé minute."
    },
    {
      id: "tagine-cervelle",
      name: "Tagine de Cervelle en Charmoula",
      category: "tagines",
      price: 65,
      badge: "Gourmet",
      image: "assets/dishes/tagine-cervelle.jpeg",
      description: "Cervelle fraîche cuisinée délicatement en sauce tomate relevée au paprika doux, persil plat et citron confit.",
      details: "Recette traditionnelle marocaine très appréciée des connaisseurs."
    },
    {
      id: "couscous-viande-tfaya",
      name: "Couscous Viande, Légumes & Tfaya",
      category: "tagines",
      price: 60,
      badge: "Vendredi Uniquement",
      image: "assets/dishes/couscous-viande-tfaya.jpg",
      description: "Semoule roulée et cuite à la vapeur, viande tendre d'agneau et bœuf, sept légumes du marché et confit d'oignons caramélisés aux raisins secs (Tfaya).",
      details: "Chaque vendredi uniquement — Servi selon la tradition avec un grand verre de Lben frais."
    },

    // =============================================================
    // 6. BURGERS MAISON
    // =============================================================
    {
      id: "burger-al-andalous",
      name: "Burger AL ANDALOUS",
      category: "burgers",
      price: 88,
      badge: "Signature Maison",
      image: "assets/dishes/burger-al-andalous.jpeg",
      description: "Façon Méchoui : Steak haché pur bœuf, oignons et tomates méchoui grillés, olives vertes, cheddar fondu, zaalouk maison et sauce secrète Al Andalous.",
      details: "Pain brioché toasté, servi avec frites dorées croustillantes."
    },
    {
      id: "burger-poulet-crunchy",
      name: "Burger Poulet Crunchy",
      category: "burgers",
      price: 85,
      badge: "Nouveauté",
      image: "assets/dishes/burger-poulet-crunchy.jpeg",
      description: "Filet de poulet pané extra-croustillant, tomates fraîches, oignons, laitue iceberg croquante et sauce maison gourmande.",
      details: "Servi avec frites dorées."
    },
    {
      id: "chicken-burger",
      name: "Chicken Burger Grillé",
      category: "burgers",
      price: 85,
      badge: "Braisé",
      image: "assets/dishes/chicken-burger.jpeg",
      description: "Steak de poulet mariné et grillé à la flamme, poivrons rouges rôtis, aïoli moutarde à l'ancienne, laitue, tomates et oignons au vinaigre doux.",
      details: "Servi avec frites dorées."
    },
    {
      id: "double-burger",
      name: "Double Burger Gourmet",
      category: "burgers",
      price: 88,
      badge: "Double Steak",
      image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=900&q=80",
      description: "2 steaks de viande hachée pur bœuf de notre boucherie, double tranche de cheddar fondant, sauce burger maison, laitue, tomates et oignons grillés.",
      details: "Bun brioché moelleux, servi avec frites dorées."
    },
    {
      id: "burger-bacon",
      name: "Burger Bacon & Cheddar",
      category: "burgers",
      price: 95,
      badge: "Gourmet",
      image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=900&q=80",
      description: "Bacon de bœuf croustillant, 2 steaks de viande hachée fraîche, sauce burger maison, double cheddar, laitue, tomates et oignons grillés.",
      details: "Bun brioché au beurre, servi avec frites dorées."
    },

    // =============================================================
    // 7. SANDWICHS
    // =============================================================
    {
      id: "cheese-steak",
      name: "Cheese Steak Al Andalous",
      category: "sandwichs",
      price: 85,
      badge: "Incontournable",
      image: "assets/dishes/cheese-steak.jpeg",
      description: "Faux-filet grillé minute en fines tranches, oignons fondants, poivron vert, mayonnaise à l'ancienne et cheddar généreusement fondu.",
      details: "Baguette croustillante, servi avec frites."
    },
    {
      id: "cheese-steak-poulet",
      name: "Cheese Steak Poulet",
      category: "sandwichs",
      price: 85,
      badge: "Nouveauté",
      image: "https://images.unsplash.com/photo-1621800043295-a73fe2f76e2c?auto=format&fit=crop&w=900&q=80",
      description: "Filet de poulet grillé, poivrons verts, champignons frais sautés, oignons doux, mayonnaise à l'ancienne et cheddar coulant.",
      details: "Servi avec frites dorées."
    },
    {
      id: "sandwich-poulet-crispy",
      name: "Sandwich Poulet Crispy",
      category: "sandwichs",
      price: 80,
      badge: "Croustillant",
      image: "assets/dishes/sandwich-poulet-crispy.jpeg",
      description: "Beaux morceaux de poulet pané doré, sauce maison onctueuse, salade et tomates.",
      details: "Servi avec frites dorées."
    },
    {
      id: "sandwich-filet-boeuf",
      name: "Sandwich Filet de Bœuf",
      category: "sandwichs",
      price: 68,
      badge: "Tendre",
      image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=900&q=80",
      description: "Lanières de filet de bœuf braisé au feu de bois avec condiments frais.",
      details: "Servi avec frites."
    },
    {
      id: "sandwich-viande-hachee",
      name: "Sandwich Kefta Maison",
      category: "sandwichs",
      price: 60,
      badge: "Classique",
      image: "assets/dishes/sandwich-viande-hachee.jpeg",
      description: "Kefta artisanale bien relevée grillée sur place, oignons et sauce au choix.",
      details: "Servi avec frites."
    },
    {
      id: "sandwich-boulfaf",
      name: "Sandwich Boulfaf",
      category: "sandwichs",
      price: 75,
      badge: "Traditionnel",
      image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=900&q=80",
      description: "Foie grillé en crépine avec cumin, oignons et herbes aromatiques dans un pain chaud.",
      details: "Servi avec frites."
    },
    {
      id: "sandwich-mixte",
      name: "Sandwich Mixte Spécial",
      category: "sandwichs",
      price: 75,
      badge: "Généreux",
      image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=80",
      description: "Combinaison au choix de nos meilleures viandes grillées avec garniture complète.",
      details: "Servi avec frites."
    },
    {
      id: "sandwich-foie",
      name: "Sandwich Foie Grillé",
      category: "sandwichs",
      price: 68,
      badge: "Délicat",
      image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=900&q=80",
      description: "Foie frais grillé minute, oignons et épices marocaines.",
      details: "Servi avec frites."
    },
    {
      id: "sandwich-poulet",
      name: "Sandwich Poulet Grillé",
      category: "sandwichs",
      price: 58,
      badge: "Classique",
      image: "assets/dishes/sandwich-poulet.jpeg",
      description: "Blancs de poulet émincés marinés aux herbes et cuits à la plancha.",
      details: "Servi avec frites."
    },
    {
      id: "sandwich-saucisse-boeuf",
      name: "Sandwich Saucisse Bœuf",
      category: "sandwichs",
      price: 58,
      badge: "100% Bœuf",
      image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=80",
      description: "Saucisse maison pur bœuf grillée aux braises.",
      details: "Servi avec frites."
    },
    {
      id: "sandwich-saucisse-poulet",
      name: "Sandwich Saucisse Poulet",
      category: "sandwichs",
      price: 58,
      badge: "Doux",
      image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=80",
      description: "Saucisse de volaille artisanale aux herbes fraîches.",
      details: "Servi avec frites."
    },
    {
      id: "sandwich-saucisse-foie",
      name: "Sandwich Saucisse de Foie",
      category: "sandwichs",
      price: 65,
      badge: "Recette Maison",
      image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=900&q=80",
      description: "Saucisse maison gourmande au foie et épices fines.",
      details: "Servi avec frites."
    },

    // =============================================================
    // 8. MENU ENFANT (Exclusivement réservé aux menus enfants)
    // =============================================================
    {
      id: "menu-nuggets",
      name: "Menu Enfant Nuggets",
      category: "enfants",
      price: 60,
      badge: "Menu Enfant",
      image: "assets/dishes/menu-nuggets.jpeg",
      description: "Nuggets dorés et croustillants de poulet, frites croustillantes, jus d'orange frais ou eau minérale, et cadeau surprise.",
      details: "Réservé aux enfants jusqu'à 12 ans."
    },
    {
      id: "menu-mini-burger",
      name: "Menu Enfant Mini Burger",
      category: "enfants",
      price: 65,
      badge: "Menu Enfant",
      image: "assets/dishes/mini-burger.jpeg",
      description: "Mini burger à la viande hachée fraîche de notre boucherie, frites croustillantes, boisson au choix et surprise.",
      details: "Réservé aux enfants jusqu'à 12 ans."
    },

    // =============================================================
    // 9. DESSERTS GOURMANDS (Photos réelles)
    // =============================================================
    {
      id: "fondant-chocolat",
      name: "Fondant au Chocolat & Glace Vanille",
      category: "desserts",
      price: 55,
      badge: "Coup de Cœur",
      image: "assets/dishes/fondant-chocolat.jpeg",
      description: "Gâteau au chocolat noir intense avec son cœur coulant chaud, servi avec une boule de glace artisanale à la vanille de Madagascar.",
      details: "Préparé minute pour un cœur parfaitement coulant."
    },
    {
      id: "tiramisu",
      name: "Tiramisu Maison Al Andalous",
      category: "desserts",
      price: 42,
      badge: "Fait Maison",
      image: "assets/dishes/tiramisu.jpeg",
      description: "Biscuits imbibés au café expresso intense, crème mascarpone aérée veloutée et saupoudrage de cacao amer.",
      details: "Recette traditionnelle artisanale faite maison chaque jour."
    },
    {
      id: "panna-cotta",
      name: "Panna Cotta aux Fruits Rouges",
      category: "desserts",
      price: 35,
      badge: "Légèreté",
      image: "assets/dishes/panna-cotta.jpeg",
      description: "Crème cuite douce à la vanille surmontée d'un coulis acidulé de fraises et framboises.",
      details: "Très rafraîchissant après un repas de grillades."
    },
    {
      id: "cheesecake",
      name: "Cheesecake Maison",
      category: "desserts",
      price: 42,
      badge: "Gourmandise",
      image: "assets/dishes/cheesecake.jpeg",
      description: "Base de spéculoos croustillante et crème cheesecake dense et fraîche avec coulis de fruits rouges.",
      details: "Fait maison."
    },
    {
      id: "san-sebastian-cheesecake",
      name: "San Sebastian Cheesecake",
      category: "desserts",
      price: 55,
      badge: "Incontournable",
      image: "assets/dishes/san-sebastian-cheesecake.jpeg",
      description: "Le fameux gâteau basque à la croûte dorée caramélisée et au cœur ultra-crémeux et fondant à souhait.",
      details: "Nappage coulis de chocolat chaud ou fruits rouges au choix."
    },
    {
      id: "creme-brulee",
      name: "Crème Brûlée à la Vanille Bourbon",
      category: "desserts",
      price: 45,
      badge: "Croustillant & Fondant",
      image: "assets/dishes/creme-brulee.jpeg",
      description: "Crème parfumée à la véritable gousse de vanille, caramélisée au chalumeau devant vous pour une croûte croustillante.",
      details: "Servie tiède."
    },

    // =============================================================
    // 10. JUS FRAIS & BOISSONS
    // =============================================================
    {
      id: "jus-al-andalous",
      name: "Jus Signature Al Andalous",
      category: "boissons",
      price: 28,
      badge: "Signature",
      image: "assets/dishes/jus-al-andalous.jpeg",
      description: "Cocktail signature de fruits frais de saison pressés à la minute selon notre recette secrète.",
      details: "100% fruits frais sans sucre ajouté."
    },
    {
      id: "jus-detox",
      name: "Jus Detox Santé",
      category: "boissons",
      price: 28,
      badge: "Vitamines",
      image: "assets/dishes/jus-detox2.png",
      description: "Concombre croquant, carotte sucrée, betterave rouge et orange pressée.",
      details: "Énergie pure et bienfaits digestifs après vos viandes."
    },
    {
      id: "jus-orange",
      name: "Jus d'Orange Pur Frais",
      category: "boissons",
      price: 18,
      badge: "Pressé Minute",
      image: "assets/dishes/jus-orange.png",
      description: "Oranges marocaines juteuses et sucrées pressées à la commande.",
      details: "Verre grand format."
    },
    {
      id: "jus-citron-gingembre",
      name: "Jus Citron & Gingembre Frais",
      category: "boissons",
      price: 18,
      badge: "Tonifiant",
      image: "assets/dishes/jus-citron-gingembre.png",
      description: "Citron vert et jaune frais associé à la fraîcheur piquante du gingembre râpé et menthe fraîche.",
      details: "Digestif et ultra rafraîchissant."
    },
    {
      id: "soda-coca",
      name: "Coca-Cola (33cl)",
      category: "boissons",
      price: 18,
      badge: "Fraîcheur",
      image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=900&q=80",
      description: "Canette servie bien fraîche avec tranche de citron et glaçons.",
      details: "33cl."
    },
    {
      id: "soda-hawai",
      name: "Hawai Tropical (33cl)",
      category: "boissons",
      price: 18,
      badge: "Saveur Maroc",
      image: "assets/dishes/Hawai-Tropical.jpg",
      description: "La boisson pétillante tropicale marocaine par excellence.",
      details: "33cl."
    },
    {
      id: "soda-poms",
      name: "Pom's Pomme Pétillante (33cl)",
      category: "boissons",
      price: 18,
      badge: "Classique",
      image: "assets/dishes/Canette-Poms.jpg",
      description: "Boisson pétillante saveur pomme verte.",
      details: "33cl."
    },
    {
      id: "soda-sprite",
      name: "Sprite Citron-Lime (33cl)",
      category: "boissons",
      price: 18,
      badge: "Pétillant",
      image: "assets/dishes/sprite.jpg",
      description: "Boisson gazeuse rafraîchissante au goût citron-lime.",
      details: "33cl."
    },
    {
      id: "soda-schweppes-tonic",
      name: "Schweppes Tonic (33cl)",
      category: "boissons",
      price: 18,
      badge: "Pétillant",
      image: "assets/dishes/schewps-tonic.jpg",
      description: "Tonic pétillant servi frais.",
      details: "33cl."
    },
    {
      id: "soda-schweppes-citron",
      name: "Schweppes Citron (33cl)",
      category: "boissons",
      price: 18,
      badge: "Pétillant",
      image: "assets/dishes/schewps-citron.jpg",
      description: "Saveur citron pétillante.",
      details: "33cl."
    },
    {
      id: "soda-orangina",
      name: "Orangina (33cl)",
      category: "boissons",
      price: 20,
      badge: "Pulpe d'Orange",
      image: "assets/dishes/orangina.png",
      description: "La boisson aux vraies pulpes d'orange secouée fraîche.",
      details: "33cl."
    },
    {
      id: "eau-minerale-50cl",
      name: "Eau Minérale (50 cl)",
      category: "boissons",
      price: 15,
      badge: "Eau Pure",
      image: "assets/dishes/eau-minerale-50cl.jpg",
      description: "Bouteille individuelle servie fraîche ou tempérée.",
      details: "50 cl."
    },
    {
      id: "eau-minerale-75cl",
      name: "Eau Minérale (75 cl)",
      category: "boissons",
      price: 20,
      badge: "Bouteille de Table",
      image: "assets/dishes/eau-minerale-75cl.jpg",
      description: "Bouteille d'eau minérale servie fraîche ou tempérée.",
      details: "75 cl."
    },

    // =============================================================
    // 11. BOISSONS CHAUDES & THÉ
    // =============================================================
    {
      id: "the-menthe",
      name: "Thé à la Menthe Marocain Traditionnel",
      category: "chaud",
      price: 16,
      badge: "Tradition",
      image: "assets/dishes/the-menthe.jpg",
      description: "Thé vert gunpowder infusé à la menthe fraîche d'Al Andalous, versé haut pour une mousse généreuse.",
      details: "Servi dans la théière traditionnelle avec verre sculpté."
    },
    {
      id: "cafe-creme",
      name: "Café Crème Gourmand (avec eau minérale)",
      category: "chaud",
      price: 17,
      badge: "Onctueux",
      image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=900&q=80",
      description: "Expresso riche nappé de lait velouté moussé à chaud.",
      details: "Accompagné de son petit verre d'eau minérale."
    },
    {
      id: "cafe-nespresso",
      name: "Nespresso Intense (avec eau minérale)",
      category: "chaud",
      price: 14,
      badge: "Arômes Riches",
      image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=900&q=80",
      description: "Sélection de café corsé d'exception servi avec eau minérale.",
      details: "Servi avec son verre d'eau minérale."
    },
    {
      id: "cafe-american",
      name: "Café American (avec eau minérale)",
      category: "chaud",
      price: 17,
      badge: "Allongé",
      image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=900&q=80",
      description: "Café allongé aux arômes équilibrés.",
      details: "Servi avec eau minérale."
    },
    {
      id: "cappuccino",
      name: "Cappuccino Mousse de Lait",
      category: "chaud",
      price: 18,
      badge: "Velouté",
      image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=900&q=80",
      description: "Expresso avec généreuse couche de mousse de lait crémeuse saupoudrée de cacao.",
      details: "Servi avec eau minérale."
    },
    {
      id: "lait-chocolat",
      name: "Lait au Chocolat Chaud (avec eau minérale)",
      category: "chaud",
      price: 18,
      badge: "Gourmand",
      image: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=900&q=80",
      description: "Chocolat chaud crémeux et gourmand.",
      details: "Servi avec eau minérale."
    },
    {
      id: "verveine-nature",
      name: "Infusion Verveine Nature",
      category: "chaud",
      price: 16,
      badge: "Digestif",
      image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=900&q=80",
      description: "Feuilles entières de verveine du pays séchées, idéales pour terminer le repas en douceur.",
      details: "Théière individuelle."
    }
  ]
};
