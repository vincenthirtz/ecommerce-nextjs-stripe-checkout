import Link from 'next/link';
import Image from 'next/image';

const Logo = () => (
  <Link href="/">
    <a className="flex items-center space-x-2">
      <Image src="/logo.jpg" alt="Logo" width={50} height={50} />
      <span className="hidden sm:inline-block font-extrabold text-3xl text-gray-700">
        Petit boukan
      </span>
    </a>
  </Link>
);

export default Logo;
