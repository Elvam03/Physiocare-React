import PhysioSidebar from "../Properties/PhysioSidebar";
import Navbar from "../Properties/Navbar";


const PhysioDashboad = () => {

    localStorage.setItem(
        "profileData",
        JSON.stringify({
          name: "John Doe",
          specialty: "Orthopedic",
          bio: "Experienced in sports rehabilitation.",
          profilePicture: null,
        })
      );
      

    const profile = JSON.parse(localStorage.getItem("profileData")) || {
        name: "John Doe",
        specialty: "Orthopedic",
        bio: "Experienced in sports rehabilitation.",
        profilePicture: null,
      };
    
      const todaySchedule = [
        { time: "10:00 AM", patient: "Alice Johnson", task: "Therapy Session" },
        { time: "2:00 PM", patient: "Mark Smith", task: "Follow-up Consultation" },
      ];
    
      const upcomingAppointments = [
        { date: "2025-01-19", time: "11:00 AM", patient: "Jane Doe" },
        { date: "2025-01-20", time: "3:00 PM", patient: "Robert Brown" },
      ];
    

    return(
        <div className="bg-gray-100 min-h-screen">

            <div className="sticky top-0 z-20">
                <Navbar />
            </div>
            
            <div>
                <PhysioSidebar/>
            </div>

            <div className="p-6">
      {/* Profile Section */}
      <div className="bg-teal-700 text-white shadow-md rounded-lg p-6 mb-8">
        <div className="flex items-center">
          <img
            src={
              profile.profilePicture ||
              "https://via.placeholder.com/150?text=Profile+Picture"
            }
            alt="Profile"
            className="w-24 h-24 rounded-full mr-6"
          />
          <div>
            <h1 className="text-2xl font-bold">{profile.name}</h1>
            <p className="text-blue-500">{profile.specialty}</p>
            <p className="mt-2">{profile.bio}</p>
          </div>
        </div>
      </div>

      {/* Schedule and Appointments Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Today's Schedule */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Today's Schedule</h2>
          {todaySchedule.length > 0 ? (
            <ul>
              {todaySchedule.map((item, index) => (
                <li
                  key={index}
                  className="border-b border-gray-200 py-3 flex justify-between items-center"
                >
                  <span className="text-gray-700">
                    <strong>{item.time}</strong> - {item.patient}
                  </span>
                  <span className="text-sm text-gray-500">{item.task}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No scheduled tasks for today.</p>
          )}
        </div>

        {/* Upcoming Appointments */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Upcoming Appointments</h2>
          {upcomingAppointments.length > 0 ? (
            <ul>
              {upcomingAppointments.map((appointment, index) => (
                <li
                  key={index}
                  className="border-b border-gray-200 py-3 flex justify-between items-center"
                >
                  <span className="text-gray-700">
                    <strong>{appointment.date}</strong> - {appointment.patient}
                  </span>
                  <span className="text-sm text-gray-500">{appointment.time}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No upcoming appointments.</p>
          )}
        </div>
      </div>
    </div>

        </div>

    )
}

export default PhysioDashboad;