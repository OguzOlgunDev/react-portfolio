import { links } from "../data";
import { useLanguage } from "../LanguageContext";

function Navbar() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <nav className="bg-emerald-100">
      <div className="mx-auto max-w-7xl px-8 py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center sm:py-8">
        <h2 className="text-3xl font-bold">
          Web<span className="text-emerald-600">Dev</span>
        </h2>

        <div className="flex items-center gap-x-6">
          <div className="flex gap-x-3">
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
          <button
            onClick={toggleLanguage}
            className="relative inline-flex items-center h-6 rounded-full w-14 bg-white border-2 border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            aria-label="Toggle Language"
          >
            <span
              className={`${
                language === "en" ? "translate-x-8" : "translate-x-1"
              } inline-block w-6 h-6 transform bg-emerald-600 rounded-full transition-transform`}
            />
            <span className="absolute right-0 top-7 text-xs text-emerald-700 select-none font-semibold">
              EN
            </span>
            <span className="absolute left-0 top-7 text-xs text-emerald-700 select-none font-semibold">
              TR
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
