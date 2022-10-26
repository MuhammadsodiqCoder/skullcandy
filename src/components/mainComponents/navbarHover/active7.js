import { useContext } from "react";
import { NavbarContext } from "../../../context/useContext";

const Active7 = () => {

    const {active7, setActive7, setActive6, setActive5, setSidebar} = useContext(NavbarContext)

    const style = {
        active7: "w-full h-[100vh] scale-y-[0] absolute z-[-1] duration-[.2s] origin-top",
        active7InnerDiv: "w-full h-full duration-[.2s] bg-[#000000a1] opacity-[0]"
    }

    return(
        <div style={{transform: `${active7 ? "scaleY(1)" : "scaleY(0)"}`, transitionDelay: `${active7 ? ".1s" : ".7s"}`}} className={style.active7}>
            <div onClick={() => (setSidebar(false), setActive7(false), setActive6(false), setActive5(false))} style={{opacity: `${active7 ? "1" : "0"}`, transitionDelay: `${active7 ? ".2s" : ".6s"}`}} className={style.active7InnerDiv}></div>
        </div>
    )
}

export default Active7;