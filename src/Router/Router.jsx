import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import HomeLayout from "../Layouts/HomeLayout";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                path: "/",
                Component: HomeLayout
            }
        ]
    }
])