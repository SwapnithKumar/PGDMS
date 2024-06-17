import React from 'react'
import GuideSidebar from '../guideSidebarHeader/Sidebar'
import { Component } from "react";

import '../my_students/MyStudents.css'
import GuideStudent from './GuideStudent';
 

const StudDetails = [
    {
        name:"Swapnith",
        id:1,
        topic:"Web",
        age:20,
        gender:"M",
        email:"123@gmail.com",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnGZWTF4dIu8uBZzgjwWRKJJ4DisphDHEwT2KhLNxBAA&s"
    },
    {
        name:"Nithin",
        id:2,
        topic:"Web",
        age:20,
        gender:"M",
        email:"123@gmail.com",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnGZWTF4dIu8uBZzgjwWRKJJ4DisphDHEwT2KhLNxBAA&s"
    },
    {
        name:"Chandu",
        id:3,
        topic:"Web",
        age:20,
        gender:"M",
        email:"123@gmail.com",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnGZWTF4dIu8uBZzgjwWRKJJ4DisphDHEwT2KhLNxBAA&s"
    },
    {
        name:"Swapnith",
        id:1,
        topic:"Web",
        age:20,
        gender:"M",
        email:"123@gmail.com",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnGZWTF4dIu8uBZzgjwWRKJJ4DisphDHEwT2KhLNxBAA&s"
    },
    {
        name:"Nithin",
        id:2,
        topic:"Web",
        age:20,
        gender:"M",
        email:"123@gmail.com",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnGZWTF4dIu8uBZzgjwWRKJJ4DisphDHEwT2KhLNxBAA&s"
    },
    {
        name:"Chandu",
        id:3,
        topic:"Web",
        age:20,
        gender:"M",
        email:"123@gmail.com",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnGZWTF4dIu8uBZzgjwWRKJJ4DisphDHEwT2KhLNxBAA&s"
    },
    {
        name:"Swapnith",
        id:1,
        topic:"Web",
        age:20,
        gender:"M",
        email:"123@gmail.com",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnGZWTF4dIu8uBZzgjwWRKJJ4DisphDHEwT2KhLNxBAA&s"
    },
    {
        name:"Nithin",
        id:2,
        topic:"Web",
        age:20,
        gender:"M",
        email:"123@gmail.com",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnGZWTF4dIu8uBZzgjwWRKJJ4DisphDHEwT2KhLNxBAA&s"
    },
    {
        name:"Chandu",
        id:3,
        topic:"Web",
        age:20,
        gender:"M",
        email:"123@gmail.com",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnGZWTF4dIu8uBZzgjwWRKJJ4DisphDHEwT2KhLNxBAA&s"
    },
    {
        name:"Swapnith",
        id:1,
        topic:"Web",
        age:20,
        gender:"M",
        email:"123@gmail.com",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnGZWTF4dIu8uBZzgjwWRKJJ4DisphDHEwT2KhLNxBAA&s"
    },
    {
        name:"Nithin",
        id:2,
        topic:"Web",
        age:20,
        gender:"M",
        email:"123@gmail.com",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnGZWTF4dIu8uBZzgjwWRKJJ4DisphDHEwT2KhLNxBAA&s"
    },
    {
        name:"Chandu",
        id:3,
        topic:"Web",
        age:20,
        gender:"M",
        email:"123@gmail.com",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnGZWTF4dIu8uBZzgjwWRKJJ4DisphDHEwT2KhLNxBAA&s"
    },
    {
        name:"Swapnith",
        id:1,
        topic:"Web",
        age:20,
        gender:"M",
        email:"123@gmail.com",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnGZWTF4dIu8uBZzgjwWRKJJ4DisphDHEwT2KhLNxBAA&s"
    },
    {
        name:"Nithin",
        id:2,
        topic:"Web",
        age:20,
        gender:"M",
        email:"123@gmail.com",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnGZWTF4dIu8uBZzgjwWRKJJ4DisphDHEwT2KhLNxBAA&s"
    },
    {
        name:"Chandu",
        id:3,
        topic:"Web",
        age:20,
        gender:"M",
        email:"123@gmail.com",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnGZWTF4dIu8uBZzgjwWRKJJ4DisphDHEwT2KhLNxBAA&s"
    },
    {
        name:"Swapnith",
        id:1,
        topic:"Web",
        age:20,
        gender:"M",
        email:"123@gmail.com",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnGZWTF4dIu8uBZzgjwWRKJJ4DisphDHEwT2KhLNxBAA&s"
    },
    {
        name:"Nithin",
        id:2,
        topic:"Web",
        age:20,
        gender:"M",
        email:"123@gmail.com",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnGZWTF4dIu8uBZzgjwWRKJJ4DisphDHEwT2KhLNxBAA&s"
    },
    {
        name:"Chandu",
        id:3,
        topic:"Web",
        age:20,
        gender:"M",
        email:"123@gmail.com",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnGZWTF4dIu8uBZzgjwWRKJJ4DisphDHEwT2KhLNxBAA&s"
    }
]


class MyStudents extends Component{ 
    
    state={details: StudDetails[0]}

    showDetails=(id)=>{
        const filtered=StudDetails.filter(item=>(item.id===id))
        this.setState({details: filtered[0]})
    }

    render(){
        const {details}=this.state
        const {name,age,id,email,gender,topic,image} = details
        return(
          <div>
            <GuideSidebar/>
            <div className="guide-student-details-page">
                <h1 className="database-heading">Database</h1>
                <div className="flex-page">
                    <div className="studentDetailsContainer">
                        <table className="table-headers">
                        <tr>
                            <th>Name</th>
                            <th>Id</th>
                            <th>Topic</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Email</th>
                        </tr>
                        {StudDetails.map(eachItem=>(<GuideStudent eachItem = {eachItem} showDetails={this.showDetails}/>))}
                        </table>
                </div>
                <div className="studentProfileContainer">
                    <div className="student-profile">
                        <img src = {image} className="student-profile-image" alt = "student-image"/>
                        <h1>{name}</h1>
                        <p>{email}</p>
                        <p>{topic}</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        )
    }
}
    


export default MyStudents
