import "../styles/sign.css";
import {Link, useNavigate} from "react-router-dom";
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../firebase/firebaseConfg";
import { useState } from "react";

const Login = () => {

    const style = {
        login: "w-[100%] h-auto bg-white px-[8%] py-[100px] flex flex-col items-center justify-center",
        loginWrapper: "w-full sm:h-auto lg:h-[350px] sm:flex sm:flex-col lg:flex-row lg:flex items-center justify-between",
        loginWrapperLeft: "sm:mb-[30px] sm:w-full lg:w-[47%] flex flex-col",
        loginInput: "w-full h-[50px] bg-[#F6F6F6] border-[#DDDDDD] border-[1px] outline-none focus:border-[#4d4d4d] px-[30px] text-black text-[15px] font-normal",
        loginWrapperRight: "sm:w-[100%] py-[10px] lg:w-[47%] h-full bg-[#DDDDDD] flex flex-col justify-center items-start sm:p-[20px] lg:pl-[50px]",
        btnWrapper: "w-full flex justify-center items-center mt-[25px]",
        loginInputEmailText: "text-black text-[14px] mb-[10px]",
        loginInputPasswordText: "text-black text-[14px] mt-[30px] mb-[10px]",
        authTitle: "text-black text-[55px] font-black uppercase mb-[30px]",
        forgotPassword: "text-black text-[14px] ml-[20px]",
        loginWrapperRightTitle: "text-black text-[16px] font-extrabold uppercase mb-[15px]",
        loginWrapperRightPara: "text-black text-[14px] font-normal",
        signCollection: "list-disc text-black ml-[40px] my-[5px] list-outside",
        signCollectionItem: "text-[14px] font-normal"
    }

    const navigate = useNavigate();
    const [error, setError] = useState(false)

    const Login =  async(e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;

        try {
            await signInWithEmailAndPassword(auth, email, password)
            navigate("/")
        } catch (error) {
            setError(true)
        }
    }



    return (
        <div className={style.login}>
            <p className={style.authTitle}>Sign In</p>
            <div className={style.loginWrapper}>
                <form onSubmit={Login} className={style.loginWrapperLeft}>
                    <p className={style.loginInputEmailText}>Email Address:</p>
                    <input className={style.loginInput} type="email" name="" />
                    <p className={style.loginInputPasswordText}>Password:</p>
                    <input className={style.loginInput} type="password" name="" />
                    <div id="btnWrapper" className={style.btnWrapper}>
                        <button type="submit" id="buttonSkewHover2">
                            <p id="btnText2">sign in</p>
                        </button>
                        <p id="forget" className={style.forgotPassword}>Forgot your password?</p>
                    </div>
                </form>
                <div id="loginBox" className={style.loginWrapperRight}>
                    <p className={style.loginWrapperRightTitle}>new customer?</p>
                    <p className={style.loginWrapperRightPara}>Create an account with us and you'll be able to:</p>
                    <ul className={style.signCollection}>
                        <li className={style.signCollectionItem}>Check out faster</li>
                        <li className={style.signCollectionItem}>Save multiple shipping addresses</li>
                        <li className={style.signCollectionItem}>Access your order history</li>
                        <li className={style.signCollectionItem}>Track new orders</li>
                    </ul>
                        <Link to="/create-account" id="buttonSkewHover2" className="mt-[20px]">
                            <p id="btnText2">create account</p>
                        </Link>
                </div>
            </div>
        </div>
    )
}

export default Login;