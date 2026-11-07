import Link from "next/link";
import { heureParis } from "@/lib/heure-paris";
import { salutation } from "@/lib/salutation";

// À remplacer : ces rubriques ne mènent encore nulle part, elles ne sont donc pas cliquables.
const rubriques = ["Rubrique 1", "Rubrique 2"];

export const dynamic = "force-dynamic";

export default function Accueil() {
  const message = salutation(heureParis(new Date()));
  return (
    <div className="coque">
      <nav className="barre" aria-label="Menu principal">
        <p className="marque">Mon outil</p>
        <ul>
          <li>
            <Link href="/" aria-current="page">
              Accueil
            </Link>
          </li>
          {rubriques.map((nom) => (
            <li key={nom}>
              <span className="rubrique">{nom}</span>
            </li>
          ))}
        </ul>
      </nav>
      <main className="contenu">
        <h1>{message} !</h1>
        <p>Voici votre espace. Tout est prêt pour commencer.</p>
        {/* À remplacer par un vrai lien quand la rubrique existera. */}
        <span className="bouton">Ajouter mon premier élément</span>
      </main>
    </div>
  );
}
