import React,{Component} from 'react'
import GuideSidebar from '../guideSidebarHeader/Sidebar'
import GuideRequestCard from '../guide_requests/GuideRequestCard'

import '../guide_requests/GuideRequestPage.css'
import { PreferenceForm } from '../guide_preferences/guidePreference'

const StudentRequests = [
  {
      name:"Swapnith",
      id:0,
      topic:"Web",
      age:20,
      gender:"M",
      email:"123@gmail.com",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnGZWTF4dIu8uBZzgjwWRKJJ4DisphDHEwT2KhLNxBAA&s"
  },
  {
      name:"Nithin",
      id:1,
      topic:"DSA",
      age:20,
      gender:"M",
      email:"123@gmail.com",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnGZWTF4dIu8uBZzgjwWRKJJ4DisphDHEwT2KhLNxBAA&s"
  },
  {
      name:"Chandu",
      id:2,
      topic:"AI",
      age:20,
      gender:"M",
      email:"123@gmail.com",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnGZWTF4dIu8uBZzgjwWRKJJ4DisphDHEwT2KhLNxBAA&s"
  },
  {
      name:"Ajay",
      id:3,
      topic:"ML",
      age:20,
      gender:"M",
      email:"123@gmail.com",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnGZWTF4dIu8uBZzgjwWRKJJ4DisphDHEwT2KhLNxBAA&s"
  },
  {
      name:"Varsha",
      id:4,
      topic:"Ayurvedic",
      age:20,
      gender:"F",
      email:"123@gmail.com",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnGZWTF4dIu8uBZzgjwWRKJJ4DisphDHEwT2KhLNxBAA&s"
  },
  {
     name:"Ruchitha",
     id:5,
     topic:"Web",
     age:20,
     gender:"F",
     email:"123@gmail.com",
     image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnGZWTF4dIu8uBZzgjwWRKJJ4DisphDHEwT2KhLNxBAA&s"
 },
 {
     name:"Vineetha",
     id:6,
     topic:"Web",
     age:20,
     gender:"F",
     email:"123@gmail.com",
     image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnGZWTF4dIu8uBZzgjwWRKJJ4DisphDHEwT2KhLNxBAA&s"
 },
 {
     name:"Gnaneshwar",
     id:7,
     topic:"Web",
     age:20,
     gender:"M",
     email:"123@gmail.com",
     image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnGZWTF4dIu8uBZzgjwWRKJJ4DisphDHEwT2KhLNxBAA&s"
 },
 {
     name:"Shivamani",
     id:8,
     topic:"Web",
     age:20,
     gender:"M",
     email:"123@gmail.com",
     image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnGZWTF4dIu8uBZzgjwWRKJJ4DisphDHEwT2KhLNxBAA&s"
 },
 {
     name:"Koushik",
     id:9,
     topic:"Web",
     age:20,
     gender:"M",
     email:"123@gmail.com",
     image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnGZWTF4dIu8uBZzgjwWRKJJ4DisphDHEwT2KhLNxBAA&s"
 }

]



class GuideRequests extends Component {

    state = {requestDetails: StudentRequests[0]}

    showStudentDetails = (id)=>{
        this.setState({requestDetails: StudentRequests[id]})
    }

    render(){
        const {requestDetails} = this.state
        const {name,id,topic,age,gender,email,image} = requestDetails

        if(StudentRequests.length === 0){
            return(
            <div className="guide-request-page">
                <GuideSidebar/>
                <h1>No Requests yet</h1>
            </div>
            )
        }
        return(
            <div className="guide-request-page">
            <GuideSidebar/>
                <div className="requests-bg-container">
                <h1>Requests From Students</h1>
                <ul className="requests-container">
                {StudentRequests.map(eachItem => (
                    <GuideRequestCard eachItem = {eachItem} showStudentDetails = {this.showStudentDetails}/>
                ))}
                </ul>
                    
                    <div className='preferences-and-profile-container'>
                        <div className='preference-list'>
                            <PreferenceForm/>
                        </div>
        
                        <div className='request-details-container'>
                             <img src = {image} className='profile-img'/>
                             <h3>Name : {name}</h3>
                             <p>Age : {age}</p>
                             <p>Gender : {gender}</p>
                             <p>Email : {email}</p>
                             <p>Topic : {topic}</p>
                        </div>
                    </div>
                
                </div>
            </div>
        )
    }   
}


 

 
 
export default GuideRequests
