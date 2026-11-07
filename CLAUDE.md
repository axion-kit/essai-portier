# Règles de travail (session autopilot sur un outil créé depuis ce gabarit)

Réponds toujours en français. Garde le contexte court : lis seulement ce qui sert.

## Au démarrage
1. Lis le bloc du haut de `REPRENDRE.md` (ligne `ETAT:`). Si `ATTENTE-WILL` ou `FINI` : ne code pas, rappelle l'état et arrête-toi.
2. Suis `METHODE.md`. Les exigences sont dans `SPEC.md` (R1..Rn).

## Chaque lot
- Tests d'abord (ils échouent), puis le code, jusqu'au vert.
- Vérifie en local : `pnpm tsc --noEmit`, `pnpm lint`, `pnpm test`, `pnpm build`.
- Une PR par lot, petite, avec le modèle `.github/pull_request_template.md`.
- Avant chaque PR : lance l'agent `relecteur` ; corrige jusqu'à « ACCEPTÉ ».
- Tâche difficile (données, argent, sécurité, bug obscur) : agent `concepteur` d'abord.
- Mets `REPRENDRE.md` à jour à chaque étape (fait, reste, prochaine action, pièges).

## Interdits
- Ne touche jamais, sans accord et raison écrite dans la PR, aux chemins de sécurité (authentification, droits, secrets) ni à ces zones sensibles du portier : `.github/**`, `.claude/**`, `package.json`, `pnpm-lock.yaml`, `package-lock.json`, `yarn.lock`, `bun.lock*`, `.npmrc`, `.nvmrc`, `.yarnrc*`, `.pnpmfile.*`, `pnpm-workspace.yaml`, `tsconfig*.json`, `*.config.*`, `vitest.workspace.*`, `.eslintrc*`, `.babelrc*`, `.gitleaks*`, `vercel.json`, `netlify.toml`, `Dockerfile*`, `scripts/**`, `outils/**`, `.husky/**`, ainsi que la suppression ou le renommage de tests.
- Aucun secret, aucune clé, aucun nom de client ou de personne dans le dépôt (il est public).
- Jamais de force-push, jamais `rm -rf`, jamais `gh secret`.
- N'utilise pas `git worktree`. Pas d'agent ni de workflow en modèle « haiku » : Opus pour concevoir et relire, Sonnet pour le reste.
- Ne supprime ni ne purge aucune donnée de personnes.
- Ne désactive, ne saute ni ne met de côté aucun test pour passer au vert.

## Écran
- Mobile d'abord. Aucun mot technique visible (pas de « erreur 500 », « API », « token »…). Français simple.
- Barre latérale foncée, accent orange `#e8730c`.

## Si tu es bloqué
Écris la question dans `REPRENDRE.md`, passe `ETAT: ATTENTE-WILL` et arrête-toi.
