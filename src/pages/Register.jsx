import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';

import LogoNike from '../assets/icons/nikelogo.svg';

const Register = () => {

    const navigate = useNavigate();

    const [emailRegister, setEmailRegister] = useState("");
    const [passwordRegister, setPasswordRegister] = useState("");
    const [registerInfo, setRegisterInfo] = useState("");

    const navToSiginPage = () => { 
        navigate('/signin'); 
    }

    const handleEmailRegister = (e) => {
        setEmailRegister(e.target.value);
    }

    const handlePasswordRegister = (e) => {
        setPasswordRegister(e.target.value);
    }

    const handleSubmitRegister = () => {
        const payload = {
            username: emailRegister,
            password: passwordRegister,
            expiresInMins: 30,
        };

        console.log(payload)

        axios
        .post("https://reqres.in/api/register", payload)
        .then(res => {
            console.log("Login Success", res);
            setRegisterInfo("REGISTRATION SUCCESS")

            setTimeout(() => {
                navigate('/index');
            }, 2000)
        })
        .catch(err => {
            console.log("Login Failed", err);
            setRegisterInfo(err.response.data.error);
        })
    }

    return(
        <section className='flex flex-col justify-center items-center w-full'>
            <div className='flex flex-col min-h-screen w-full'>
                <Header />

                {/* <div className="w-full px-6 xl:px-10 mt-4">
                    <nav className="text-sm text-gray-600">
                        <Link to="/index" className="hover:underline">Home</Link> / <span className="text-gray-500">Register</span>
                    </nav>
                </div> */}

                <div className='flex flex-col justify-center items-center gap-8 p-8 sm:px-26'>
                    <img src={LogoNike} alt="logo-nike" />
                    <h2 className="font-bold text-4xl 2xl:text-6xl text-center max-w-xl">BECOME A NIKE MEMBER</h2>
                    
                    {registerInfo}

                    <div className='flex flex-col gap-6'>
                        <input onChange={handleEmailRegister} type="text" name="email" placeholder='Email' className='border-[0.15rem] border-gray-400 py-2 px-4 rounded-md'/>
                        <input onChange={handlePasswordRegister} type="password" name="password" placeholder='Password' className='border-[0.15rem] border-gray-400 py-2 px-4 rounded-md'/>
                        <p className='font-light text-gray-500 text-md text-center'>
                            By creating an account, you agree to Nike's <span><a href="#" className='underline font-semibold'>Privacy Policy </a></span>
                            and <span><a href="#" className='underline font-semibold'>Terms of Use.</a></span>
                        </p>
                        <button onClick={handleSubmitRegister} type="submit" className='mt-10 bg-black focus:bg-white focus:border-2 text-white focus:text-black w-full py-4 rounded-lg'>JOIN US</button>
                        <p className='font-normal text-gray-500 text-lg'>Already a Member? <span><a onClick={navToSiginPage} href="" className='underline text-black'>Sign In</a></span></p>
                    </div>
                </div>
            </div>
                    
            <div className='w-full'>
                <Footer />
            </div>
        </section>
    )
}

export default Register;