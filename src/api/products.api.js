import axios from "axios";

const region = import.meta.env.VITE_REGION;

const axiosInstanceProducts =  axios.create({   //Crear la instancia de axios
  baseURL: `${import.meta.env.VITE_BASEURL}/product`,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
} )

async function createProductsPost(data) {
  try {
    const response = await axiosInstanceProducts.post(`/create`, data);
    console.log("Respuesta del servidor", response.data);
    return response.data;
  } catch (error) {
    console.log("Error al enviar los datos:", error);
    throw error;
  }
}

function deleteProduct(id) {
  const _id = {
    _id: id,
  };
  console.log(_id);
  axiosInstanceProducts.delete(`/delete/${id}`)
    .then((res) => {
      console.log(`Deleted product with id ${id}`);
      console.log(res.data);
    })
    .catch((err) => console.log(err));
}

function updateProduct(id) {
  console.log(id);
  axiosInstanceProducts
    .put(`/update/${id._id}`, id)
    .then((res) => {
      console.log(`update product with id ${id}`);
      console.log(res.data);
    })
    .catch((err) => console.log(err));
}
async function getAllProducts() {
  const responseData = await axiosInstanceProducts.get(`/getall/${region}`);
  return responseData.data;
}

async function testCookie() {
  const responseData = await axiosInstanceProducts.get(`/testCookie`, {
    withCredentials: true,
  });
  return responseData.data;
}

async function getInStock() {
  const responseData = await axiosInstanceProducts.get(`/getinstock/${region}`);
  return responseData.data;
}
async function getNoCustom() {
  const responseData = await axiosInstanceProducts.get(`/getnocustom/${region}`);
  return responseData.data;
}

async function searchProduct(id) {
  console.log(id);
  const responseData = await axiosInstanceProducts
    .get(`/get/${id._id}`)
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
