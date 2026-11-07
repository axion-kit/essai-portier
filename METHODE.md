# Méthode de travail

Du besoin à l'outil livré, dans cet ordre. Chaque étape laisse une trace dans `REPRENDRE.md`.

## 1. Cadrage -> SPEC.md
- Comprendre le besoin : qui s'en sert, pour faire quoi, qu'est-ce qui est hors sujet.
- Remplir `SPEC.md` (rubriques du gabarit). Chaque exigence est numérotée **R1..Rn** et écrite ainsi :
  **Étant donné** (situation) / **Quand** (action) / **Alors** (résultat visible).
- Une exigence = un résultat qu'on peut tester. Pas de mot technique dans les exigences d'écran.

## 2. Découpage : MVP, puis V2, puis V3
Chaque exigence reçoit `mvp`, `v2` ou `v3`, avec une phrase de raison.
1. **Le MVP doit pouvoir se vendre seul** : un parcours complet de bout en bout, sans écran vide ni bouton mort.
2. **Le MVP garde tout ce qui protège** : sécurité, sauvegardes, mobile d'abord, aucun mot technique. Jamais renvoyé en V2.
3. **7 lots au plus pour le MVP.** Au-delà, proposer une coupe.
4. **V2** : ce que demandent les premiers clients, le confort. **V3** : automatisations avancées, intégrations rares.
5. Chaque version suit le cycle complet ci-dessous.

## 3. Pour chaque lot
1. **Tests d'abord** : écrire les tests des exigences R du lot ; ils doivent échouer.
2. **Code** : le minimum pour passer au vert. Logique dans `src/lib` (couverture >= 80 %).
3. **Vérifier** : `pnpm tsc --noEmit`, `pnpm lint`, `pnpm test`, `pnpm build`.
4. **Relecture** : agent `relecteur`, jusqu'au verdict ACCEPTÉ.
5. **PR** : une PR par lot, CI verte, `REPRENDRE.md` à jour.

## 4. Recette
Parcourir chaque R de `SPEC.md` sur téléphone, sur l'outil construit. Noter pour chacune : réussi / à corriger. Corriger, puis passer `ETAT: FINI`.

## Règles d'écran
Mobile d'abord (tester à 375 px). Aucun mot technique à l'écran. Français simple, boutons larges, un seul geste principal par écran.
