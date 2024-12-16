'use client'

import { FaCode } from "react-icons/fa6";
import { useState } from 'react';
import Image from "next/image";
import home_page from '@/public/images/home_page.jpg';
import about_page from '@/public/images/about_page.jpg';
import library_page from '@/public/images/library_page.jpg';
import contact_page from '@/public/images/contact_page.jpg';
import tailwind_logo from '@/public/icons/tailwind_logo.svg';
import react_logo from '@/public/icons/react_native_logo.svg';
import nextjs_logo from '@/public/icons/nextjs_logo.svg';
import node_logo from '@/public/icons/nodejs_logo.svg';
import express_logo from '@/public/icons/expressjs_logo.svg';
import postgres_logo from '@/public/icons/postgresql_logo.svg';

const Projects = () => {
  const [openImage, setOpenImage] = useState<number | null>(null);

  const images = [
    { id: 1, src: home_page, alt: 'Página inicial de myLib', width: 500, height: 500 },
    { id: 2, src: about_page, alt: 'Página inicial de myLib', width: 500, height: 500 },
    { id: 3, src: library_page, alt: 'Página inicial de myLib', width: 500, height: 500 },
    { id: 4, src: contact_page, alt: 'Página inicial de myLib', width: 500, height: 500 },
  ]

  const handleImageClick = (id: number) => {
    setOpenImage(openImage === id ? null : id);
  }

  return (
    <section id='proj' className="flex flex-col items-center justify-center mb-16">
      <h2 className="flex mr-auto">
        <FaCode className="text-[#ff9e27] w-12 h-12 mr-3 relative bottom-1" />
        <span className='text-4xl text-[#ff9e27]'>Proyectos</span>
      </h2>

      <div className="flex flex-col mt-6 mr-auto">
        <article className="w-[1000px]">
          <div className="w-full mt-12 inline">
            <h3 className="text-2xl font-semibold mb-4">myLib - Your personal library</h3>
            <p className="text-left text-pretty text-base mx-auto">
              En este proyecto he aplicado los conocimientos que he adquirido hasta ahora; inicialmente, utilicé únicamente React y Next.js para el Frontend. Sin embargo, a medida que surgieron nuevas necesidades, fui adaptando y ampliando el alcance del proyecto.<br></br>
              En un principio, los libros se almacenaban en un fichero JSON de forma local; con el tiempo, comprendí que era necesario contar con un Backend. Para ello, implementé una API utilizando Node.js/Express; además, para garantizar que los datos estuvieran bien estructurados, utilicé PostgreSQL para crear una base de datos que almacenara toda la información de cada libro (título, autor, país, género y descripción).<br></br>
              Actualmente, estoy en la etapa final del desarrollo: he añadido la funcionalidad de autenticación de usuarios mediante Auth0, lo que permite que cada usuario acceda a la biblioteca tras un proceso rápido y seguro de autenticación. Una vez autenticados, los usuarios solo podrán visualizar los libros que pertenecen a su biblioteca personal; para lograr esto, estoy adaptando la base de datos para soportar esta funcionalidad.
            </p>


            <div className="grid grid-cols-2 grid-flow-row relative items-center gap-x-3 gap-y-3 mt-12 z-0">
              {images.map((image) => (
                <div className="flex content-center justify-center" key={image.id}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    className={openImage === image.id ? "h-[350px] w-[500px] border-gray-500 absolute mx-auto top-[25%] bottom-0 left-[25%] right-[25%] content-center border-[1px] rounded-md scale-125 z-10 ease-in-out duration-200 shadow-2xl hover:cursor-pointer" : 'h-[330px] border-gray-300 border-[1px] rounded-md hover:cursor-pointer'}
                    onClick={() => handleImageClick(image.id)}
                  />
                </div>
              ))}
            </div>
            <h4 className="font-medium text-[#ff9e27] text-xl text-center mt-6">Tecnologías utilizadas</h4>
            <ol className="flex gap-x-2 justify-center mt-6">
              <li className="w-fit">
                <span className='flex flex-row text-sm text-pretty gap-x-1 justify-center bg-orange-50 border-[1px] border-gray-500 rounded-3xl px-3 py-1'>
                  <Image
                    src={react_logo}
                    alt='React Logo'
                    height='16'
                    width='16'
                    className='h-4 w-4 relative top-[2.5px]'
                  />React
                </span>
              </li>
              <li className="w-fit">
                <span className='flex flex-row text-sm text-pretty gap-x-1 justify-center bg-orange-50 border-[1px] border-gray-500 rounded-3xl px-3 py-1'>
                  <Image
                    src={nextjs_logo}
                    alt='Next.js Logo'
                    height='16'
                    width='16'
                    className='h-4 w-4 relative top-[2px]'
                  />Next.js
                </span>
              </li>
              <li className="w-fit">
                <span className='flex flex-row text-sm text-pretty gap-x-1 justify-center bg-orange-50 border-[1px] border-gray-500 rounded-3xl px-3 py-1'>
                  <Image
                    src={tailwind_logo}
                    alt='Tailwind Logo'
                    height='16'
                    width='16'
                    className='h-4 w-4 relative top-[2px]'
                  />Tailwind
                </span>
              </li>
              <li className='flex h-[30px]'>
                <span className='flex flex-row text-sm text-pretty gap-x-1 justify-center bg-orange-50 border-[1px] border-gray-500 rounded-3xl px-3 py-1 relative bottom-[-1px]'>
                  <Image
                    src={node_logo}
                    alt='Node.js Logo'
                    height='20'
                    width='60'
                    className='relative h-[20px] w-[60px]'
                  />
                  <Image
                    src={express_logo}
                    alt='Express.js Logo'
                    height='16'
                    width='16'
                    className='relative top-[3px] h-4 w-4'
                  />Node/Express
                </span>
              </li>
              <li className='flex'>
                <span className='flex flex-row text-sm text-pretty gap-x-1 justify-center bg-orange-50 border-[1px] border-gray-500 rounded-3xl px-3 py-1'>
                  <Image
                    src={postgres_logo}
                    alt='PostgreSQL Logo'
                    height='16'
                    width='16'
                    className='relative bottom-[-3px] h-4 w-4'
                  />PostgreSQL
                </span>
              </li>
            </ol>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Projects;
