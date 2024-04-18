
import RenderNav from "../../components/navs/RenderNav/RenderNav.jsx";
import DataDelivery from "../../components/DataDelivery/DataDelivery.jsx";

function Bill(){
    return(
        <>
            <div>
                {/* <NavLogin></NavLogin> */}
                {/* <AdminNav></AdminNav> */}
                <RenderNav/>
                <DataDelivery/>
            </div>
        
        </>
    )
}
export default Bill;
