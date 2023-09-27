import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import CardDetails from "../Components/CardDetails/CardDetails";
import Cards from "../Components/Cards/Cards";

const myCreatedRoute = createBrowserRouter([
    {
        path: "/",
        element:<MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element: <Home></Home>,
                loader: () => fetch('/cards.json')
            },
            {
                path:'/donation',
                element: <Donation></Donation>
            },
            {
                path:'/statistics',
                element: <Statistics></Statistics>,
                loader: () => fetch('/cards.json')
            },
            {
                path:'/cards/:id',
                element: <CardDetails></CardDetails>,
                loader: () => fetch('/cards.json')
            },
            {
                path:'/cards',
                element: <Cards></Cards>,
                loader: () => fetch('/cards.json')
            },
        ]
    }
])

export default myCreatedRoute;