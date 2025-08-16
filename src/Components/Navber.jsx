import { Link, NavLink } from 'react-router';
import logo from '../assets/logo.png';
import useAuth from '../Hooks/useAuth';
import { LogOut } from 'lucide-react';

const Navber = () => {
    const { User, setUser, SignOut } = useAuth();
    const handelLogout = () => {
        SignOut().then(() => {
            setUser(null)
        }).catch((error) => {
            console.log(error)
        })
    }
    return (
        <nav className="bg-white shadow">
            <div className="w-10/13 mx-auto flex items-center justify-between  py-3">
                {/* Logo */}
                <Link to={"/"}>
                    <div className="flex items-center gap-2">
                        <img
                            src={logo}
                            alt="Trackify Logo"
                            className="w-10 h-10 rounded-xl object-cover"
                        />
                        <h1 className="text-3xl font-bold text-gray-800">Trackify</h1>
                    </div>
                </Link>
                <div className='space-x-5'>
                    <NavLink><button>Home</button></NavLink>
                    <NavLink><button>About</button></NavLink>
                    <NavLink to={'/dashboard'}><button>Dashboard</button></NavLink>
                </div>
                {User ? <>
                    <div className="flex items-center gap-4 bg-white p-2 rounded-lg">
                        <img
                            className="h-12 w-12 rounded-full border-2 border-gray-400 object-cover"
                            src={User?.photoURL}
                            alt="User"
                        />

                        <button
                            onClick={handelLogout}
                            className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-teal-500 
               text-white font-medium px-4 py-2 rounded-full 
                hover:scale-105 transition-transform duration-300"
                        >
                            <LogOut size={16} />
                            Log Out
                        </button>
                    </div>

                </> : <Link to={"/register"}><button className="bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold px-8 py-3 rounded-md hover:scale-105 duration-300 cursor-pointer">Sign Up</button></Link>}
            </div>
        </nav>

    );
};

export default Navber;