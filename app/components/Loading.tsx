import { AiOutlineLoading } from "react-icons/ai";

const Loading = () => {
  return (
    <div className='justify-center text-center items-center mx-auto text-2xl relative top-[50vh]'>
      <section className="relative">
        <div className="justify-center text-center items-center mx-auto spinner1"></div>
        <AiOutlineLoading className='justify-center text-center items-center mx-auto text-[#333333] relative z-10 bottom-[45.5px] spinner2' />
      </section>
    </div>
  )
}

export default Loading;
