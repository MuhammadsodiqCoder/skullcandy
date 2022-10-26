import "../../styles/home.css"
import { Link } from "react-router-dom"
import { VscChevronRight } from "react-icons/vsc"
import "../../styles/responsive.css"

const Banner = () => {

    const style = {
        banner: "w-[100%] h-[100vh] flex bg-black",
        bannerLeftSide: "w-[65%] h-full bannerImg bg-cover bg-center px-[8%] py-[6%] cursor-pointer",
        bannerRightSide: "w-[35%] ms:w-[100%] ms:h-auto h-full flex flex-col",
        topDiv: "w-full h-[50%] bannerImg3 bg-cover bg-center flex flex-col items-center",
        bottomDiv: "w-full h-[50%] bannerImg2 bg-cover bg-center flex flex-col items-center",
        bannerLeftSideTextWrapper: "flex flex-col items-start",
        bannerBoldMainText: "text-white text-[3.2vw] font-extrabold uppercase leading-[90%]",
        bannerDescriptionTextWrapper: "w-[55%] my-[1.5vw]",
        bannerDescriptionText: "text-white text-[1.16vw] font-normal leading-[100%]",
        sideLinkDivText: "text-white text-[1.18vw] uppercase font-extrabold mt-[3vw]",
        sideLinkDivTextWrapper: "flex items-center",
        sideLinkDivBottomText: "text-white text-[1vw] font-normal",
        sideLinkDivIcon: "mt-[.05vw] text-white text-[1.17vw]"
    }

    return (
        <div id="banner" className={style.banner}>
                <Link id="slyr" to="/slyr" className={style.bannerLeftSide}>
                    <div id="bannerLeftSide" className={style.bannerLeftSideTextWrapper}>
                        <p id="bannerTitle" className={style.bannerBoldMainText}>get into <br /> the game.</p>
                        <div id="bannerDescriptionDiv" className={style.bannerDescriptionTextWrapper}>
                            <p id="bannerDescriptionText" className={style.bannerDescriptionText}>Our most affordable gaming headset features 50mm dynamic drivers, a removable boom mic and everything else you need to reach the next level.</p>
                        </div>
                        <button id="buttonSkewHover">
                            <p id="btnText">meet slyr</p>
                        </button>
                    </div>
                </Link>
            <div id="slyr" className={style.bannerRightSide}>
                <Link id="topDiv" to="/gaming" className={style.topDiv}>
                    <p id="sideLinkDivText" className={style.sideLinkDivText}>Skullcandy gaming is back.</p>
                    <div className={style.sideLinkDivTextWrapper}>
                        <p id="sideLinkDivBottomText" className={style.sideLinkDivBottomText}>Celebrate the Return</p>
                        <VscChevronRight id="sideLinkDivBottomText" className={style.sideLinkDivIcon}/>
                    </div>
                </Link>
                <Link id="topDiv" to="/bluetooth-earbuds" className={style.bottomDiv}>
                    <p id="sideLinkDivText" className={style.sideLinkDivText}>true freedom, and amplified.</p>
                    <div className={style.sideLinkDivTextWrapper}>
                        <p id="sideLinkDivBottomText" className={style.sideLinkDivBottomText}>Shop Indy Evo</p>
                        <VscChevronRight id="sideLinkDivBottomText" className={style.sideLinkDivIcon}/>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Banner;