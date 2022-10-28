import { BiArchive, BiCalendar } from "react-icons/bi";
import Search from "./components/Search";
import AddAppointment from "./components/AddAppointments";
import AppointmentInfo from "./components/AppointmentInfo";
import { useState, useEffect, useCallback } from "react";

function App() {
  let [appointmentList,setAppointmentList] = useState([]);
  const fetchData = useCallback(()=>{
    fetch('./Data.json').then(response => response.json()).then(data =>{
      setAppointmentList(data);
    })
  },[])
  useEffect(()=>{
    fetchData()
  },[fetchData]);
  return (
    <div className='App container max-auto mt-3 font-thin'>
      <h1 className='text-5xl mb-3'>
        <BiCalendar className="inline-block text-red-400 align-top" />Your Appointment</h1>
      <AddAppointment />
      <Search />
      <ul className="divide-y divide-gray-200">
        {
          appointmentList.map(appointment =>(
            <AppointmentInfo key={appointment.id}
            appointment = {appointment}
            />
          ))
        }
      </ul>
    </div>
  );
}

export default App;
