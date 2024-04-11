import { useEffect, useState    } from 'react';
import './MenuList.css'
import ItemMenu from './ItemMenu';
import { getInStock,getNoCustom} from '../../Routes/products.routes';

function MenuList() {

    const [productData,setproductData] = useState([])
    useEffect(() => {
      handleProduct()
    },[]);

    async function handleProduct(){
        try {
            var products = await getInStock();
            setproductData(products.data)
        } catch (error) {
            console.error(error)
        }
}


    const product = productData.map( (item) =>(
        <ItemMenu name={item.name} url={item.image} price={item.price}/>
    ))
	return (
		<>
            <div>{product}</div>
		</>
	);
}
export default MenuList;
