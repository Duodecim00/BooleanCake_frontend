import NavLogin from '../../components/Inicio-Nav/Inicio-nav';
// import CakeList from '../../components/CakeList/CakeList';
import PostModal from "../../components/ModalAddProducts/ModalAddProducts.jsx";
import ShowProducts from '../../components/ShowAllProducts/ShowAllProducts.jsx';

const Products = () => {
    return (
      <div className="products-container">
        <NavLogin/>
        <h1 className="products-title">Productos</h1>
        <ShowProducts/>
        <PostModal/>
      </div>
    );
  };
  
  export default Products;