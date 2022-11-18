import './index.css'

import store from './app/store'
import { Provider } from 'react-redux'

import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import Layout from "./components/layout/layout.jsx";
import Home from "./views/home/home";
import Profile from "./views/profile/profile";
import SignIn from "./views/signIn/signIn";
import Error from "./views/error/error";

//createBrowserRouter
const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/profil",
                element: <Profile />,
            },
            ,
            {
                path: "/connexion",
                element: <SignIn />,
            },
            {
                path: "/404",
                element: <Error />,
            },
            {
                path: "*",
                element: <Error />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('app')).render(
    <Provider store={store}>
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    </Provider>
)
