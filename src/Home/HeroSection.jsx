import banner from "../assets/hero-finance.jpg";

const HeroSection = () => {
    return (
        <section className="flex w-10/13 mx-auto my-18">
            {/* Left side */}
            <div className="flex-1">
                <h1 className="text-6xl font-bold leading-18 ">Take Control of Your <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">Financial Future</span></h1>
                <p className="text-xl leading-relaxed py-3 text-gray-600">Track, analyze, and optimize your expenses with our powerful and intuitive <br /> expense tracking platform. Make informed financial decisions with real- <br />time insights.</p>
                <div className="flex items-center space-x-5">
                    <button className="bg-gradient-to-r from-blue-500 to-teal-600 text-white font-semibold px-9 py-4 rounded-lg">Get Started →</button>
                    <button className="border-2 border-gray-500 px-9 py-4 font-semibold rounded-lg"> Learn More</button>
                </div>
            </div>
            {/* Right side */}
            <div className="flex-1">
                <img className="w-[80%] h-[90%] object-cover rounded-2xl" src={banner} alt="" />
            </div>
        </section>
    );
};

export default HeroSection;