// components/library/PdfViewer.js
import React from 'react';

const PdfViewer = ({ url, onClose }) => {
  return (
    <div>
      <button onClick={onClose}>Close</button>
      <iframe title="pdf-viewer" src={url} width="100%" height="600px" />
    </div>
  );
};

export default PdfViewer;

