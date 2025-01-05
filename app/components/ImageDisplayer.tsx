import Image from "next/image";
import ceramed from '@/public/images/ceramed.jpg';
import chimparoo from '@/public/images/chimparoo.jpg';
import make_altar from '@/public/images/makeup_altar.jpg';
import mellanie_mills from '@/public/images/mellanie_mills.jpg';
import handy from '@/public/images/produit_handy.jpg';
import { useLanguage } from '../contexts/LaunguageContext';
import { translations, TranslationsType } from '@/public/translations';

const TranslatedImages = () => {
  const { language } = useLanguage();
  const t = translations[language as keyof TranslationsType];

  const images = [
    {
      id: 5, src: ceramed, alt: t.imagen5.alt, width: 500, height: 500,
      position: t.imagen5.posicion,
      company: t.imagen5.empresa,
      date: t.imagen5.fecha,
      description: t.imagen5.descripcion,
      link: 'https://www.ceramed.ca/'
    },
    {
      id: 4, src: handy, alt: t.imagen4.alt, width: 500, height: 500,
      position: t.imagen4.posicion,
      company: t.imagen4.empresa,
      date: t.imagen4.fecha,
      description: t.imagen4.descripcion,
      link: 'https://www.produitshandy.com/'
    },
    {
      id: 3, src: mellanie_mills, alt: t.imagen3.alt, width: 500, height: 500,
      position: t.imagen3.posicion,
      company: t.imagen3.empresa,
      date: t.imagen3.fecha,
      description: t.imagen3.descripcion,
      link: 'https://melaniemillshollywood.com/'
    },
    {
      id: 2, src: make_altar, alt: t.imagen2.alt, width: 500, height: 500,
      position: t.imagen2.posicion,
      company: t.imagen2.empresa,
      date: t.imagen2.fecha,
      description: t.imagen2.descripcion,
      link: 'https://themakeupaltar.com/'
    },
    {
      id: 1, src: chimparoo, alt: t.imagen1.alt, width: 500, height: 500,
      position: t.imagen1.posicion,
      company: t.imagen1.empresa,
      date: t.imagen1.fecha,
      description: t.imagen1.descripcion,
      link: 'https://chimparoo.ca'
    }
  ]

  return images
}



const ImageDisplayer = () => {
  const images = TranslatedImages();

  return (

    images.map((image) => (
      <section className="flex flex-col h-fit content-center justify-center mt-4 mx-auto gap-x-8 gap-y-2 bg-[#fafcfc] px-2 pt-2 pb-4 rounded-lg" key={image.id}>
        <button>
          <a href={image.link} rel="noreferrer" target="_blank">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="
                w-fit h-[215px] border-2 border-white relative top-0 justify-center items-center mx-auto
                md:w-[470px] md:h-[250px]
              " />
            <div className="flex flex-col mt-4 text-start">
              <h3 className="
                text-xl mr-auto font-normal
                md:text-2xl
              ">{image.position}</h3>
              <div className="flex gap-x-4 items-baseline">
                <h4 className="
                  text-xl text-[#ff9e27]
                  md:text-2xl
                ">{image.company}</h4>
                <time className="text-sm">{image.date}</time>
              </div>
            </div>
          </a>
        </button>
      </section>
    ))

  );
}

export default ImageDisplayer;
