import Active from "./navbarHover/active";
import Active2 from "./navbarHover/active2";
import Active3 from "./navbarHover/active3";
import Active4 from "./navbarHover/active4";
import Active5 from "./navbarHover/active5";
import Active6 from "./navbarHover/active6";
import Active7 from "./navbarHover/active7";

const NavbarHover = () => {

    const style = {
        navbarHover: "w-[100%] fixed top-[60px] left-0 z-[10]",
    }

    return (
        <div className={style.navbarHover}>
            <Active/>
            <Active2/>
            <Active3/>
            <Active4/>
            <Active5/>
            <Active6/>
            <Active7/>
        </div>
    )
}

export default NavbarHover;