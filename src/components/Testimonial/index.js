import Image from "next/image"
import Walmart_Logo from "@/assets/Walmart_Logo.svg"
import Netflix_Logo from "@/assets/Netflix_Logo.svg"
import Spotify_Logo from "@/assets/Spotify_Logo.svg"
import Shopify_Logo from "@/assets/Shopify_Logo.svg"
const Testimonial=()=>{
    return(
        <div className="flex flex-col justify-center items-center">
            <p className="text-desc-text">Trusted by 3+ million people at companies like</p>
            <div className="grid grid-cols-2 w-full lg:flex lg:flex-row justify-around items-center gap-2">
                <Image src={Netflix_Logo} alt="Netflix"/>
                <Image src={Shopify_Logo} alt="Shopify"/>
                <Image src={Spotify_Logo} alt="Spotify"/>
                <Image src={Walmart_Logo} alt="Walmart"/>
            </div>
        </div>
    )
}
export default Testimonial