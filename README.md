# L'Atelier 12 — [voir le site](https://latelier12.fr)

Site vitrine pour un salon de coiffure du 5ème arrondissement de Paris.

## Stack

React + TypeScript + Tailwind CSS v4, avec Vite. Galerie 3D (desktop) via [react-three-fiber](https://github.com/pmndrs/react-three-fiber) et [drei](https://github.com/pmndrs/drei).

Les données produits/avis/galerie vivent aujourd'hui dans `src/data/` et sont exposées via `src/services/api.ts` — cette couche sera branchée sur un backend Strapi (produits, photos et avis gérés directement par la patronne) sans changer les composants qui les consomment.

## Démarrer

Ce projet requiert Node ≥ 20.19 ou ≥ 22.12 (voir `.nvmrc`).

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```
