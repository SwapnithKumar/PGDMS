import { Component } from "react";
import '../guide_requests/GuideRequestCard.css'



class GuideRequestCard extends Component{

    getRequestDetails = ()=>{
        const {eachItem,showStudentDetails} = this.props
        const {id}=eachItem
        showStudentDetails(id)
    }

    render(){
        const {eachItem} = this.props
        const {name,id,topic,age,gender,email,image} = eachItem
        return(
             <div className="requests-card-container" onClick={this.getRequestDetails}>
                <div className="profile-details-container">
                    <img src = {image} className="student-profile-image"/>
                    <div>
                        <h3>{name}</h3>
                        <p className="request-msg">@{name} requested to connect.</p>
                    </div>
                </div>
                {/* <div className="profile-details-container">
                    <button className="btn btn-success button">Accept</button>
                    <button className="btn btn-danger button">Reject</button>
                </div> */}
             </div>
        )
    }
}

export default GuideRequestCard