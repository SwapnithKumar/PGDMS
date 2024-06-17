// components/library/BookSearch.js
import React, { useState } from 'react';
import "./Library.css"
import PdfViewer from './PdfViewer';
import { searchBooks } from '../../../services/bookService';

function Library() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [selectedPdfUrl, setSelectedPdfUrl] = useState(null);

  const handleSearch = async () => {
    const books = await searchBooks(query);
    setResults(books);
  };

  const handleViewPdf = (pdfUrl) => {
    window.open(pdfUrl, '_blank');
  };

  const handleClosePdfViewer = () => {
    setSelectedPdfUrl(null);
  };
  console.log(results);
  return (
    
    <div className='bg-container'>
      <div className="library-bg-container">
        <div className='header-part'>
          <h1 className="heading">Library</h1>
          <div className='search-container'>
            <input
              className='search-input'
              type="text"
              placeholder="Enter book title or author"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value)
              handleSearch()}}
            />
            <button className='search-btn' onClick={handleSearch}>Search</button>
            
          </div>
        </div>
        {results.map((book) => (
          <div className='card-container'>
            <div key={book.id}>
              <h3 className='book-title'>{book.title}</h3>
              <p className='book-author'>Author: {book.author}</p>
              {book.pdfUrl && (
                <div>
                  <button className='view-btn' onClick={() => handleViewPdf(book.pdfUrl)}>View PDF</button>
                  <a
                    href={book.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    download={`${book.title}.pdf`}
                    className='download-btn'
                  >
                    Download PDF
                  </a>
                </div>
              
              )}
              <hr />
            </div>
          </div>
        ))}

        {selectedPdfUrl && (
          <PdfViewer url={selectedPdfUrl} onClose={handleClosePdfViewer} />
        )}
      </div>
    </div>
  );
}

export default Library;
