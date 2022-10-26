import { Link } from "react-router-dom";
import "../../styles/home.css"

const HomeBody3 = () => {

    const style = {
        homeBody3: "w-[100%] h-[80vh] bg-cover banner4 bg-center flex items-center px-[8%]",
        bannerLeftSideTextWrapper: "flex flex-col items-start",
        bannerBoldMainText: "text-white text-[3.2vw] font-extrabold uppercase leading-[90%]",
        bannerDescriptionTextWrapper2: "w-[45%] my-[1.5vw]",
        bannerDescriptionText: "text-white text-[1.16vw] font-normal leading-[100%]",

    }

    return (
        <Link id="homeMainDiv" to="/skull-iq" className={style.homeBody3}>
            <div id="bannerLeftSide" className={style.bannerLeftSideTextWrapper}>
                <p id="bannerTitle" className={style.bannerBoldMainText}>Welcome to <br /> future proof <br /> audio.</p>
                <div id="bannerDescriptionDiv" className={style.bannerDescriptionTextWrapper2}>
                    <p id="bannerDescriptionText" className={style.bannerDescriptionText}>Our new Smart Future Technology runs innovative features and adds upgrades via the Skullcandy App. The future is now.</p>
                </div>
                <button id="buttonSkewHover">
                    <p id="btnText">shop skull-iq</p>
                </button>
            </div>
        </Link>
    )
}

export default HomeBody3;