import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import HomeLayout from "../Layouts/HomeLayout";
import DashboardLayout from "../Layouts/DashboardLayout";
import Dashboard from "../Dashboard/Dashboard";
import AddExpenseForm from "../Dashboard/AddExpenseForm";
import ExpenseList from "../Dashboard/ExpenseList";

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
    },
    {
        path: "/dashboard",
        Component: Dashboard,
        children: [
            {
                path: "/dashboard",
                Component: DashboardLayout
            },
            {
                path: "add-expense",
                Component: AddExpenseForm
            },
            {
                path: "expenses",
                Component: ExpenseList
            }
        ]
    }
])