import axios from "axios";

const apiLocalURLOrder = `${import.meta.env.VITE_BASEURL}/order`;
const apiLocalURLCart = `${import.meta.env.VITE_BASEURL}/cart`;
const region = import.meta.env.VITE_REGION;
const axiosInstanceProducts =  axios.create({   //Crear la instancia de axios
    baseURL: `${import.meta.env.VITE_BASEURL}/product`,
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  } )
  

async function getCart() {
    const responseData = await axios.get(`${apiLocalURLCart}/${region}`)
    return responseData.data;
    
}
async function create(data) {
    try{
        const response = await axios.post(`${apiLocalURL}/create`, data, {
            headers: {
                "Content-Type":"application/json"
            }
            })
        console.log('Respuesta del servidor', response.data);
        return response.data;
    } catch(error){
        console.log('Error al enviar los datos:', error);
        throw error
    }
}

export {
    createProductsPost,
    getAllProducts,
    deleteProduct,
    updateProduct,
    searchProduct,
    getInStock,
    getNoCustom
}
