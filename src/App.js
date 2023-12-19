import React , {lazy , Suspense, useEffect, useState} from "react";
import ReactDOM  from "react-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import Cart from "./components/Cart";
import { createBrowserRouter , RouterProvider , Outlet } from "react-router-dom"; 
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "./utils/appstore";

const Grocery = lazy(() => import("./components/Grocery"));

  const Contact = lazy(() => import("./components/Contact"));


const Appcontainer = () => {

const[userName , setUserName] = useState();

    useEffect (() => {
        const data = {
            name: "Mouli",
        };
        setUserName(data.name);
      }, []);

    return (
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser:userName}}>
        <div className="app">
            <Header />
            <Outlet />
        </div>
        </UserContext.Provider>
        </Provider>
            
    )
};

const appRouter = createBrowserRouter ([
    {
        path: "/",
        element: <Appcontainer />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /> </Suspense> ,
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            }, 
            {
                path: "/cart",
                element: <Cart />
            }
        ],
        errorElement: <Error />,
    },
       
]);

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<RouterProvider router={appRouter} />);