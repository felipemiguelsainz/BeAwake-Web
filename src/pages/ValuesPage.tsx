import WeBelieve from '../assets/WeBelieve2.png'

export default function ValuesPage() {
  return (
    <div className='background-blue text-white'>
        <div className="flex justify-center items-baseline">
            <img className='img-webelieve' src={WeBelieve} alt="" />
        </div>
        <div className='flex justify-center md:gap-20 md:mx-48 h-full pb-20'>
          <div className='rounded-xl border-solid border-4 gradient-border md:px-5 md:py-5 md:w-1/4 flex flex-wrap'>
            <h3 className='text-4xl'>Empathy & Human Connection</h3>
            <div className='mt-48 md:mt-48 w-7/12 flex items-end'>
              <p className='text-2xl '>Empathy drives us. Behind every innovation, there are real people with unique stories and needs.</p>
            </div>
          </div>
          <div className='rounded-xl border-solid border-4 gradient-border md:px-5 md:py-5 md:w-1/4 flex flex-wrap'>
            <h3 className='text-4xl'>Empathy & Human Connection</h3>
            <div className='md:mt-50 w-7/12 flex items-end'>
              <p className='text-2xl '>We uphold the highest data privacy standards, ensuring trust at every step.</p>
            </div>
          </div>
          <div className='rounded-xl border-solid border-4 gradient-border md:px-5 md:py-5 md:w-1/4 flex flex-wrap'>
            <h3 className='text-4xl'>Empathy & Human Connection</h3>
            <div className='md:mt-50 w-7/12 flex items-end'>
              <p className='text-2xl '>Our AI solutions are ethical, impactful, and designed to create real-world value.</p>
            </div>
          </div>
        </div>
    </div>
  )
}
