import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//     apiKey: "AIzaSyAGxV_UlJI8Votba7BhkU8rTV6_YBJslzk",
//     authDomain: "kokoai-f3cce.firebaseapp.com",
//     projectId: "kokoai-f3cce",
//     storageBucket: "kokoai-f3cce.appspot.com",
//     messagingSenderId: "1028587345494",
//     appId: "1:1028587345494:web:9b5b18c29873811d1d8df7",
//     measurementId: "G-TKMBD1MGBY"
// };
const firebaseConfig = {
    apiKey: "AIzaSyBTxBsY7BtJHaAENkNaDubgOcfP5gPkmQY",
    authDomain: "koko-ai-6766c.firebaseapp.com",
    projectId: "koko-ai-6766c",
    storageBucket: "koko-ai-6766c.appspot.com",
    messagingSenderId: "1032328726950",
    appId: "1:1032328726950:web:341f165c346dbd10b06767"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export default app;