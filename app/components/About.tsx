'use client'

import { motion } from 'framer-motion';
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
import { useLanguage } from '../contexts/LaunguageContext';
import { translations, TranslationsType } from '@/public/translations';

const About = () => {
  const { language } = useLanguage();
  const t = translations[language as keyof TranslationsType]

  return (
    <motion.section
      id='sobre-mi'
      className="flex flex-col items-center justify-center md:mb-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h2 className="flex mx-auto w-screen lg:w-[1000px] pl-6 lg:pl-0">
        <FiUser className="text-[#ff9e27] w-12 h-12 mr-3 relative bottom-1" />
        <span className='text-4xl text-[#ff9e27]'>{t.tituloAbout}</span>
      </h2>

      <article className="w-screen">
        <p className="text-left text-base mx-auto mt-6 mb-20 px-6 w-screen lg:w-[1000px] lg:px-0">
          {t.introducción1}<strong className="text-[#ff9e27]">{t.introducción2}</strong>{t.introducción3}
          <br />
          {t.introducción4}<strong className="text-[#ff9e27]">{t.introducción5}</strong>{t.introducción6}
        </p>


        <section className='w-full flex flex-col bg-[#fafcfc] mx-0 py-28 relative left-0'>
          <h3 className='flex mx-auto mb-8 px-6 w-screen lg:w-[1000px] lg:px-0'>
            <Image
              src={stack}
              alt='Stack de Tecnologías'
              width='48'
              height='48'
              className='mr-3 relative bottom-1'
            />
            <span className='text-4xl text-[#ff9e27]'>{t.stack1}</span>
          </h3>
          <article className='flex flex-col flex-wrap gap-x-2 gap-y-2 justify-center items-center md:flex-row'>
            <section className='h-fit py-8 flex flex-col items-center justify-center rounded-lg rbShadow'>
              <h4 className='text-3xl font-light tracking-[0.25rem] mb-6'>{t.stack2}</h4>
              <ol className='flex flex-wrap w-[330px] mx-auto justify-center items-center gap-x-2 gap-y-2'>
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

            <section className='h-fit py-8 flex flex-col items-center justify-center photoBackground rounded-lg rbShadow'>
              <h4 className='text-3xl font-light tracking-[0.25rem] mb-6'>{t.stack3}</h4>
              <ol className='flex flex-wrap flex-col w-[330px] mx-auto justify-center items-center gap-x-2 gap-y-2'>
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

            <section className='h-fit py-8 flex flex-col items-center justify-center rounded-lg rbShadow'>
              <h4 className='text-3xl font-light tracking-[0.25rem] mb-6'>{t.stack4}</h4>
              <ol className='flex flex-wrap w-[330px] mx-auto justify-center items-center gap-x-2 gap-y-2'>
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
          </article>
        </section>

      </article>
    </motion.section>
  );
}

export default About;
