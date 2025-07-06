import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import {Link} from "react-router"

const HeaderComponent = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    return (
    <div className="flex justify-between items-center shadow-md mb-5">
        <div className="logo-container">
            <img className="w-50 h-50" src={LOGO_URL} alt="logo" />
        </div>
        <div className="flex items-center m-4">
            <ul className="flex gap-4">
                <li className="px-2 py-2">
                    <Link to="/">Home</Link>
                </li>
                <li className="px-2 py-2">    
                    <Link to="/about">About us</Link>
                </li>
                <li className="px-2 py-2">
                    <Link to="/contact">Contact us</Link>
                </li>
                <li className="px-2 py-2">
                    <Link to="/cart">Cart</Link>
                </li>
                <li className="px-2 py-2">
                    <Link to="/grocery">Grocery Store</Link>
                </li>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-md" onClick={()=>{
                    setIsLoggedIn(!isLoggedIn)
                }}>
                    {isLoggedIn ? "Logout" : "Login"}
                </button>
            </ul>
        </div>
    </div>
    )
}

export default HeaderComponent;