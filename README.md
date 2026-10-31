# 🍽️ Menu Visuel 100% Gratuit — Grillade Al Andalous & Boucherie Al Andalous

Ce projet est une application web mobile-first ultra-rapide, conçue sur-mesure pour le restaurant **Grillade Al Andalous** (établissements **Prestigia Hay Riad** et **Harhoura**).

Elle permet à vos clients de scanner un QR code imprimé directement sur leur **set de table** (ou chevalet) pour accéder en moins d'une seconde à l'ensemble de votre carte avec photos haute définition, zoom au clic, ingrédients détaillés et redirection vers la **Boucherie Al Andalous**.

---

## 🌟 Fonctionnalités Incluses

1. **Expérience Mobile-First Fluide :**
   - Vitesse de chargement ultra-rapide (< 1 seconde en 4G/5G).
   - Thème visuel haut de gamme (or ambré marocain, braise et noir élégant) mettant en valeur les viandes dorées.
2. **Double Établissement (Prestigia Hay Riad & Harhoura) :**
   - Bascule en un clic entre les deux restaurants avec mise à jour des coordonnées et téléphones.
   - Les QR codes peuvent pré-sélectionner automatiquement la table (`?loc=harhoura` ou `?loc=prestigia`).
3. **Mise en valeur de la Boucherie Al Andalous :**
   - Bandeau mettant en avant la traçabilité des viandes 100% fraîches.
   - Bouton de redirection vers le site officiel et commande de viandes.
4. **Photos HD avec Zoom Plein Écran (Lightbox) :**
   - Un toucher sur n'importe quel plat agrandit la photo en haute résolution façon Instagram.
5. **Recherche et Filtres par Catégorie :**
   - Onglets horizontaux sticky : *Steaks & Viandes, Brochettes, Burgers, Sandwichs, Tagines, Salades, Desserts, Jus & Boissons, Thés & Cafés, Menu Enfant*.
   - Recherche instantanée par mot-clé (ex: *kefta*, *tajine*, *tomahawk*, *cheesecake*).
6. **Boutons Pratiques pour le Client :**
   - **📶 Wi-Fi Table 1-clic :** Affiche et copie instantanément le mot de passe dans le téléphone du client.
   - **⭐ Avis Google :** Lien direct pour inciter les clients satisfaits à laisser 5 étoiles.
   - **📸 Instagram officiel :** [@grilladealandalous](https://www.instagram.com/grilladealandalous/).
7. **Gabarits QR Code Prêts à Imprimer :**
   - Format spécial pour les **sets de table en papier** (`qr-code/set-de-table.html`).
   - Format pour **chevalets ou stickers de table** (`qr-code/chevalet-table.html`).

---

## 🚀 Comment Déployer 100% Gratuitement (en 2 minutes)

L'hébergement est **100 % gratuit à vie**, sans carte bancaire requise :

### Option A : Déploiement ultra-simple sur Vercel (Recommandé)
1. Rendez-vous sur [vercel.com](https://vercel.com) et créez un compte gratuit (avec votre adresse e-mail ou compte GitHub).
2. Cliquez sur **"Add New Project"** puis glissez-déposez simplement le dossier `grillade-al-andalous`.
3. Cliquez sur **"Deploy"**. En 30 secondes, votre site est en ligne avec une adresse sécurisée en HTTPS (ex: `grillade-alandalous.vercel.app`).
4. *(Optionnel)* Vous pouvez brancher à tout moment un nom de domaine personnalisé gratuit.

### Option B : Déploiement sur Cloudflare Pages ou GitHub Pages
- Le site est composé de HTML/CSS/JS statiques purs, sans aucune dépendance serveur complexe. Il est donc compatible avec n'importe quel hébergeur gratuit mondial (GitHub Pages, Netlify, Cloudflare Pages).

---

## 🖨️ Comment Imprimer les QR Codes pour vos Tables

1. Une fois votre site déployé, copiez l'adresse web de votre site (ex: `https://grillade-alandalous.vercel.app`).
2. Ouvrez dans votre navigateur le fichier :
   - `qr-code/set-de-table.html` (pour intégrer sur vos **sets de table**)
   ou
   - `qr-code/chevalet-table.html` (pour les **chevalets / stickers**)
3. Collez votre lien dans la barre de configuration en haut : les QR codes de Hay Riad et Harhoura s'actualisent instantanément en haute définition !
4. Cliquez sur **« 🖨️ Imprimer »** ou transmettez le fichier à votre imprimeur.

---

## ✏️ Comment Modifier un Prix, un Plat ou une Photo

Tous les plats et informations sont centralisés dans un seul fichier très clair :
👉 `js/menu-data.js`

Pour modifier un prix ou un plat :
1. Ouvrez `js/menu-data.js` avec n'importe quel éditeur de texte.
2. Repérez le plat concerné :
   ```javascript
   {
     id: "burger-al-andalous",
     name: "Burger AL ANDALOUS",
     price: 88, // <-- Changez le prix ici
     image: "chemin_ou_lien_de_votre_photo.jpg" // <-- Changez la photo ici
   }
   ```
3. Sauvegardez le fichier. Le site est instantanément à jour !

---

## 🥩 Coordonnées Intégrées

- **Boucherie Al Andalous :** [boucheriealandalous.com](https://boucheriealandalous.com/) — WhatsApp : +212 6 66 65 56 05
- **Prestigia Hay Riad (Rabat) :** Avenue Essanaoubar, Place Al Masjid 'Sayf' — Tél : 05 37 71 73 91
- **Harhoura (Bord de Mer) :** Avenue Prince Moulay Abdellah, Résidence Oasis 3 / Chems — Tél : 05 37 58 22 00
- **Instagram officiel :** [@grilladealandalous](https://www.instagram.com/grilladealandalous/)
