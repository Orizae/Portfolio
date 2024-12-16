import Image from 'next/image';
import stack from '@/public/icons/stack_light_icon.svg'
import html_logo from '@/public/icons/htm5_logo.svg';
import css_logo from '@/public/icons/css3_logo.svg';
import javascript_logo from '@/public/icons/javascript_logo.svg';
import tailwind_logo from '@/public/icons/tailwind_logo.svg';
import react_logo from '@/public/icons/react_native_logo.svg';
import nextjs_logo from '@/public/icons/nextjs_logo.svg';
import node_logo from '@/public/icons/nodejs_logo.svg';
import express_logo from '@/public/icons/expressjs_logo.svg';
import postgres_logo from '@/public/icons/postgresql_logo.svg';
import git_logo from '@/public/icons/git_logo.svg';
import postman_logo from '@/public/icons/postman_logo.svg';
import dbeaver_logo from '@/public/icons/DBeaver_logo.svg';
import photoshop_logo from '@/public/icons/photoshop_logo.svg';
import { FiUser } from "react-icons/fi";


const About = () => {
  return (
    <section id='about' className="flex flex-col items-center justify-center mx-auto mb-24">
      <h2 className="flex mr-auto">
        <FiUser className="text-[#ff9e27] w-12 h-12 mr-3 relative bottom-1" />
        <span className='text-4xl text-[#ff9e27]'>Sobre mí</span>
      </h2>

      <article className="w-[1000px]">
        <p className="text-left text-base relative mx-auto mt-6">
          Soy un desarrollador de Frontend Junior autodidacta con experiencia en <strong className="text-[#ff9e27]">HTML, CSS, JavaScript, React, Next.js, Tailwind, postgreSQL y Node.js/Express.js</strong>. Estoy comprometido con el aprendizaje continúo y recientemente completé un proyecto personal, se trata de una aplicación de libros hecha con React y Next.js, y está diseñada con el objetivo de ayudar a los usuarios a organizar su colección de libros.
          <br />
          Mi experiencia pasada en logística y liderazgo me ha enseñado habilidades como <strong className="text-[#ff9e27]">gestión de equipos, comunicación y resolución de problemas</strong>, las cuales aplico también en el desarrollo de software.
        </p>

        <h3 className='flex mr-auto mt-16 mb-6'>
          <Image
            src={stack}
            alt='Stack de Tecnologías'
            width='48'
            height='48'
            className='mr-3 relative bottom-1'
          />
          <span className='text-4xl text-[#ff9e27]'>Tecnologías</span>
        </h3>

        <section className='flex gap-x-2 justify-center items-center'>
          <section className='h-fit px-1 py-8 flex flex-col items-center justify-center bg-[#fafcfc] rounded-[40px] shadow-lg'>
            <h4 className='text-3xl font-light tracking-[0.25rem] mb-6'>Frontend</h4>
            <ol className='flex flex-wrap w-[350px] mx-auto justify-center items-center gap-x-2 gap-y-2'>
              <li>
                <span className='flex flex-row text-sm text-pretty gap-x-1 justify-center bg-orange-50 border-[1px] border-gray-500 rounded-3xl px-3 py-1'>
                  <Image
                    src={html_logo}
                    alt='HTML 5 Logo'
                    height='16'
                    width='16'
                    className='h-4 w-4 relative top-[2px]'
                  />HTML 5
                </span>
              </li>
              <li>
                <span className='flex flex-row text-sm text-pretty gap-x-1 justify-center bg-orange-50 border-[1px] border-gray-500 rounded-3xl px-3 py-1'>
                  <Image
                    src={css_logo}
                    alt='CSS 3 Logo'
                    height='16'
                    width='16'
                    className='h-4 w-4 relative top-[2px]'
                  />CSS
                </span>
              </li>
              <li>
                <span className='flex flex-row text-sm text-pretty gap-x-1 justify-center bg-orange-50 border-[1px] border-gray-500 rounded-3xl px-3 py-1'>
                  <Image
                    src={javascript_logo}
                    alt='JavaScript Logo'
                    height='16'
                    width='16'
                    className='h-4 w-4 relative top-[2px]'
                  />JavaScript
                </span>
              </li>
              <li>
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
              <li>
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
              <li>
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
            </ol>
          </section>

          <section className='h-fit px-1 py-8 flex flex-col items-center justify-center bg-[#fafcfc] rounded-[40px] shadow-lg'>
            <h4 className='text-3xl font-light tracking-[0.25rem] mb-6'>Backend</h4>
            <ol className='flex flex-wrap flex-col w-[350px] mx-auto justify-center items-center gap-x-2 gap-y-2'>
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
          </section>

          <section className='h-fit px-1 py-8 flex flex-col items-center justify-center bg-[#fafcfc] rounded-[40px] shadow-lg'>
            <h4 className='text-3xl font-light tracking-[0.25rem] mb-6'>Herramientas</h4>
            <ol className='flex flex-wrap w-[350px] mx-auto justify-center items-center gap-x-2 gap-y-2'>
              <li className='flex'>
                <span className='flex flex-row text-sm text-pretty gap-x-1 justify-center bg-orange-50 border-[1px] border-gray-500 rounded-3xl px-3 py-1'>
                  <Image
                    src={git_logo}
                    alt='Git Logo'
                    height='16'
                    width='16'
                    className='h-4 w-4 relative top-[2px]'
                  />Git
                </span>
              </li>
              <li className='flex'>
                <span className='flex flex-row text-sm text-pretty gap-x-1 justify-center bg-orange-50 border-[1px] border-gray-500 rounded-3xl px-3 py-1'>
                  <Image
                    src={postman_logo}
                    alt='Postman Logo'
                    height='16'
                    width='16'
                    className='h-4 w-4 relative top-[2px]'
                  />Postman
                </span>
              </li>
              <li className='flex'>
                <span className='flex flex-row text-sm text-pretty gap-x-1 justify-center bg-orange-50 border-[1px] border-gray-500 rounded-3xl px-3 py-1'>
                  <Image
                    src={dbeaver_logo}
                    alt='DBeaver Logo'
                    height='16'
                    width='16'
                    className='rounded-xl h-4 w-4 relative top-[2px]'
                  />DBeaver
                </span>
              </li>
              <li className='flex'>
                <span className='flex flex-row text-sm text-pretty gap-x-1 justify-center bg-orange-50 border-[1px] border-gray-500 rounded-3xl px-3 py-1'>
                  <Image
                    src={photoshop_logo}
                    alt='Photoshop Logo'
                    height='16'
                    width='16'
                    className='ml-1 h-4 w-4 relative top-[2.5px]'
                  />Photoshop
                </span>
              </li>
            </ol>
          </section>
        </section>

      </article>
    </section>
  );
}

export default About;
