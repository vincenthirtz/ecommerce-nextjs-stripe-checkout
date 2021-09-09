import 'tailwindcss/tailwind.css';
import '../sass/app.scss'
import Head from 'next/head';
import { CartProvider } from '@/hooks/use-shopping-cart';
import { Header, Footer } from '@/components/index';
import { Toaster } from 'react-hot-toast';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>
        Designer culinaire | Petit Boukan | France
        </title>
        <meta
          name="description"
          content="Petit boukan propose un service de design et d'accessoires culinaires. Vos évènement prennent de nouvelles formes et bousculent les codes traditionnels grâce à nos scénographies gourmandes."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CartProvider>
        <div className="main min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Component {...pageProps} />
          </main>
          <Footer />
        </div>
      </CartProvider>
      <Toaster />
    </>
  );
}

export default App;
