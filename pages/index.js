import { useState } from 'react';

export default function Home() {
  const [disabled, setDisabled] = useState(false);

  return (
    <div className="container xl:max-w-screen-xl mx-auto py-12 px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        Home
      </div>
    </div>
  );
}
