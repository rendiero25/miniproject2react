import Banner from './Banner';
import DontMissImage from '../assets/images/dontmissimage.jpg';

const DontMiss = () => {
    return(
        <section className="flex flex-col justify-center items-center gap-4 px-6 xl:px-10">
            <h3 className="font-semibold text-xl xl:text-2xl self-start">Don't Miss</h3>
            <Banner imageBanner={DontMissImage} altText="dontmiss-image" />
        </section>
    )
}

export default DontMiss;