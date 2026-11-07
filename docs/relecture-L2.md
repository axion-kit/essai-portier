# Relecture de sécurité L2 : points, correctifs, preuves

Les fichiers sensibles (`.github/**`, `.claude/**`, `*.config.*`, `CLAUDE.md`) sont modifiés ici à la demande expresse de cette relecture, pour fermer les failles qu'elle a trouvées.

| Point | Correctif | Preuve |
|---|---|---|
| G1 | gitleaks lancé avec `--config .github/gitleaks.toml --gitleaks-ignore-path .github/` ; `.github/gitleaks.toml` étend les règles par défaut | `ci.yml`, `.github/gitleaks.toml` |
| G2 | `noInlineConfig` et `reportUnusedDisableDirectives` dans ESLint ; étape CI qui échoue si `grep` trouve un commentaire ou appel coupant un contrôle | `eslint.config.mjs`, `ci.yml` ; `grep` local sans résultat |
| G3 | tests `src/**/*.test.{ts,tsx}` ; couverture de `src/**/*.{ts,tsx}` sauf `layout.tsx` et les tests ; seuil 80 % ; test de la page ajouté | `pnpm test` : 9 tests, couverture 100 % |
| G4 | seul `git push -u origin HEAD` autorisé ; refus de force, `+`, `:`, `--delete`, `main` | `.claude/settings.json` |
| G5 | `docs/source/` supprimé, aucune référence restante, aucun e-mail, prix, client ni chemin interne | `grep` local sans résultat |
| G6 | `pnpm *` remplacé par la liste précise ; refus de `dlx`, `exec`, `add`, `npx` | `.claude/settings.json` |
| G8 | `playwright install --with-deps chromium` puis `pnpm e2e` en CI | `ci.yml` (non rejoué en local : voir ci-dessous) |
| G9 | l'e2e accepte Bonjour ou Bonsoir | `e2e/accueil.spec.ts` |
| G10 | `persist-credentials: false`, `timeout-minutes: 15`, concurrence avec annulation | `ci.yml` |
| G11 | heure de Paris via `Intl.DateTimeFormat`, logique dans `src/lib/heure-paris.ts` | `heure-paris.test.ts` (hiver, été, minuit), test de la page à 17 h UTC |
| G12 | plus de `href="#"` ; rubriques non cliquables « Rubrique 1/2 » avec commentaire « à remplacer » | `page.test.tsx` |
| G13 | contour visible au clavier (`:focus-visible`) | `globals.css` |
| G14 | refus de `Bash(rm *-*r*)` | `.claude/settings.json` |
| G15 | `CLAUDE.md` recopie la liste exacte des zones sensibles du portier | `CLAUDE.md` |

## Limite
`pnpm e2e` n'a pas pu tourner en local : le navigateur installé ne correspond pas à la version attendue par Playwright, et le contournement a été refusé. La CI l'installe et le lance.
