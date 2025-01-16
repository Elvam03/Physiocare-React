import React, { useState } from "react";
import Sidebar from "../Properties/Sidebar";
import Navbar from "../Properties/Navbar";

const Progress = () => {
    return(
        <div>
            
            <div>
                <Navbar/>

            </div>
            <div>
                <Sidebar/>
            </div>

            <div>
                My Progress
            </div>
        </div>
    )
}

export default Progress;