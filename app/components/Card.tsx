import Image from "next/image";
import foto_perfil from '@/public/images/Foto_porfolio.jpg';
import Contact from "./Contact";

const Card = () => {
  return (
    <section className="flex gap-x-14 mb-24 mt-48 h-fit items-center justify-center">
      <div className='flex relative photoBackground w-[320px] h-[320px] items-center rounded-[50%]'>
        <Image
          src={foto_perfil}
          alt='Foto de perfil'
          width='290'
          height='290'
          className="rounded-[50%] mx-auto"
          priority={true}
        />
      </div>
      <div className="space-y-8">
        <h1 className="items-center">
          <div className="text-8xl mb-6 text-[#ff9e27]">¡Hola!</div>
          <div className="text-2xl">Mi nombre es Gonçalo Cagica</div>
          <div className="text-2xl">Y soy <strong className="text-[#ff9e27]">Desarrollador Junior de Frontend</strong></div>
        </h1>
        <Contact />
      </div>
    </section>
  )
}

export default Card;
