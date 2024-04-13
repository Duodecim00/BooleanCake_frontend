import PageSingle from "../../components/PageSingle/PageSingle.jsx";
import Carousel from "../../components/Carousel/Carousel.jsx"
import Footer from "../../components/footer/Footer.jsx"
import RenderNav from '../../components/navs/RenderNav/RenderNav.jsx';

function PageSingleProduct(props) {
    return <>
        <div>
            <RenderNav/>
            <PageSingle></PageSingle>
            <Carousel></Carousel>
            <Footer></Footer>
        </div>
        </>
}

export default PageSingleProduct;