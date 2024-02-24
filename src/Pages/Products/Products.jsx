import AdminNav from '../../components/AdminNav/AdminNav.jsx';
import PostModal from "../../components/ModalAddProducts/ModalAddProducts.jsx";
import ShowProducts from '../../components/ShowAllProducts/ShowAllProducts.jsx';


const Products = () => {
    return (
      
      <div>
        <AdminNav></AdminNav>
        <ShowProducts/>
        <PostModal/>
      </div>

        
    );
  };
  
  export default Products;