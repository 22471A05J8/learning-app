import React, { useState } from 'react';
import { FaFilePdf } from 'react-icons/fa';
import DashboardLayout from './Dashboard';
import './pdf.css';

const PdfViewer = () => {
  const [activePdf, setActivePdf] = useState(null);

  const pdfList = [
    { title: 'HTML Basics', file: '/htmlbasic.pdf' },
    { title: 'JAVA Advanced', file: '/java.pdf' },
    { title: 'C Fundamentals', file: '/cfundamentals.pdf' },
    { title: 'JavaScript Guide', file: '/js.pdf' },
    { title: 'React Handbook', file: '/react.pdf' },
    { title: 'Node.js Reference', file: '/nodejs.pdf' },
  ];

  return (
    <>
      <DashboardLayout />
      <div className="pdf-heading-container">
        <h1 className="pdf-main-title">📚 Study Material PDFs</h1>
        
      </div>

      <div className="pdf-card-row">
        {pdfList.map((pdf, index) => (
          <div className="pdf-card" key={index}>
            <div className="pdf-icon">
              <FaFilePdf size={40} style={{ color: 'red' }} />
            </div>
            <div className="pdf-details">
              <h3 className="tit">{pdf.title}</h3>
              <button onClick={() => setActivePdf(pdf.file)} className="view-btn">
                View PDF
              </button>
            </div>
          </div>
        ))}
      </div>

      {activePdf && (
        <div className="pdf-overlay">
          <button onClick={() => setActivePdf(null)} className="close-btn-overlay">X</button>
          <div className="pdf-container">
            <iframe
              src={activePdf}
              title="PDF Viewer"
              width="100%"
              height="100%"
              style={{ border: 'none' }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default PdfViewer;
