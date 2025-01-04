import { useLanguage } from "../contexts/LaunguageContext";

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();
  return (
    <button onClick={toggleLanguage}>
      {language === 'es' ? '🇬🇧' : '🇪🇸'}
    </button>
  );
}

export default LanguageToggle;
