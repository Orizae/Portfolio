'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import foto_perfil from '@/public/images/Foto_porfolio.jpg';
import Contact from "./Contact";
import { translations, TranslationsType } from "@/public/translations";
import { useLanguage } from "../contexts/LaunguageContext";

const Card = () => {
  const { language } = useLanguage();
  const t = translations[language as keyof TranslationsType];

  return (
    <motion.section className="
      flex flex-col gap-x-14 mb-16 mt-36 h-fit items-center justify-center
      sm:flex-col
      md:flex-col md:mb-24
      lg:flex-row lg:mt-48
    "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className='
        flex relative photoBackground w-60 h-60 items-center rounded-[50%]
        sm:w-[300px] sm:h-[300px]
        '>
        <Image
          src={foto_perfil}
          alt='Foto de perfil'
          width='280'
          height='280'
          className="
            rounded-[50%] mx-auto w-56 h-56
            sm:w-[280px] sm:h-[280px]
          "
          priority={true}
        />
      </div>
      <div className="
        gap-y-8 mt-12
        sm:mt-12
        lg:mt-0
      ">
        <h1 className="items-center">
          <div className="
            text-8xl mb-6 text-[#ff9e27] text-center
            sm:text-start
          ">{t.hola1}</div>
          <div className="
            text-2xl text-center
            sm:text-start
          ">{t.hola2}</div>
          <div className="
            text-2xl text-center text-wrap px-6
            sm:text-start sm:px-0
            md:text-start md:px-0
          ">{t.hola3}<strong className="text-[#ff9e27]">{t.hola4}</strong></div>
        </h1>
        <Contact />
      </div>
    </motion.section>
  )
}

export default Card;
