import Banner from "../components/homeCompenents/banner";
import { useContext, useEffect } from "react";
import Body1 from "../components/homeCompenents/homeBody2";
import HomeBody3 from "../components/homeCompenents/homeBody3";
import HomeBody4 from "../components/homeCompenents/homeBody4";

const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    const style = {
        home: "w-[100%] h-auto flex flex-col"
    }
    return(
        <div className={style.home}>
            <Banner/>
            <Body1/>
            <HomeBody3/>
            <HomeBody4/>
        </div>
    )
}

export default Home;