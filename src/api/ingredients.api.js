import axios from "axios";

const apiLocalURL = 'http://localhost:7338/api/v1/ingredient'; 

function createIngredient(data) {
    axios.post(`${apiLocalURL}`, data)
    .then((res) => {
        console.log('soy la data de respuesta:');
        console.log(res.data);
    })
    .catch((err) => console.log(err));
}
function deleteIngredient(id) {
    axios.delete(`${apiLocalURL}/deleteIngredient/${id}`)
    .then((res) => {
        console.log(`Deleted ingredient with id ${id}`);
        console.log(res.data);
    })
    .catch((err) => console.log(err));
}

function updateIngredient(id) {
    
    axios.put(`${apiLocalURL}/updateIngredient/${id._id}`, id)
    .then((res) => {
        console.log(`updated product with id ${id}`);
        console.log(res.data);
    })
    .catch((err) => console.log(err));
}
async function getAllIngredient() {
    const responseData = await axios.get(`${apiLocalURL}/getAllIngredients`)
    return responseData;
}

export {
    getAllIngredient,
    createIngredient,
    deleteIngredient,
    updateIngredient
}
