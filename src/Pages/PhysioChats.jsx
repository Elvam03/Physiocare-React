import PhysioSidebar from "../Properties/PhysioSidebar";
import Navbar from "../Properties/Navbar";

const PhysioChats = () => {

    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="sticky top-0 z-20">
                <Navbar />
            </div> 


            <div>
                <PhysioSidebar />

            </div>
        </div>
    )

}

export default PhysioChats;