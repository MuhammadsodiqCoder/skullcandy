import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import { useEffect, useRef } from "react"

gsap.registerPlugin(ScrollTrigger)
const Ads = () => {

    const style = {
        adDiv: "w-full bg-black flex items-end ease-in-out",
        ads: "text-white w-full h-[35px] text-[12px] font-normal flex items-center justify-center border-t-[1px] border-[#4d4d4d]",
    }

    const floating = useRef(null)

    useEffect(() => {
        const el = floating.current;
        gsap.fromTo(el,{height:60,}, {height: 95, duration: .6, delay:3})
    }, [])

    return (
        <div ref={floating} className={style.adDiv}>
            <p className={style.ads}>Free Shipping over 100€</p>
        </div>
    )
}

export default Ads;