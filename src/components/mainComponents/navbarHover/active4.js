import { useContext } from "react";
import { NavbarContext } from "../../../context/useContext";

const Active4 = () => {

    const {active4, setActive4, setActive7} = useContext(NavbarContext)

    const style = {
        navbarHoverBox2: "w-[100%] h-auto px-[14%] bg-white py-[30px] absolute scale-y-0 duration-[.4s] origin-top",
        deliveryOptions: "w-full flex justify-between duration-[.2s]",
        deliveryOptionsCollection: "list-none mb-[20px]",
        continent: "text-black text-[16px] font-extrabold uppercase",
        countries: "text-[12px] text-black font-normal my-[5px]"
    }

    return(
        <div onMouseEnter={()=> (setActive4(true), setActive7(true))} onMouseLeave={() => (setActive4(false), setActive7(false))} style={{ transform: `${active4 ? "scaleY(1)" : "scaleY(0)"}`, transitionDelay: `${active4 ? ".3s" : ".2s"}`}} className={style.navbarHoverBox2}>
            <div style={{opacity: `${active4 ? "1" : "0"}`, transitionDelay: `${active4 ? ".7s" : ".1s"}`}} className={style.deliveryOptions}>
                <div>
                    <ul className={style.deliveryOptionsCollection}>
                        <li className={style.continent}>north america</li>
                        <li className={style.countries}>Canada</li>
                        <li className={style.countries}>Mexico</li>
                        <li className={style.countries}>United States</li>
                    </ul>
                    <ul className={style.deliveryOptionsCollection}>
                        <li className={style.continent}>south america</li>
                        <li className={style.countries}>Argentina</li>
                        <li className={style.countries}>Chile</li>
                        <li className={style.countries}>Peru</li>
                    </ul>
                </div>
                <div>
                    <ul className={style.deliveryOptionsCollection}>
                        <li className={style.continent}>europe / middle east</li>
                        <li className={style.countries}>United Kingdom</li>
                        <li className={style.countries}>Europe</li>
                        <li className={style.countries}>Other Middle Eastern Countries</li>
                    </ul>
                    <ul className={style.deliveryOptionsCollection}>
                        <li className={style.continent}>africa</li>
                        <li className={style.countries}>South Africa</li>
                    </ul>
                </div>
                <div>
                    <ul className={style.deliveryOptionsCollection}>
                        <li className={style.continent}>asia</li>
                        <li className={style.countries}>Japan | 日本</li>
                        <li className={style.countries}>Mainland China | 中国内地</li>
                        <li className={style.countries}>China Taiwan | 中国台湾</li>
                        <li className={style.countries}>South Korea | 대한민국</li>
                        <li className={style.countries}>India</li>
                    </ul>
                    <ul className={style.deliveryOptionsCollection}>
                        <li className={style.continent}>pacific</li>
                        <li className={style.countries}>Australia</li>
                        <li className={style.countries}>New Zealand</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Active4;