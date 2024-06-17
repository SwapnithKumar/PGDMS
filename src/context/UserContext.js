import React from 'react'
import { getAuth,onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';

// onAuthStateChanged(auth, (user) => {
//       if (user) {
//         console.log("uid @home1:",user.uid);
//       }
//      else{
        
//         console.log("uid @home1:");
//      }
//     });


const user=getAuth().currentUser;
if(user!==null){
console.log(user.displayName,user.email,user.uid);
}
const UserContext = React.createContext({
    userData: {},
    changeUserData:()=>{},
    //From Nithin code
    thesisList: [],
    isIconSidebar: false,
    eventsList: [],
    replaceIconSidebar: ()=>{},
    changeBookMark: ()=>{}
    }
);

export default UserContext
