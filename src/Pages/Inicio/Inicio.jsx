// import React from "react";
import NavLogin from "../../components/navs/UserNav/UserNav.jsx";
import InicioBnv from "../../components/Inicio-Bnv/Inicio-bnv.jsx";
import CarouselProducts from "../../components/Carousel/Carousel.jsx";

function InicioPage() {
	return (
		<>
			<div>
				<NavLogin></NavLogin>
				<InicioBnv></InicioBnv>
				<CarouselProducts />
			</div>
		</>
	);
}
export default InicioPage;
