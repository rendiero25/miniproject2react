import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

import { IoArrowBack } from "react-icons/io5";

const DetailsUser = () => {

    const {id} = useParams();
    const [userdetails, setUserDetails] = useState({});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/dashboard', { state: { activetab: 'users' } });
    };

    const fetchUserDataDetails = async () => {
        try {
            const response = await axios.get(`https://reqres.in/api/users/${id}`);
            setUserDetails(response.data.data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUserDataDetails();
    }, []);

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error}</div>
    }

    return(
        <section>
            <Header />

            <div className="flex flex-col justify-center items-center">
                <div className="flex flex-row items-center mt-6 self-start px-6 gap-2">
                    <a href="" onClick={handleBack}><IoArrowBack /></a>
                    <a href="" onClick={handleBack} className="font-medium">Back</a>
                    {/* <a href=""><button onClick={handleBack} className="font-medium">Back</button></a> */}
                </div>
                
                <div className="flex w-full px-6 mt-6 mb-12">
                    <div className="p-8 rounded-md bg-grey flex flex-col xl:flex-row gap-4 items-center">
                        <div className="flex flex-col xl:flex-row justify-start items-center gap-8 w-1/2">
                            <img src={userdetails?.avatar} alt="profile-image" className="rounded-full"/>
                            <div className="flex flex-col gap-2">
                                <h3 className="text-4xl font-bold text-center xl:text-left">{userdetails?.first_name} {userdetails.last_name}</h3>
                                <p className="text-sm text-gray-600 text-center xl:text-left">Front-End Web Developer</p>
                            </div>
                        </div>

                        {/* <div className="border-[0.1rem] border-gray-500 h-full rounded-full"></div> */}
                        
                        <div className="flex flex-col xl:flex-row gap-8 justify-between items-center w-full">
                            <div>
                                <p className="text-md font-medium text-center xl:text-left">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti sapiente tempore minus 
                                    reprehenderit placeat, eos, voluptatem, nisi ducimus qui voluptatibus quos quidem laudantium 
                                    nobis sed id autem assumenda. onsectetur adipisicing elit. Deleniti sapiente tempore minus 
                                    reprehenderit placeat, eos, voluptatem, nisi ducimus qui voluptatibus. nisi ducimus qui voluptatibus quos quidem laudantium 
                                    nobis sed id autem assumenda. Eum, rem!
                                </p>
                            </div>

                            <div className="flex flex-col gap-2">
                                <div className="flex flex-row gap-2 justify-between">
                                    <h3 className="text-gray-600 text-sm xl:text-md">User Id:</h3>
                                    <h3 className="text-black font-medium text-sm xl:text-md">{userdetails.id}</h3>
                                </div>
                                <div className="flex flex-row w-full gap-4 justify-between">
                                    <h3 className="text-gray-600 text-sm xl:text-md">User Account:</h3>
                                    <h3 className="text-black font-medium text-sm xl:text-md">username</h3>
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <div className="flex flex-row justify-between gap-18">
                                    <h3 className="text-gray-600 text-sm xl:text-md">Phone Number:</h3>
                                    <h3 className="text-black font-medium text-sm xl:text-md">+62 812 1234 5678</h3>
                                </div>
                                <div className="flex flex-row justify-between gap-18">
                                    <h3 className="text-gray-600 text-sm xl:text-md">Email:</h3>
                                    <h3 className="text-black font-medium text-sm xl:text-md">{userdetails.email}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </section>
    )
}

export default DetailsUser;