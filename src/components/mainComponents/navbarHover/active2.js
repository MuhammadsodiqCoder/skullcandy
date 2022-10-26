import Inside1 from "../../../images/navbarImg/inside1.jpg"
import Inside2 from "../../../images/navbarImg/inside2.jpg"
import Inside3 from "../../../images/navbarImg/inside3.jpg"
import Inside4 from "../../../images/navbarImg/inside4.jpg"
import Inside5 from "../../../images/navbarImg/inside5.jpg"
import { useContext } from "react"
import { NavbarContext } from "../../../context/useContext"

const Active2 = () => {

    const { active2, setActive2, setActive7} = useContext(NavbarContext)

    const style = {
        navbarHoverBox2: "w-[100%] bg-white duration-[.4s] absolute origin-top scale-y-0",
        innerNavbarHoverBox2: "w-full flex items-center opacity-0 duration-[.2s]",
        insideSkullcandyHover: "w-[20%] h-full border-r-[1px] border-[#6e6e6e]",
        active2ImgWrapper: "w-full overflow-hidden h-[23vh]",
        active2HoverTextWrapper: "w-full h-[130px] p-[25px]",
        active2HoverText: "text-[25px] text-black font-black uppercase leading-[25px]",
        active2Img: "w-full h-full object-cover object-center scale-[1] hover:scale-[1.04] duration-[.5s] brightness-50 hover:brightness-100"
    }

    return (
        <div onMouseEnter={() => (setActive2(true), setActive7(true))} onMouseLeave={() => (setActive2(false), setActive7(false))} style={{ transform: `${active2 ? "scaleY(1)" : "scaleY(0)"}`, transitionDelay: `${active2 ? ".3s" : ".2s"}`}} className={style.navbarHoverBox2}>
            <div style={{ opacity: `${active2 ? "1" : "0"}`, transitionDelay: `${active2 ? ".6s" : ".1s"}` }} className={style.innerNavbarHoverBox2}>
                <div className={style.insideSkullcandyHover}>
                    <div className={style.active2ImgWrapper}>
                        <img className={style.active2Img} src={Inside1} alt="" />
                    </div>
                    <div className={style.active2HoverTextWrapper}>
                        <p className={style.active2HoverText}>music with a mission</p>
                    </div>
                </div>
                <div className={style.insideSkullcandyHover}>
                    <div className={style.active2ImgWrapper}>
                        <img className={style.active2Img} src={Inside2} alt="" />
                    </div>
                    <div className={style.active2HoverTextWrapper}>
                        <p className={style.active2HoverText}>find your frequency</p>
                    </div>                </div>
                <div className={style.insideSkullcandyHover}>
                    <div className={style.active2ImgWrapper}>
                        <img className={style.active2Img} src={Inside3} alt="" />
                    </div>
                    <div className={style.active2HoverTextWrapper}>
                        <p className={style.active2HoverText}>our mission, vision and values</p>
                    </div>
                </div>
                <div className={style.insideSkullcandyHover}>
                    <div className={style.active2ImgWrapper}>
                        <img className={style.active2Img} src={Inside4} alt="" />
                    </div>
                    <div className={style.active2HoverTextWrapper}>
                        <p className={style.active2HoverText}>our culture</p>
                    </div>
                </div>
                <div className={style.insideSkullcandyHover}>
                    <div className={style.active2ImgWrapper}>
                        <img className={style.active2Img} src={Inside5} alt="" />
                    </div>
                    <div className={style.active2HoverTextWrapper}>
                        <p className={style.active2HoverText}>our sustainable efforts</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Active2