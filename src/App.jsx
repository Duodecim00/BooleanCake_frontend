import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import InicioPage from './Pages/Inicio/Inicio.jsx';
import RegPage from './Pages/Register/Register.jsx';
import LoginPage from './Pages/login/Login.jsx';
import ProfilePage from './Pages/profile/profile.jsx';
import Products from './Pages/Products/Products.jsx'
import Inventory from './Pages/Inventory/Inventory.jsx';
import SplashScreen from './components/splashScreen/SplashScreen.jsx';
import { ProtectedRoute } from './components/ProtectedRoutes/ProtectedRoutes.jsx';
import Testfb from './Pages/test/testfirebase.jsx';
import Cookies from 'js-cookie';
import MenuPage from './Pages/Menu/Menu.jsx';
import AboutusPage from './Pages/Aboutus/Aboutus.jsx';
import PageSingleProduct from './Pages/PageSingleProduct/PageSingleProduct.jsx'
import ContactoPage from './Pages/Contacto/Contacto.jsx';
import SabesLoPeorPage from './Pages/SabesLoPeor/SabesLoPeor.jsx';
import CartPage from './Pages/Cart/Cart.jsx';
import Bill from './Pages/Bill/Bill.jsx';


function App() {
  return (
    <>
        <SplashScreen/>        
        <Router>
          <Routes>
            <Route exact path="/registro" element={<RegPage/>}/>
            <Route exact path="/login" element={<LoginPage/>}/>
            <Route exact path="/" element={<InicioPage/>}/>
            <Route exact path="/aboutus" element={<AboutusPage/>}/>
            <Route exact path="/test" element={<Testfb/>}/>
            <Route exact path="/bill" element={<Bill/>}/>
            <Route exact path="/contact" element={<ContactoPage />} />
            <Route exact path="/sabeslopeor" element={<SabesLoPeorPage />} />  
            
            {/*Vistas generales  */}
            <Route element={<ProtectedRoute isAllowed={Cookies.get("rol")} rol={Cookies.get("rol")}/>}>
              <Route exact path="/profile" element={<ProfilePage/>}/>
              <Route exact path="/cart" element={<CartPage/>}/>
            </Route>   

          {/* Rutas exclusivas para admin */}
          <Route
            element={
              <ProtectedRoute
                isAllowed={
                  Cookies.get("role") && Cookies.get("role") == "admin"
                }
                rol={Cookies.get("role")}
              />
            }
          >
            <Route exact path="/adminInventory" element={<Inventory />} />
            <Route exact path="/products" element={<Products />} />
          </Route>
          {/* Rutas exclusivas de rider */}
          <Route
            element={
              <ProtectedRoute
                isAllowed={
                  Cookies.get("role") && Cookies.get("role") == "rider"
                }
                rol={Cookies.get("role")}
              />
            }
          ></Route>
          <Route exact path="/menu" element={<MenuPage />} />
          <Route
            exact
            path="/singleproduct/:id"
            element={<PageSingleProduct />}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
