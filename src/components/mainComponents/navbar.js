import logo from "../../images/logo2.svg"
import { Link } from "react-router-dom"
import { IoIosSearch } from "react-icons/io"
import { BsPerson } from "react-icons/bs"
import { BsBag } from "react-icons/bs"
import "../../styles/hover.css"
import { useContext, useEffect, useState } from "react"
import { NavbarContext } from "../../context/useContext"
import { AuthContext } from "../../context/authContext"
import {ProductContext} from "../../context/productContext"
import { List } from "react-bootstrap-icons"

const Navbar = () => {

    const profileImg = localStorage.getItem("photoURL")

    const [sum, setSum] = useState(0)
    const [there, setThere] = useState("")
    const [space, setSpace] = useState("190px")
    const [exist, setExist] = useState("none")
    const [exist2, setExist2] = useState("block")
    const {currentUser} = useContext(AuthContext)
    const {state} = useContext(ProductContext)

    useEffect(() => {
        const onScroll = () => setSum(window.pageYOffset);
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);





    useEffect(() => {
        function currentUserCheck() {
            if(!currentUser){
                setExist("none");
                setExist2("block");
            }
            else{
                setExist("block");
                setExist2("none");
            }
        }
        currentUserCheck();
    }, [currentUser])

    useEffect(() => {
        const changeFunc = () => {
            if (sum < 50) {
                setThere("1")
                setSpace("190px")
            }
            else if (sum > 60) {
                setThere("0")
                setSpace("45px")
            }
        }
        changeFunc();
    }, [sum])


    const { setActive, setActive2, setActive3,
        setActive4, setActive5, setActive6, setActive7, active5, active6, active7, dot, setSidebar, sidebar} = useContext(NavbarContext)

    const style = {
        navbar: "w-[100%] h-[60px] bg-black fixed flex items-center justify-between px-[4%] z-[10]",
        logoWrapper: "sm:hidden lg:block  items-center relative cursor-pointer  overflow-hidden",
        logoWrapper2: "sm:flex w-[190px] lg:hidden hidden items-center relative cursor-pointer",
        logoImg: "w-[45px] h-[45px]",
        logoText: "text-white text-[30px] font-semibold absolute left-[34px] top-[2px] tracking-tighter",
        side: "flex items-center",
        side2: "flex items-center sm:block lg:hidden text-[20px] text-white",
        navbarLink: "sm:hidden lg:block text-white text-[12px] mx-[10px] uppercase relative",
        collectionN: "flex items-center list-none",
        collectionImg: "w-[25px] h-[25px] mx-[27px] ",
        navIconUser: "sm:text-[0] lg:text-[28px] text-white cursor-pointer",
        navIconBag: "text-white text-[23px] cursor-pointer relative",
        navIconSearch: "sm:hidden lg:block text-white text-[27px] mx-[27px] cursor-pointer",
        support: "sm:hidden lg:block text-[12px] text-gray-300 font-light cursor-pointer relative",
        hoverBox: "w-[100%] h-[100px] bg-white absolute top-[60px] left-[0px]",
        profile: "sm:w-0 lg:w-[25px] w-[25px] h-[25px] rounded-[50%] overflow-hidden",
        profileImage: "sm:hidden lg:block w-full h-full object-cover object-center",
        greenDot: "absolute w-[7px] h-[7px] rounded-[50%] bg-green-400 left-0 right-0 mx-auto top-[10px] ",
        europeFlag: "sm:hidden lg:block "
    }

    return (
        <div className={style.navbar}>
            <div onClick={() => (setSidebar(!sidebar), setActive7(!active7))} id="side2" className={style.side2}><List/></div>
            <div className={style.side}>
                <Link id="navbarItem" to={{pathname: "/"}} style={{ width: space, transition: '.4s' }} className={style.logoWrapper}>
                    <img className={style.logoImg} src={logo} alt="" />
                    <p style={{ opacity: there, transition: ".4s" }} className={style.logoText}>Skullcandy</p>
                </Link> 
                <Link  id="navbarItem2" to='/' className={style.logoWrapper2}>
                    <img className={style.logoImg} src={logo} alt="" />
                    <p className={style.logoText}>Skullcandy</p>
                </Link> 
                <Link onMouseEnter={() => (setActive(true), setActive7(true), setActive5(false), setActive6(false))} onMouseLeave={() => (setActive(false), setActive7(false))} id="linkHover" className={style.navbarLink} to={{pathname: "/shop"}}>Shop</Link>
                <Link onMouseEnter={() => (setActive2(true), setActive7(true), setActive5(false), setActive6(false))} onMouseLeave={() => (setActive2(false), setActive7(false))} id="linkHover2" className={style.navbarLink} to='/inside-skullcandy'>inside Skullcandy</Link>
            </div>
            <div className={style.side}>
                <ul className={style.collectionN}>
                    <li onMouseEnter={() => (setActive3(true), setActive7(true), setActive5(false), setActive6(false))} onMouseLeave={() => (setActive3(false), setActive7(false))} id="hover" className={style.support}>Support</li>
                    <li className={style.europeFlag} onMouseEnter={() => (setActive4(true), setActive7(true), setActive5(false), setActive6(false))} onMouseLeave={() => (setActive4(false), setActive7(false))} id="flag"></li>
                    <Link id="navbarItem5" style={{display: exist2}} to="/login" className={style.navIconUser}><BsPerson /></Link>
                    <Link id="navbarItem3" to="/account" style={{display: exist}} className={style.profile}><img id="navbarItem" className={style.profileImage} src={profileImg} alt="" /></Link>
                    <li id="navbarItem" onClick={() => (setActive5(!active5), setActive6(false), setActive7(!active7))} className={style.navIconSearch}><IoIosSearch /></li>
                    <li onClick={() => (setActive6(!active6), setActive5(false), setActive7(!active7))} className={style.navIconBag}><BsBag /> <div style={{display: `${dot ? "block" : "none"}`}} className={style.greenDot}></div></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;