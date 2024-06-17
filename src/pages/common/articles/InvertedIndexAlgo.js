// import React from 'react'
// import db from '../../../firebase';
// import { collection ,getDocs} from 'firebase/firestore';

// function createInvertedIndexes(documents) {
//     let titleIndex = {};
//     let keywordIndex = {};
//     let authorIndex = {};
//     let abstractIndex = {};
  
//     const addToIndex = (index, text, docId) => {
//       const words = text.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").split(/\s+/);
//       words.forEach(word => {
//         for (let i = 1; i <= word.length; i++) {
//           const partialWord = word.substring(0, i);
//           if (!index[partialWord]) {
//             index[partialWord] = new Set();
//           }
//           index[partialWord].add(docId);
//         }
//       });
//     };
  
//     documents.forEach(doc => {
//       const {  title, keywords, firstName, abstract } = doc;
//       const author=firstName;
//       addToIndex(titleIndex, title);
//       addToIndex(keywordIndex, keywords);
//       addToIndex(authorIndex, author);
//       addToIndex(abstractIndex, abstract);
//     });
  
//     // Convert sets to arrays
//     const convertSetsToArrays = (index) => {
//       Object.keys(index).forEach(key => {
//         index[key] = Array.from(index[key]);
//       });
//     };
  
//     convertSetsToArrays(titleIndex);
//     convertSetsToArrays(keywordIndex);
//     convertSetsToArrays(authorIndex);
//     convertSetsToArrays(abstractIndex);
  
//     return { titleIndex, keywordIndex, authorIndex, abstractIndex };
//   }


//   const InvertedIndexAlgo = () => {
//     let documents=[]
//     const fn=async ()=>{
//     const ref = collection(db, "publishedDissertations");
//     const snapshot= await getDocs(ref);
    
//     snapshot.forEach((doc)=>{
//         documents.push(doc.data());
//     })
//     const { titleIndex, keywordIndex, authorIndex, abstractIndex }=createInvertedIndexes(documents);
//     console.log(titleIndex);
//     }
//     fn();
    
//     return (
//       <div>
//         fafga
//       </div>
//     )
//   }
  
//   export default InvertedIndexAlgo
  