import { Link } from "react-router-dom"
import "../../styles/home.css"
import "../../styles/responsive.css"
import HomeSwiper from "./swiper"


const Body1 = () => {
    const style = {
        homeBody1: "w-[100%] h-[80vh] bg-black flex",
        homeBodyTripleBox1: "w-[33.3%] h-full bg-cover bg-center dime2 relative",
        homeBodyTripleBox2: "w-[33.3%] h-full bg-cover bg-center mod",
        homeBodyTripleBox3: "w-[33.3%] h-full bg-cover bg-center active",
        trendingEarbuds: "text-[18px] uppercase leading-[15px] top-[20px] left-[30px] text-[#FEFF4C] font-extrabold absolute z-[5]",
        homeBodyOpacityDiv1: "w-full h-full bg-cover bg-center opacity-0 duration-[.4s] hover:opacity-[1] imgO1 flex items-end justify-center pb-[20%]",
        homeBodyOpacityDiv2: "w-full h-full bg-cover bg-center opacity-0 duration-[.4s] hover:opacity-[1] imgO2 flex items-end justify-center pb-[20%]",
        homeBodyOpacityDiv3: "w-full h-full bg-cover bg-center opacity-0 duration-[.4s] hover:opacity-[1] imgO3 flex items-end justify-center pb-[20%]",

    }
    return (
        <div id="homeBody1" className={style.homeBody1}>
            <Link id="trendingHeadsets" to="/dime2-wireless-earbuds" className={style.homeBodyTripleBox1}>
                <p className={style.trendingEarbuds}>Trending <br /> now</p>
                <div className={style.homeBodyOpacityDiv1}>
                    <button id="buttonSkewHover">
                        <p id="btnText" className={style.bannerLeftSideBtnText}>shop now</p>
                    </button>
                </div>
            </Link>
            <Link  id="trendingHeadsets" to="/mod-wireless-earbuds" className={style.homeBodyTripleBox2}>
                <div className={style.homeBodyOpacityDiv2}>
                    <button id="buttonSkewHover">
                        <p id="btnText" className={style.bannerLeftSideBtnText}>shop now</p>
                    </button>
                </div>
            </Link>
            <Link  id="trendingHeadsets" to="/push-active-wireless-earbuds" className={style.homeBodyTripleBox3}>
                <div className={style.homeBodyOpacityDiv3}>
                    <button id="buttonSkewHover">
                        <p id="btnText" className={style.bannerLeftSideBtnText}>shop now</p>
                    </button>
                </div>
            </Link>
            <HomeSwiper/>
        </div>
    )
}

export default Body1