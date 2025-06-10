import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "./LanguageContext";

const LanguageFadeWrapper = ({ children }) => {
  const { language } = useLanguage();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={language}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default LanguageFadeWrapper;
