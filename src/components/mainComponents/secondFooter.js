import { BsYoutube, BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { VscChevronRight } from "react-icons/vsc"
import { TbPlus } from "react-icons/tb"
import Credit from "../../images/credit.webp"
import "../../styles/responsive.css";

const SecondFooter = () => {

    const style = {
        secondFooter: "w-[100%] sm:block lg:hidden h-[460px] bg-black flex flex-col justify-between absolute bottom-[-460px] border-t-[1px] border-[#4d4d4d]",
        secondFooterWrapper1: "w-full h-[130px] flex flex-col items-center justify-center",
        secondFooterWrapper2: "w-full flex flex-col border-y-[1px] border-[#4d4d4d]",
        footerConnect: "flex flex-col items-center",
        footerConnectDiv: "flex h-[40px] w-[250px] items-center relative",
        footerIconCollection: "flex items-center w-[40%] justify-between",
        footerIcon: "text-white text-[27px]",
        footerText: "text-white text-[16px] font-bold uppercase tracking-tight mb-[15px]",
        connectEmail: "h-[35px] w-[200px] rounded-[2px] outline-none placeholder:text-[14px] px-[10px] border-[1px] border-gray-400 box-content hover:border-none",
        arrowRight: "text-white text-[30px] absolute right-[-20px] hover:text-[#666666] cursor-pointer",
        secondFooterSupport: "w-full flex items-center justify-between h-[40px] px-[20px]",
        secondFooterSupport2: "w-full flex items-center justify-between h-[40px] px-[20px] border-y-[1px] border-[#4d4d4d]",
        secondFooterSupportText: "text-white text-[14px] font-normal uppercase",
        secondFooterSupportPlus: "text-white text-[25px]",
        footerLastText: "text-[13px] text-[#666666] font-medium mx-auto",
        secondFooterWrapper3: "w-full flex flex-col items-center py-[15px] border-t-[1px] border-[#4d4d4d]",
        partners: "w-[300px]"


    }

    return (
        <div id="secondFooter" className={style.secondFooter}>
            <div className={style.secondFooterWrapper1}>
                <div className={style.footerConnect}>
                    <p className={style.footerText}>hear it first</p>
                    <div className={style.footerConnectDiv}>
                        <input className={style.connectEmail} type="email" placeholder="Sign up for Emails" name="" id="" />
                        <VscChevronRight className={style.arrowRight} />
                    </div>
                </div>
            </div>
            <div className={style.secondFooterWrapper2}>
                <div className={style.secondFooterSupport}>
                    <p className={style.secondFooterSupportText}>support</p>
                    <TbPlus className={style.secondFooterSupportPlus} />
                </div>
                <div className={style.secondFooterSupport2}>
                    <p className={style.secondFooterSupportText}>offer</p>
                    <TbPlus className={style.secondFooterSupportPlus} />
                </div>
                <div className={style.secondFooterSupport}>
                    <p className={style.secondFooterSupportText}>about us</p>
                    <TbPlus className={style.secondFooterSupportPlus} />
                </div>
            </div>
            <div className={style.secondFooterWrapper1}>
                <p className={style.footerText}>follow us</p>
                <ul className={style.footerIconCollection}>
                    <li className={style.footerIcon}><BsInstagram /></li>
                    <li className={style.footerIcon}><BsYoutube /></li>
                    <li className={style.footerIcon}><BsFacebook /></li>
                    <li className={style.footerIcon}><BsTwitter /></li>
                </ul>
            </div>
            <div className={style.secondFooterWrapper3}>
                <div className={style.partners}>
                    <img src={Credit} alt="" />
                </div>
                <p className={style.footerLastText}>© 2022 Skullcandy.eu All Rights Reserved</p>
            </div>
        </div>
    )
}

export default SecondFooter;