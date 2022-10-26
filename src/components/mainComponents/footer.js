import { BsYoutube, BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { VscChevronRight } from "react-icons/vsc"
import {TbPlus} from "react-icons/tb"
import Credit from "../../images/credit.webp"
import "../../styles/footer.css"
import SecondFooter from "./secondFooter";

const Footer = () => {

    const style = {
        footer: "w-[100%] bg-black ",
        infoFooter: "w-full flex justify-between border-y-[1px] border-[#4d4d4d] overflow-hidden pt-[60px] pb-[80px]",
        service: "flex w-[40%] justify-center relative",
        footerCollection: "list-none mx-[20px]",
        serviceItem: "text-white text-[14px] my-[10px] capitalize font-normal cursor-pointer hover:text-[#666666] duration-300",
        footerConnect: "w-[30%] flex flex-col items-center",
        footerText: "text-white text-[16px] font-bold uppercase tracking-tight mb-[15px]",
        footerConnectDiv: "flex h-[40px] w-[200px] items-center relative",
        connectEmail: "h-[35px] w-[160px] rounded-[2px] outline-none placeholder:text-[14px] px-[10px] border-[1px] border-gray-400 box-content hover:border-none",
        arrowRight: "text-white text-[30px] absolute right-[-20px] hover:text-[#666666] cursor-pointer",
        footerIcon: "text-white text-[25px] mx-[15px] hover:text-[#666666] cursor-pointer duration-200",
        footerIconCollection: "flex list-none",
        paypal: "w-full flex py-[20px] items-center justify-end px-[60px]",
        creditCards: "w-[350px]",
        footerLastText: "text-[13px] text-[#666666] font-medium mx-auto",
        footerWrapper: "w-[100%] flex sm:hidden lg:flex flex-col absolute left-0 bottom-[-374px] bg-black",
    }

    return (
        <div className={style.footer}>
            <div id="footer001" className={style.footerWrapper}>
                <div id="infoFooter" className={style.infoFooter}>
                    <div className={style.footerConnect}>
                        <p className={style.footerText}>hear it first</p>
                        <div className={style.footerConnectDiv}>
                            <input className={style.connectEmail} type="email" placeholder="Sign up for Emails" name="" id="" />
                            <VscChevronRight className={style.arrowRight} />
                        </div>
                    </div>
                    <div id="footer" className={style.service}>
                        <ul className={style.footerCollection}>
                            <li className={style.serviceItem}>help center</li>
                            <li className={style.serviceItem}>warranty</li>
                            <li className={style.serviceItem}>contact us</li>
                            <li className={style.serviceItem}>product help</li>
                            <li className={style.serviceItem}>recycling help</li>
                        </ul>
                        <ul className={style.footerCollection}>
                            <li className={style.serviceItem}>bulk orders</li>
                            <li className={style.serviceItem}>student</li>
                            <li className={style.serviceItem}>discount</li>
                            <li className={style.serviceItem}>sound advice</li>
                        </ul>
                        <ul className={style.footerCollection}>
                            <li className={style.serviceItem}>about</li>
                            <li className={style.serviceItem}>careers</li>
                        </ul>
                    </div>
                    <div className={style.footerConnect}>
                        <p className={style.footerText}>follow us</p>
                        <ul className={style.footerIconCollection}>
                            <li className={style.footerIcon}><BsInstagram /></li>
                            <li className={style.footerIcon}><BsYoutube /></li>
                            <li className={style.footerIcon}><BsFacebook /></li>
                            <li className={style.footerIcon}><BsTwitter /></li>
                        </ul>
                    </div>
                </div>
                <div className={style.paypal}>
                    <p className={style.footerLastText}>© 2022 Skullcandy.eu All Rights Reserved</p>
                    <div className={style.partners}>
                        <img className={style.creditCards} src={Credit} alt="" />
                    </div>
                </div>
            </div>
            <SecondFooter/>
        </div>
    )
}

export default Footer;