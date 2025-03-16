import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import UnderConstruction from "../components/UnderConstruction";

const Dashboard = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activetab, setActivetab] = useState(location.state?.activetab || 'general');
    const [pagination, setPagination] = useState({
        perPage: 6,
        currentPage: 1,
        totalPages: 0,
    });
    const searchQuery = location.state?.searchQuery || '';

    const fetchUserData = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`https://reqres.in/api/users?page=${pagination.currentPage}&per_page=${pagination.perPage}`);
            let users = response.data.data;
            if (searchQuery) {
                users = users.filter(user => user.first_name.toLowerCase().includes(searchQuery.toLowerCase()));
            }
            setUser(users);
            setPagination((prevState) => ({
                ...prevState,
                totalPages: response.data.total_pages,
            }));
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleBack = () => {
        if (pagination.currentPage > 1) {
            setPagination((prevState) => ({
                ...prevState,
                currentPage: prevState.currentPage - 1, 
            }));
        }
    };

    const handleNext = () => {
        if (pagination.currentPage < pagination.totalPages) {
            setPagination((prevState) => ({
                ...prevState,
                currentPage: prevState.currentPage + 1,
            }));
        }
    };

    const handleBackToList = () => {
        navigate('/dashboard', { state: { activetab: 'users' } });
    };

    useEffect(() => {
        fetchUserData();
    }, [pagination.currentPage, searchQuery]);

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error}</div>
    }

    return(
        <section>
            <Header />
            <div className="flex flex-col justify-center items-center gap-4 mt-4">
                <div className="flex flex-row gap-4 w-full justify-center items-center py-2 px-4">
                    <button 
                        className={`text-black px-6 py-2 font-reguler hover:font-bold text-md ${activetab === 'general' ? 'bg-black text-white rounded-lg' : ''}`}
                        onClick={() => setActivetab('general')}>General
                    </button>
                    <button 
                        className={`text-black px-6 py-2 font-reguler hover:font-bold text-md ${activetab === 'users' ? 'bg-black text-white rounded-lg' : ''}`}
                        onClick={() => setActivetab('users')}>Users
                    </button>
                    <button 
                        className={`text-black px-6 py-2 font-reguler hover:font-bold text-md ${activetab === 'statistic' ? 'bg-black text-white rounded-lg' : ''}`}
                        onClick={() => setActivetab('statistic')}>Statistic
                    </button>
                </div>
            
                <div className="py-6">
                    {activetab === "general" && (
                        <div>
                            <UnderConstruction />
                        </div>
                    )}

                    {activetab === "users" && (
                        <div className="flex flex-col xl:flex-row justify-center items-center gap-16 pb-14">
                            {user.map(item => (     
                                <div key={item.id} className="flex flex-col justify-center items-center gap-4">
                                    <img src={item.avatar} width={200} alt="pic-image" className="rounded-full"/>
                                    <div className="flex flex-col justify-center items-center">
                                        <h3 className="font-bold text-3xl">{item.first_name} {item.last_name}</h3>
                                        <h3 className="font-medium text-sm">{item.email}</h3>
                                        <button className="bg-black text-white font-medium text-sm rounded-full px-6 py-2 mt-4">
                                            <Link to={`/details-user/${item.id}`}>
                                                See Details
                                            </Link>
                                        </button>
                                    </div>
                                </div>                         
                            ))}
                        </div>
                    )}

                    {activetab === "statistic" && (
                        <div className="">
                            <UnderConstruction />
                        </div>
                    )}
                </div>

                {activetab === "users" && user.length > 5 && (
                    <div className="flex flex-row justify-center items-center gap-4 mb-12">
                        <button onClick={handleBack} className="bg-black text-white font-medium text-sm rounded-full px-6 py-2" disabled={pagination.currentPage === 1}>Previous</button>
                        <button onClick={handleNext} className="bg-black text-white font-medium text-sm rounded-full px-6 py-2" disabled={pagination.currentPage === pagination.totalPages}>Next</button>
                    </div>
                )}

                {searchQuery && (
                    <div className="flex flex-row justify-center items-center gap-4 mb-12">
                        <button onClick={handleBackToList} className="bg-black text-white font-medium text-sm rounded-full px-6 py-2">Back</button>
                    </div>
                )}
            </div>
            <Footer />
        </section>
    )
}

export default Dashboard;