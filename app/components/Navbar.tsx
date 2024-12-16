const Navbar = () => {
  return (
    <section className="top-0 w-screen fixed block bg-orange-50 z-50 border-b-slate-300 border-[1px] shadow-md">
      <ul className="flex gap-x-7 mx-auto items-center justify-center py-5 text-xl tracking-wide">
        <li><a href='#about' className="hover:text-[#ff9e27] hover:ease-in hover:duration-100 active:font-bold">Sobre mí</a></li>
        <li><a href='#exp' className="hover:text-[#ff9e27] hover:ease-in hover:duration-100 active:font-bold">Experiencia</a></li>
        <li><a href='#proj' className="hover:text-[#ff9e27] hover:ease-in hover:duration-100 active:font-bold">Proyectos</a></li>
      </ul>
    </section>
  )
}

export default Navbar;
