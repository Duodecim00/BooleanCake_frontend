import { v4 } from "uuid";
import { initializeApp } from "firebase/app";
import {getDownloadURL,getMetadata ,getStorage, ref, uploadBytes} from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_APIKEY,
    authDomain: import.meta.env.VITE_AUTHDOMAIN,
    projectId: import.meta.env.VITE_PROJECTID,
    storageBucket: import.meta.env.VITE_STORAGEBUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGINGSENDER,
    appId: import.meta.env.VITE_APPID
};
const metaData = {
    contentType: 'image/jpeg'
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
// const namePicture = v4();


export async function uploadFile(file) {
    // const storageRef = ref(storage, v4()+ `.png`)
    const storageRef = ref(storage, v4())
    const xd = await uploadBytes(storageRef, file)
    console.log('soy xd:', xd);
    console.log('soy xd:', xd);
    const url = await getDownloadURL(xd.ref)
    console.log('soy la url en la funcion:',url);
    return url      
}