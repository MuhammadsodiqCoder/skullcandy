import { useContext, useState, useEffect } from "react";
import { NavbarContext } from "../../context/useContext";
import { IoIosSearch } from "react-icons/io"
import { TbPlus } from "react-icons/tb"
import { Link, useLocation } from "react-router-dom";
import { BsPerson } from "react-icons/bs";
import { AuthContext } from "../../context/authContext"

const Sidebar = () => {

    const {sidebar, setSidebar,setActive2, setActive, setActive3, setActive4, setActive5, setActive6, setActive7} = useContext(NavbarContext)
    const[block, setBlock] = useState(false)
    const[block2, setBlock2] = useState(false)
    const[block3, setBlock3] = useState(false)
    const[block4, setBlock4] = useState(false)
    const [exist, setExist] = useState("none")
    const [exist2, setExist2] = useState("flex")
    const {currentUser} = useContext(AuthContext)
    const profileImage = localStorage.getItem("photoURL")

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

    const location = useLocation()
    const pathname = location.pathname

    useEffect(() => {
        function setActiveA (){
            setActive(false)
            setActive2(false)
            setActive3(false)
            setActive4(false)
            setActive5(false)
            setActive6(false)
            setActive7(false)
            setSidebar(false)
        }
        setActiveA()
    }, [pathname])

    const style = {
        sidebar: "w-[80%] h-[100%] fixed top-[60px] left-[0px] bg-white z-[50] duration-[.2s] origin-left",
        sidebarItems: "w-full py-[15px] border-b-[1px] border-[#4d4d4d] flex justify-between px-[20px]",
        sidebarItemsText: "text-[12px] uppercase text-black font-medium",
        tbPlusIcon: "text-[20px] text-black",
        sidebarInpWrapper: "w-full flex items-center mt-[10px] px-[20px]",
        sidebarAccount: "w-[40px] h-[40px] rounded-[50%] overflow-hidden mt-[20px] mx-[20px]",
        sidebarAccountImg: "w-full h-full object-cover object-center",
        sidebarLogin: "flex relative mt-[20px] mx-[20px]",
        sidebarLoginIcon: "text-[#4d4d4d] text-[20px]",
        sidebarLoginText: "text-[13px] text-[#4d4d4d] absolute top-[0px] left-[30px]",
        sidebarInp: "flex-[1] px-[13px] text-[13px] outline-none border-none text-[#4d4d4d] placeholder:text-[#4d4d4d]",
        sidebarInpIcon: "text-[#4d4d4d] text-[17px]",
        sidebarWrapper: "w-full h-[100vh] overflow-y-auto"
    }

    return(
        <div style={{transform: `${sidebar ? "scaleX(1)" : "scaleX(0)"}`}} className={style.sidebar}>
            <div className={style.sidebarWrapper}>
                <Link to="/shop" onClick={() => setBlock(!block)} style={{height: `${block ? "200px" : "auto"}`}} className={style.sidebarItems}><p className={style.sidebarItemsText}>shop</p><TbPlus className={style.tbPlusIcon}/></Link>
                <div onClick={() => setBlock2(!block2)} style={{height: `${block2 ? "200px" : "auto"}`}} className={style.sidebarItems}><p className={style.sidebarItemsText}>inside skullcandy</p><TbPlus className={style.tbPlusIcon}/></div>
                <div onClick={() => setBlock3(!block3)} style={{height: `${block3 ? "200px" : "auto"}`}} className={style.sidebarItems}><p className={style.sidebarItemsText}>support</p><TbPlus className={style.tbPlusIcon}/></div>
                <div onClick={() => setBlock4(!block4)} style={{height: `${block4 ? "200px" : "auto"}`}} className={style.sidebarItems}><p className={style.sidebarItemsText}>location</p><TbPlus className={style.tbPlusIcon}/></div>
                <Link style={{display:exist2 }} to="/login" className={style.sidebarLogin}>
                    <BsPerson className={style.sidebarLoginIcon}/>
                    <p className={style.sidebarLoginText}>Account</p>
                </Link>
                <Link  style={{display:exist }} className={style.sidebarAccount} to="/account">
                <img  className={style.sidebarAccountImg} src={profileImage} alt="" />
                </Link>
                <div className={style.sidebarInpWrapper}>
                    <IoIosSearch className={style.sidebarInpIcon}/>
                    <input className={style.sidebarInp} placeholder="Search" type="text" />
                </div>
                
            </div>
        </div>
    )
}

export default Sidebar;