import axios from "axios";
import Cookies from "js-cookie";
import {createCookieRol, createCookieSession, destroyCookie} from "./cookie";
import { redirect } from "react-router";
import LoginPage from "../Pages/login/Login";

const apiLocalURL = `${import.meta.env.VITE_BASEURL}/user`

function registerPost(data) {
    axios.post(`${apiLocalURL}/create`, data)
    .then((res) => {
        console.log('soy la data de respuesta:');
        console.log(res.data);
    })
    .catch((err) => console.log(err));
}
function loginPost(data) {
    axios.post(`${apiLocalURL}/login`, data)
    .then((res) => {
        console.log('soy la data de respuesta:');
        console.log(res.data);
        createCookieSession(res.data.cookie)
        createCookieRol(res.data.role)
        // console.log('soy la cookie rol',Cookies.get('rol'));
        console.log('soy la cookie session',Cookies.get('session'));
        
    })
    .catch((err) => console.log(err));
}


function updateUser(data) {
    axios.put(`${apiLocalURL}/update`, data)
    .then((res) => {
        console.log('Datos de usuario actualizados con éxito:');
        console.log(res.data);
    })
    .catch((err) => console.log(err));
}

 async function logoutUser() {
    try {
        // Destruye las cookies solo después de una respuesta exitosa del servidor
        destroyCookie();
        
    } catch (error) {
        console.error('Error al cerrar sesión:', error);
        throw error; // Propaga el error para ser manejado por el caller
    }
}
  export { registerPost, loginPost, updateUser, logoutUser };