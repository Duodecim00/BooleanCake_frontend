import axios from "axios";

const apiLocalURL = 'http://localhost:7338/api/v1/user'; 

function registerPost(data) {
    axios.post(`${apiLocalURL}`, data)
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
    return new Promise(async (resolve, reject) => {
      try {
        await axios.delete(`${apiLocalURL}/logout`, { withCredentials: true });
        // Aquí puedes manejar acciones adicionales después del cierre de sesión, como redirigir al usuario
        resolve();
      } catch (error) {
        console.error('Error al cerrar sesión:', error);
        reject(error); // Propaga el error para manejarlo en el componente
      }
    });
  }


export { registerPost, loginPost, updateUser, logoutUser };



