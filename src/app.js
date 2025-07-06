import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from './components/HeaderComponent'
import BodyComponent from './components/BodyComponent'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import About from "./components/About"
import Contact from "./components/Contact"
import Error from "./components/Error"
import RestaurantMenu from "./components/RestaurantMenu"
import { lazy, Suspense } from "react";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
// const FooterComponent = () => (
//     <div className="footer">
//         <h1>Footer</h1>
//     </div>
// )

const Grocery = lazy(()=> import("./components/Grocery"))


const AppLayoutComponent = () => {
        const [loggedInUser, setLoggedInUser] = useState()   // this is a state variable
        useEffect(()=>{
            const data = {
                useremail: "srisaihemanth@gmail.com"
            }
            setLoggedInUser(data.useremail)
        }, [])
    return (
        <Provider store={appStore}>
        <UserContext.Provider value={{useremail: loggedInUser}}>
            <div className="app">
                <HeaderComponent />
                <Outlet />
            </div>
        </UserContext.Provider>
        </Provider>
    )
    }

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayoutComponent />,
        children: [
            {
                path: "/",
                element: <BodyComponent />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>
            },
            {
                path: "/cart",
                element: <Cart />
            }
        ],
        errorElement: <Error />
    },
    
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);