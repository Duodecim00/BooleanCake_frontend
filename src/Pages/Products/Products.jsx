import NavLogin from '../../components/Inicio-Nav/Inicio-nav';
import CakeList from '../../components/CakeList/CakeList';
import PostModal from "../../components/ModalAddProducts/ModalAddProducts.jsx";

const Products = () => {
    return (
      <div className="products-container">
        <NavLogin/>
        <h1 className="products-title">Productos</h1>
        <CakeList/>
        <PostModal/>
      </div>
    );
  };
  
  export default Products;