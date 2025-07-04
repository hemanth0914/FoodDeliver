import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from './components/HeaderComponent'
import BodyComponent from './components/BodyComponent'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import About from "./components/About"
import Contact from "./components/Contact"
import Error from "./components/Error"
import RestaurantMenu from "./components/RestaurantMenu"
import { lazy, Suspense } from "react";
// const FooterComponent = () => (
//     <div className="footer">
//         <h1>Footer</h1>
//     </div>
// )

const Grocery = lazy(()=> import("./components/Grocery"))

const AppLayoutComponent = () => (
    <div className="app">
        <HeaderComponent />
        <Outlet />
    </div>
)

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
            }
        ],
        errorElement: <Error />
    },
    
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);