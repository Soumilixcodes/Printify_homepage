import React from "react";


const Navbar = () => {
  return (
    
   <div className="">
      <div className="container mx-auto flex justify-between items-center py-4 px-6  border-[1px] border-b-stone-300 shadow-2xl">
        <div>
          <img className="h-10 w-50 ml-20" src="src/components/Screenshot 2024-09-22 221848.png" alt="" />
        </div>
        <nav className="space-x-20">
          <a href="/" className="text-gray-600 hover:text-green-600">Catalog</a>
          <a href="/" className="text-gray-600 hover:text-green-600">How it works</a>
          <a href="/" className="text-gray-600 hover:text-green-600">Pricing</a>
          <a href="/" className="text-gray-600 hover:text-green-600">Blog</a>
          <a href="/" className="text-gray-600 hover:text-green-600">Services</a>
        </nav>
        <div className="space-x-4">
          <button className="border border-gray-300 px-4 py-2 rounded-lg text-gray-600">Log in</button>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg">Sign up</button>
        </div>
      </div>
    </div>
      
  
   
  );
};

export default Navbar;
