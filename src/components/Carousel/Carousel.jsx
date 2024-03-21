
import Carousel from "react-multi-carousel";
import { useState, useEffect } from 'react';
import "react-multi-carousel/lib/styles.css";
import ProductCarousel from "./ProductCarousel";
import "../Carousel/Carousel.css"
import { getAllProducts } from "../../Routes/products.routes";


export default function CarouselProducts(){

   async function handleProduct(){
           try {
            var products = await getAllProducts()
        

          setproductData(products.data)
         
   
          } catch (error) {
            console.error(error)
         }
  
          //setproductData(getAllProducts())
          //console.log("qwertyuiop")
          //console.log(productData)
  
   }

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 1024 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 1024, min: 800 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 800, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };


      const [productData,setproductData] = useState([])

      useEffect(() => {
        handleProduct()
      },[]);

      const product = productData.map( (item) =>(
        <ProductCarousel name={item.name} url={item.image} price={item.price}/>
      ))

      return(
        <div className="carousel_container">
            <h1 className="title_products">Magdalenas</h1>
            <Carousel responsive={responsive} itemClass="carousel-item-padding-40-px">
                {product}
            </Carousel>
        </div>
        
      );

}
