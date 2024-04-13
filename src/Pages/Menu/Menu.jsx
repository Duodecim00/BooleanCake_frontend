// import React from "react";
import MenuList from "../../components/MenuList/MenuList.jsx";
import Footer from "../../components/footer/Footer.jsx";
import NavLogin from "../../components/navs/UserNav/UserNav.jsx";

function MenuPage() {
	return (
		<>
			<div>
			{/* Tiene nav login y no render porque la vista no esta terminada y va a ir en una ruta exclusiva para usuarios */}
				<NavLogin/>
                <MenuList/>
                <Footer/>
			</div>
		</>
	);
}
export default MenuPage;
