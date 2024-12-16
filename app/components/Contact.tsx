import { CiLinkedin } from "react-icons/ci";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  return (
    <section className="flex flex-row space-x-6">
      <button className="mt-2 flex flex-row items-center justify-center border-[1px] rounded-3xl text-xl text-[#ff9e27] border-gray-500 py-1 px-5 gap-x-2 hover:bg-[#ff9e27] hover:text-gray-500">
        <CiLinkedin className="flex items-center justify-center h-10 w-10" />
        LinkedIn
      </button>
      <button className="mt-2 flex flex-row items-center justify-center border-[1px] rounded-3xl text-xl text-[#ff9e27] border-gray-500 py-1 px-5 gap-x-2 hover:bg-[#ff9e27] hover:text-gray-500">
        <AiFillGithub className="flex items-center justify-center h-10 w-10" />
        GitHub
      </button>
      <button className="mt-2 flex flex-row items-center justify-center border-[1px] rounded-3xl text-xl text-[#ff9e27] border-gray-500 py-1 px-5 gap-x-2 hover:bg-[#ff9e27] hover:text-gray-500">
        <AiOutlineMail className="flex items-center justify-center h-10 w-10" />
        Contáctame
      </button>
    </section>
  )
}

export default Contact;
