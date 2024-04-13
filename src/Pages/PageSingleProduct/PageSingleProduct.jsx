import React from 'react';
import NavLogin from "../../components/navs/UserNav/UserNav.jsx";
import PageSingle from "../../components/PageSingle/PageSingle.jsx";
import Carousel from "../../components/Carousel/Carousel.jsx"
import Footer from "../../components/footer/Footer.jsx"

function PageSingleProduct(props) {
    return <>
        <div>
            <NavLogin></NavLogin>
            <PageSingle></PageSingle>
            <Carousel></Carousel>
            <Footer></Footer>
        </div>
        </>
}

export default PageSingleProduct;