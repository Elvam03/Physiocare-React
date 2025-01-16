import React, { useState } from "react";
import Sidebar from "../Properties/Sidebar";
import Navbar from "../Properties/Navbar";

const Chat = () => {
    return(
        <div>
            
            <div>
                <Navbar/>

            </div>
            <div>
                <Sidebar/>
            </div>

            <div>
                My chats
            </div>
        </div>
    )
}

export default Chat;