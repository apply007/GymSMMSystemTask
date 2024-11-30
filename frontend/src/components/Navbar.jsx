import React from "react";




const Navbar = () => {


  const handleLogout = () => {

  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
       
        <div className="flex space-x-4">
          {/* Show different links based on user roles */}
 
            <>
     
            </>
   
      
  
          {/* Show Login or Logout */}
         
            <button
              onClick={handleLogout}
              className="text-gray-300 hover:text-white bg-red-500 px-4 py-2 rounded"
            >
              Logout
            </button>
      
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
