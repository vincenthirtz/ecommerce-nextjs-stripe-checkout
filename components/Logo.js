import Link from "next/link";
import Image from "next/image";
import { Menu } from "@/components/index";

const Logo = () => (
  <>
    <div className="flex items-center flex-col">
      <Link href="/">
        <a className="flex items-center flex-col">
          <Image src="/logo.jpg" alt="Logo" width={50} height={50} />
          <span className="hidden sm:inline-block font-extrabold text-3xl tracking-widest">
            Petit boukan
          </span>
        </a>
      </Link>
      <Menu />
    </div>
  </>
);

export default Logo;
