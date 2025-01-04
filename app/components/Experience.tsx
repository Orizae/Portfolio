import { TbBriefcase } from "react-icons/tb";
import ImageDisplayer from "./ImageDisplayer";
import { translations, TranslationsType } from "@/public/translations";
import { useLanguage } from "../contexts/LaunguageContext";

const Experience = () => {
  const { language } = useLanguage();
  const t = translations[language as keyof TranslationsType];

  return (
    <section
      id='experiencia'
      className="flex flex-col items-center justify-center mx-auto mt-20 mb-20">
      <h2 className="flex mr-auto pl-6 lg:pl-0">
        <TbBriefcase className="text-[#ff9e27] w-12 h-12 mr-3 relative bottom-1" />
        <span className='text-3xl text-[#ff9e27] sm:text-4xl'>{t.tituloExperiencia}</span>
      </h2>

      <article className="
        flex flex-wrap mt-4 w-screen px-6 items-center content-center
        lg:w-[1000px] lg:px-0
      ">
        <ImageDisplayer />

        <p className="text-base text-pretty mt-6">{t.experiencia1}<strong>{t.experiencia2}</strong>{t.experiencia3}<strong>{t.experiencia4}</strong>{t.experiencia5}
        </p>
      </article>
    </section>
  );
}

export default Experience;
