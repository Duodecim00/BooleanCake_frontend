import axios from "axios";

const apiLocalURL = 'http://localhost:7338/api/v1/product'; 

function createProductsPost(data) {
    axios.post(`${apiLocalURL}/create`, data)
    .then((res) => {
        console.log('soy la data de respuesta:');
        console.log(res.data);
    })
    .catch((err) => console.log(err));
}

export {
    createProductsPost
}