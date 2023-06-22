import Image from "next/image"
import HeroIm from "@/assets/Hero_Image.png"
import Shopify from "@/assets/Shopify_Logo.svg"
import AlternativeTo from "@/assets/AlternativeTo_Logo.svg"
import Capterra from "@/assets/Capterra_Logo.svg"
const Hero=()=>{
    return(
        <div id="hero-container" className="flex flex-row justify-between items-center h-full font-Inter w-full">
            <div id="hero-text" className="text-desc-text break-words p-1 flex flex-col justify-between items-start gap-2">
                <div>
                <h3 className="text-black text-5xl font-bold">Ondeck is your remote 
                <span className="text-[#f7b300]"> conference calling tool</span>
                </h3>
                <p>Ondeck is a service that allows you to create beautiful,
                    online, and encrypted video calls for you and your remote
                    team.
                </p>
                </div>
                <button className='bg-[#133416] text-white w-[150px] h-[50px] rounded-md'>Try for Free</button>

                <div className="flex flex-row items-center gap-2">
                    <p>5.0 Rating based on reviews from : </p>
                    <Image src={Capterra} alt="Capterra"/>
                    <Image src={AlternativeTo} alt="AlternativeTo"/>
                    <Image src={Shopify} alt="Shopify" width={100}/>
                </div>
            </div>
            <div id="hero-image" className="lg:w-1/2 lg:block hidden">
                <Image src={HeroIm}
                alt="Hero-Image"
                placeholder="blur"
                loading="lazy"
                style={{objectFit:"contain"}}
                />
            </div>
        </div>
    )
}
export default Hero