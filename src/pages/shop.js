import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/productContext";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../firebase/firebaseConfg";
import "../styles/shop.css";
import Product from "../components/shopComponents/product";
import Category from "../components/shopComponents/category";


const Shop = () => {

    const [data, setData] = useState([])
    console.log("data>>>>>>", data)

    useEffect(() => {
        window.scrollTo(0, 0)
        const getData = async () => {
            const box = []
            const querySnapshot = await getDocs(collection(firestore, "products"));
            querySnapshot.forEach((doc) => box.push({ id: doc.id, data: doc.data() }));
            setData(box)
        }
        return () => {
            getData()
        }
    }, [])

    const style = {
        shop: "w-[100%] min-h-[400px] bg-white flex flex-col items-center py-[50px]",
        shopWrapper: "xl:w-[1200px] lg:w-[800px] sm:w-auto h-auto",
        categoryWrapper: "w-full flex items-center justify-between",
        productCardWrapper: "w-full h-auto grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 md:w-auto sm:grid-cols-1 place-items-center my-[30px]",
        shopTitle: "text-black text-[55px] font-black uppercase mb-[30px]"
    }

    return (
        <div className={style.shop}>
            <p className={style.shopTitle}>shop</p>
            <div id="bannerDescriptionDiv" className={style.shopWrapper}>
                <div className={style.categoryWrapper}>
                    <Category/>
                </div>
                <div id="cartWrapper" className={style.productCardWrapper}>
                    {
                        data.map(product => (
                            <Product product={product} key={product.id} />
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default Shop;