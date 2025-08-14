import logo from '../assets/logo.png';

const Navber = () => {
    return (
        <nav className="bg-white shadow">
            <div className="w-10/13 mx-auto flex items-center justify-between  py-3">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <img
                        src={logo}
                        alt="Trackify Logo"
                        className="w-10 h-10 rounded-xl object-cover"
                    />
                    <h1 className="text-xl font-bold text-gray-800">Trackify</h1>
                </div>
                <button className="btn btn-accent">Sign Up</button>
            </div>
        </nav>

    );
};

export default Navber;