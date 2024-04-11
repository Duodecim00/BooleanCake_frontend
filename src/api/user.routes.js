import axios from "axios";
import Cookies from "js-cookie";
import {createCookieRol, createCookieSession, destroyCookie} from "./cookie";


const apiLocalURL = 'http://localhost:7338/api/v1/user'; 
// const apiPruebaBaseURL = 'https://reqres.in/api';

// function registerPost(data) {
//     axios.post(`${apiPruebaBaseURL}/register`, data)
//     .then((res) => {
//         console.log('soy la data de respuesta:');
//         console.log(res.data);
//     })
//     .catch((err) => console.log(err));
// }
function registerPost(data) {
    axios.post(`${apiLocalURL}/create`, data)
    .then((res) => {
        console.log('soy la data de respuesta:');
        console.log(res.data);
    })
    .catch((err) => console.log(err));
}

// function loginPost(data) {
//     axios.post(`${apiPruebaBaseURL}/login`, data)
//     .then((res) => {
//         console.log('soy la data de respuesta:');
//         console.log(res.data);
//     })
//     .catch((err) => console.log(err));
// }
function loginPost(data) {
    axios.post(`${apiLocalURL}/login`, data)
    .then((res) => {
        console.log('soy la data de respuesta:');
        console.log(res.data);
        createCookieSession(res.data.cookie)
        createCookieRol(res.data.role)
        console.log('soy la cookie rol',Cookies.get('rol'));
        console.log('soy la cookie session',Cookies.get('session'));
        // console.log(res.data.role)
        // console.log(res.data.cookie)
        
    })
    .catch((err) => console.log(err));
}

function logout() {
    
}

export {
    registerPost,
    loginPost,
    logout
}