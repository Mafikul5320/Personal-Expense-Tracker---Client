import { FaUserPlus, FaWallet, FaChartLine, FaTrophy } from "react-icons/fa";

const HowItWorks = () => {
    const steps = [
        {
            icon: <FaUserPlus />,
            title: "Create Your Account",
            description: "Sign up in minutes and set up your personal financial profile with ease.",
            color: "from-blue-500 to-blue-700",
        },
        {
            icon: <FaWallet />,
            title: "Add Your Expenses",
            description: "Log daily expenses and categorize them to keep track effortlessly.",
            color: "from-green-500 to-green-700",
        },
        {
            icon: <FaChartLine />,
            title: "Analyze Insights",
            description: "Get detailed visual reports to understand your spending habits.",
            color: "from-purple-500 to-purple-700",
        },
        {
            icon: <FaTrophy />,
            title: "Achieve Your Goals",
            description: "Set financial goals and watch your progress in real-time.",
            color: "from-pink-500 to-pink-700",
        },
    ];
    return (
        <section className="relative bg-gray-50 py-20">

            <div className="max-w-7xl mx-auto px-6 text-center text-white">
                <h2
                    className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text"
                >
                    How It Works
                </h2>
                <p className="text-gray-500  mb-16">
                    Four simple steps to take full control of your finances — designed for clarity and ease.
                </p>

                <div className="relative grid gap-10 md:grid-cols-4 ">
                    {steps.map((step, index) => (
                        <div
                            className="relative p-6 rounded-3xl backdrop-blur-lg bg-white/10 border-2 border-gray-200 shadow-lg hover:shadow-cyan-500/40 transition-all duration-300 hover:-translate-y-2 text-black cursor-pointer"
                        >
                            <div
                                className={`w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-gradient-to-br ${step.color} text-white text-3xl shadow-lg shadow-white/20`}
                            >
                                {step.icon}
                            </div>

                            {index !== steps.length - 1 && (
                                <div className="hidden md:block absolute top-1/2 right-0 w-10 border-t border-gray-500 translate-x-full" />
                            )}

                            <h3 className="text-xl font-bold mt-6">{step.title}</h3>
                            <p className="text-gray-500 mt-3">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;