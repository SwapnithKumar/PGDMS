import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import './GuideDashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import "./App.css";

// Dummy data for the student's current thesis and progress
const currentThesis = {
  title: 'Your Thesis Title',
  guide: 'Your Guide Name',
};

 

const locales = {
    "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const events = [
    {
        title: "Big Meeting",
        allDay: true,
        start: new Date(2021, 6, 0),
        end: new Date(2021, 6, 0),
    },
    {
        title: "Vacation",
        start: new Date(2021, 6, 7),
        end: new Date(2021, 6, 10),
    },
    {
        title: "Conference",
        start: new Date(2021, 6, 20),
        end: new Date(2021, 6, 23),
    },
];

export const GuideDashboard=()=> {
    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
    const [allEvents, setAllEvents] = useState(events);

    function handleAddEvent() {
        
        for (let i=0; i<allEvents.length; i++){

            const d1 = new Date (allEvents[i].start);
            const d2 = new Date(newEvent.start);
            const d3 = new Date(allEvents[i].end);
            const d4 = new Date(newEvent.end);
      /*
          console.log(d1 <= d2);
          console.log(d2 <= d3);
          console.log(d1 <= d4);
          console.log(d4 <= d3);
            */

             if (
              ( (d1  <= d2) && (d2 <= d3) ) || ( (d1  <= d4) &&
                (d4 <= d3) )
              )
            {   
                alert("CLASH"); 
                break;
             }
    
        }
        
        
        setAllEvents([...allEvents, newEvent]);
    }

    return (
      <div className="student-dashboard-bg-container">
        <div className="student-dashboard-thesis-calendar-container d-flex">
            <div className="student-thesis-card">
                <div className="student-thesis-card-header">
                    <h1>My Current Thesis</h1>
                </div>
                <div >
                    <p>Thesis Title: {currentThesis.title}</p>
                    <p>Guide: {currentThesis.guide}</p>
                </div>
            </div>
            
            <div className="calendar-card">
                <h2>Calendar</h2>
                <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height:400}} />
                <h3>Add New Event</h3>
                <div>
                    <input type="text" placeholder="Add Title" style={{ width: "20%", marginRight: "10px" }} value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
                    <DatePicker placeholderText="Start Date" style={{ marginRight: "10px" }} selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
                    <DatePicker placeholderText="End Date" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />
                    <button stlye={{ marginTop: "10px" }} onClick={handleAddEvent}>
                        Add Event
                    </button>
                </div>
            </div>
        </div>
    </div>
    );
}

