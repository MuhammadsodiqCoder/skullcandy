import { Link, useLocation } from "react-router-dom";
import "../../styles/shop.css"

function Product({ product }) {

    const location = useLocation()
    console.log(location)

    const style = {
        card: "w-[360px] h-[450px] m-[10px] flex flex-col items-center",
        cardImageWrapper: "w-full h-[300px] rounded-[10px] overflow-hidden",
        productImage: "w-full h-full hover:scale-[1.05] duration-[.4s] object-cover object-center",
        productInformation: "w-full h-[150px] flex flex-col items-center justify-center",
        productInformationText: "text-[15px] font-normal text-black my-[5px] capitalize",
        typesOfProducts: "flex items-center",
        typesOfProductsImgWrapper: "w-[40px] h-[40px] rounded-[5px] overflow-hidden",
        typesOfProductsImg: "w-full h-full object-cover object-center"
    }

    return (
        <Link  id="imgSingle" state={product} to={`/single-page/${product.id}`} className={style.card}>
            <div className={style.cardImageWrapper}>
                <img className={style.productImage} src={product.data.productImg} alt="" />
            </div>
            <div className={style.productInformation}>
                <div className={style.typesOfProducts}>
                    <div className={style.typesOfProductsImgWrapper}>
                        <img id="img03" className={style.typesOfProductsImg} src={product.data.productImg} alt="" />
                    </div>
                </div>
                <p className={style.productInformationText}>{product.data.productName}</p>
                <p className={style.productInformationText}>{product.data.productPrice + "€"} </p>
            </div>
        </Link>
    )
}

export default Product;