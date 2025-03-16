import { Navigate, useNavigate } from "react-router-dom";

import { IoCloseCircle } from "react-icons/io5";
import JordanIcon from '../assets/icons/jordan.svg';
import { FiHelpCircle } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";

const MobileMenu = ({logo, linkToNav, handleShowMenu}) => {

    const navigate = useNavigate();
    
    const navToSiginPage = () => { 
        navigate('/signin'); 
    }

    const navToRegisterPage = () => { 
        navigate('/register');
    } 

    const token = localStorage.getItem('token');

    const handleLogout = () => {
        localStorage.clear();
        navigate('/index');
    }

    return(
        <section className="bg-grey py-10 px-10 flex flex-col justify-between gap-4 ml-14">
            <button onClick={handleShowMenu} className="w-auto h-auto self-end">
                <IoCloseCircle className="size-10"/>
            </button>
            <div className="flex flex-col justify-between gap-12">
                <div className="flex flex-col justify-center ">
                    <img src={logo} alt="logo-nike" className="size-22" />
                    <div>
                        {/* <Nav linkToNav={linkToNav}/> */}
                        {linkToNav.map((item, index) => (
                            <div key={index}>
                                <a href={item.href} className="flex my-6 items-center text-3xl sm:text-5xl font-semibold">{item.label}</a>
                            </div>
                        ))}
                    </div>
                </div>         
                <div className="flex flex-row gap-4 items-center">
                    <img src={JordanIcon} alt="jordan-icaon" className="size-8 sm:size-10"/>
                    <h3 className="font-medium sm:text-xl">Jordan</h3>
                </div>
                <div className="flex flex-col gap-8 justify-center items-start">
                    <p className="text-gray-600 text-lg sm:text-xl font-medium leading-tight sm:max-w-sm">Become a Nike Member for the best products,
                        inspiration and stories in sport. <span><a href="#" className="font-bold text-dark">Learn more</a></span>
                    </p>
                    <div className="flex flex-row gap-2">
                        {!token && <button onClick={navToRegisterPage} className="bg-dark text-white font-medium sm:text-xl px-6 sm:px-8 py-2 sm:py-4 rounded-full">
                            <a href=""></a>Join Us</button>}
                        
                        {!token && <button onClick={navToSiginPage} className="border-2 border-gray-400 rounded-full px-6 sm:px-8 py-2 sm:py-4 font-medium sm:text-xl">
                            <a href=""></a>Sign In</button>}
                        
                        {token && <button onClick={handleLogout} className="bg-dark text-white font-medium sm:text-xl px-6 sm:px-8 py-2 sm:py-4 rounded-full">
                        <a href=""></a>Logout</button>}
                    </div>
                </div>
                <div className="flex flex-col gap-6">
                    <button className="flex flex-row items-center gap-4">
                        <FiHelpCircle alt="help-icon" className="size-[1.5rem] sm:size-[1.8rem]"/>
                        <h3 className="font-medium sm:text-lg">Help</h3>
                    </button>
                    <button className="flex flex-row items-center gap-4">
                        <FiShoppingBag alt="bag-icon" className="size-[1.5rem] sm:size-[1.8rem]"/>
                        <h3 className="font-medium sm:text-lg">Bag</h3>
                    </button>
                    <button className="flex flex-row items-center gap-4">
                        <FiShoppingCart alt="cart-icon" className="size-[1.4rem] sm:size-[1.8rem]"/>
                        <h3 className="font-medium sm:text-lg">Orders</h3>
                    </button>
                </div>
            </div>
            
        </section>
    )
}

export default MobileMenu;