# Projet KASA

## KASA
 C'est un site de logement réalisé sur React TypeScript.

## Aperçu
* **page d'accueil**: liste les logements disponibles
* **page de détail**: galerie photo avec navigation (précédent/suivant), tags, note, informations sur l'hôte, sections repliables (description, équipements)
* **page à propos**: vide actuellement
* **page contact**: vide actuellement
* **page 404**: pour les routes inexistantes
* **Responsive**: responsive desktop et mobile intégré

## Technologies utilisées
* **React** : bibliothèque UI
* **TypeScript** : typage statique
* **Vite** : outil de build et serveur de développement
* **React Router DOM** : gestion des routes
* **Sass** : préprocesseur CSS (styles modulaires par composant/page)
* **ESLint** :analyse statique du code

## Installation
```bash
    npm create vite@latest
    npm install
    npm install react-router-dom
    npm install sass

```

## Lancer le projet en développement
```bash
    npm run dev
```

## Structure du projet
```
LogementReact/
├── eval-react                     
├── public/                     # Fichiers statiques
├── src/
│   ├── components/             # Composants réutilisables
│   │   ├── Carrousel/          # Galerie photo avec navigation
│   │   ├── Collapse/           # Section repliable (description)
│   │   ├── CollapseEquipement/ # Section repliable (équipements)
│   │   ├── Cards/              # Cartes de logement (page d'accueil)
│   │   ├── Footer/
│   │   └── Navbar/
│   ├── data/                   # fichier json (new-logements.json)
│   ├── pages/                  # Pages de l'application
│   │   ├── Home/
│   │   ├── Detail/
│   │   └── NotFound/
│   ├── styles/                 # Fichiers Sass (variables, mixins, styles globaux et par composant)
│   ├── App.tsx                 # Déclaration des routes
│   └── main.tsx               
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Auteur
ANDRIANIRINA Giovanie Andrica