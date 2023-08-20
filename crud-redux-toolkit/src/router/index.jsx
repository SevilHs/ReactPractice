import App from "../App";
import {createBrowserRouter} from "react-router-dom"
import AddEditUser from "../pages/AddEditUser";
import UserList from "../pages/UserList";

export const router=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/",
                element:<UserList/>
            },
            {
                path:"add-edit-user",
                element:<AddEditUser/>
            },
            {
                path:"add-edit-user/:id",
                element:<AddEditUser/>
            }
        ]
    }
])