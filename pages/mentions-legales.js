import Head from 'next/head';

const MentionsLegales = () => {
  return (
    <>
    <Head>
    <title>
    Mentions Légales | Petit Boukan
    </title>
    <meta
      name="description"
      content="E-commerce store built with Next.js and Stripe checkout by AlterClass.io"
    />
    <link rel="icon" href="/favicon.ico" />
  </Head>
    <div className="container xl:max-w-screen-xl mx-auto py-12 px-6 text-center">
      <div className="py-4 px-8 rounded-md bg-gray-100 max-w-xl mx-auto">
        <h2 className="text-4xl font-semibold flex flex-col items-center space-x-1">
          <span>Mentions légales </span>
        </h2>
        <h2 className="text-4xl font-semibold flex flex-col items-center space-x-1">
          <span> Utilisation du site</span>
        </h2>

        <p className="text-lg mt-3">
          En application du code de la propriété intellectuelle (CPI), toute
          reproduction partielle ou totale à usage collectif du site
          "petitboukan.com" est strictement interdite sans autorisation expresse
          'Alice Corporandy. L'utilisateur s'interdit en outre de modifier l
          domaine https://www.petitboukan.com, de le traduire ou de le
          transcrire dans tout autre langage, de transférer les données du
          domaine à tout tiers sans l'autorisation préalable d'Alice Corporandy.
          © 2021, Petit Boukan. Tous droits réservés. Toute reproduction de
          cette œuvre par quelque procédé que ce soit est interdite sans
          autorisation écrite de l'éditeur.
        </p>
        <h2 className="text-4xl font-semibold flex flex-col items-center space-x-1">
          <span>Utilisation autorisée </span>
        </h2>

        <p className="text-lg mt-3">
          Le code de la propriété intellectuelle autorise, aux termes des
          paragraphes 2° et 3° de l'article L. 122-5 du CPI, d'une part, les
          "copies ou reproductions strictement réservées à l'usage privé du
          copiste et non destinées à une utilisation collective" et, d'autre
          part, sous réserve du nom de l'auteur et de la source, "les analyses
          et les courtes citations justifiées par le caractère critique,
          polémique, pédagogique, scientifique ou d'information. Toute autre
          représentation o reproduction, par quelque procédé que ce soit,
          notamment par téléchargement ou sortie imprimante, constituera don une
          contrefaçon sanctionnée par les articles L 335-2 et suivants du Code
          de la Propriété Intellectuelle. Ainsi, vous êtes autorisés à accéder,
          télécharger et imprimer toute page de contenu sur un fichier
          temporaire pour votre utilisation personnelle. À l'exception des
          œuvres mises en ligne et faisant l'objet d'une mesure technique de
          protection, conformément aux dispositions de la Directive du 22 mai
          2001 sur "'Harmonisation de certains droits 'auteur et des droits
          voisins dans la société de l'information" (Dir. 2001/29/CE, 22 mai
          2001, JOCE 22 juin, n°L 167, p. 10), la reproduction des pages du
          présent site est autorisée sur support papier, à l'exclusion de tout
          autre et sous réserve du respect des trois conditions cumulées
          suivantes: • gratuité de la diffusion - respect de l'intégrité du
          contenu reproduit (aucune modification, ni altération) à la condition
          de mentionner la source citation explicite du site de Petit Boukan
          comme source et mention que les droits de reproduction sont réservés
          et strictement limités à la copie privée.
        </p>
        <h2 className="text-4xl font-semibold flex flex-col items-center space-x-1">
          <span>Utilisation interdite </span>
        </h2>
        <p className="text-lg mt-3">
          L'ensemble des contenus édités sur le site
          https://www.petitboukan.com, est la propriété exclusive de Petit
          Boukan. En conséquence, toute représentation ou reproduction intégrale
          ou partielle, fate sans consentement de l'auteur ou de ses ayants
          droit, est illicite (art. L 122-4 du CPI). Toute les utilisations
          telles que décrites ci-dessous devront faire l'objet d'une
          autorisation préalable écrite. - extraction, manipulation,
          modification des contenus de quelle que façon que cela soit diffusion,
          radiodiffusion, exposition, représentation publique de contenus
          stockage de contenus sur quel que support que cela soit, incluant
          l'extraction de base de données, de programme informatique ou du site
          location ou prêt de contenu exploitation ou publication commercial de
          contenus de quelque façon que cela soit.
        </p>

        <h2 className="text-4xl font-semibold flex flex-col items-center space-x-1">
          <span>Droit moral </span>
        </h2>
        <p className="text-lg mt-3">
          Conformément au code de la propriété intellectuelle, tout auteur a
          droit au respect de son nom et de l'intégrité de son œuvre. Ainsi
          toute utilisation de contenu protégé en tant qu'œuvre par le code de
          la propriété intellectuelle devra être fait sans modification et
          comporter le nom de son auteur et du cessionnaire des droits le cas
          échéant.
        </p>

        <h2 className="text-4xl font-semibold flex flex-col items-center space-x-1">
          <span>Responsabilité</span>
        </h2>
        <p className="text-lg mt-3">
          Tout les efforts sont mis en œuvre dans 'élaboration des contenus,
          toutefois Petit Boukan ne peut être considéré comme responsables,
          grants, explicitement ou tacitement, de 'exactitude des contenus qui
          peuvent être créés ainsi que de l'utilisation qui en sera faite par
          les internautes. Par ailleurs, Petit Boukan n'est pas responsables de
          l'utilisation qui pourra être faite par l'internaute des informations
          qu'il pourra trouver sur le site. Petit Boukan s'engagent à mettre en
          œuvre tous les moyens nécessaires afin d'assurer au mieux la
          fourniture des services qu'ils proposent à l'internaute. Leur
          responsabilité ne saurait être engagée en cas de force majeure ou de
          fait indépendant de sa volonté.
        </p>
      </div>
    </div>
    </>
  );
};

export default MentionsLegales;
