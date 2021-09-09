import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [disabled, setDisabled] = useState(false);

  return (
    <>
      <div className="container xl:max-w-screen-xl mx-auto py-12 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          Home
        </div>
      </div>
      <div className="bloc-boukanos">
        <Image src="/boukanos1.webp" alt="one" width={443} height={569} />
        <Image src="/boukanos2.webp" alt="two" width={443} height={569} />
        <div className="boukanos">
          <h2>Les boukanos</h2>
          <p>
            Trois jeunes créatrices passionnées issues de La Martinière Diderot
            s'associent pour perturber vos repas et mettre de la fantaisie dans
            votre routine culinaire.
          </p>
        </div>
        <Image src="/boukanos3.webp" alt="three" width={443} height={569} />
      </div>
    </>
  );
}
