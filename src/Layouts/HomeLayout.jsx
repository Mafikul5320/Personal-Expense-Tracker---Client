import Login from '../Auth/Login';
import Register from '../Auth/Register';
import HeroSection from '../Home/HeroSection';
import HowItWorks from '../Home/HowItWorks';

const HomeLayout = () => {
    return (
        <div>
            <HeroSection />
            <HowItWorks />
        </div>
    );
};

export default HomeLayout;