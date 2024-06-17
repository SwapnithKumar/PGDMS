import React, { useState, useEffect } from 'react';
import { collection, query, where, getFirestore, doc, getDoc } from 'firebase/firestore';
import { Button } from '@mui/material';
import './Publications.css';

const db = getFirestore();

const Publications = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [invertedData, setInvertedData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ref = doc(db, "publishedDissertations", "invertedData");
        const Data = await getDoc(ref);
        setInvertedData(Data.data());
      } catch (error) {
        console.error("Error fetching inverted data: ", error);
      }
    };

    fetchData();
  }, []);

  const onSearchTerm = async () => {
    const words = searchTerm.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '').toLowerCase().split(/\s+/);
    let idArray = [];
    words.forEach((word) => {
      const { invertedIndexTitle, invertedIndexKeyword, invertedIndexAbstract } = invertedData;
      if (invertedIndexTitle && invertedIndexTitle[word]) {
        idArray = idArray.concat(invertedIndexTitle[word]);
      } else if (invertedIndexKeyword && invertedIndexKeyword[word]) {
        idArray = idArray.concat(invertedIndexKeyword[word]);
      } else if (invertedIndexAbstract && invertedIndexAbstract[word]) {
        idArray = idArray.concat(invertedIndexAbstract[word]);
      }
    });
    const uniqueArray = [...new Set(idArray)];
    let arr = [];
    for (let item of uniqueArray) {
      try {
        const ref = doc(db, "publishedDissertations", item);
        const Data = await getDoc(ref);
        arr.push(Data.data());
      } catch (error) {
        console.error("Error fetching dissertation data: ", error);
      }
    }
    setResults(arr);
  };

  return (
    <div>
      <div className="bg-container">
        <input
          type="text"
          placeholder="Search dissertations..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button sx={{ "margin": "10px" }} variant="contained" onClick={onSearchTerm}>search</Button>
      </div>
      <div>
        {results.map((result, index) => (
          <div key={index}>
            <div className="dissertation-card">
              <h2 className="title">{result.title}</h2>
              <p className="author">Author: {result.firstName}</p>
              <div className="abstract">
                <h3>Abstract:</h3>
                <p>{result.abstract}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Publications;
