import { ProductContext} from "../context/productContext"
import { useContext, useEffect, useState } from "react"
import "../styles/view.css"
import CartItem from "../components/shopComponents/cartItem"
import { NavbarContext } from "../context/useContext"

const View = () => {


    const { state, dispatch } = useContext(ProductContext)
    const { apple, setApple } = useContext(NavbarContext)
    const { cart } = state
    const [total, setTotal] = useState({
        totalPrice: 0,
        totalQuantity: 0,
    })

    useEffect(() => {
        const getTotal = () => {
            const price = cart.reduce((prev, item) => {
                return prev + item.price * item.quantity;
            }, 0);
            const quantity = cart.reduce((prev, item) => {
                return prev + item.quantity;
            }, 0);
            setTotal({ ...total, totalPrice: price, totalQuantity: quantity })
        };
        getTotal();
    }, [cart]);


    const style = {
        cart: "w-[100%] py-[50px] min-h-[550px] relative flex flex-col items-center",
        cartTable: "lg:w-[800px] md:w-[700px] sm:w-full flex flex-col sm:p-[20px] md:p-[0px]",
        cartTitle: "text-black text-[55px] font-black uppercase mb-[30px]",
        totalResult: "lg:w-[800px] md:w-[700px] sm:w-full flex flex-col items-end mt-[30px]",
        cartInfo1: "w-full sm:hidden md:flex justify-between border-b-[1px] border-[#DDDDDD] pl-[20px]",
        cartItemWrapper: "w-[50%] text-[18px] text-black font-bold",
        cartWrapper009: "w-[50%] flex items-center justify-between",
        cartPriceNum: "w-[25%] text-black text-[18px] font-bold",
        cartPriceNumm: "w-[40%] text-black text-[18px] font-bold",
        totalResultData: "flex justify-between w-[350px] py-[10px] border-b-[1px] border-[#DDDDD]",
        totalResultDataIn: "text-[16px] font-normal text-black"
    }

    return (
        <div className={style.cart}>
            <p className={style.cartTitle}>Cart</p>
            <div className={style.cartTable}>
                <div id="navbarItem" className={style.cartInfo1}>
                    <div className={style.cartItemWrapper}>Item</div>
                    <div className={style.cartWrapper009}>
                        <div className={style.cartPriceNum}>Price</div>
                        <div className={style.cartPriceNumm}>Quantity</div>
                        <div className={style.cartPriceNum}>Total</div>
                    </div>
                </div>
                {
                    state.cart.map(item => (
                        <CartItem cartData={item} key={item.id} />
                    ))
                }
                <div className={style.totalResult}>
                    <div className={style.totalResultData}>
                        <p className={style.totalResultDataIn}>Products</p>
                        <p className={style.totalResultDataIn}>{total.totalQuantity}</p>
                    </div>
                    <div className={style.totalResultData}>
                        <p className={style.totalResultDataIn}>Total (EUR)</p>
                        <p className={style.totalResultDataIn}>{total.totalPrice + "€"}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default View;