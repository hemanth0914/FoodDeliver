import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import {Link} from "react-router"
import { useSelector, useDispatch } from "react-redux";

const HeaderComponent = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const dispatch = useDispatch()
    {/* Subscribing to the store using Selector */}
    const cartItems = useSelector((store) => store.cart.items)
    console.log(cartItems)
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
                
                <li className="px-2 py-2 text-xl font-bold">
                    <Link to="/cart">Cart ({cartItems.length} items) </Link>
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