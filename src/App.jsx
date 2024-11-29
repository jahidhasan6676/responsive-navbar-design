import React, { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white px-4 py-3">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold">MyLogo</div>
        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          <span className="text-2xl">&#9776;</span>
        </div>
        <ul
          className={`md:flex space-x-6 absolute md:static bg-gray-800 w-full md:w-auto ${
            isOpen ? "top-14" : "hidden"
          }`}
        >
          <li className="p-2 text-center hover:text-gray-400">
            <a href="#">Home</a>
          </li>
          <li className="p-2 text-center hover:text-gray-400">
            <a href="#">About</a>
          </li>
          <li className="p-2 text-center hover:text-gray-400">
            <a href="#">Services</a>
          </li>
          <li className="p-2 text-center hover:text-gray-400">
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default App;

