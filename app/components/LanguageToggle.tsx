import { useLanguage } from "../contexts/LaunguageContext";

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();
  return (
    <button
      onClick={toggleLanguage}
      className="relative z-10">
      {language === 'es' ? '🇬🇧' : '🇪🇸'}
    </button>
  );
}

export default LanguageToggle;
