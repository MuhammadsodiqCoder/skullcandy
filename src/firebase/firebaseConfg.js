import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getStorage} from "firebase/storage";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAOXCLVPig8R0sLhh0ty3wtBA6UWTjCJx0",
  authDomain: "skullcandy-1b1e9.firebaseapp.com",
  projectId: "skullcandy-1b1e9",
  storageBucket: "skullcandy-1b1e9.appspot.com",
  messagingSenderId: "1043944034537",
  appId: "1:1043944034537:web:28f1567a1d122730d06078"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const firestore = getFirestore()
