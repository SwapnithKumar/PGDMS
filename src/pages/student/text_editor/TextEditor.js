// TextEditor.js

import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { app, auth, db } from '../../../firebase'; // Import the 'app', 'auth', and 'db' objects from your Firebase configuration module
import { doc, getDoc, setDoc } from 'firebase/firestore'; // Import Firestore functions

const TextEditor = () => {
  const [text, setText] = useState('');
  const [docId, setDocId] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const user = auth.currentUser; // Use the 'auth' object from your imported module

      if (user) {
        setUser(user);

        const userId = user.uid; // Define 'userId' using the user's UID
    
        const docRef = doc(db, 'universities', 'uni1', 'student', userId);

        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setText(docSnap.data().thesis || '');
          setDocId(docSnap.id);
        }
      } else {
        setUser(null);
      }
    };

    fetchData();
  }, []);

  const handleTextChange = (content) => {
    setText(content);
  };

  const saveText = async () => {
    const userId = user.uid; // Access 'userId' from the user object
    const docRef = doc(db, 'universities', 'uni1', 'student', userId);

    try {
      await setDoc(docRef, { thesis: text }, { merge: true });
      console.log('Document successfully updated!');
    } catch (error) {
      console.error('Error updating document: ', error);
    }
  };

  return (
    <div>
      <ReactQuill value={text} onChange={handleTextChange} />
      <button onClick={saveText}>Save</button>
    </div>
  );
};

export default TextEditor;
