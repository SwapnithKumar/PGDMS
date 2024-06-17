import { Component } from "react"
import "../my_students/GuideStudent.css"

class GuideStudent extends Component{

    show=()=>{
        const {showDetails, eachItem}=this.props
        const {id}=eachItem
        showDetails(id)
    }

    render(){
        const {eachItem, showDetails} = this.props
        const {name,id,topic,age,gender,email} = eachItem
        return(
            <tr onClick={this.show}>
                <td>{name}</td>
                <td>{id}</td>
                <td>{topic}</td>
                <td>{age}</td>
                <td>{gender}</td>
                <td>{email}</td>
            </tr>
        )
    }
}

export default GuideStudent