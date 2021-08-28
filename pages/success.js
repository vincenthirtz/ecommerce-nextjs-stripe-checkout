import { useEffect } from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { useShoppingCart } from '@/hooks/use-shopping-cart';
import { fetcher, shootFireworks } from '@/lib/utils';
import { CheckIcon } from '@heroicons/react/outline';

const Success = () => {
  const {
    query: { session_id },
  } = useRouter();

  const { clearCart } = useShoppingCart();

  const { data, error } = useSWR(
    () => `/api/checkout_sessions/${session_id}`,
    fetcher
  );

  useEffect(() => {
    if (data) {
      shootFireworks();
      clearCart();
    }
  }, [data]);

  return (
    <div className="container xl:max-w-screen-xl mx-auto py-12 px-6 text-center">
      {error ? (
        <div className="p-2 rounded-md bg-rose-100 text-rose-500 max-w-md mx-auto">
          <p className="text-lg">Erreur, contacter le service client pour plus d'informations!</p>
        </div>
      ) : !data ? (
        <div className="p-2 rounded-md bg-gray-100 text-gray-500 max-w-md mx-auto">
          <p className="text-lg animate-pulse">Chargement...</p>
        </div>
      ) : (
        <div className="py-4 px-8 rounded-md bg-gray-100 max-w-lg mx-auto">
          <h2 className="text-4xl font-semibold flex flex-col items-center space-x-1">
            <CheckIcon className="w-12 h-12 flex-shrink-0 text-green-600" />
            <span>Merci pour votre achat! L'équipe de Petit Boukan va prendre en charge ton colis dans les plus brefs délais.</span>
          </h2>
          <p className="text-lg mt-3">Vérifier votre email pour votre confirmation de commande.</p>
        </div>
      )}
    </div>
  );
};

export default Success;
