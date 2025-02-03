import { FaArrowDown } from "react-icons/fa6";
export default function HomePage() {
  return (
    <div className='background-blue w-full home-bg'>
      <div className='container-home flex items-center pl-50'>
        <div className='flex flex-wrap'>
          <span className='text-white helvetica text-6xl w-full'>Harnessing AI to create game-changing<br/>solutions for a smarter future</span>
          <span className='text-white light-blue maven-pro font-bold p-4 rounded-3xl mt-5 flex items-center'><FaArrowDown className="mr-3" />CONTACT US</span>
        </div>
      </div>
    </div>
  )
}

