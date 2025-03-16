import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import LogoNike from "../assets/icons/nikelogo.svg";
import JordanIcon from '../assets/icons/jordan.svg';
import { FiMenu } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { FiUser } from "react-icons/fi";

import Nav from "./Nav";
import MobileMenu from "./MobileMenu";

// import Login from '../pages/Login';
// import Register from '../pages/Register';

const Header = () => {

    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState("");
    const [showSearchInput, setShowSearchInput] = useState(false);

    const navToSiginPage = () => { 
        navigate('/signin'); 
    }

    const navToRegisterPage = () => { 
        navigate('/register');
    }

    const navToDashboardPage = () => {
        navigate('/dashboard');
    }

    const navToHomePage = () => {
        navigate('/index');
    }

    const navToCart = () => {
        navigate('/cart');
    }

    const handleSearch = () => {
        navigate('/dashboard', { state: { searchQuery } });
    }

    const navLink = [
        {label: "New & Featured", href: ('/newfeatured')},
        {label: "Men", href: ('/men')},
        {label: "Women", href: ('/women')},
        {label: "Kids", href: ('/kids')},
        {label: "Sale", href: ('/sale')},
        {label: "SNKRS", href: ('/snkrs')},
      ]

    const [showMenu, setShowMenu] = useState(false);
    const handleShowMenu = () => {
        setShowMenu(!showMenu);
    }

    const token = localStorage.getItem("token");

    const handleLogout = () => {
        localStorage.clear();
        navigate('/index');
    }

    return(
        <section className="relative flex flex-col">
            <div className="hidden xl:flex justify-between items-center bg-grey py-2 px-10">
                <img src={JordanIcon} alt="jordan-icon" className="size-6"/>
                
                <div>
                    <ul className="flex flex-row gap-2 font-medium text-xs 2xl:text-sm">
                        <li><a href="#"></a>Find a store</li>
                        <li>|</li>
                        <li><a href="#"></a>Help</li>

                        <li className="flex flex-row items-center gap-2">
                            {!token && <div className="flex flex-row gap-2"><span>|</span><button onClick={navToRegisterPage}><a href="">Register</a></button></div>}
                        </li>

                        <li className="flex flex-row items-center gap-2">
                            {!token && <div className="flex flex-row gap-2"><span>|</span><button onClick={navToSiginPage}><a href="">Sign In</a></button></div>}
                        </li>

                        <li className="flex flex-row items-center gap-2">
                            {token && <div className="flex flex-row gap-2"><span>|</span><button onClick={handleLogout}><a href="">Log Out</a></button></div>}
                        </li>

                    </ul>
                </div>
            </div>
            <div className="flex flex-row items-center justify-between py-2 xl:py-0 px-6 xl:px-10 ">
                <div className="w-1/4">
                    <button onClick={navToHomePage}>
                        <a href=""><img src={LogoNike} alt="logo-nike" className="size-14"/></a>
                    </button>
                </div>
                <div className="hidden xl:flex">
                    <Nav linkToNav={navLink}/>
                </div>
                <div className="flex flex-row gap-6 w-1/4 justify-end">
                    <div className="hidden xl:flex flex-row items-center bg-grey rounded-full pl-4">
                        <div>
                            <FiSearch/>
                        </div>
                        <input 
                            type="search" 
                            name="search" 
                            placeholder="Search" 
                            className="px-4 py-2 rounded-full outline-none flex-1" 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button onClick={handleSearch} className="bg-black text-white rounded-r-full px-4 py-2 ">Search</button>
                    </div>
                    <button className="xl:hidden flex flex-row items-center gap-4" onClick={() => setShowSearchInput(!showSearchInput)}>
                        <FiSearch alt="search-icon" className="size-[1.5rem] sm:size-[2rem]"/>
                    </button>
                    <button onClick={navToDashboardPage} className="flex flex-row items-center gap-4">
                        <a href=""><FiUser alt="user-icon" className="size-[1.4rem] sm:size-[1.5rem]"/></a>
                    </button>
                    <button onClick={navToCart} className="flex flex-row items-center gap-4">
                        <a href=""><FiShoppingBag alt="bag-icon" className="size-[1.5rem] sm:size-[1.5rem]"/></a>
                    </button>
                    <button onClick={handleShowMenu} className="xl:hidden w-auto h-auto">
                        <FiMenu className="size-[1.5rem] sm:size-[2rem]"/>
                    </button>
                </div>
            </div>
            
            {showSearchInput && (
                <div className="flex flex-row items-center justify-center py-2 px-6 xl:px-10 bg-grey">
                    <input 
                        type="search" 
                        name="search" 
                        placeholder="Search" 
                        className="px-4 py-2 rounded-full outline-none flex-1 bg-white" 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button onClick={handleSearch} className="bg-black text-white rounded-full px-4 py-2 ml-2">Search</button>
                </div>
            )}
            <div className="flex flex-col justify-center items-center bg-grey py-2">
                    <h3 className="text-sm">Teachers & Students Get 10% Off</h3>
                    <a href="" className="underline font-medium text-sm">Learn More</a>
            </div>
            
            {/* {showMenu ? <MobileMenu/> : null} */}
            
            {showMenu && 
                (
                    <div className="absolute top-0 w-full">
                        <div className="">
                            <MobileMenu logo={LogoNike} linkToNav={navLink} handleShowMenu={handleShowMenu} />
                        </div>
                    </div> 
                )
            }
        </section>
    )
}

export default Header;