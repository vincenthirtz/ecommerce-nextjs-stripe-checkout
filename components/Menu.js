import Link from "next/link";
import Image from "next/image";
import { formatCurrency } from "@/lib/utils";
import { ShoppingCartIcon } from "@heroicons/react/solid";
import { useShoppingCart } from "@/hooks/use-shopping-cart";

const Menu = () => {
  const { totalPrice, cartCount } = useShoppingCart();
  return (
    <div className="p-6 flex items-end font-light">
      <Link href="/">
        <a className="tracking-widest p-6">
          <span className="hidden sm:inline-block  text-sm ">Ké ce c ?</span>
        </a>
      </Link>
      <Link href="/">
        <a className="tracking-widest p-6">
          <span className="hidden sm:inline-block  text-sm ">
            Fais ton Boukan
          </span>
        </a>
      </Link>
      <Link href="/">
        <a className="tracking-widest p-6">
          <span className="hidden sm:inline-block  text-sm ">Boutike</span>
        </a>
      </Link>
      <Link href="/">
        <a className="tracking-widest p-6">
          <span className="hidden sm:inline-block  text-sm ">Newsletter</span>
        </a>
      </Link>
      <Link href="/">
        <a className="tracking-widest p-6">
          <span className="hidden sm:inline-block  text-sm ">Contact</span>
        </a>
      </Link>
      <Link href="/cart">
        <a className="flex tracking-widest p-6">
          <div className="relative">
            <ShoppingCartIcon className="w-7 h-7 flex-shrink-0" />
          </div>
          <p className="text-sm">
            {formatCurrency(totalPrice)}{" "}
            <span className="text-sm ">({cartCount})</span>
          </p>
        </a>
      </Link>
    </div>
  );
};

export default Menu;
