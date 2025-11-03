import React, { useState } from "react";
import "./CodeEditor.css";
import DashboardLayout from "./Dashboard";
const App = () => {
  const initialFiles = {
    "index.html": "<h1>Hello</h1>",
    "style.css": "h1 { color: red; }",
    "script.js": "console.log('Hello world');",
  };
  const [files, setFiles] = useState(initialFiles);
  const [openTabs, setOpenTabs] = useState(["index.html", "style.css", "script.js"]);
  const [activeTab, setActiveTab] = useState("index.html");
  const handleChange = (e) => {
    setFiles({ ...files, [activeTab]: e.target.value });
  };
  const generateSrcDoc = () => `
    <html>
      <head><style>${files["style.css"]}</style></head>
      <body>
        ${files["index.html"]}
        <script>${files["script.js"]}<\/script>
      </body>
    </html>
  `;
  return (<><DashboardLayout/>
    <div className="editor-app">
      <div className="sidebara">
        <h3>Files <button onClick={() => alert("Add file logic")}>+</button></h3>
        {Object.keys(files).map((file) => (
          <div
            key={file}
            className={`file-item ${activeTab === file ? "active" : ""}`}
            onClick={() => {
              setActiveTab(file);
              if (!openTabs.includes(file)) {
                setOpenTabs([...openTabs, file]);
              }
            }}
          >
            {file}
          </div>
        ))}
      </div>



      <div className="main">
        <div className="tabs">
          {openTabs.map((file) => (
            <div key={file} className={`tab ${file === activeTab ? "active" : ""}`}>
              {file}
              <button onClick={() =>
                setOpenTabs(openTabs.filter((f) => f !== file))
              }>x</button>
            </div>
          ))}
        </div>
        <textarea
          className="editor"
          value={files[activeTab]}
          onChange={handleChange}
        />
        <iframe
          className="preview"
          srcDoc={generateSrcDoc()}
          sandbox="allow-scripts"
          title="output"
        />
      </div>
    </div></>
  );
};
export default App;
