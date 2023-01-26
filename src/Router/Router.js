import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Cart from "../Pages/Cart";
import Home from "../Pages/Home";
import TopRated from "../Pages/TopRated";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {path:'/',element:<Home/>},
            {path:"/top-rated" , element:<TopRated/>},
            {path:"/cart", element:<Cart/>}
            
        ]
    }
])
export default router;