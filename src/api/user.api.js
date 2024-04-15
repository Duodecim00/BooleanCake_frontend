import axios from "axios";
import Cookies from "js-cookie";
import {createCookieRol, createCookieSession, destroyCookie} from "./cookie";

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



  // Función para cerrar sesión del usuario
  function logoutUser() {
    /*
    destroy cookie esta afuera y antes del try porque no funciona el logout, cuaando lo
    arregles pones el destroy despues de la peticion al backend, porque lo importante es deshacer la session del backend
    y despues la del front
    */

    // lee el comentario el primer comentario DENTRO DE LA FUNCION
    destroyCookie();
    return new Promise(async (resolve, reject) => {
        try {
            await axios.delete(`${apiLocalURL}/logout`, { withCredentials: true });
            // lee el comentario el primer comentario DENTRO DE LA FUNCION
        // Aquí puedes manejar acciones adicionales después del cierre de sesión, como redirigir al usuario
        resolve();
      } catch (error) {
          // lee el comentario el primer comentario DENTRO DE LA FUNCION
        console.error('Error al cerrar sesión:', error);
        reject(error); // Propaga el error para manejarlo en el componente
    }
});
  }
  export { registerPost, loginPost, updateUser, logoutUser };