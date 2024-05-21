import "./layout.scss";
import Navbar from "../../componenets/navbar/Navbar"
import { Outlet } from "react-router-dom";

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

export default Layout; 