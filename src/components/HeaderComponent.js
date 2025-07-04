import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import {Link} from "react-router"

const HeaderComponent = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    return (
    <div className="header">
        <div className="logo-container">
            <img className="logo" src={LOGO_URL} alt="logo" />
        </div>
        <div className="nav-items">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About us</Link>
                </li>
                <li>
                    <Link to="/contact">Contact us</Link>
                </li>
                <li>
                    <Link to="/cart">Cart</Link>
                </li>
                <li>
                    <Link to="/grocery">Grocery Store</Link>
                </li>
                <button onClick={()=>{
                    setIsLoggedIn(!isLoggedIn)
                }} className="login-btn">
                    {isLoggedIn ? "Logout" : "Login"}
                </button>
            </ul>
        </div>
    </div>
    )
}

export default HeaderComponent;