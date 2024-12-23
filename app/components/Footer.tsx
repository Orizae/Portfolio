import { PiArrowFatLineUpDuotone } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center mx-auto relative w-full mb-12">
      <button className="hover:cursor-pointer hover:ease-in hover:duration-150 hover:mt-[-8px] hover:mb-[8px] hover:text-blue-500">
        <a href='#top' className="text-2xl flex tracking-wide">Volver al início<PiArrowFatLineUpDuotone className="ml-2 mt-1" /></a>
      </button>
    </footer>
  );
}

export default Footer;
