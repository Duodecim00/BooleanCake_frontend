import {Navigate, Outlet} from 'react-router-dom';

export const ProtectedRoute = ({isAllowed, rol, children}) => {
//comprobar usuario y rol,  
// comprobar si el rol corresponde a la vista sino redirige a landing

    if (!isAllowed) {
        if(!rol){
            return <Navigate to={"/login"}/>
            
        }else {
            return <Navigate to={"/"}/>

        }
    }

    return children ? children : <Outlet/>
}
