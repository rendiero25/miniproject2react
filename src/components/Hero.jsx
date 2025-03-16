import HeroImageMobile from '../assets/images/heroimagemobile.jpg';
import HeroImage from '../assets/images/heroimage.jpg';

import { useNavigate } from 'react-router-dom';

const Hero = () => {

    const navigate = useNavigate();

    const toProductDetails = () => {navigate('/product-details')};

    return(
        <section className='flex h-fit w-full'>
            <a href="" onClick={toProductDetails} className='w-'>
                <img src={HeroImageMobile} alt="heromobile-image" className='h-full w-full object-cover lg:hidden'/>
            </a>

            <div className='hidden lg:flex w-full h-full px-10'>
                <a href="" onClick={toProductDetails} className='w-full'>
                    <img src={HeroImage} alt="herodesktop-image" className='h-fit w-full object-fill'/>
                </a>
                
            </div>
        </section>
    )
}

export default Hero;