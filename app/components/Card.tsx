'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import foto_perfil from '@/public/images/Foto_porfolio.jpg';
import Contact from "./Contact";

const Card = () => {
  return (
    <motion.section className="
      flex flex-col gap-x-14 mb-16 mt-32 h-fit items-center justify-center
      sm:flex-col
      md:flex-col md:mb-24
      lg:flex-row lg:mt-48
    "
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}
    >
      <div className='flex relative photoBackground w-[300px] h-[300px] items-center rounded-[50%]'>
        <Image
          src={foto_perfil}
          alt='Foto de perfil'
          width='280'
          height='280'
          className="rounded-[50%] mx-auto"
          priority={true}
        />
      </div>
      <div className="
        gap-y-8 mt-12
        sm:mt-12
        md:mt-12
      ">
        <h1 className="items-center">
          <div className="
            text-8xl mb-6 text-[#ff9e27] text-center
            sm:text-start
          ">¡Hola!</div>
          <div className="
            text-2xl text-center
            sm:text-start
          ">Mi nombre es Gonçalo Cagica</div>
          <div className="
            text-2xl text-center text-wrap px-6
            sm:text-start sm:px-0
            md:text-start md:px-0
          ">Y soy <strong className="text-[#ff9e27]">Desarrollador Junior de Frontend</strong></div>
        </h1>
        <Contact />
      </div>
    </motion.section>
  )
}

export default Card;
