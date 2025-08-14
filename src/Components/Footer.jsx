import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
<footer className="bg-[#2793ac] text-blue-100 font-bold ">
  <div className="max-w-6xl py-10 mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
    
    <div>
      <div className="flex items-center gap-2 mb-4">
        <img src={logo} alt="Trackify Logo" className="w-10 h-10 rounded-lg object-cover" />
        <h2 className="text-xl font-bold text-white drop-shadow-2xl">Trackify</h2>
      </div>
      <p className="text-sm leading-relaxed">
        Take control of your financial future with our intuitive expense tracker.
      </p>
    </div>

    <div>
      <h3 className="text-white font-semibold mb-4">Quick Links</h3>
      <ul className="space-y-2 text-sm">
        <li><a href="#" className="hover:text-emerald-300">Home</a></li>
        <li><a href="#" className="hover:text-emerald-300">Features</a></li>
        <li><a href="#" className="hover:text-emerald-300">Pricing</a></li>
        <li><a href="#" className="hover:text-emerald-300">Contact</a></li>
      </ul>
    </div>

    <div>
      <h3 className="text-white font-semibold mb-4">Resources</h3>
      <ul className="space-y-2 text-sm">
        <li><a href="#" className="hover:text-emerald-300">Blog</a></li>
        <li><a href="#" className="hover:text-emerald-300">Help Center</a></li>
        <li><a href="#" className="hover:text-emerald-300">Privacy Policy</a></li>
        <li><a href="#" className="hover:text-emerald-300">Terms of Service</a></li>
      </ul>
    </div>

    <div>
      <h3 className="text-white font-semibold mb-4">Follow Us</h3>
      <div className="flex gap-4 text-lg">
        <a href="#" className="hover:text-emerald-300"><FaFacebookF /></a>
        <a href="#" className="hover:text-emerald-300"><FaTwitter /></a>
        <a href="#" className="hover:text-emerald-300"><FaInstagram /></a>
        <a href="#" className="hover:text-emerald-300"><FaLinkedinIn /></a>
      </div>
    </div>
  </div>
  <div className="border-t border-blue-200 mt-8 pt-4 text-center text-sm text-blue-100">
    © {new Date().getFullYear()} Trackify. All rights reserved.
  </div>
</footer>

  );
};

export default Footer;
