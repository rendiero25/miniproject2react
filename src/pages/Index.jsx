import Header from "../components/Header";
import Hero  from "../components/Hero";
import AirMax from "../components/AirMax";
import Featured from "../components/Featured";
import Gear from "../components/Gear";
import DontMiss from "../components/DontMiss";
import TheEssentials from "../components/TheEssentials";
import Footer from "../components/Footer";

const Index = () => {
    return (
        <section className="m-0 p-0 box-border font-primary flex flex-col">
            <div className="flex flex-col min-h-screen">
                <Header />
                <Hero />
            </div>
            <div className="flex flex-col gap-12 xl:gap-24 2xl:gap-32">
                <AirMax />
                <Featured />
                <Gear />
                <DontMiss />
                <TheEssentials />
                <Footer />
            </div>
        </section>
    )
}

export default Index;