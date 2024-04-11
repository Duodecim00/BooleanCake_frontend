// import React from "react";
import MenuList from "../../components/MenuList/MenuList.jsx";
import Footer from "../../components/footer/Footer.jsx";
import NavLogin from "../../components/navs/UserNav/UserNav.jsx";

function MenuPage() {
	return (
		<>
			<div>
				<NavLogin/>
                <MenuList/>
                <Footer/>
			</div>
		</>
	);
}
export default MenuPage;
