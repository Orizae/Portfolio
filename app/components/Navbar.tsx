'use client'

import { useState } from 'react';
import { motion } from "framer-motion";
import { HiOutlineMenu } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: "spring" }}
      className="top-0 w-screen h-20 fixed block bg-orange-50 z-50 border-b-slate-300 border-[1px] shadow-md"
    >
      <button onClick={() => setIsOpen(!isOpen)} className={isOpen ? 'absolute left-4 top-4 rounded-[50%] p-2 z-10 md:hidden hover:text-[#ff9e27] hover:shadow-lg' : 'absolute left-4 top-4 rounded-[50%] p-2 md:hidden hover:text-[#ff9e27] hover:shadow-sm'}>
        <HiOutlineMenu className='w-6 h-6 z-10' />
      </button>

      <div className={isOpen ? 'bg-gray-200 w-[69vw] h-screen ease-linear duration-150 sm:w-1/2 md:bg-transparent md:items-center md:text-center md:justify-center md:w-full md:relative md:z-0 md:h-20' : 'h-0 relative left-0 top-0 items-center text-center justify-center'}>
        <ul className={isOpen ? 'flex flex-col relative gap-y-16 top-0 md:flex-row md:gap-y-0 md:gap-x-7 md:items-center md:text-black md:justify-center md:text-center' : "flex flex-row relative top-3 gap-x-7 content-center items-center justify-center text-center py-3 text-xl tracking-wide"}>
          <motion.li
            initial={{ transform: "translateY(-100px)" }}
            animate={{ transform: "translateY(0px)" }}
            transition={{ type: "spring" }}
          >
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className={isOpen ? 'absolute top-[100px] left-6 text-3xl tracking-[0.2em] ease-linear duration-150 hover:text-[#ff9e27] hover:ease-in hover:duration-100 active:font-bold md:relative md:top-6 md:text-xl' : "hidden tracking-[0.2em] hover:text-[#ff9e27] hover:ease-in hover:duration-100 active:font-bold relative md:flex md:"}
            >
              Sobre mí
            </a>
          </motion.li>
          <motion.li
            initial={{ transform: "translateY(-100px)" }}
            animate={{ transform: "translateY(0px)" }}
            transition={{ delay: 0.25, type: "spring" }}
          >
            <a
              href="#exp"
              onClick={() => setIsOpen(false)}
              className={isOpen ? 'absolute top-[100px] left-6 text-3xl tracking-[0.2em] ease-linear duration-150 hover:text-[#ff9e27] hover:ease-in hover:duration-100 active:font-bold md:relative md:top-6 md:text-xl' : "hidden tracking-[0.2em] hover:text-[#ff9e27] hover:ease-in hover:duration-100 active:font-bold md:flex"}
            >
              Experiencia
            </a>
          </motion.li>
          <motion.li
            initial={{ transform: "translateY(-100px)" }}
            animate={{ transform: "translateY(0px)" }}
            transition={{ delay: 0.5, type: "spring" }}
          >
            <a
              href="#proj"
              onClick={() => setIsOpen(false)}
              className={isOpen ? 'absolute top-[100px] left-6 text-3xl tracking-[0.2em] ease-linear duration-150 hover:text-[#ff9e27] hover:ease-in hover:duration-100 active:font-bold md:relative md:top-6 md:text-xl' : "hidden tracking-[0.2em] hover:text-[#ff9e27] hover:ease-in hover:duration-100 active:font-bold md:flex"}
            >
              Proyectos
            </a>
          </motion.li>
        </ul>
      </div>


    </motion.section>
  );
};

export default Navbar;
