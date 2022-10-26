import { useContext } from "react";
import { NavbarContext } from "../../../context/useContext";

const Active3 = () => {

    const {active3, setActive3, setActive7} = useContext(NavbarContext)

    const style = {
        navbarHoverBox3: "w-[100%] h-auto py-[30px] px-[13%] flex justify-end absolute bg-white duration-[.4s] origin-top",
        supportCollection: "list-none duration-[.3s] opacity-[0]",
        supportCollectionItem: "text-black text-[16px] font-extrabold uppercase mb-[20px]"
    }

    return(
        <div onMouseEnter={()=> (setActive3(true), setActive7(true))} onMouseLeave={() => (setActive3(false), setActive7(false))} style={{ transform: `${active3 ? "scaleY(1)" : "scaleY(0)"}`, transitionDelay: `${active3 ? ".3s" : ".2s"}` }} className={style.navbarHoverBox3}>
                <ul style={{opacity: `${active3 ? "1" : "0"}`, transitionDelay: `${active3 ? ".7s" : ".1s"}`}} className={style.supportCollection}>
                    <li className={style.supportCollectionItem}>help center</li>
                    <li className={style.supportCollectionItem}>product help</li>
                    <li className={style.supportCollectionItem}>warranty</li>
                    <li className={style.supportCollectionItem}>order status</li>
                </ul>
        </div>
    )
}

export default Active3;