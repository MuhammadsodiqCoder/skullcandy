import { Link } from "react-router-dom";
import "../../styles/home.css"
const HomeBody4 = () => {

    const style = {
        homeBody4: "w-[100%] h-[80vh] flex items-center justify-end bg-cover bg-center banner5 px-[8%]",
        bannerLeftSideTextWrapper2: "flex flex-col items-start w-[50%] pl-[0%]",
        bannerBoldMainText: "text-white text-[3.4vw] font-extrabold uppercase leading-[90%]",
        bannerDescriptionTextWrapper2: "w-[70%] my-[20px]",
        bannerDescriptionText: "text-white text-[1.16vw] font-normal leading-[100%]",
    }

    return (
        <Link id="homeMainDiv" to="/gaming" className={style.homeBody4}>
            <div id="bannerLeftSide" className={style.bannerLeftSideTextWrapper2}>
                <p id="bannerTitle" className={style.bannerBoldMainText}>back in the <br /> game.</p>
                <div id="bannerDescriptionDiv" className={style.bannerDescriptionTextWrapper2}>
                    <p id="bannerDescriptionText" className={style.bannerDescriptionText}>You asked, we answered. Skullcandy Gaming is back with 3 all-new, badass gaming headsets to cover every budget and skill level.</p>
                </div>
                <button id="buttonSkewHover">
                    <p id="btnText">see Skullcandy gaming</p>
                </button>
            </div>
        </Link>
    )
}

export default HomeBody4;