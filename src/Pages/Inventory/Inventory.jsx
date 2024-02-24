import NavLogin from '../../components/Inicio-Nav/Inicio-nav';
import ModalIngredient from '../../components/ModalAddIngredients/ModalAddIngredients.jsx';
// import IngreList from '../../components/IngreList/IngreList.jsx'
import ShowIngredient from '../../components/ShowAllIngredients/ShowAllIngredients.jsx';

function Inventory(){

    return(
        <>
        <div className="products-container">
            <NavLogin/>
            {/* <IngreList/> */}
            <ShowIngredient/>
            <ModalIngredient/>
        </div>
        </>
    )
}

export default Inventory