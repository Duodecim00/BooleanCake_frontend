import AdminNav from '../../components/navs/AdminNav/AdminNav.jsx';
import ModalIngredient from '../../components/ModalAddIngredients/ModalAddIngredients.jsx';

import ShowIngredient from '../../components/ShowAllIngredients/ShowAllIngredients.jsx';

function Inventory(){

    return(
        <>
            <div className="products-container">
                <AdminNav/>
                <ShowIngredient/>
                <ModalIngredient/>
            </div>
        </>
    )
}

export default Inventory