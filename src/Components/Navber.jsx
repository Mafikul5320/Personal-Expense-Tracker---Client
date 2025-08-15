import { Link } from 'react-router';
import logo from '../assets/logo.png';

const Navber = () => {
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
                <Link to={"/register"}><button className="bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold px-8 py-3 rounded-md hover:scale-105 duration-300 cursor-pointer">Sign Up</button></Link>
            </div>
        </nav>

    );
};

export default Navber;