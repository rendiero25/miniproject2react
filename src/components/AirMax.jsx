import SwiperImage from "./SwiperImage";

import ShoesImage1 from "../assets/images/shoes1.jpg";
import ShoesImage2 from "../assets/images/shoes2.jpg";
import ShoesImage3 from "../assets/images/shoes3.jpg";
import ShoesImage4 from "../assets/images/shoes4.jpg";
import ShoesImage5 from "../assets/images/shoes5.jpg";

const AirMax = () => {
    return(
        <section className="flex flex-col justify-center items-center gap-4 px-6 mt-16">
            <div className="flex flex-col justify-center items-center gap-2">
                <h3 className="font-semibold text-xl">First Look</h3>
                <h2 className="font-black text-5xl 2xl:text-6xl 3xl:text-7xl text-center">NIKE AIR MAX PULSE</h2>
                <h4 className="font-medium text-lg text-center mt-4 max-w-2xl">Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
                    —designed to push you past your limits and help you go to the max.</h4>
            </div>
            <div className="flex flex-row justify-center items-center gap-4 mt-4">
                <button className="bg-black text-white rounded-full px-6 2xl:px-8 py-2 2xl:py-4 font-medium">Notify Me</button>
                <button className="bg-black text-white rounded-full px-6 2xl:px-8 py-2 2xl:py-4 font-medium">Shop Air Max</button>
            </div>
            <div className='flex flex-col gap-4 mt-10 xl:mt-16'>
                <h3 className="font-semibold text-xl xl:text-2xl px-6 xl:px-10 self-start">Best of Air Max</h3>
                <div className="w-screen px-6 xl:px-10">
                    <SwiperImage 
                        Item1={ShoesImage1} Item1Name={"Nike Air Max Pulse"} Item1Type={"Women's Shoes"} Item1Price={"$500"} Item1Style={'w-[25vh sm:w-auto'} Item1ImageSize={'w-full'} 
                        Item2={ShoesImage2} Item2Name={"Nike Air Max 97 SE"} Item2Type={"Men's Shoes"} Item2Price={"$400"} Item2Style={'w-[25vh sm:w-auto'} Item2ImageSize={'w-full'}
                        Item3={ShoesImage3} Item3Name={"Nike Air Max Force 1 Mid 07"} Item3Type={"Men's Shoes"} Item3Price={"$560"} Item3Style={'w-[25vh sm:w-auto'} Item3ImageSize={'w-full'}
                        Item4={ShoesImage4} Item4Name={"Nike Air Max Force 1 React"} Item4Type={"Men's Shoes"} Item4Price={"$1200"} Item4Style={'w-[25vh sm:w-auto'} Item4ImageSize={'w-full'}
                        Item5={ShoesImage5} Item5Name={"Nike Air Max Elevate Low"} Item5Type={"Women's Shoes"} Item5Price={"$780"} Item5Style={'w-[25vh sm:w-auto'} Item5ImageSize={'w-full'}/>
                </div>
            </div>
        </section>
    )
}

export default AirMax;