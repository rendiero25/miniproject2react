import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Protected = ({children}) => {
    const token = localStorage.getItem("token");

    if (!token) {
        return <Navigate to='/signin' />
    }

    return (
        <div>
            {children || <Outlet />}
        </div>
    )
}

export default Protected;