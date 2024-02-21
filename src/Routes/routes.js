import axios from "axios";

const apiPruebaURL = 'https://reqres.in/api/register';

function registerPost(data) {
    axios.post(apiPruebaURL, data)
    .then((res) => {
        console.log('soy la data de respuesta:');
        console.log(res.data);
    })
    .catch((err) => console.log(err));
}



export {
    registerPost,
}