import ShoesUC from "../assets/images/shoesuc.png";

const UnderConstruction = () => {
    return(
        <section className="flex flex-col justify-center items-center bg-white">
            <div className="w-full">
                <div className="min-h-screen flex flex-col xl:flex-row gap-10 px-6 justify-center items-center">
                    <div className="flex flex-col gap-4 mb-14">
                        <h2 className=" font-black text-5xl sm:text-7xl 3xl:text-9xl text-center">Under <br /> Construction</h2>
                        <p className="text-center font-medium">Please come back later. We are currently working on this page.</p>
                    </div>
                    
                    <div className="">
                        <img src={ShoesUC} alt="shoes" className="mb-14"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default UnderConstruction;