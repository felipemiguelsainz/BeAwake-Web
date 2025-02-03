import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false) 
  return (
        <nav className="flex sticky justify-between items-center text-white py-6 px-8 md:px-32 background-blue drop-shadow-md">
            <a href="#">
                <h3 className="w-52 text-3xl maven-pro font-bold">Be<span className="text-light-blue">Awake</span></h3>
            </a>
            <ul className="hidden xl:flex items-center gap-12 font-semibold text-base">
                <li className="p-3 hover:bg-amber-400 hover:text-white rounded-md transition-all cursor-pointer">ABOUT</li>
                <li className="p-3 hover:bg-amber-400 hover:text-white rounded-md transition-all cursor-pointer">VALUES</li>
                <li className="p-3 hover:bg-amber-400 hover:text-white rounded-md transition-all cursor-pointer">OUR MODEL</li>
                <li className="p-3 hover:bg-amber-400 hover:text-white rounded-md transition-all cursor-pointer">PRODUCT</li>
                <li className="p-3 hover:bg-amber-400 hover:text-white rounded-md transition-all cursor-pointer">CONTACT US</li>
            </ul>
            <RxHamburgerMenu className="xl:hidden block text-2xl cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}/>
            <div className={`absolute xl:hidden top-18 left-0 w-full bg-blue-950 flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${isMenuOpen ? "opacity-100" : "opacity-0"}`} style={{transition: "transform 0.3s ease, opacity 0.3s ease"}}>
                <li className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">Item</li>
                <li className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">Item</li>
                <li className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">Item</li>
            </div>
        </nav>
  )
}
