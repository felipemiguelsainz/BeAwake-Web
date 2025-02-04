import CarouselComponent from "../Components/CarouselComponent";
import Border from '../assets/Border.png'

export default function OurModelPage() {
  let slides = [Border,Border,Border,Border,Border,];

  return (
    <div className='flex background-blue justify-center items-center text-white h-[95vh]'>
        <div className="w-1/4 h-[70vh]"><CarouselComponent slides={slides}/></div>
        <div className="flex flex-wrap w-1/4 justify-center">
          <h1 className="text-7xl w-full text-end maven-pro font-bold">Our<span className="text-light-blue">Model</span></h1>
          <p className="w-full text-end">Innovation powered by simplicity and intelligence</p>
        </div>
    </div>
  )
}
