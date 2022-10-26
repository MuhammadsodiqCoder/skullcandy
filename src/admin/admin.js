import { List } from "react-bootstrap-icons"
import { IoAirplaneOutline } from "react-icons/io5"
import { FaRegStickyNote } from "react-icons/fa";
import { MdOutlineSell } from "react-icons/md"
import { VscSignOut } from "react-icons/vsc";
import { FiSettings } from "react-icons/fi";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfg";
import { useState } from "react";
import { TbCameraPlus } from "react-icons/tb";
import { storage, firestore } from "../firebase/firebaseConfg";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import "../styles/sign.css"
import { addDoc, collection } from "firebase/firestore";
import {useNavigate } from "react-router-dom";

function Admin() {

    const [nav, setNav] = useState(true)
    const navigate3 = useNavigate()

    const AddProduct = async (e) => {
        e.preventDefault();
        const productName = e.target[0].value;
        const productDescription = e.target[1].value;
        const productImg = e.target[2].files[0];
        const productPrice = e.target[3].value;

        try {
            const storageRef = ref(storage, productName);
            const uploadTask = uploadBytesResumable(storageRef, productImg);
            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log("upload is" + Math.floor(progress) + "% done");
                    switch (snapshot.state) {
                        case "paused":
                            console.log("upload is paused")
                            break;
                        case "running":
                            console.log("upload is running");
                            break;
                    }
                },
                (error) => {
                    console.log(error)
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                        await addDoc(collection(firestore, "products"), {
                            productName: productName,
                            productDescription: productDescription,
                            productImg: downloadURL,
                            productPrice: productPrice,
                        })
                        navigate3("/shop")
                    })
                }
            )
        } catch (error) {
            console.log(error)
        }
    }

    function onSelect(e) {
        if (e.files.length > 5) {
            alert("Only 5 files accepted.");
            e.preventDefault();
        }
    }

    const style = {
        admin: "w-[100%] h-auto flex p-[20px] bg-[#eaebec]",
        mainNavigation: "w-[300px] duration-[.5s] h-[100%] bg-white mr-[20px] rounded-[15px] p-[20px] flex flex-col",
        dashboard: "w-full h-full flex bg-white rounded-[15px] p-[30px]",
        adminCollection: "list-none mt-[20px]",
        menuIconNav: "m-[10px] cursor-pointer text-[20px]",
        adminItem: "w-[100%] h-[40px] flex items-center hover:bg-[#eaebec] duration-[.1s] cursor-pointer rounded-[5px] my-[7px] px-[10px]",
        adminItemIcon1: "text-[22px] text-[#4d4d4d]",
        adminItemIcon2: "text-[19px] text-[#4d4d4d]",
        adminItemIconBox: "w-[40px] h-[40px] flex items-center",
        adminItemText: `text-[#4d4d4d] text-[14px] origin-left duration-[.3s] font-semibold ${nav ? "scale-x-[1] opacity-[1] delay-[.3s]" : "scale-x-[0] opacity-[0]"}`,
        addProductTitle: "text-[#4d4d4d] text-[20px] uppercase font-extrabold",
        addProductWrapper: "flex flex-col items-start w-[400px]",
        productInp: "w-full h-[50px] bg-[#F6F6F6] border-[#DDDDDD] border-[1px] outline-none focus:border-[#4d4d4d] px-[30px] text-black text-[15px] font-normal",
        productTopText: "text-black text-[14px] mt-[20px] mb-[5px]",
        productDescription: "bg-[#F6F6F6] w-full border-[#DDDDDD] border-[1px] outline-none focus:border-[#4d4d4d] text-black text-[15px] font-normal p-[10px]",
        productLabel: "w-full h-[50px] bg-[#F6F6F6] border-[#DDDDDD] border-[1px] flex items-center justify-center",
        productPlusCameraIcon: "text-[#4d4d4d] text-[30px]",
        productBtn: "mt-[30px]",
    }

    return (
        <div className={style.admin}>
            <div style={{ width: `${nav ? "300px" : "80px"}` }} className={style.mainNavigation}>
                <div onClick={() => setNav(!nav)} className={style.menuIconNav}><List /></div>
                <ul className={style.adminCollection}>
                    <li className={style.adminItem}>
                        <div className={style.adminItemIconBox}>
                            <IoAirplaneOutline className={style.adminItemIcon1} />
                        </div>
                        <p className={style.adminItemText}>Dashboard</p>
                    </li>
                    <li className={style.adminItem}>
                        <div className={style.adminItemIconBox}>
                            <FaRegStickyNote className={style.adminItemIcon2} />
                        </div>
                        <p className={style.adminItemText}>Pages</p>
                    </li>
                    <li className={style.adminItem}>
                        <div className={style.adminItemIconBox}>
                            <MdOutlineSell className={style.adminItemIcon1} />
                        </div>
                        <p className={style.adminItemText}>Sell</p>
                    </li>
                    <li className={style.adminItem}>
                        <div className={style.adminItemIconBox}>
                            < FiSettings className={style.adminItemIcon1} />
                        </div>
                        <p className={style.adminItemText}>Settings</p>
                    </li>
                    <button onClick={() => signOut(auth)} className={style.adminItem}>
                        <div className={style.adminItemIconBox}>
                            <VscSignOut className={style.adminItemIcon1} />
                        </div>
                        <p className={style.adminItemText}>Sign out</p>
                    </button>
                </ul>
            </div>
            <div className={style.dashboard}>
                <form onSubmit={AddProduct} className={style.addProductWrapper}>
                    <p className={style.addProductTitle}>Add Product</p>
                    <p className={style.productTopText}>Product name</p>
                    <input className={style.productInp} type="text" />
                    <p className={style.productTopText}>About product</p>
                    <textarea className={style.productDescription} name="" id="" cols="30" rows="5"></textarea>
                    <p className={style.productTopText}>Product Image</p>
                    <label className={style.productLabel} htmlFor="productImg"><TbCameraPlus className={style.productPlusCameraIcon} /></label>
                    <input className="hidden" id="productImg" type="file" name="" />
                    <p className={style.productTopText}>Product price</p>
                    <input className={style.productInp} type="number" />
                    <button id="buttonSkewHover2" className={style.productBtn} type="submit">
                        <p id="btnText2">Add Product</p>
                    </button>
                </form>
            </div>
        </div>
    )
}


export default Admin;