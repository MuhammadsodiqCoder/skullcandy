import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ProductContext, addToCart } from "../context/productContext";
import { NavbarContext } from "../context/useContext";
import "../styles/sign.css"

const SinglePage = () => {


    const { setDot, dot } = useContext(NavbarContext)
    const location = useLocation()
    const { state, dispatch } = useContext(ProductContext)
    const { cart } = state
    const locationData = location.state.data


    useEffect(() => {
        window.scrollTo(0, 0)

    }, [])
    useEffect(() => { 
        const checkState = () => {
            console.log(state)
            if (cart.length >= 1) {
                setDot(true)
            }
            else if(cart.length === 0){
                setDot(false)
            }
        }
            checkState()

    }, [state])

    console.log(">>>>>>>>>>>", cart.length)





   

    const style = {
        singlePage: "w-[100%] h-[100vh]",
        leftSingle: "w-full absolute h-full flex px-[10%] flex-col justify-center items-start",
        rightSingle: "w-full h-full",
        rightSingleImgWrapper: "w-full h-full",
        singlePageWrapper: "flex h-[100%] md:w-full",
        rightSingleImg: "w-full h-full object-cover object-center bg-red-400",
        singlePageProductName: "sm:text-white text-[60px] text-black font-black uppercase leading-[50px] sm:w-auto md:w-[400px]",
        singlePageProductDes: "sm:text-white text-black text-[30px] font-light break-all uppercase w-[350px] leading-[30px] my-[10px]",
        singlePageProductPrice: "sm:text-white text-black text-[25px] font-extralight mt-[20px]",
        singlePageAddButton: "mt-[50px]"
    }

    return (
        <div className={style.singlePage}>
            <div id="homeBody12" className={style.singlePageWrapper}>
                <div id="leftSingle" className={style.leftSingle}>
                    <p id="productN" className={style.singlePageProductName}>{locationData.productName}</p>
                    <p id="productN2" className={style.singlePageProductDes}>{locationData.productDescription}</p>
                    <p id="productN3" className={style.singlePageProductPrice}>{locationData.productPrice + "€"}</p>
                    {
                        state.cart?.some(it => it.id === location.state.id) ? <button className={style.singlePageAddButton} id="buttonSkewHover2"><p id="btnText2">Added to Cart</p></button> : <button className={style.singlePageAddButton} onClick={() => dispatch(addToCart(location.state, cart))} id="buttonSkewHover2"><p id="btnText2">Add to Cart</p></button>
                    }
                </div>
                <div id="homeBody1" className={style.rightSingle}>
                    <div className={style.rightSingleImgWrapper}>
                        <img className={style.rightSingleImg} src={locationData.productImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SinglePage;