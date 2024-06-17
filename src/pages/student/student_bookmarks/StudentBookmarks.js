//Bookmark/index.js

import { Component } from "react";
import UserContext from "../../../context/UserContext";
import ThesisItem from "../student_thesis/ThesisItem";
import Sidebar from '../studentSidebarAndHeader/Sidebar'
import '../student_bookmarks/StudentBookmarks.css'

class StudentBookmarks extends Component{
    render(){
        return(
            <UserContext.Consumer>
                {value=>{
                    const {thesisList, changeBookMark, replaceIconSidebar, isIconSidebar}=value
                    const filteredThesisList=thesisList.filter(item=>item.inBookMark===true)
                    return(
                        <div className="bookmark-main-container">
                            {/* <Header replaceIconSidebar={this.replaceIconSidebar}/> */}
                            <Sidebar isIconSidebar={isIconSidebar}/>
                            <div className="bg-container">
                                 
                                <div className="thesis-container w-75">
                                    <ul className="thesisList-container">
                                        { filteredThesisList.map(item=>(<ThesisItem item={item} key={item.id} changeBookMark={changeBookMark}/>))}
                                    </ul> 
                                </div>
                            </div>
                        </div>  
                    )
                }}
            </UserContext.Consumer>
        )
    }
}
export default StudentBookmarks