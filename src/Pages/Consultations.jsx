import React, { useState } from "react";
import Sidebar from "../Properties/Sidebar";
import Navbar from "../Properties/Navbar";

const Consultations = () => {
    return(
        <div>
            
            <div className="sticky top-0 z-20">
                <Navbar/>

            </div>
            <div>
                <Sidebar/>
            </div>

            <div className="bg-gray-100 h-screen">
                My Virtual Consultations
            </div>
        </div>
    )
}

export default Consultations;