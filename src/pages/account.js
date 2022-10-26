import "../styles/sign.css"
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfg";


const Account = () => {

    const profileImg = localStorage.getItem("photoURL")
    const profileName = localStorage.getItem("Name")
    const profileEmail = localStorage.getItem("Email")

    const style = {
        account: "w-[100%] py-[100px] flex flex-col items-center justify-center",
        profileImgWrapper: "w-[300px] h-[300px] rounded-[50%] overflow-hidden",
        profileImage:"w-full h-full object-cover object-center",
        profileName: "text-black text-[30px] font-bold uppercase my-[10px]",
        profileEmail: "text-black text-[20px] font-semibold",
        profileSignOutBtn: "mt-[30px]"
    }
    return(
        <div className={style.account}>
            <div className={style.profileImgWrapper}>
                <img className={style.profileImage} src={profileImg} alt="" />
            </div>
            <p className={style.profileName}>{profileName}</p>
            <p className={style.profileEmail}>{profileEmail}</p>
            <button onClick={() => (signOut(auth))} className={style.profileSignOutBtn} id="buttonSkewHover2">
                <p id="btnText2">Sign out</p>
            </button>
        </div>
    )
}

export default Account;