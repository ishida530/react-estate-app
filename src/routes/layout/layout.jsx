import "./layout.scss";
import Navbar from "../../componenets/navbar/Navbar"
import { Navigate, Outlet } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";

const Layout = () => {
    return (
        <div className="layout">
            <div className="">
                <Navbar />
            </div>
            <div className="content">
                <Outlet />
            </div>
        </div>
    );
}
const RequireAuth = () => {
    const { currentUser } = useContext(AuthContext)

    return (
        !currentUser ?
            <Navigate to="/login" /> :
            <div className="layout">
                <div className="">
                    <Navbar />
                </div>
                <div className="content">
                    <Outlet />
                </div>
            </div>
    );
}

export { Layout, RequireAuth }; 