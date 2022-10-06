import React from "react";
import { Routes, Route } from "react-router-dom";
import CreateCalendar from "../pages/CreateCalendar";
import Pricing from "../pages/Pricing";
import Home from "../component/Home";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import GetADemo from "../pages/GetADemo";
import Actionable from "../pages/Actionable_Marketing/Actionable";
import Customer from "../pages/Customer_Stories/Customer";
import GroceryItem from "../pages/mktcal";


// import Marksuit from "../pages/marksuit";
// import Signup from "../pages/Signup";
const AllRoutes = () => {
  return (
    <div>
    
     
      <Routes>
        <Route path ="/" element ={ <Home />}/>
        <Route path="/Calender" element={<CreateCalendar />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Actionable" element={<Actionable />} />
        <Route path="/demo" element={<GetADemo />} />
        <Route path="/Customer" element={<Customer/>}/>
        <Route path="/mtkcal" element={<GroceryItem/>}/>
        {/* <Route path="/MarkSuit" element={<Marksuit/>}/> */}
      </Routes>
     
    </div>
  );
};

export default AllRoutes;
