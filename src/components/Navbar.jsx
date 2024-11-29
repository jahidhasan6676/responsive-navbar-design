import { useState } from "react";
import { NavLink } from "react-router-dom";
// import { IoMenu, IoClose } from "react-icons/io5";
import 'animate.css';


const Navbar = () => {

    const [open,setOpen] = useState(false);

    
    
    return (
        <nav className="p-5 bg-gray-800 text-white shadow md:flex md:justify-between md:items-center w-full fixed top-0 left-0">
            {/* logo and name */}
            <div className="flex justify-between items-center">
                <div className="text-2xl font-semibold flex items-center cursor-pointer">
                    <img className="h-10 inline" src="https://www.drupal.org/files/project-images/screenshot_361.png" alt="" />
                    Tailwind

                </div>
                <div onClick={()=>setOpen(!open)} className="md:hidden cursor-pointer text-3xl ">
                <ion-icon name={open ? "close" : "menu"}></ion-icon>
                </div>
            </div>
            {/* page name */}
            <ul    className={`md:flex md:items-center md:static absolute md:z-auto z-[-1] bg-gray-800  w-full left-0 md:w-auto md:pb-0 pb-6 md:pl-0 pl-7 transition-all duration-500 ease-in  ${
                    open
                        ? "top-20 opacity-100 " 
                        : "hidden"
                }`}>
                <li className="mx-4  md:my-0">
                    <NavLink to="/" className={({ isActive }) => ` ${isActive ? 'text-warning' : 'hover:text-warning'}`} >Home</NavLink>
                </li>
                <li className="mx-4 my-4 md:my-0">
                <NavLink to="/about" className={({ isActive }) => ` ${isActive ? 'text-warning' : 'hover:text-warning'}`} >About</NavLink>
                </li>
                <li className="mx-4 my-4 md:my-0">
                <NavLink to="/contact" className={({ isActive }) => ` ${isActive ? 'text-warning' : 'hover:text-warning'}`} >Contact</NavLink>
                </li>
                <li className="mx-4 my-4 md:my-0">
                <NavLink to="/profile" className={({ isActive }) => ` ${isActive ? 'text-warning' : 'hover:text-warning'}`} >Profile</NavLink>
                </li>
                <li className="mx-4 my-4 md:my-0">
                <NavLink to="/blog" className={({ isActive }) => ` ${isActive ? 'text-warning' : 'hover:text-warning'}`} >Blog's</NavLink>
                </li>

                <button className="bg-yellow-600 text-white duration-500 px-6 py-2 mx-4 hover:bg-gray-800 rounded">Get started</button>




            </ul>

        </nav>
    );
};

export default Navbar;