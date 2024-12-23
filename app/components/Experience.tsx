'use client'

import { motion } from "framer-motion";
import { TbBriefcase } from "react-icons/tb";
import ImageDisplayer from "./ImageDisplayer";

const Experience = () => {

  return (
    <motion.section
      id='exp'
      className="flex flex-col items-center justify-center mx-auto mt-20 mb-16"
      initial={{ transform: "translateY(50vh)" }}
      animate={{ transform: "translateY(0px)" }}
      transition={{ type: "spring" }}
    >
      <h2 className="flex mr-auto pl-6 lg:pl-0">
        <TbBriefcase className="text-[#ff9e27] w-12 h-12 mr-3 relative bottom-1" />
        <span className='text-3xl text-[#ff9e27] sm:text-4xl'>Experiencia Laboral</span>
      </h2>

      <article className="
        flex flex-wrap mt-4 w-screen px-6
        lg:w-[1000px] lg:px-0
      ">
        <ImageDisplayer />

        <p className="text-base text-pretty mt-6">Responsable de la gestión de contenido de las tienda online <strong>Ceramed, Produits Adaptés Handy, Melanie Mills Hollywood, The Makeup Altar y Chimparoo</strong> en Shopify, incluyendo la redacción de textos optimizados para SEO, la edición de imágenes utilizando Photoshop, compresión de las mismas para mantener un rendimiento óptimo y tiempos de carga rápidos, y de integrar la información proporcionada por el cliente final en los componentes dinámicos de la tienda, asegurando que los datos se reflejan correctamente en el frontend. En estos proyectos he aplicado personalizaciones específicas utilizando <strong>CSS y JavaScript</strong>, para garantizar un diseño responsivo en diferentes dispositivos.
        </p>
      </article>
    </motion.section>
  );
}

export default Experience;
