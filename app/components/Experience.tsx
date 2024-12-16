import { TbBriefcase } from "react-icons/tb";
import ImageDisplayer from "./ImageDisplayer";

const Experience = () => {

  return (
    <section id='exp' className="flex flex-col items-center justify-center mx-auto mb-24">
      <h2 className="flex mr-auto">
        <TbBriefcase className="text-[#ff9e27] w-12 h-12 mr-3 relative bottom-1" />
        <span className='text-4xl text-[#ff9e27]'>Experiencia Laboral</span>
      </h2>

      <article className="w-[1000px] flex flex-wrap mt-6">
        <ImageDisplayer />

        <p className="text-base text-pretty mt-6">Responsable de la gestión de contenido de las tienda online <strong>Ceramed, Produits Adaptés Handy, Melanie Mills Hollywood, The Makeup Altar y Chimparoo</strong> en Shopify, incluyendo la redacción de textos optimizados para SEO, la edición de imágenes utilizando Photoshop, compresión de las mismas para mantener un rendimiento óptimo y tiempos de carga rápidos, y de integrar la información proporcionada por el cliente final en los componentes dinámicos de la tienda, asegurando que los datos se reflejan correctamente en el frontend. En estos proyectos he aplicado personalizaciones específicas utilizando <strong>CSS y JavaScript</strong>, para garantizar un diseño responsivo en diferentes dispositivos.
        </p>
      </article>
    </section>
  );
}

export default Experience;
