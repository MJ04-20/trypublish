import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider} from "firebase/auth";
import { getFirestore} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCQqNs3zi9N_XnM8LN_k10SwzAlGAH657c",
  authDomain: "settle-in-e3fcc.firebaseapp.com",
  projectId: "settle-in-e3fcc",
  storageBucket: "settle-in-e3fcc.appspot.com",
  messagingSenderId: "326711083937",
  appId: "1:326711083937:web:753b2a43802d0ccad041e0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();