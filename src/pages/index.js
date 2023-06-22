import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Testimonial from '@/components/Testimonial'
export default function Home() {
  return (
    <div id="Home" className='w-screen lg:w-[80%] m-auto flex flex-col justify-around gap-5'>
    <Navbar/>
    <Hero/>
    <Testimonial/>
    </div>
  )
}
