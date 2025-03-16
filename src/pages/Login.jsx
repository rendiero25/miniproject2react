import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';

import LogoNike from '../assets/icons/nikelogo.svg';

const Login = () => {

    const navigate = useNavigate();

    const [emailLogin, setEmailLogin] = useState("");
    const [passwordLogin, setPasswordLogin] = useState("");
    const [loginInfo, setLoginInfo] = useState("");

    const navToRegisterPage = () => { 
        navigate('/register');
    }

    const handleEmailLogin = (e) => {
        setEmailLogin(e.target.value);
    }

    const handlePasswordLogin = (e) => {
        setPasswordLogin(e.target.value);
    }

    const handleSubmitLogin = () => {
        const payload = {
            username: emailLogin,
            password: passwordLogin,
            expiresInMins: 30,
        };

        console.log(payload)

        axios
        .post("https://reqres.in/api/login", payload)
        .then(res => {
            const tokenLogin = res.data.token;
            localStorage.setItem("token", tokenLogin);
            console.log("Login Success", res);
            setLoginInfo("LOGIN SUCCESS");

            setTimeout(() => {
                navigate('/dashboard');
            }, 2000)


        })
        .catch(err => {
            console.log("Login Failed", err);
            setLoginInfo(err.response.data.error);
        })
    }

    return(
        <section className='flex flex-col justify-center items-center w-full'>
            <div className='flex flex-col min-h-screen w-full'>
                <Header />

                {/* <div className="w-full px-6 xl:px-10 mt-4">
                    <nav className="text-sm text-gray-600">
                        <Link to="/index" className="hover:underline">Home</Link> / <span className="text-gray-500">Login</span>
                    </nav>
                </div> */}

                <div className='flex flex-col justify-center items-center gap-8 p-8 sm:px-26'>
                    <img src={LogoNike} alt="logo-nike" />
                    <h2 className="font-bold text-4xl 2xl:text-6xl text-center max-w-xl">YOUR ACCOUNT FOR EVERYTHING NIKE</h2>

                    <div className='font-medium text-xl'>{loginInfo}</div>

                    <div className='flex flex-col gap-6'>
                        <input onChange={handleEmailLogin} type="text" name="username-login" placeholder='Your Email' className='border-[0.15rem] border-gray-400 py-2 px-4 rounded-md'/>
                        <input onChange={handlePasswordLogin} type="password" name="password-login" placeholder='Your Password' className='border-[0.15rem] border-gray-400 py-2 px-4 rounded-md'/>
                        <div className='flex flex-row justify-between items-center'>
                            <a href="#" className='text-gray-500 text-lg font-normal'>Forgotten your password?</a>
                        </div>
                        <p className='font-light text-gray-500 text-md text-center'>
                            By logging in, you agree to Nike's <span><a href="#" className='underline font-semibold'>Privacy Policy </a></span>
                            and <span><a href="#" className='underline font-semibold'>Terms of Use.</a></span>
                        </p>
                        <button onClick={handleSubmitLogin} type="submit" className='mt-10 bg-black focus:bg-white focus:border-2 text-white focus:text-black w-full py-4 rounded-lg'>Sign In</button>
                        <p className='font-normal text-gray-500 text-lg'>Not a Member? <span><a onClick={navToRegisterPage} href="" className='underline text-black'>Join Us</a></span></p>
                    </div>
                </div>
            </div>

            <div className='w-full'>
                <Footer />
            </div>
            
        </section>
    )
}

export default Login;