import FeaturedImage from '../assets/images/featuredimage.jpg';
import Banner from './Banner';

const Featured = () => {
    return(
        <section className="flex flex-col justify-center items-center gap-4 px-6 xl:px-10">
            <h3 className="font-semibold text-xl xl:text-2xl self-start">Featured</h3>
            <Banner imageBanner={FeaturedImage} altText="featured-image"/>
        </section>
    )
}

export default Featured;