import PhysioSidebar from "../Properties/PhysioSidebar";
import Navbar from "../Properties/Navbar";
import Clinics from "../Pages/Clinics"

const PhysioClinics = () => {

    return(
        <div className="bg-gray-100 min-h-screen">
            <div className="sticky top-0 z-20">
                <Navbar/>

            </div>
            <div>
                <PhysioSidebar/>
            </div>

            <div>
                <Clinics/>
            </div>

        </div>
    )
}

export default PhysioClinics;