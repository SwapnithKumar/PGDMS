import React, { useState } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './StudentDashboard.css';
import { Link } from 'react-router-dom';

const locales = {
  'en-US': require('date-fns/locale/en-US'),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const currentThesis = {
  title: 'Your Thesis Title',
  guide: 'Your Guide Name',
};

const progressData = [
    { step: 1, label: 'Proposal', completed: true },
    { step: 2, label: 'Literature Review', completed: false },
    { step: 3, label: 'Data Collection', completed: false },
    { step: 4, label: 'Proposal', completed: true },
    { step: 5, label: 'Literature Review', completed: false },
    { step: 6, label: 'Data Collection', completed: false },
    // Add more steps as needed
  ];
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

export const StudentDashboard=()=> {
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
    <div className='student-dashboard-bg-container'>
             
       <div className='d-flex'>
            <div className='thesis-and-card-container'>
                {/* My Current Thesis Section */}
                <div className="my-current-thesis-section">
                    <div className="my-current-thesis-card">
                        <h1>Continue Your Thesis</h1>
                        <p>Thesis Title: {currentThesis.title}</p>
                        <p>Guide: {currentThesis.guide}</p>
                        <p>Description: Ayurveda is an alternative medicine system with historical roots in the Indian subcontinent. It is heavily practiced in India and Nepal, where around 80% of the population report using ayurveda.The theory and practice of ayurveda is pseudoscientific.</p>
                        <Link to='/editor'><button className="continue-button">Continue</button></Link>
                    </div>
                </div>

                {/* Cards Section */}
                <div className="cards-section">
                    <div className='d-flex'>
                        <Link to = '/student-bookmarks' style={{textDecoration: 'none'}}> 
                            <div className="card" style={{backgroundColor : '#f0e68c'}} href = '/bookmarks'>
                                <h5>My Bookmarks</h5>
                                {/* Content for My Bookmarks */}
                            </div>
                        </Link>
                        <Link to='/connect-with-guide' style={{textDecoration: 'none'}}>
                          <div className="card" style={{backgroundColor : '#add8e6'}}>
                              <h5>My Guide</h5>
                              {/* Content for My Guide */}
                         </div>
                            </Link>
                    </div>
                    <div className='d-flex'>
                    <Link to='/feedback' style={{textDecoration: 'none'}}>
                        <div className="card" style={{backgroundColor : '#98fb98'}}>
                            <h5>Complaints/Feedback</h5>
                            {/* Content for Complaints/Feedback */}
                        </div>
                      </Link>
                      <Link to='student-settings' style={{textDecoration: 'none'}}>
                          <div className="card" style={{backgroundColor : '#ffb6c1'}}>
                              <h5>Profile Settings</h5>
                              {/* Content for Complaints/Feedback */}
                          </div>
                        </Link>
                    </div>
                </div>
            </div>







            
            {/* Calendar Section */}
            <div className="calendar-section">
                <h5>Calendar</h5>
                <Calendar
                localizer={localizer}
                events={allEvents}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 400 }}
                />
                <h3>Add New Event</h3>
                <div>
                <input
                    type="text"
                    placeholder="Add Title"
                    style={{ width: "20%", marginRight: "10px" }}
                    value={newEvent.title}
                    onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                />
                <DatePicker
                    placeholderText="Start Date"
                    style={{ marginRight: "10px" }}
                    selected={newEvent.start}
                    onChange={(start) => setNewEvent({ ...newEvent, start })}
                />
                <DatePicker
                    placeholderText="End Date"
                    selected={newEvent.end}
                    onChange={(end) => setNewEvent({ ...newEvent, end })}
                />
                <button
                    className="button add-event-button"
                    onClick={handleAddEvent}
                >
                    Add Event
                </button>
                </div>
            </div>
       </div>
 

      {/* Progress Tracker Card */}
      <div className="tracker-card">
        <div className="card-header">
          <h5 className="h5 mb-4">Progress Tracking</h5>
        </div>
        <div className="card-body">
          <ul className="stepper">
            {progressData.map((step, index) => (
              <li key={step.step} className={`step ${step.completed ? 'completed' : ''}`}>
                {index > 0 && <div className="line"></div>}
                <div className="step-number">{step.step}</div>
                <div className="step-label">{step.label}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
