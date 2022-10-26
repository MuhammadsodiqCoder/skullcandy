import { Steam, XLg } from "react-bootstrap-icons";
import { useContext } from "react";
import { NavbarContext } from "../../../context/useContext";
import { ProductContext } from "../../../context/productContext";
import { Link } from "react-router-dom";
import "../../../styles/sign.css"
const Active6 = () => {

    const { active6, setActive6, setActive7, dot } = useContext(NavbarContext)
    const {state} = useContext(ProductContext)
    const stateData = state.cart

    const style = {
        cartHoverBox: "w-[100%] px-[4%] py-[20px] flex justify-end absolute origin-top duration-[.4s]",
        cartBox: "flex flex-col w-[300px] duration-[.2s]",
        cartT: "flex items-center justify-between w-full",
        cartT2: "flex w-full my-[10px]",
        shoppingCart: "text-[16px] text-white font-bold uppercase",
        cartCloseIcon: "text-white text-[25px]",
        shoppingCart2: "text-[16px] text-black font-bold uppercase",
        cartCloseIcon2: "text-black text-[25px]",
        yourCart: "text-white text-[13px] font-normal my-[20px]",
        chosenCartImgWrapper: "w-[70px] h-[70px] rounded-[5px] overflow-hidden",
        chosenCartImg: "w-full h-full object-cover object-center",
        chosenCartInfo: "flex flex-col ml-[20px]",
        cartSelectedCarts: "w-full flex flex-col",
        cartOverflowDiv: "overflow-y-auto max-h-[250px] mt-[20px]",
        chosenCartN: "text-[14px] text-black font-normal w-[200px] capitalize",
        cartButtonWrapper: "flex items-center mt-[10px]",
        viewCart: "text-[13px] font-normal px-[30px] py-[13px] ml-[10px]"
    }

    return (
        <div style={{ transform: `${active6 ? "scaleY(1)" : "scaleY(0)"}`, backgroundColor: `${dot ? "white" : "black"}`, transitionDelay: `${active6 ? ".2s" : ".2s"}` }} className={style.cartHoverBox}>
            <div style={{ opacity: `${active6 ? "1" : "0"}`, transitionDelay: `${active6 ? ".5s" : ".1s"}` }} className={style.cartBox}>
                <div style={{ display: `${dot ? "none" : "block"}` }} className="">
                    <div className={style.cartT}>
                        <p className={style.shoppingCart}>shopping cart</p>
                        <XLg onClick={() => (setActive6(false), setActive7(false))} className={style.cartCloseIcon} />
                    </div>
                    <p className={style.yourCart}>Your Cart Empty</p>
                </div>
                <div style={{ display: `${dot ? "block" : "none"}` }} className={style.cartSelectedCarts}>
                    <div className={style.cartT}>
                        <p className={style.shoppingCart2}>shopping cart</p>
                        <XLg onClick={() => (setActive6(false), setActive7(false))} className={style.cartCloseIcon2} />
                    </div>
                    <div id="cartbody" className={style.cartOverflowDiv}>
                    {
                        stateData.map((item9) => (
                            <div key={item9.id} className={style.cartT2}>
                                <div className={style.chosenCartImgWrapper}>
                                    <img className={style.chosenCartImg} src={item9.data.productImg} alt="" />
                                </div>
                                <div className={style.chosenCartInfo}>
                                    <p className={style.chosenCartN}>{item9.data.productName}</p>
                                    <p className={style.chosenCartN}>{item9.data.productPrice + "€"}</p>
                                </div>
                            </div>
                        ))
                    }
                    </div>
                    <div className={style.cartButtonWrapper}>
                        <button id="buttonSkewHover2">
                            <p id="btnText">checkout</p>
                        </button>
                        <Link className={style.viewCart} to="/view-cart">View Cart</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Active6;