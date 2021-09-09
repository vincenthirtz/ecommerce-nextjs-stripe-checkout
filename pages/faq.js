import Head from 'next/head';

const Faq = () => {
  return (
    <>
    <Head>
    <title>
    Livraison & FAQ | Petit Boukan
    </title>
    <meta
      name="description"
      content="Des détails sur la livraison et tout ce qui concerne les processus de paiement"
    />
    <link rel="icon" href="/favicon.ico" />
  </Head>
    <div className="container xl:max-w-screen-xl mx-auto py-12 px-6 text-center">
      <div className="py-4 px-8 rounded-md bg-gray-100 max-w-xl mx-auto">
        <h2 className="text-4xl font-semibold flex flex-col items-center space-x-1">
          <span>Livraison & FAQ</span>
        </h2>

        <h2 className="text-4xl font-semibold flex flex-col items-center space-x-1">
          <span>Où sont fabriquées les créations Petit Boukan ?</span>
        </h2>

        <p className="text-lg mt-3">
          Les scénographies culinaires sont crées principalement dans les Landes
          avec un souci permanent du 0 plastique. Pour les accessoires, ils
          viennent de l'hexagone, on aime le bleu / blanc / rouge! Nos vêtements
          sont fabriqués dans le sud de la France notamment chez Main Gauche.
          Pour nos illustrations nous utilisons au maximum le papier recyclé. Le
          point commun de nos créations ? Toujours fabriquées ave amour.
        </p>
        <h2 className="text-4xl font-semibold flex flex-col items-center space-x-1">
          <span> Comment payer ma commande ?</span>
        </h2>

        <p className="text-lg mt-3">
          Comme les billets du Monopoly ne sont pas encore acceptés nous
          acceptons seulement les paiements en CB et par PayPal.
        </p>
        <h2 className="text-4xl font-semibold flex flex-col items-center space-x-1">
          <span>La livraison c'est comment ? </span>
        </h2>
        <p className="text-lg mt-3">
          Promis on n'a pas pris exemple sur Wish Une fois votre commande passée
          on vous met tout en paquet comme de petits lutins. Puis c'est notre
          transporteur national qui prend le relais. Toute commande est envoyée
          à vote domicile pour 6,30€ en colissimo (avec packaging adapté et
          petits goodies si vous avez été sages; o ui on est en contact avec le
          père noël). Quand tout va bien une réception entre 3j et 4j est
          prévue!
        </p>

        <h2 className="text-4xl font-semibold flex flex-col items-center space-x-1">
          <span>Et si je veux faire du boukan ? </span>
        </h2>
        <p className="text-lg mt-3">
          Le service client c'est nous ! Alors, vous ne vous embêtez pas avec un
          numéro d'appel surtaxé et on est super cool ! Envoyez-nous un mail à
          contact@petitboukan.com et on s'occupera de tout.
        </p>

        <h2 className="text-4xl font-semibold flex flex-col items-center space-x-1">
          <span>Ça ne me plait pas....</span>
        </h2>
        <p className="text-lg mt-3">
          Ça nous rend triste mais ça arrive... Le retour se fait à vos frais,
          dans l'état d'origine, (contactez-nous pour connaître notre adresse,
          oui on ne la donne pas à tout le monde). Nous procéderons à votre
          remboursement ou échange dans les plus brefs délais, dès réception et
          contrôle du produit retourné.
        </p>

        <h2 className="text-4xl font-semibold flex flex-col items-center space-x-1">
          <span> Je veux faire du boukan dans ma boutique. </span>
        </h2>
        <p className="text-lg mt-3">
          Trop cool encore plus de boukan!! Vous voulez proposer les produits
          Petit Boukan dans vote boutique n'hésitez pas à nous faire parvenir
          votre message ur contact@petitboukan.com, nous reviendrons vers vous
          au plus vite!
        </p>
      </div>
    </div>
    </>
  );
};

export default Faq;
