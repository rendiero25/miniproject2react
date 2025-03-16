import { useNavigate } from "react-router-dom";

const Banner = ({imageBanner, altText}) => {
    
    const navigate = useNavigate();

    const toProductDetails = () => {navigate('/product-details')};
    
    return(
        <section>
            <a href="" onClick={toProductDetails}>
                <img src={imageBanner} alt={altText} className="w-screen h-auto" />
            </a>
        </section>
    )
}

export default Banner;