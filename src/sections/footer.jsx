import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
  FaLocationDot,
} from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";
import logo from "../assets/logo-white.svg";

function Footer() {
  return (
    <footer className="bg-black text-white ">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-16">

        {/* Top */}
        <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between gap-8">

          <img src={logo} className="w-60" alt="Logo" />

          <button className="w-full md:w-auto border-2 border-white rounded-full px-6 py-3 flex items-center justify-center gap-3 hover:bg-white hover:text-black transition">
            <FaLocationDot />
            India | English
          </button>

        </div>

        <hr className="my-10 border-gray-700" />

        {/* Mobile Accordion Headings */}
        <div className="md:hidden space-y-6">

          <div className="flex justify-between items-center border-b border-gray-700 pb-5">
            <h3 className="text-2xl font-bold">About us</h3>
            <FaChevronDown />
          </div>

          <div className="flex justify-between items-center border-b border-gray-700 pb-5">
            <h3 className="text-2xl font-bold">Need help?</h3>
            <FaChevronDown />
          </div>

        </div>

        {/* Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 mt-8 md:mt-0">

          {/* Desktop Only */}
          <div className="hidden md:block">
            <h3 className="text-gray-400 uppercase text-sm mb-5">
              About Us
            </h3>

            <ul className="space-y-4 font-semibold">
              <li>Our Company</li>
              <li>Media Center</li>
              <li>History</li>
              <li>Careers</li>
              <li>Leadership</li>
            </ul>
          </div>

          {/* Desktop Only */}
          <div className="hidden md:block">
            <h3 className="text-gray-400 uppercase text-sm mb-5">
              Need Help?
            </h3>

            <ul className="space-y-4 font-semibold">
              <li>FAQ</li>
              <li>Sitemap</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div>
            <ul className="space-y-4 font-semibold mt-0 md:mt-9">
              <li>Terms of Use</li>
              <li>Privacy Notice</li>
              <li>Financial & Policy Documents</li>
              <li>Supplier Terms & Conditions</li>
            </ul>
          </div>

          <div>
            <ul className="space-y-4 font-semibold mt-0 md:mt-9">
              <li>Consumer Privacy Notice</li>
              <li>Supplier Terms & Conditions - CPS</li>
            </ul>
          </div>

        </div>

        <hr className="my-10 border-gray-700" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-8">

          <div className="flex justify-start gap-4">

            <div className="w-12 h-12 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition">
              <FaXTwitter />
            </div>

            <div className="w-12 h-12 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition">
              <FaInstagram />
            </div>

            <div className="w-12 h-12 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition">
              <FaYoutube />
            </div>

            <div className="w-12 h-12 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition">
              <FaFacebookF />
            </div>

          </div>

          <p className="text-left md:text-right text-sm md:text-lg">
            © 2026 The Coca-Cola Company. All rights reserved.
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;