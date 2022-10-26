import {XLg} from "react-bootstrap-icons";
import { useContext } from "react";
import { NavbarContext } from "../../../context/useContext";

const Active5 = () => {

    const {active5, setActive5, setActive7} = useContext(NavbarContext)

    const style = {
        searchActive: "w-[100%] h-auto px-[4%] py-[20px] flex justify-end absolute origin-top bg-black duration-[.4s]",
        searchWrapper: "flex items-center w-[300px] h-full duration-[.2s]",
        searchInp: "flex-[1] bg-transparent placeholder:text-white placeholder:pl-[20px] placeholder:text-[14px] text-white font-light text-[14px] px-[10px] outline-none",
        cancelIcon: "text-[25px] text-white"
    }

    return(
        <div style={{ transform: `${active5 ? "scaleY(1)" : "scaleY(0)"}`, transitionDelay: `${active5 ? ".3s" : ".2s"}`}} className={style.searchActive}>
            <div style={{opacity: `${active5 ? "1" : "0"}`, transitionDelay: `${active5 ? ".5s" : ".1s"}`}} className={style.searchWrapper}>
                <input className={style.searchInp} placeholder="Search" type="text" />
                <XLg onClick={() => (setActive5(false), setActive7(false))} className={style.cancelIcon}/>
            </div>
        </div>
    )
}

export default Active5;