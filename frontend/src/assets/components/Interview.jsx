import React, { useState } from "react";
import DashboardLayout from "./Dashboard";

const companies = [
  {
    name: "Accenture",
    image: "https://www.nidv.eu/wp-content/uploads/2020/12/Accenture.png",
    questions: [
     " Tell me about yourself.",
     " Why do you want to join Accenture?",
      "What do you know about Accenture’s values and culture?",
      "Are you open to relocation or working in shifts?",
      "Where do you see yourself in 5 years?",
      "Describe a time you worked in a team.",
      "What are your strengths and weaknesses?",
      "How do you handle stress or pressure?",
      "Why should we hire you?",
      "How do you prioritize tasks in a busy schedule?"
    ],
  },
  {
    name: "TCS",
    image:
      "https://images-prd.deshabhimani.com/tcs-1753630206344-9b1cf002-d24f-48e3-9ff8-219f0cb90aaf-900x506.webp",
    questions: [
      "What is the difference between C and C++?",
  "Explain the concept of object-oriented programming.",
  "What is SDLC and what are its phases?",
  "What is the difference between Java and JavaScript?",
  "What are the key features of React?",
  "What is the use of the useEffect hook in React?",
  "How do you handle state management in React?",
  "Explain REST API and how you connect it to a frontend app.",
  "What is the difference between == and === in JavaScript?",
  "How do you debug a web application?",
  "Write a program to check if a number is prime.",
  "What are your career goals and how does TCS fit in?",
  "Do you have any questions for us?"
    ],
  },
  {
    name: "Wipro",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX3D_v0FHjfcboWNnv0365j7YTNBylEIBrRg&s",
    questions: [
      "What is the difference between class and functional components in React?",
  "How do you manage state in a React application?",
  "Explain event delegation in JavaScript.",
  "What is a closure in JavaScript?",
  "How do you ensure code quality and reduce bugs?",
  "Tell me about a project where you worked in a team.",
  "How do you prioritize tasks when everything feels urgent?",
  "Write a program to reverse a string.",
  "Where do you see yourself in the next 3 to 5 years?",
  "Do you have any questions for us?"
    ],
  },
  {
    name: "Infosys",
    image:
      "https://static.startuptalky.com/2021/11/Infosys-Interesting-facts-StartupTalky.jpg",
    questions: [
      "Why Infosys?",
      "What is the difference between procedural and object-oriented programming?",
  "What are the main features of React?",
  "What is the purpose of the useState and useEffect hooks in React?",
  "How does virtual DOM improve performance?",
  "What is the difference between SQL and NoSQL databases?",
  "Explain RESTful APIs and how you use them.",
  "What is the difference between let, const, and var in JavaScript?",
  "How would you handle version control in a team project?",
  "Tell me about a time when you worked in a team to solve a problem.",
  "How do you handle tight deadlines and pressure?",
  "What are your short-term and long-term career goals?",
  "Describe a situation where you failed and how you handled it.",
  "Why should Infosys hire you?",
    ],
  },
  {
    name: "Deloitte",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGWb8N4ZQ4kAFLvHvdtGmLUIVbLWjucAVE-FmaLt12r8_6ylyqPN6NGIgAVtWxHPVsmnk&usqp=CAU",
    questions: [
      "How do you handle feedback and criticism?",
  "What are your career goals and how does Deloitte fit in?",
  "Explain the difference between client-side and server-side rendering.",
  "What is your experience with React or other frontend technologies?",
  "How would you optimize a React application for performance?",
  "What is the difference between useEffect and componentDidMount?",
  "What is a closure in JavaScript and how does it work?",
  "Describe how REST APIs work and how you would call them from a React app.",
  "How do you ensure secure and scalable code?",
  "Write a function to check if a string is a palindrome.",
  "What sets you apart from other candidates?",
    ],
  },
  {
    name: "Cognizant",
    image:
      "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202312/ezgif-sixteen_nine_141.jpg?size=948:533",
    questions: [
      "What technologies are you most confident in?",
  "Explain the SDLC and Agile methodologies.",
  "How would you describe object-oriented programming?",
  "What are props and state in React?",
  "What is useEffect in React and when would you use it?",
  "What is the difference between React functional and class components?",
  "What is an API and how do you integrate it in a React application?",
  "What is hoisting in JavaScript?",
  "How do you debug JavaScript code in a browser?",
  "Tell me about a challenging project and how you handled it.",
  "Have you worked in a team environment before? Explain your role.",
  "How do you manage time and workload under pressure?",
  "What are your short-term and long-term goals?",
    ],
  },
  {
    name: "Flip Cart",
    image:
      "https://media.assettype.com/thebridgechronicle%2Fimport%2Fs3fs-public%2Fnews-story%2Fcover-images%2F3Flipkart.jpg?w=480&dpr=2&auto=format%2Ccompress&fit=max&q=85",
    questions: [
      "How do you keep yourself updated with new technologies?",
  "Describe a challenging bug you fixed and how you approached it.",
  "What are the core principles of React?",
  "Explain the concept of Redux and how it helps manage state.",
  "What is the difference between useEffect and useLayoutEffect?",
  "What are the benefits of React over other frameworks?",
  "How do you handle API errors in frontend development?",
  "What is asynchronous programming in JavaScript?",
  "What is a promise and how do you use async/await?",
  "How do you optimize performance in a React app?",
  "Explain memoization in React and its use cases.",
  "Describe your experience working on e-commerce or scalable apps.",
  "How do you handle pressure and tight deadlines?",
  "Have you ever led a team or project? Explain your role.",
  "What are your long-term career goals?",
    ],
  },
  {
    name: "JusPay",
    image:
      "https://bsmedia.business-standard.com/_media/bs/img/article/2025-01/21/thumb/fitandfill/1200X630/1737469380-9907.jpg",
    questions: [
      "Tell me about yourself.",
  "Why do you want to work at Juspay?",
  "What do you know about Juspay’s products and mission?",
  "Have you worked with payment gateway APIs before?",
  "What challenges do you expect in a fintech product?",
  "How would you design a scalable architecture for a high-traffic payment system?",
  "What are your thoughts on functional programming in JavaScript?",
  "What is React’s virtual DOM and how does it work?",
  "Explain how useState and useEffect work in React.",
  "What are the key differences between Redux and Context API?",
  "How do you handle security in web applications?",
  "What is CORS and how do you handle it?",
  "What is the difference between debouncing and throttling?",
  "Write a function to validate a credit card number.",
    ],
  },
];

export default function App() {
  const [selectedCompany, setSelectedCompany] = useState(null);

  return (<><DashboardLayout/>
    <div className="container">
      <h1 className="main-title">Company Interview Cards</h1>
      <div className="card-grid">
        {companies.map((company, index) => (
          <div className="card" key={index}>
            <img src={company.image} alt={company.name} className="logo" />
            <h2>{company.name}</h2>
            <button onClick={() => setSelectedCompany(company)}>
              View Interview Questions
            </button>
          </div>
        ))}
      </div>

      {selectedCompany && (
        <div className="overlay">
          <div className="modal-card">
            <h2>{selectedCompany.name} Interview Questions</h2>
            <ul>
              {selectedCompany.questions.map((q, i) => (
                <li key={i}>• {q}</li>
              ))}
            </ul>
            <button className="close-btn" onClick={() => setSelectedCompany(null)}>
              Close
            </button>
          </div>
        </div>
      )}

      <style>{`
        body {
          background-color: #1e1e1e;
          margin: 0;
          padding: 0;
        }

        .container {
          max-width: 1200px;
          margin: auto;
          padding: 30px;
          font-family: 'Segoe UI', sans-serif;
          color: white;
        }

        .main-title {
          text-align: center;
          font-size: 32px;
          margin-bottom: 40px;
        }

        .card-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 24px;
        }

        .card {
          background-color: #2e2e2e;
          border-radius: 16px;
          padding: 20px;
          text-align: center;
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
          transition: transform 0.2s;
        }

        .card:hover {
          transform: translateY(-4px);
        }

        .card h2 {
          margin-top: 15px;
          margin-bottom: 10px;
        }

        .logo {
          height: 80px;
          object-fit: contain;
        }

        button {
          background-color: #4f46e5;
          color: white;
          padding: 10px 16px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          margin-top: 12px;
        }

        button:hover {
          background-color: #4338ca;
        }

        /* Overlay Styles */
        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 999;
        }

        .modal-card {
          background-color: #222;
          padding: 30px;
          border-radius: 16px;
          width: 90%;
          max-width: 500px;
          box-shadow: 0 0 20px rgba(255,255,255,0.1);
          color: white;
        }

        .modal-card h2 {
          margin-bottom: 20px;
          text-align: center;
        }

        .modal-card ul {
          list-style-type: none;
          padding-left: 0;
        }

        .modal-card li {
          margin-bottom: 10px;
        }

        .close-btn {
          background-color: #ef4444;
          margin-top: 20px;
          width: 100%;
        }

        .close-btn:hover {
          background-color: #dc2626;
        }
      `}</style>
    </div></>
  );
}
