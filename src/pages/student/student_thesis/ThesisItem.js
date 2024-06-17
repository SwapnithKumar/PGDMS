//ThesisItem/index.js

import { RxDropdownMenu } from "react-icons/rx";
import "../student_thesis/ThesisItem.css"
import { Component } from "react";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";




class ThesisItem extends Component{

    state={isTrue: false}

    showFullThesisItemData=()=>{
        this.setState(prestate=>({isTrue: !prestate.isTrue}))
    }

    changeBookmark=()=>{
        const {item,changeBookMark}=this.props
        const {id}=item
        changeBookMark(id)
    }

    render(){
        const {item}=this.props
        const {isTrue}=this.state
        const {name, title, description, inBookMark}=item
        return(
            <li className="thesis-data-item">
                <div className="thesis-item-dropdown">
                    <h4>{name}</h4>
                    <div>
                        <button type="button" className="m-1" onClick={this.changeBookmark}>{inBookMark?(<FaStar />):(<CiStar />)}</button>
                        <button type="button" className="m-1" onClick={this.showFullThesisItemData}><RxDropdownMenu /></button>
                    </div>
                </div>
                {isTrue && (<><h1>{title}</h1>
                <p>{description}</p></>)}
            </li>
        )
    }
}
export default ThesisItem