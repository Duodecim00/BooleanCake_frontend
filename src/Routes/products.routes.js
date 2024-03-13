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
function deleteProduct(id) {
    const _id = {
        "_id":id
    }
    console.log(_id);
    axios.delete(`${apiLocalURL}/delete/${id}`)
    .then((res) => {
        console.log(`Deleted product with id ${id}`);
        console.log(res.data);
    })
    .catch((err) => console.log(err));
}

function updateProduct(id) {
    console.log(id);
    axios.put(`${apiLocalURL}/update/${id._id}`, id)
    .then((res) => {
        console.log(`update product with id ${id}`);
        console.log(res.data);
    })
    .catch((err) => console.log(err));
}
async function getAllProducts() {
    const responseData = await axios.get(`${apiLocalURL}/getall/USA`)
    return responseData;
}

async function searchProduct(id) {
    console.log(id);
    const responseData = await axios.get(`${apiLocalURL}/get/${id._id}`)
    .then((res) => {
        console.log(`encontre producto with id ${id}`);
        console.log(res.data);
    })
    .catch((err) => console.log(err));

    return responseData;
}

export {
    createProductsPost,
    getAllProducts,
    deleteProduct,
    updateProduct,
    searchProduct
}


