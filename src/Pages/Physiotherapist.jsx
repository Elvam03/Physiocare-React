import PhysioSidebar from "../Properties/PhysioSidebar";
import Navbar from "../Properties/Navbar";
import Physio from "../Pages/Physio"

const Physiotherapist = () => {

    return(
        <div className="bg-gray-100 min-h-screen">
            <div className="sticky top-0 z-20">
                <Navbar/>

            </div>
            <div>
                <PhysioSidebar/>
            </div>

            <div>
                <Physio/>
            </div>

        </div>
    )
}

export default Physiotherapist;