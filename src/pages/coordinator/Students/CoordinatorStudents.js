 
import React, { useState, useEffect } from 'react';
import '../Students/CoordinatorStudent.css'
import Sidebar from '../cordinatorSidebarHeader/Sidebar';
 

const domains = ['Engineering', 'Science', 'Arts'];

// Simulate fetching data from a backend API
const fetchData = async (domain) => {
  try {
    const response = await fetch(`https://api.example.com/students?domain=${domain}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};



   // Example students for each domain
const exampleStudents = {
    Engineering: [
      {
        id: 1,
        name: 'Jane Doe',
        guide: 'Dr. Johnson',
        domain: 'Engineering',
        year: '2nd',
        photo: 'https://placekitten.com/100/100', // Replace with actual photo URL
      },
      {
          id: 2,
          name: 'Jane Doe',
          guide: 'Dr. Johnson',
          domain: 'Engineering',
          year: '2nd',
          photo: 'https://placekitten.com/100/100', // Replace with actual photo URL
        },
        {
          id: 3,
          name: 'Jane Doe',
          guide: 'Dr. Johnson',
          domain: 'Engineering',
          year: '2nd',
          photo: 'https://placekitten.com/100/100', // Replace with actual photo URL
        },
      // Add more Engineering students as needed
    ],
    Science: [
      {
        id: 4,
        name: 'John Smith',
        guide: 'Dr. Davis',
        domain: 'Science',
        year: '3rd',
        photo: 'https://placekitten.com/101/101', // Replace with actual photo URL
      },
      {
          id: 5,
          name: 'Jane Doe',
          guide: 'Dr. Johnson',
          domain: 'Science',
          year: '2nd',
          photo: 'https://placekitten.com/100/100', // Replace with actual photo URL
        },
        {
            id: 6,
            name: 'Jane Doe',
            guide: 'Dr. Johnson',
            domain:'Science',
            year: '2nd',
            photo: 'https://placekitten.com/100/100', // Replace with actual photo URL
          },
          {
            id: 7,
            name: 'Jane Doe',
            guide: 'Dr. Johnson',
            domain: 'Science',
            year: '2nd',
            photo: 'https://placekitten.com/100/100', // Replace with actual photo URL
          },
      // Add more Science students as needed
    ],
    Arts: [
      {
        id: 8,
        name: 'Emily Johnson',
        guide: 'Dr. Williams',
        domain: 'Arts',
        year: '1st',
        photo: 'https://placekitten.com/102/102', // Replace with actual photo URL
      },
      {
          id: 9,
          name: 'Jane Doe',
          guide: 'Dr. Johnson',
          domain: 'Arts',
          year: '2nd',
          photo: 'https://placekitten.com/100/100', // Replace with actual photo URL
        },
        {
            id: 10,
            name: 'Jane Doe',
            guide: 'Dr. Johnson',
            domain: 'Arts',
            year: '2nd',
            photo: 'https://placekitten.com/100/100', // Replace with actual photo URL
          },
          {
            id: 11,
            name: 'Jane Doe',
            guide: 'Dr. Johnson',
            domain: 'Arts',
            year: '2nd',
            photo: 'https://placekitten.com/100/100', // Replace with actual photo URL
          },
          {
              id: 12,
              name: 'Emily Johnson',
              guide: 'Dr. Williams',
              domain: 'Arts',
              year: '1st',
              photo: 'https://placekitten.com/102/102', // Replace with actual photo URL
            },
            {
                id: 13,
                name: 'Jane Doe',
                guide: 'Dr. Johnson',
                domain: 'Arts',
                year: '2nd',
                photo: 'https://placekitten.com/100/100', // Replace with actual photo URL
              },
              {
                  id: 14,
                  name: 'Jane Doe',
                  guide: 'Dr. Johnson',
                  domain: 'Arts',
                  year: '2nd',
                  photo: 'https://placekitten.com/100/100', // Replace with actual photo URL
                },
                {
                  id: 15,
                  name: 'Jane Doe',
                  guide: 'Dr. Johnson',
                  domain: 'Arts',
                  year: '2nd',
                  photo: 'https://placekitten.com/100/100', // Replace with actual photo URL
                }
      // Add more Arts students as needed
    ],
};




const StudentCard = ({ id, name, guide, domain, year, photo }) => (
  <div className="card-student-coordinator" key={id}>
    <img src={photo} alt={`Profile of ${name}`} />
    <div className="info">
      <h3>{name}</h3>
      <p>Guide: {guide}</p>
      <p>Domain: {domain}</p>
      <p>Year of Study: {year}</p>
      <button onClick={() => alert(`View full profile of ${name}`)}>
        View Full Profile
      </button>
    </div>
  </div>
);

export const CoordinatorStudents = () => {
    const [selectedDomain, setSelectedDomain] = useState(null);
    const [students, setStudents] = useState([]);
  
    useEffect(() => {
      const fetchDataForDomain = async () => {
        if (selectedDomain) {
          const data = await fetchData(selectedDomain);
          setStudents(data);
        }
      };
  
      fetchDataForDomain();
    }, [selectedDomain]);
  
  
    return (
      <div>
        <Sidebar/>
        <div className="App">
        <div>
          <div className=''>
            <h1>Student Profiles</h1>
            <div className="domain-list">
              {domains.map((domain) => (
                <button key={domain} onClick={() => setSelectedDomain(domain)}>
                  {domain}
                </button>
              ))}
            </div>
          </div>
        
          <div className="profile-list">
            {/* Include the example students for the selected domain */}
            {exampleStudents[selectedDomain]?.map((student) => (
              <StudentCard key={student.id} {...student} />
            ))}
            {/* Display the fetched students for the selected domain */}
            {students.map((student) => (
              <StudentCard key={student.id} {...student} />
            ))}
          </div>
           
        </div>
        </div>
      </div>
    );
  };