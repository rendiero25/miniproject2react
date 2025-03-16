import BannerwithButton from "./BannerwithButton";
import { useNavigate } from "react-router-dom";

import Banner1 from "../assets/images/theessentialsmen.jpg";
import Banner2 from "../assets/images/theessentialwomen.jpg";
import Banner3 from "../assets/images/theessentialskids.jpg";

const TheEssentials = () => {

    const navigate = useNavigate();

    const toMensProduct = () => {navigate('/men')};
    const toWomensProduct = () => {navigate('/women')};
    const toKidsProduct = () => {navigate('/kids')};

    return(
        <section className="flex flex-col justify-center items-center gap-4 px-6 xl:px-12">
            <div className="flex flex-col justify-center items-center gap-2">
                <h3 className="font-semibold text-xl">First Look</h3>
                <h2 className="font-black text-5xl 2xl:text-6xl text-center">FLIGHT ESSENTIALS</h2>
                <h4 className="font-medium text-lg text-center mt-4 max-w-2xl">Your built-to-last, all-week wears-but with style only Jordan Brand can deliver</h4>
            </div>
            <div className="flex flex-row justify-center items-center gap-4 mt-4">
                <button className="bg-black text-white rounded-full px-6 py-2 font-medium">Shop</button>
            </div>
            <div className='mt-10 flex flex-col gap-4 w-full'>
                <h3 className="font-semibold text-xl xl:text-2xl">The Essentials</h3>
                <div className="flex flex-col xl:flex-row gap-6 justify-center items-center">
                    <button onClick={toMensProduct}>
                        <a href="">
                            <BannerwithButton imageBannerwithButton={Banner1} altTextIwB="bannermen-image" nameButton="Men's" imageBannerwithButtonStyle={'w-screen hover:scale-103'}/>
                        </a>
                    </button>
                    <button onClick={toWomensProduct}>
                        <a href="">
                            <BannerwithButton imageBannerwithButton={Banner2} altTextIwB="bannerwomen-image" nameButton="Women's" imageBannerwithButtonStyle={"w-screen hover:scale-103"}/>
                        </a>
                    </button>
                    <button onClick={toKidsProduct}>
                        <a href="">
                            <BannerwithButton imageBannerwithButton={Banner3} altTextIwB="bannerkids-image" nameButton="Kid's" imageBannerwithButtonStyle={"w-screen hover:scale-103"}/>
                        </a>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default TheEssentials;