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
    })
    .catch((err) => console.log(err));
}

export {
    registerPost,
    loginPost,
}