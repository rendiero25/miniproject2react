import SwiperImage from "./SwiperImage";

import MenGear1 from '../assets/images/gearupmen1.jpg';
import MenGear2 from '../assets/images/gearupmen2.jpg';
import MenGear3 from '../assets/images/gearupmen3.jpg';
import MenGear4 from '../assets/images/gearupmen4.jpg';
import MenGear5 from '../assets/images/gearupmen5.jpg';
import WomenGear1 from '../assets/images/gearupwomen1.jpg';
import WomenGear2 from '../assets/images/gearupwomen2.jpg';
import WomenGear3 from '../assets/images/gearupwomen3.jpg';
import WomenGear4 from '../assets/images/gearupwomen4.jpg';
import WomenGear5 from '../assets/images/gearupwomen5.jpg';

const Gear = () => {
    return(
        <section className="flex flex-col justify-center items-center gap-4 px-6">
            <div className="flex flex-col justify-center items-center gap-2">
                <h3 className="font-semibold text-xl">First Look</h3>
                <h2 className="font-black text-5xl 2xl:text-6xl text-center">STEP INTO WHAT FEELS GOOD</h2>
                <h4 className="font-medium text-lg text-center mt-4 max-w-2xl">Cause everyone should know the feeling of running in that perfect pair</h4>
            </div>
            <div className="flex flex-row justify-center items-center gap-4 mt-4">
                <button className="bg-black text-white rounded-full px-6 2xl:px-8 py-2 2xl:py-4 font-medium">Find Your Shoe</button>
            </div>
            <div className='mt-10 xl:mt-16 flex flex-col gap-4 xl:gap-8'>
                <h3 className="font-semibold text-xl xl:text-2xl self-center xl:self-start px-12">Gear Up</h3>
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-4">
                        <h4 className="text-sm xl:text-lg px-6 xl:px-12">Shop Men's</h4>
                        <div className="w-screen px-6 xl:px-12">
                            <SwiperImage
                                Item1={MenGear1} Item1Name={"Nike Air Max Pulse"} Item1Type={"Women's Shoes"} Item1Price={"$500"} Item1Style={'w-20vh sm:w-auto'} Item1ImageSize={'w-full'}
                                Item2={MenGear2} Item2Name={"Nike Air Max 97 SE"} Item2Type={"Men's Shoes"} Item2Price={"$400"} Item2Style={'w-20vh sm:w-auto'} Item2ImageSize={'w-full'}
                                Item3={MenGear3} Item3Name={"Nike Air Max Force Mid"} Item3Type={"Men's Shoes"} Item3Price={"$560"} Item3Style={'w-20vh sm:w-auto'} Item3ImageSize={'w-full'}
                                Item4={MenGear4} Item4Name={"Nike Air Max FCL 1 React"} Item4Type={"Men's Shoes"} Item4Price={"$1200"} Item4Style={'w-20vh sm:w-auto'} Item4ImageSize={'w-full'}
                                Item5={MenGear5} Item5Name={"Nike Air Max Elevate Low"} Item5Type={"Women's Shoes"} Item5Price={"$780"} Item5Style={'w-20vh sm:w-auto'} Item5ImageSize={'w-full'}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 xl:mt-12">
                        <h4 className="text-sm xl:text-lg px-6 xl:px-12">Shop Women's</h4>
                        <div className="w-screen px-6 xl:px-12">
                            <SwiperImage
                                Item1={WomenGear1} Item1Name={"Nike Air Max Pulse"} Item1Type={"Women's Shoes"} Item1Price={"$500"} Item1Style={'w-20vh sm:w-auto'} Item1ImageSize={'w-full'}
                                Item2={WomenGear2} Item2Name={"Nike Air Max 97 SE"} Item2Type={"Men's Shoes"} Item2Price={"$400"} Item2Style={'w-20vh sm:w-auto'} Item2ImageSize={'w-full'}
                                Item3={WomenGear3} Item3Name={"Nike Air Max Force 1 Mid 07"} Item3Type={"Men's Shoes"} Item3Price={"$560"} Item3Style={'w-20vh sm:w-auto'} Item3ImageSize={'w-full'}
                                Item4={WomenGear4} Item4Name={"Nike Air Max Force 1 React"} Item4Type={"Men's Shoes"} Item4Price={"$1200"} Item4Style={'w-20vh sm:w-auto'} Item4ImageSize={'w-full'}
                                Item5={WomenGear5} Item5Name={"Nike Air Max Elevate Low"} Item5Type={"Women's Shoes"} Item5Price={"$780"} Item5Style={'w-20vh sm:w-auto'} Item5ImageSize={'w-full'}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Gear;