import logo from '../assets/logo.png';
import { NavLink, Outlet } from 'react-router';
import { LayoutDashboard, Plus, List, BarChart4, Settings, LogOut } from 'lucide-react';


const Dashboard = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

            <div className="drawer-content flex flex-col">
                <div className="w-full navbar bg-white border-b lg:hidden">
                    <label htmlFor="dashboard-drawer" className="btn btn-square btn-ghost">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block w-6 h-6 stroke-current"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </label>
                    <h2 className="ml-4 text-xl font-semibold">Dashboard</h2>
                </div>

                <Outlet></Outlet>
            </div>

            {/* Sidebar */}
            <div className="drawer-side shadow-xl">
                <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                <div className="menu p-5 w-full min-h-full bg-white text-base-content">
                    <div className="mb-6 pb-3 px-2 flex items-center space-x-2 border-b border-gray-600">
                        <div><img className='w-9 h-9 rounded-lg object-cover' src={logo} alt="Trackify" /></div>
                        <h1 className="text-3xl font-bold text-gray-800">Trackify</h1>
                    </div>
                    <div className='pb-6'>
                        <img className='w-22 h-22 object-center mx-auto' src="https://i.ibb.co.com/b5CvTt9H/image.png" alt="" />
                        <h1 className='text-2xl font-bold text-center'>Mafikul Islam</h1>
                        <p className='text-center'>mdmafikulislam5320@gmail.com</p>
                    </div>
                    <ul className="space-y-1">
                        <li>
                            <NavLink
                                to="/dashboard"
                                className={({ isActive }) =>
                                    `flex items-center py-3 px-2 rounded-lg ${isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`
                                }
                            >
                                <LayoutDashboard size={18} className="mr-3" />
                                Dashboard
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard/add-expense"
                                className={({ isActive }) =>
                                    `flex items-center py-3 px-2 rounded-lg ${isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`
                                }
                            >
                                <Plus size={18} className="mr-3" />
                                Add Expense
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard/expenses"
                                className={({ isActive }) =>
                                    `flex items-center py-3 px-2 rounded-lg ${isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`
                                }
                            >
                                <List size={18} className="mr-3" />
                                All Expenses
                            </NavLink>
                        </li>
                    </ul>

                    {/* Bottom Logout Button */}
                    <div className="mt-auto pt-4 border-t">
                        <button className="flex items-center w-full py-3 px-2 rounded-lg text-gray-700 hover:bg-gray-100">
                            <LogOut size={18} className="mr-3" />
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;