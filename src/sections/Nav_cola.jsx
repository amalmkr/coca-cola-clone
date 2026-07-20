import brand from "../assets/brand.svg"
import { useState } from "react";
import { FaBars,FaTimes,FaChevronDown } from "react-icons/fa";

function Nav_cola(){
    const [menuOpen,setMenuOpen]=useState(false);
    const [discoverOpen,setDiscoverOpen]=useState(false);
    const [shopOpen,setShopOpen]=useState(false);
    return(
        <>
            <nav className="bg-white p-2 text-black ">
                
                {/* default affects phone md:flex affect above phone */}
                <div className="hidden md:flex text-center items-center ml-20 gap-13 mt-6">

                <img src={brand} className="mb-3" alt="COCO COLA"/>
                <span className="text-xs font-extrabold cursor-pointer border-b-4 border-transparent hover:border-black pb-2">
                    Brands
                </span>

                <div className="relative group">
                    <span className="flex items-center gap-1 text-xs font-extrabold cursor-pointer border-b-4 border-transparent group-hover:border-black pb-2">
                    Discover
                    <span className="inline-block transition-transform duration-300 group-hover:rotate-90">
                        &gt;
                    </span>
                    </span>

                    {/* group-hover:block is help to show dropdown */}
                    
                    <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded-md w-64 py-3 z-50">
                    <a href="#coke-studio" className="block px-5 py-2 hover:bg-gray-100">
                        Coke Studio Bharat
                    </a>

                    <a href="#sprite-joke" className="block px-5 py-2 hover:bg-gray-100">
                        Sprite Joke In A Bottle
                    </a>
                    </div>
                </div>


                <span className="text-xs font-extrabold cursor-pointer border-b-4 border-transparent hover:border-black pb-2">
                    Impact
                </span>

                <div className="relative group">
                    <span className="flex items-center gap-1 text-xs font-extrabold cursor-pointer border-b-4 border-transparent group-hover:border-black pb-2">
                    Shop
                    <span className="inline-block transition-transform duration-300 group-hover:rotate-90">
                        &gt;
                    </span>
                    </span>

                    <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded-md w-64 py-3 z-50">
                    <a href="#coke-studio" className="block px-5 py-2 hover:bg-gray-100">
                        Big Basket
                    </a>

                    <a href="#sprite-joke" className="block px-5 py-2 hover:bg-gray-100">
                        Blinkit
                    </a>

                    <a href="#sprite-joke" className="block px-5 py-2 hover:bg-gray-100">
                        Flipkart
                    </a>

                    <a href="#sprite-joke" className="block px-5 py-2 hover:bg-gray-100">
                        Jiomart
                    </a>

                    <a href="#sprite-joke" className="block px-5 py-2 hover:bg-gray-100">
                        Amazon
                    </a>
                    </div>
                </div>

                </div>  

                <div className="flex md:hidden justify-between items-center p-4">
                        <img src={brand} />
                        {/* to close and open menu */}
                        <button onClick={() => setMenuOpen(!menuOpen)}>
                            {/* if menu open close btn shown if not bar button shown */}
                            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                </div>      
           
           {menuOpen && (
            <div className="md:hidden flex flex-col gap-4 p-4">

                <span>Brands</span>

                <div>
                    <button
                        onClick={() => setDiscoverOpen(!discoverOpen)}
                        className="flex justify-between w-full"
                    >
                        Discover
                        <FaChevronDown />
                    </button>

                    {discoverOpen && (
                        <div className="pl-4">
                            <a className="block py-2">Coke Studio Bharat</a>
                            <a className="block py-2">Sprite Joke In A Bottle</a>
                        </div>
                    )}
                </div>

                <span>Impact</span>

                <div>
                    <button
                        onClick={() => setShopOpen(!shopOpen)}
                        className="flex justify-between w-full"
                    >
                        Shop
                        <FaChevronDown />
                    </button>

                    {shopOpen && (
                        <div className="pl-4">
                            <a className="block py-2">Amazon</a>
                            <a className="block py-2">Blinkit</a>
                            <a className="block py-2">Flipkart</a>
                        </div>
                    )}
                </div>

            </div>
            )}
        </nav>
        </>
    )
}

export default Nav_cola;