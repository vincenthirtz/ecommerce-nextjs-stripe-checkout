import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, Fa } from "@fortawesome/free-brands-svg-icons";

const Footer = () => (
  <footer
    className="footer-1 py-8 sm:py-12"
    style={{ backgroundColor: "#FEF6ED", color: "#002AFC" }}
  >
    <div className="container mx-auto px-4">
      <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
        <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
          <h5 className="text-xl font-bold mb-6">Crédits</h5>
          <ul className="list-none footer-links">
            <li className="mb-2">
              <Link href="/mentions-legales">
                <a className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">
                  Mentions Légales
                </a>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/faq">
                <a className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">
                  Livraison & FAQ
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
          <h5 className="text-xl font-bold mb-6">Réseaux</h5>
          <ul className="list-none footer-links">
            <li className="mb-2">
              <a
                href="https://www.instagram.com/petit.boukan_/"
                target="_blank"
                className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
              >
                Instagram
              </a>
            </li>
            <li className="mb-2">
              <a
                href="https://www.facebook.com/petitboukancreateur/"
                target="_blank"
                className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>
        <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
          <h5 className="text-xl font-bold mb-6">About</h5>
          <ul className="list-none footer-links">
            <li className="mb-2">
              <a
                href="#"
                className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
              >
                Team
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
              >
                Locations
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
              >
                Privacy
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
              >
                Terms
              </a>
            </li>
          </ul>
        </div>
        <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
          <h5 className="text-xl font-bold mb-6">Help</h5>
          <ul className="list-none footer-links">
            <li className="mb-2">
              <a
                href="#"
                className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
              >
                Support
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
              >
                Help Center
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="px-4 mt-4 sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto">
          <h5 className="text-xl font-bold mb-6 sm:text-center xl:text-left">
            Restons conecté !
          </h5>
          <div className="flex sm:justify-center xl:justify-start">
            <a
              href=""
              className="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 text-gray-600 hover:text-white hover:bg-blue-600 hover:border-blue-600"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href=""
              className="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-blue-400 hover:border-blue-400"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>
      </div>

      <div className="sm:flex sm:flex-wrap sm:-mx-4 mt-6 pt-6 sm:mt-12 sm:pt-12 border-t">
        <div className="sm:w-full px-4 md:w-1/6">
          <strong>FWR</strong>
        </div>
        <div className="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
          <h6 className="font-bold mb-2">Adresse</h6>
          <address className="not-italic mb-4 text-sm">
            France
            <br />
            Mont de Marsan 40 000
          </address>
        </div>
        <div className="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
          <h6 className="font-bold mb-2">Free Resources</h6>
          <p className="mb-4 text-sm">
            Use our HTML blocks for <strong>FREE</strong>.<br />
            <em>All are MIT License</em>
          </p>
        </div>
        <div className="px-4 md:w-1/4 md:ml-auto mt-6 sm:mt-4 md:mt-0">
          <button className="px-4 py-2 bg-purple-800 hover:bg-purple-900 rounded text-white">
            Get Started
          </button>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
