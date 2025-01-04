import { PiArrowFatLineUpDuotone } from "react-icons/pi";
import { translations, TranslationsType } from "@/public/translations";
import { useLanguage } from "../contexts/LaunguageContext";

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language as keyof TranslationsType];

  return (
    <footer className="flex flex-col justify-center items-center mx-auto relative w-full mb-12">
      <button className="hover:cursor-pointer hover:ease-in hover:duration-150 hover:mt-[-8px] hover:mb-[8px] hover:text-blue-500">
        <a href='#' className="text-2xl flex tracking-wide">{t.footer}<PiArrowFatLineUpDuotone className="ml-2 mt-1" /></a>
      </button>
    </footer>
  );
}

export default Footer;
