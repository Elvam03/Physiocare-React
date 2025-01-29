import React, { useState } from 'react';
import Navbar from "../Properties/Navbar";
import { Link } from "react-router-dom";

const FacilityPage = () => {
    return(
        <div className='bg-gray-100 min-h-screen'>
            <div className="sticky top-0 z-20">
                <div className="fixed top-4 left-4 z-50">
                    <Link to="/" className="">
                        <img src="/Images/back.png" alt="Back" className="h-8 w-8 md:h-12 md:w-12" />
                    </Link>
                </div>
                <Navbar />
            </div>

        </div>

    )
}

export default FacilityPage;