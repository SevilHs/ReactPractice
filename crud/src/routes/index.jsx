import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import App from "../App";
import AddCustomer from "../pages/add-customer";
import CustomersList from "../pages/customers-list";
import Details from "../pages/details";
import Favourites from "../pages/favourites";

export const router=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"add-customer",
                element:<AddCustomer/>
            },
            {
                path:"customers-list",
                element:<CustomersList/>
            },
            {
                path:"customers-list/:id",
                element:<Details/>
            },
            {
                path:"favourites",
                element:<Favourites/>
            }
        ]
    }
])