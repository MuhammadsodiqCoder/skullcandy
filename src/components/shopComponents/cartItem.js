import React, { useContext, useState } from 'react'
import { NavbarContext } from "../../context/useContext"
import { ProductContext, decrease, increase, deleteItem } from "../../context/productContext"
import { BsShieldExclamation } from "react-icons/bs"


function CartItem({ cartData }) {

    const { state, dispatch } = useContext(ProductContext)
    const { setApple, apple, setDot } = useContext(NavbarContext)
    const { cart } = state
   

    const style = {
        cartTable: "w-full flex flex-col relative",
        cartInfo2: "w-full sm:flex  sm:flex-col  md:flex md:flex-row justify-between border-b-[1px] border-[#DDDDDD] py-[15px] pl-[20px]",
        cartItemWrapper2: "md:w-[50%] sm:w-full text-[18px] text-black font-bold flex items-center",
        cartItemImage02: "w-[70px] h-[70px] rounded-[15px] overflow-hidden",
        cartWrapper001: "lg:w-[50%] sm:w-full sm:mt-[10px] flex items-center justify-between",
        cartItemPic: "w-full h-full object-cover object-center",
        cartPriceNum2: "w-[25%]",
        cartPriceNumm3: "w-[40%] flex items-center",
        permissionHoverDiv: "w-full h-[100vh] fixed bg-[#000000a1] left-0 top-0 grid place-items-center",
        activePermission: "w-[450px] h-[300px] duration-[.2s] scale-[0] bg-white grid place-items-center py-[20px]",
        exclamationIcon: "text-[#FACEA8] text-[90px]",
        activeWrapper: "flex items-center",
        activeText00: "text-black text-[16px] font-normal",
        cartQuantity: "w-[45px] h-[45px] grid place-items-center border-[1px] border-[#DDDDDD] bg-[#F6F6F6]",
        nameOfSelectedCart: "text-[15px] text-black font-bold capitalize",
        cartRemoveBtn: "text-[14px] font-normal cursor-pointer hover:text-[#4d4d4d]"
    }

    return (
        <div className="">
            <div className={style.cartTable}>
                <div key={cartData.id} className={style.cartInfo2}>
                    <div className={style.cartItemWrapper2}>
                        <div className={style.cartItemImage02}>
                            <img className={style.cartItemPic} src={cartData.data.productImg} alt="" />
                        </div>
                        <div className="flex flex-col ml-[10px]">
                            <p className={style.nameOfSelectedCart}>{cartData.data.productName}</p>
                            <p onClick={() => setApple(true)} className={style.cartRemoveBtn}>Remove</p>
                        </div>
                    </div>
                    <div className={style.cartWrapper001}>
                        <div className={style.cartPriceNum2}>
                            <p>{cartData.data.productPrice + "€"}</p>
                        </div>
                        <div className={style.cartPriceNumm3}>
                            <button disabled={cart.map(item => item.id === cartData.id) && cartData.quantity <= 1} onClick={() => dispatch(decrease(cart, cartData.id))} className={style.cartQuantity}>-</button>
                            <div className={style.cartQuantity}>{Math.min(Math.max(parseInt(cartData.quantity), 1), 10)}</div>
                            <button disabled={cart.map(item => item.id === cartData.id) && cartData.quantity > 9} onClick={() => dispatch(increase(cart, cartData.id))} className={style.cartQuantity}>+</button>
                        </div>
                        <div className={style.cartPriceNum2}>
                            <p>{cartData.data.productPrice + "€"}</p>
                        </div>
                    </div>
                </div>
                <div style={{ display: `${apple ? "grid" : "none"}` }} className={style.permissionHoverDiv}>
                    <div style={{ transform: `${apple ? "scale(1)" : "scale(0)"}`, transitionDelay: `${apple ? ".3s" : ".1s"}` }} className={style.activePermission}>
                        <BsShieldExclamation className={style.exclamationIcon} />
                        <p className={style.activeText00}>Are you sure you want to delete this item?</p>
                        <div className={style.activeWrapper}>
                            <button onClick={() => dispatch(deleteItem(cart, cartData.id, "ADD_CART"))} id="buttonSkewHover6">
                                <p id="btnText6">ok</p>
                            </button>
                            <button onClick={() => setApple(false)} id="buttonSkewHover7">
                                <p id="btnText7">cancel</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem