import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import SignUp from './components/Signup';
import Forgotpass from './components/ForgotPass';
import SignIn from './components/Signin';
import Home from './components/Home';

import Community from './pages/common/community/Community'
import Library from './pages/common/library/Library'
// import Article from './pages/common/articles/Article'

//student
import ConnectWithGuide from './pages/student/connect_with_guide/ConnectWithGuide';
import StudentBookmarks from './pages/student/student_bookmarks/StudentBookmarks';
import StudentHomePage from './pages/student/student_home_page/StudentHomePage';
import StudentThesis from './pages/student/student_thesis/StudentThesis';
import { PreferenceForm } from './pages/student/student_home_page/PreferenceForm';

//guide
 

//coordinator
import CoordinatorHomePage from './pages/coordinator/coordinator_home_page/CoordinatorHomePage';
import University from './pages/coordinator/university/University';
import Dashboard from './dashboard/Dashboard';
import UserContext from './context/UserContext';
import ResearcherHomePage from './pages/researcher/researcher_home_page/ResearcherHomePage';
import { CoordinatorStudents } from './pages/coordinator/Students/CoordinatorStudents';
import Guides from './pages/coordinator/Guides/Guides';
import EthicalComitte from './pages/coordinator/EthicalComitte/EthicalComitte';
import EvaluationTeam from './pages/coordinator/EvaluationTeam/EvaluationTeam';
import Settings from './pages/coordinator/Settings/Settings';
import TextEditor from './pages/student/text_editor/TextEditor';


import HomePage from './pages/Home/HomePage';
import { GuideDashboard } from './pages/guide/guideDashboard/GuideDashboard';
import ConnectWithStudents from './pages/guide/connect_with_students/ConnectWithStudents'
import GuideBookmarks from './pages/guide/guide_bookmarks/GuideBookmarks';
import GuideHomePage from './pages/guide/guide_home_page/GuideHomePage';
import GuideRequests from './pages/guide/guide_requests/GuideRequests';
import MyStudents from './pages/guide/my_students/MyStudents';
import Publications from './pages/common/articles/Publications';
 
 



const List=[
  {
      id: uuid(),
      name: "Nithin",
      title: "About SOmething",
      inBookMark: true,
      description: "Lorem ipsum dolor sit amet . The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication have a stable relationship with these words, but what is it? Lorem ipsum is a dummy text without any sense. It is a sequence of Latin words that, as they are positioned, do not form sentences with a complete sense, but give life to a test text useful to fill spaces that will subsequently be occupied from ad hoc texts composed by communication professionals.It is certainly the most famous placeholder text even if there are different versions distinguishable from the order in which the Latin words are repeated.Lorem ipsum contains the typefaces more in use, an aspect that allows you to have an overview of the rendering of the text in terms of font choice and font size .When referring to Lorem ipsum, different expressions are used, namely fill text , fictitious text , blind text or placeholder text : in short, its meaning can also be zero, but its usefulness is so clear as to go through the centuries and resist the ironic and modern versions that came with the arrival of the web."
  },
  {
    id: uuid(),
      name: "Swapnith",
      title: "About SOmething",
      inBookMark: false,
      description: "Lorem ipsum dolor sit amet . The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication have a stable relationship with these words, but what is it? Lorem ipsum is a dummy text without any sense.It is a sequence of Latin words that, as they are positioned, do not form sentences with a complete sense, but give life to a test text useful to fill spaces that will subsequently be occupied from ad hoc texts composed by communication professionals.It is certainly the most famous placeholder text even if there are different versions distinguishable from the order in which the Latin words are repeated.Lorem ipsum contains the typefaces more in use, an aspect that allows you to have an overview of the rendering of the text in terms of font choice and font size .When referring to Lorem ipsum, different expressions are used, namely fill text , fictitious text , blind text or placeholder text : in short, its meaning can also be zero, but its usefulness is so clear as to go through the centuries and resist the ironic and modern versions that came with the arrival of the web."
  }
]





function App() {
  //From Nithin code
  const [isIconSidebar, onreplaceIconSidebar]=useState(false)
  const [thesisList, onchangeBookMark]=useState(List)


    const replaceIconSidebar=()=>{
        onreplaceIconSidebar(prevstate=> !prevstate)
    }

   const changeBookMark=(id)=>{
    let i=0
    const templist=thesisList
        for(i=0;i<templist.length;i++){
            if(templist[i].id===id) templist[i].inBookMark=!templist[i].inBookMark
        }
        onchangeBookMark(templist)
    }
  //END
  
  const [userData,setUserData]=useState({});
  const onSetUserData=(user)=>{
    setUserData(user);
  }
  return (
    <div className=''>
    <UserContext.Provider
      value={
        {
          userData:userData,
          changeUserData: onSetUserData,
          thesisList, 
          isIconSidebar, 
          replaceIconSidebar: replaceIconSidebar, 
          changeBookMark: changeBookMark
      }
    }
    >
    
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path = '/home' element = {<HomePage/>}/>
          <Route exact path="/dashboard" element={<Dashboard/>} />
          <Route exact path="/signin" element={<SignIn/>}/>
          <Route exact path="/signup" element={<SignUp/>}/>
          <Route exact path="/forgot-password" element={<Forgotpass/>}/>

          <Route exact path="/community" element={<Community/>}/>
          <Route exact path="/Library" element={<Library/>}/>
          {/* <Route exact path="/articles" element={<Article/>}/> */}
          <Route exact path="/connect-with-guide" element={<ConnectWithGuide/>}/>
          <Route exact path="/student-bookmarks" element={<StudentBookmarks/>}/>
          <Route exact path="/student-home-page" element={<StudentHomePage/>}/>
          <Route exact path="/student-thesis" element={<StudentThesis/>}/>
          <Route exact path="/add-preferences" element={<PreferenceForm/>}/>
          <Route exact path="/editor" element={<TextEditor/>}/>

          <Route exact path="/connect-with-students" element={<ConnectWithStudents/>}/>
          <Route exact path="/guide-bookmarks" element={<GuideBookmarks/>}/>
          <Route exact path="/guide-home-page" element={<GuideHomePage/>}/>
          <Route exact path="/guide-requests" element={<GuideRequests/>}/>
          <Route exact path="/guide-students" element={<MyStudents/>}/>
          <Route exact path = '/guide-dashboard' element ={<GuideDashboard/>}/>

          <Route exact path="/coordinator-home-page" element={<CoordinatorHomePage/>}/>
          <Route exact path="/university" element={<University/>}/>
          <Route exact path="/pre" element={<PreferenceForm/>}/>
          <Route exact path="/researcher-home-page" element={<ResearcherHomePage/>}/>
          <Route exact path='/students' element={<CoordinatorStudents/>}></Route>
          <Route exact path='/guides' element={<Guides/>}></Route>
          <Route exact path='/ethical-comitte' element={<EthicalComitte/>}></Route>
          <Route exact path='/evaluation-team' element={<EvaluationTeam/>}></Route>
          <Route exact path='/settings' element={<Settings/>}></Route>

          <Route exact path = 'publications' element = {<Publications/>}/>
        </Routes>
      </BrowserRouter>
      
    
    </UserContext.Provider>
    </div>
  );
}

export default App;