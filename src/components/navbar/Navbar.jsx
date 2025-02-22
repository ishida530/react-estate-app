import { useContext, useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function Navbar() {
    const [open, setOpen] = useState(false);
    const { currentUser } = useContext(AuthContext)

    return (
        <nav>
            <div className="left">
                <a href="/" className="logo">
                    <img src="/logo.png" alt="" />
                    <span>Mtsouthwestproperty</span>
                </a>
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Contact</a>
                <a href="/">Agents</a>
            </div>
            <div className="right">
                {currentUser ? (
                    <div className="user">
                        <img
                            src={currentUser.avatar || '/noavatar.jpg'}
                            alt=""
                        />
                        <span>{currentUser.username}</span>
                        <Link to="/profile" className="profile">
                            <div className="notification">3</div>
                            <span>Profile</span>
                        </Link>
                    </div>
                ) : (
                    <>
                        <Link to="/login">Sign in</Link>
                        <Link to="/register" className="register">Sign  up</Link>
                    </>
                )}
                <div className="menuIcon">
                    <img
                        src="/menu.png"
                        alt=""
                        onClick={() => setOpen((prev) => !prev)}
                    />
                </div>
                <div className={open ? "menu active" : "menu"}>
                    <a href="/">Home</a>
                    <a href="/">About</a>
                    <a href="/">Contact</a>
                    <a href="/">Agents</a>
                    <Link to="/login">Sign in</Link>
                    <Link to="/register">Sign  up</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;