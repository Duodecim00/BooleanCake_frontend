// import dotenv from 'dotenv';
// dotenv.config({
//     // path: path.resolve(__dirname, process.env.NODE_ENV + '.env')
//   });
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage, ref, uploadBytes} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: process.env.APIKEY,
    // authDomain: process.env.AUTHDOMAIN,
    // projectId: process.env.PROJECTID,
    // storageBucket: process.env.STORAGEBUCKET,
    // messagingSenderId: process.env.MESSAGINGSENDER,
    // appId: process.env.APPID
};

export function uploadFile(file) {
    const storageRef = ref(storage, 'una-fotico')
    uploadBytes(storageRef, file).then(snapshot => {
        console.log(snapshot);
    })
    
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);