import "../../styles/shop.css"

const Category = () => {

    const style = {
        category: "w-full xl:grid-cols-5 lg:grid lg:grid-cols-2 sm:flex-col xl:flex-row sm:gap-y-[10px] lg:gap-[10px] flex justify-between",
        sortBy: "xl:w-[300px]sm:w-full h-[50px] border-b-[1px] border-gray-400 flex items-center px-[10px]",
        categorySelect: "outline-none w-full text-black text-[14px] font-light uppercase h-full ml-[10px]",
        labelForCategory: "text-black text-[14px] font-light"
    }

    return (
        <div id="category" className={style.category}>
            <button id="buttonSkewHover4">
                <p id="btnText4">true wireless</p>
            </button>
            <button id="buttonSkewHover4">
                <p id="btnText4">earbuds</p>
            </button>
            <button id="buttonSkewHover4">
                <p id="btnText4">headphones</p>
            </button>
            <button id="buttonSkewHover4">
                <p id="btnText4">sale</p>
            </button>
            <div className={style.sortBy}>
                <label className={style.labelForCategory} htmlFor="select">SORT:</label>
                <select id="select" className={style.categorySelect} name="">
                    <option className={style.categoryOption} value="headsets">featured items</option>
                    <option className={style.categoryOption} value="phone">newest items</option>
                    <option className={style.categoryOption} value="television">best selling</option>
                    <option className={style.categoryOption} value="chair">a to Z</option>
                    <option className={style.categoryOption} value="chair">z to a</option>
                    <option className={style.categoryOption} value="chair">by review</option>
                    <option className={style.categoryOption} value="chair">price low to high</option>
                    <option className={style.categoryOption} value="chair">price high to low</option>
                </select>
            </div>
        </div>
    )
}

export default Category;