import axios from "axios";

const apiLocalURL = `${import.meta.env.VITE_BASEURL}/product`;
const region = import.meta.env.VITE_REGION;

async function createProductsPost(data) {
  try {
    const response = await axios.post(`${apiLocalURL}/create`, data, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    console.log("Respuesta del servidor", response.data);
    return response.data;
  } catch (error) {
    console.log("Error al enviar los datos:", error);
    throw error;
  }
}
// .then((res) => {
//     console.log('soy la data de respuesta:');
//     console.log(res.data);
// })
// .catch((err) => console.log(err));

/*Cambio giorgio no */
// function createProductsPost(data) {
//     axios.post(`${apiLocalURL}`, data)
//     .then((res) => {
//         console.log('soy la data de respuesta:');
//         console.log(res.data);
//     })
//     .catch((err) => console.log(err));

// }
function deleteProduct(id) {
  const _id = {
    _id: id,
  };
  console.log(_id);
  axios
    .delete(`${apiLocalURL}/delete/${id}`)
    .then((res) => {
      console.log(`Deleted product with id ${id}`);
      console.log(res.data);
    })
    .catch((err) => console.log(err));
}

function updateProduct(id) {
  console.log(id);
  axios
    .put(`${apiLocalURL}/update/${id._id}`, id)
    .then((res) => {
      console.log(`update product with id ${id}`);
      console.log(res.data);
    })
    .catch((err) => console.log(err));
}
async function getAllProducts() {
  const responseData = await axios.get(`${apiLocalURL}/getall/${region}`);
  return responseData.data;
}

async function testCookie() {
  const responseData = await axios.get(`${apiLocalURL}/testCookie`, {
    withCredentials: true,
  });
  return responseData.data;
}

async function getInStock() {
  const responseData = await axios.get(`${apiLocalURL}/getinstock/${region}`);
  return responseData.data;
}
async function getNoCustom() {
  const responseData = await axios.get(`${apiLocalURL}/getnocustom/${region}`);
  return responseData.data;
}

async function searchProduct(id) {
  console.log(id);
  const responseData = await axios
    .get(`${apiLocalURL}/get/${id._id}`)
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
  searchProduct,
  getInStock,
  getNoCustom,
  testCookie,
};
