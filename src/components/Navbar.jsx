import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { links } from "../data";
import { useLanguage } from "../LanguageContext";

function Navbar() {
  const { language, toggleLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Ana Navbar */}
      <nav className="bg-emerald-100">
        <div className="mx-auto max-w-7xl px-8 py-4">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold">
              Web<span className="text-emerald-600">Dev</span>
            </h2>

            <div className="flex items-center gap-4">
              {/* Desktop Navigation */}
              <div className="hidden md:flex gap-6">
                {links.map(({ id, href, text_en, text_tr }) => (
                  <a
                    key={id}
                    href={href}
                    className="capitalize text-lg tracking-wide hover:text-emerald-600 duration-300"
                  >
                    {language === "en" ? text_en : text_tr}
                  </a>
                ))}
              </div>

              {/* Language Toggle (Desktop) */}
              <div className=" md:block relative">
                <button
                  onClick={toggleLanguage}
                  className="relative inline-flex items-center h-6 rounded-full w-14 bg-white border-2 border-emerald-400"
                >
                  <span
                    className={`${
                      language === "en" ? "translate-x-8" : "translate-x-1"
                    } inline-block w-6 h-6 transform bg-emerald-600 rounded-full transition-transform`}
                  />
                  <span className="absolute right-0 top-7 text-xs text-emerald-700 font-semibold">
                    EN
                  </span>
                  <span className="absolute left-0 top-7 text-xs text-emerald-700 font-semibold">
                    TR
                  </span>
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden w-12 text-emerald-600 text-2xl"
                aria-label="Toggle Menu"
              >
                {isOpen ? (
                  <FaTimes className="text-3xl" />
                ) : (
                  <FaBars className="text-3xl" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-emerald-50 bg-opacity-80 backdrop-blur-sm">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {links.map(({ id, href, text_en, text_tr }) => (
              <a
                key={id}
                href={href}
                className="text-2xl font-medium text-gray-800 hover:text-emerald-600"
                onClick={() => setIsOpen(false)}
              >
                {language === "en" ? text_en : text_tr}
              </a>
            ))}

            {/* Mobile Language Toggle */}

            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-3xl text-gray-600"
            >
              <FaTimes />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
