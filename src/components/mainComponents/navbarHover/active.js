import NvImg from "../../../images/navbarImg/nvImg.jpg";
import { BsCaretRight } from "react-icons/bs"
import { useContext } from "react";
import { NavbarContext } from "../../../context/useContext";


const Active = () => {

    const {active, setActive, setActive7} = useContext(NavbarContext)

    const style = {
        navbarHoverBox1: "w-[100%] absolute duration-[.4s] h-auto bg-white px-[10%] py-[30px] origin-top",
        navbarInnerHoverBox1: "flex w-full justify-between opacity-[0] duration-[.2s]",
        collectionNavbarHover: "list-none",
        shopHoverItem: "text-[12px] text-black font-normal my-[5px] hover:text-[#6e6e6e] duration-200 cursor-pointer",
        gamingHeadPhones: "w-[250px] h-[170px]",
        gamingHeadPhonesImg: "w-full h-full object-cover object-center",
        lineNavbarH: "w-[1px] h-[100px] bg-[#6e6e6e]",
        shopHoverItemRed: "text-[12px]  text-red-500 font-normal",
        shopHoverTitle: "text-[15px] font-bold text-black cursor-pointer",
        shopHoverItemAll: "text-[12px] text-[#6e6e6e] font-normal",
        shopHoverNewArrivals: "text-[12px] text-black font-light",
        gamingHeadPhonesDescription: "flex items-center justify-between mt-[15px]",
        gamingHeadPhonesLink: "text-black text-[13px] font-bold capitalize",
        gamingHeadPhonesLinkIcon: "text-black text-[15px]"
    }

    return(
        <div onMouseEnter={()=> (setActive(true), setActive7(true))} onMouseLeave={() => (setActive(false), setActive7(false))} style={{ transform: `${active ? "scaleY(1)" : "scaleY(0)"}`, transitionDelay: `${active ? ".3s" : ".2s"}` }} className={style.navbarHoverBox1}>
                <div style={{opacity: `${active ? "1" : "0"}`, transitionDelay: `${active ? ".7s" : ".1s"}`}} className={style.navbarInnerHoverBox1}>
                    <ul className={style.collectionNavbarHover}>
                        <li className={style.shopHoverNewArrivals}>New Arrivals</li>
                        <li className={style.shopHoverItem}>Skull-IQ Product</li>
                        <li className={style.shopHoverItem}>Coporate Sales</li>
                        <li className={style.shopHoverItemRed}>Sale</li>
                    </ul>
                    <div className={style.lineNavbarH}></div>
                    <ul className={style.collectionNavbarHover}>
                        <li className={style.shopHoverTitle}>Earbuds</li>
                        <li className={style.shopHoverItem}>True Wireless Earbuds</li>
                        <li className={style.shopHoverItemAll}>Shop All Earbuds</li>
                    </ul>
                    <ul className={style.collectionNavbarHover}>
                        <li className={style.shopHoverTitle}>HeadPhones</li>
                        <li className={style.shopHoverItem}>Wireless Headphones</li>
                        <li className={style.shopHoverItem}>Wired Headphones</li>
                        <li className={style.shopHoverItemAll}>Shop All Headphones</li>
                    </ul>
                    <ul className={style.collectionNavbarHover}>
                        <li className={style.shopHoverTitle}>Gaming</li>
                        <li className={style.shopHoverItem}>Gaming Headsets</li>
                        <li className={style.shopHoverItem}>Gaming Accessories</li>
                        <li className={style.shopHoverItemAll}>Shop All Gaming</li>
                    </ul>
                    <div id="gamingHeadset" className={style.shopSkullCandyGaming}>
                        <div className={style.gamingHeadPhones}>
                            <img className={style.gamingHeadPhonesImg} src={NvImg} alt="" />
                        </div>
                        <div className={style.gamingHeadPhonesDescription}>
                            <p id="gamingHeadsetDescription" className={style.gamingHeadPhonesLink}>shop skulcandy gaming</p>
                            <BsCaretRight id="gamingHeadsetDescription" className={style.gamingHeadPhonesLinkIcon} />
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Active;