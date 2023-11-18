import {  createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main/Main'
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/SignUp/SignUp';
import Details from '../Pages/Details/Details';
import DetailsLayout from '../layouts/DetailsLayout/DetailsLayout';
import PrivateRoute from './PrivateRoute';
import Error from '../Pages/Error/Error';
import Blog from '../Pages/Blog/Blog';
import LoginLayout from '../layouts/LoginLayout.jsx/LoginLayout';
import FavoriteRecipes from '../Pages/FavoriteRecipes/FavoriteRecipes';
import { UserContext } from '../Providers/AuthProviders';
import UserInfo from '../Pages/UserInfo/UserInfo';
import About from '../Pages/About/About';

const router = createBrowserRouter([
    {
        path:'/',
        element:<LoginLayout></LoginLayout>,
        errorElement:<Error></Error>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/sign-up',
                element:<SignUp></SignUp>
            },
            {
                path:'blog',
                element:<Blog></Blog>
            },
            {
                path:'/user',
                element:<UserInfo></UserInfo>
            },
            {
                path:'/about',
                element:<About></About>
            }
        ]
    },
    {
        path:'view',
        element:<PrivateRoute><DetailsLayout></DetailsLayout></PrivateRoute>,
        children:[
            {
                path:':id',
                element:<Details></Details>,
                loader:({params})=>fetch(`https://chef-recipes-hunter-server-a2n426.vercel.app/data/${params.id}`)
            }
        ]
    },
    {
        path:'/favorite',
        element:<FavoriteRecipes></FavoriteRecipes>
    }
])

export default router;