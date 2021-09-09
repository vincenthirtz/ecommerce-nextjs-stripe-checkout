import Head from 'next/head';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | Petit Boukan | France</title>
        <meta name="description" content="Page de contact de Petit Boukan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container xl:max-w-screen-xl mx-auto py-12 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          Contact
        </div>
      </div>
    </>
  );
}
