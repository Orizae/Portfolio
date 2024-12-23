import Image from "next/image";
import ceramed from '@/public/images/ceramed.jpg';
import chimparoo from '@/public/images/chimparoo.jpg';
import make_altar from '@/public/images/makeup_altar.jpg';
import mellanie_mills from '@/public/images/mellanie_mills.jpg';
import handy from '@/public/images/produit_handy.jpg';

const images = [
  {
    id: 5, src: ceramed, alt: 'Ceramed Homepage', width: 500, height: 500,
    position: 'Desarrollador de Frontend Junior',
    company: 'Ceramed',
    date: 'Abril 2024, Actualmente...',
    description: '',
    link: 'https://www.ceramed.ca/'
  },
  {
    id: 4, src: handy, alt: 'Produits Handy Homepage', width: 500, height: 500,
    position: 'Desarrollador de Frontend Junior',
    company: 'Produits Adaptés Handy',
    date: 'Diciembre 2024',
    description: '',
    link: 'https://www.produitshandy.com/'
  },
  {
    id: 3, src: mellanie_mills, alt: 'Mellanie Mills Homepage', width: 500, height: 500,
    position: 'Desarrollador de Frontend Junior',
    company: 'Melanie Mills Hollywood',
    date: 'Mayo 2024',
    description: '',
    link: 'https://melaniemillshollywood.com/'
  },
  {
    id: 2, src: make_altar, alt: 'Makeup Altar Homepage', width: 500, height: 500,
    position: 'Desarrollador de Frontend Junior',
    company: 'The Makeup Altar',
    date: 'Abril - Mayo 2024',
    description: '',
    link: 'https://themakeupaltar.com/'
  },
  {
    id: 1, src: chimparoo, alt: 'Chimparoo Homepage', width: 500, height: 500,
    position: 'Desarrollador de Frontend Junior',
    company: 'Chimparoo',
    date: 'Abril 2024',
    description: '',
    link: 'https://chimparoo.ca'
  }
]

const ImageDisplayer = () => {

  return (

    images.map((image) => (
      <section className="flex flex-col h-fit content-center justify-center mt-4 mr-auto gap-x-8 gap-y-2 bg-[#fafcfc] px-2 pt-2 pb-4 rounded-lg" key={image.id}>
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
