import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import "./htmlquiz.css";
import DashboardLayout from "./Dashboard";

const htmlQuestions = [ // ← Fixed capitalization here
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "Hyperlinking Text Management Language",
    ],
    answer: 0,
  },
  {
    question: "Who is making the Web standards?",
    options: ["Google", "Microsoft", "Mozilla", "W3C"],
    answer: 3,
  },
  {
    question: "Choose the correct HTML element for the largest heading:",
    options: ["<heading>", "<h1>", "<h6>", "<head>"],
    answer: 1,
  },
  {
    question: "What is the correct HTML element for inserting a line break?",
    options: ["<lb>", "<break>", "<br>", "<b>"],
    answer: 2,
  },
  {
    question: "Which is the correct HTML element for inserting a background color?",
    options: [
      "<body bg='yellow'>",
      "<background>yellow</background>",
      "<body style='background-color:yellow;'>",
      "<bg>yellow</bg>",
    ],
    answer: 2,
  },
  {
    question: "What is the correct HTML for making a text bold?",
    options: ["<strong>", "<b>", "Both A and B", "<bold>"],
    answer: 2,
  },
  {
    question: "Which HTML tag is used to define an internal style sheet?",
    options: ["<style>", "<css>", "<script>", "<link>"],
    answer: 0,
  },
  {
    question: "Which character is used to indicate an end tag?",
    options: ["/", "*", "<", "^"],
    answer: 0,
  },
  {
    question: "How can you make a numbered list?",
    options: ["<ul>", "<dl>", "<ol>", "<list>"],
    answer: 2,
  },
  {
    question: "How can you make a bulleted list?",
    options: ["<ol>", "<ul>", "<list>", "<li>"],
    answer: 1,
  },
  {
    question: "What is the correct HTML for creating a hyperlink?",
    options: [
      "<a url='http://example.com'>Example</a>",
      "<a>http://example.com</a>",
      "<a href='http://example.com'>Example</a>",
      "<link src='http://example.com'>",
    ],
    answer: 2,
  },
  {
    question: "Which tag is used to define a table row?",
    options: ["<th>", "<tr>", "<td>", "<table>"],
    answer: 1,
  },
  {
    question: "How do you insert a comment in HTML?",
    options: ["// comment", "<!-- comment -->", "# comment", "/* comment */"],
    answer: 1,
  },
  {
    question: "Which tag is used to embed a video in HTML5?",
    options: ["<media>", "<video>", "<movie>", "<embed>"],
    answer: 1,
  },
  {
    question: "Which input type defines a slider control?",
    options: ["range", "slider", "scroll", "input-range"],
    answer: 0,
  },
  {
    question: "What does the <iframe> tag do?",
    options: [
      "Defines a clickable image",
      "Embeds another HTML page",
      "Displays a pop-up",
      "Inserts a Flash animation",
    ],
    answer: 1,
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    options: ["style", "class", "font", "styles"],
    answer: 0,
  },
  {
    question: "Which tag is used to define a list item?",
    options: ["<item>", "<list>", "<li>", "<ul>"],
    answer: 2,
  },
  {
    question: "How can you open a link in a new tab/browser window?",
    options: [
      "<a href='url' new>",
      "<a href='url' target='_blank'>",
      "<a href='url' target='new'>",
      "<a href='url' open>",
    ],
    answer: 1,
  },
  {
    question: "Which tag is used to define a form in HTML?",
    options: ["<input>", "<form>", "<fieldset>", "<submit>"],
    answer: 1,
  },
];

const COLORS = ["#00C49F", "#FF8042"];

export default function HtmlQuiz() {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [viewDetail, setViewDetail] = useState(false);
  const [timeLeft, setTimeLeft] = useState(1200);
  const [userAnswers, setUserAnswers] = useState([]);

  useEffect(() => {
    if (timeLeft <= 0) {
      setShowResult(true);
      return;
    }
    if (!showResult) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft, showResult]);

  useEffect(() => {
    setSelected(userAnswers[currentQ] ?? null);
  }, [currentQ]);

  useEffect(() => {
    if (showResult) {
      localStorage.setItem(
        "quizResult_html",
        JSON.stringify({
          correct: score,
          incorrect: htmlQuestions.length - score,
        })
      );
    }
  }, [showResult]);

  const handleOptionClick = (index) => {
    setSelected(index);
  };

  const handleNext = () => {
    if (selected !== null) {
      const updatedAnswers = [...userAnswers];
      updatedAnswers[currentQ] = selected;
      setUserAnswers(updatedAnswers);

      if (selected === htmlQuestions[currentQ].answer && userAnswers[currentQ] !== selected) {
        setScore(score + 1);
      }

      if (currentQ < htmlQuestions.length - 1) {
        setCurrentQ(currentQ + 1);
      } else {
        setShowResult(true);
      }
    }
  };

  const handlePrevious = () => {
    if (currentQ > 0) {
      setCurrentQ(currentQ - 1);
    }
  };

  const resetQuiz = () => {
    setCurrentQ(0);
    setSelected(null);
    setScore(0);
    setShowResult(false);
    setUserAnswers([]);
    setViewDetail(false);
    setTimeLeft(1200);
  };

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? "0" + s : s}`;
  };

  const pieData = [
    { name: "Correct", value: score },
    { name: "Wrong", value: htmlQuestions.length - score },
  ];

  return (
    <>
      <DashboardLayout />
      <div className="quiz-container">
        {!showResult ? (
          <>
            <div className="quiz-header">
              <h2>
                Question {currentQ + 1} of {htmlQuestions.length}
              </h2>
              <div className="timer">Time Left: {formatTime(timeLeft)}</div>
            </div>
            <p className="question-text">
              Q{currentQ + 1}. {htmlQuestions[currentQ].question}
            </p>
            <div className="options-list">
              {htmlQuestions[currentQ].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionClick(index)}
                  className={`option-button ${selected === index ? "option-selected" : ""}`}
                >
                  {option}
                </button>
              ))}
            </div>
            <div style={{ marginTop: "20px" }}>
              <button onClick={handlePrevious} disabled={currentQ === 0} className="nav-button">
                Previous
              </button>
              <button onClick={handleNext} disabled={selected === null} className="nav-button">
                {currentQ === htmlQuestions.length - 1 ? "Submit" : "Next"}
              </button>
            </div>
          </>
        ) : (
          <div className="result-container">
            <h2 className="result-title">Quiz Complete!</h2>
            <div className="result-score">
              <PieChart width={300} height={200}>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={70}
                  label
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
              <p>
                You scored <strong>{score}</strong> out of {htmlQuestions.length}
              </p>
            </div>
            {!viewDetail ? (
              <button onClick={() => setViewDetail(true)} className="retry-button">
                View Result
              </button>
            ) : (
              <div className="review-section">
                {htmlQuestions.map((q, i) => (
                  <div key={i} className="review-question">
                    <h4>
                      Q{i + 1}. {q.question}
                    </h4>
                    <p>
                      Your Answer:{" "}
                      <span style={{ color: userAnswers[i] === q.answer ? "green" : "red" }}>
                        {q.options[userAnswers[i]] ?? "No Answer"}
                      </span>
                    </p>
                    {userAnswers[i] !== q.answer && (
                      <p>
                        Correct Answer: <span style={{ color: "green" }}>{q.options[q.answer]}</span>
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
            <button onClick={resetQuiz} className="retry-button">
              Retry Quiz
            </button>
          </div>
        )}
      </div>
    </>
  );
}
