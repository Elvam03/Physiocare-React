import PhysioSidebar from "../Properties/PhysioSidebar";
import Navbar from "../Properties/Navbar";
import Settings from "../Pages/Settings"

const PhysioSettings = () => {

    return(
        <div className="bg-gray-100 min-h-screen">
            <div className="sticky top-0 z-20">
                <Navbar/>

            </div>
            <div>
                <PhysioSidebar/>
            </div>

            <div>
                <Settings/>
            </div>

        </div>
    )
}

export default PhysioSettings;