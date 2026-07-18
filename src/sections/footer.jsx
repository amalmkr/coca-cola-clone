import { FaFacebookF, FaInstagram, FaYoutube, FaXTwitter, FaLocationDot } from "react-icons/fa6";
import logo from "../assets/logo-white.svg"

function Footer() {
  return (
    <footer className="bg-black text-white mt-20">
      <div className="max-w-7xl mx-auto px-10 py-16">

        
        <div className="flex justify-between items-center">

          <img src={logo} className="w-60" />

          <button className="border-2 border-white rounded-full px-6 py-3 flex items-center gap-3 hover:bg-white hover:text-black transition">
            <FaLocationDot />
            India | English
          </button>

        </div>

        <hr className="my-10 border-gray-700"/>

        
        <div className="grid grid-cols-4 gap-16">

          <div>
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

          <div>
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
            <ul className="space-y-4 font-semibold mt-9">
              <li>Terms of Use</li>
              <li>Privacy Notice</li>
              <li>Financial & Policy Documents</li>
              <li>Supplier Terms & Conditions</li>
            </ul>
          </div>

            <div className="flex justify-end gap-4">
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

            </div>

        <hr className="my-10 border-gray-700"/>

        <p className="text-right text-lg">
          © 2026 The Coca-Cola Company. All rights reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;