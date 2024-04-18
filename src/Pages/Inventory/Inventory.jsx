import ModalIngredient from '../../components/ModalAddIngredients/ModalAddIngredients.jsx';
import ShowIngredient from '../../components/ShowAllIngredients/ShowAllIngredients.jsx';
import RenderNav from '../../components/navs/RenderNav/RenderNav.jsx';

function Inventory(){

    return(
        <>
            <div className="products-container">
                <RenderNav/>
                <ModalIngredient/>
                <ShowIngredient/>
            </div>
        </>
    )
}

export default Inventory