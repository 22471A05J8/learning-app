import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import "./htmlquiz.css";
import DashboardLayout from "./Dashboard";

const pythonQuestions = [
  {
    question: "Which of these is the correct extension of Python files?",
    options: [".py", ".python", ".pt", ".pyt"],
    answer: 0,
  },
  {
    question: "What is the output of `print(type(10))` in Python?",
    options: ["<class 'int'>", "<type 'int'>", "int", "integer"],
    answer: 0,
  },
  {
    question: "Which keyword is used to define a function in Python?",
    options: ["func", "define", "def", "function"],
    answer: 2,
  },
  {
    question: "How do you insert comments in Python code?",
    options: ["// comment", "# comment", "<!-- comment -->", "/* comment */"],
    answer: 1,
  },
  {
    question: "Which of the following is NOT a valid variable name in Python?",
    options: ["_var", "var1", "1var", "var_1"],
    answer: 2,
  },
  {
    question: "What is the output of `len('Hello')`?",
    options: ["4", "5", "6", "Error"],
    answer: 1,
  },
  {
    question: "Which data type is used to store True or False values?",
    options: ["int", "str", "bool", "float"],
    answer: 2,
  },
  {
    question: "What does the `range(5)` function do?",
    options: [
      "Returns numbers from 0 to 4",
      "Returns numbers from 1 to 5",
      "Returns 5 random numbers",
      "Throws an error",
    ],
    answer: 0,
  },
  {
    question: "Which of these is used to handle exceptions in Python?",
    options: ["try-except", "catch-try", "try-catch", "handle-except"],
    answer: 0,
  },
  {
    question: "What is the correct way to create a list in Python?",
    options: ["{1, 2, 3}", "[1, 2, 3]", "(1, 2, 3)", "<1, 2, 3>"],
    answer: 1,
  },
  {
    question: "How do you start a while loop in Python?",
    options: ["while i > 0:", "while (i > 0)", "while i > 0 then", "while i > 0 do"],
    answer: 0,
  },
  {
    question: "Which method can be used to convert a string to lowercase?",
    options: [".lowercase()", ".lower()", ".tolower()", ".casefold()"],
    answer: 1,
  },
  {
    question: "Which symbol is used for string formatting in Python 3.6+?",
    options: ["%", "$", "f", "#"],
    answer: 2,
  },
  {
    question: "What is the output of `print(2 ** 3)`?",
    options: ["6", "8", "9", "Error"],
    answer: 1,
  },
  {
    question: "Which of these is a mutable data type?",
    options: ["tuple", "list", "string", "int"],
    answer: 1,
  },
  {
    question: "What does the 'pass' statement do in Python?",
    options: [
      "Ends a loop",
      "Does nothing",
      "Exits a function",
      "Raises an error",
    ],
    answer: 1,
  },
  {
    question: "How do you import a module named 'math'?",
    options: ["include math", "import math", "#import math", "using math"],
    answer: 1,
  },
  {
    question: "Which of the following is the correct way to open a file for reading?",
    options: [
      "open('file.txt', 'r')",
      "open('file.txt', 'w')",
      "open('file.txt', 'a')",
      "open('file.txt')",
    ],
    answer: 0,
  },
  {
    question: "What will `print('Hello' + 'World')` output?",
    options: ["Hello World", "HelloWorld", "Hello+World", "Error"],
    answer: 1,
  },
  {
    question: "How do you declare a dictionary in Python?",
    options: [
      "[1: 'one', 2: 'two']",
      "{1: 'one', 2: 'two'}",
      "(1: 'one', 2: 'two')",
      "<1: 'one', 2: 'two'>",
    ],
    answer: 1,
  },
];

export default function PythonQuiz() {
  const COLORS = ["#00C49F", "#FF8042"];
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

  const handleOptionClick = (index) => {
    setSelected(index);
  };

  const handleNext = () => {
    if (selected !== null) {
      const updatedAnswers = [...userAnswers];
      updatedAnswers[currentQ] = selected;
      setUserAnswers(updatedAnswers);

      if (
        selected === pythonQuestions[currentQ].answer &&
        userAnswers[currentQ] !== selected
      ) {
        setScore(score + 1);
      }

      if (currentQ < pythonQuestions.length - 1) {
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
    { name: "Wrong", value: pythonQuestions.length - score },
  ];

  return (<><DashboardLayout/>
    <div className="quiz-container">
      {!showResult ? (
        <>
          <div className="quiz-header">
            <h2>
              Question {currentQ + 1} of {pythonQuestions.length}
            </h2>
            <div className="timer">Time Left: {formatTime(timeLeft)}</div>
          </div>
          <p className="question-text">
            Q{currentQ + 1}. {pythonQuestions[currentQ].question}
          </p>
          <div className="options-list">
            {pythonQuestions[currentQ].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionClick(index)}
                className={`option-button ${
                  selected === index ? "option-selected" : ""
                }`}
              >
                {option}
              </button>
            ))}
          </div>
          <div style={{ marginTop: "20px" }}>
            <button
              onClick={handlePrevious}
              disabled={currentQ === 0}
              className="nav-button"
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              disabled={selected === null}
              className="nav-button"
            >
              {currentQ === pythonQuestions.length - 1 ? "Submit" : "Next"}
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
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
            <p>
              You scored <strong>{score}</strong> out of{" "}
              {pythonQuestions.length}
            </p>
          </div>
          {!viewDetail ? (
            <button
              onClick={() => setViewDetail(true)}
              className="retry-button"
            >
              View Result
            </button>
          ) : (
            <div className="review-section">
              {pythonQuestions.map((q, i) => (
                <div key={i} className="review-question">
                  <h4>
                    Q{i + 1}. {q.question}
                  </h4>
                  <p>
                    Your Answer:{" "}
                    <span
                      style={{
                        color: userAnswers[i] === q.answer ? "green" : "red",
                      }}
                    >
                      {q.options[userAnswers[i]] ?? "No Answer"}
                    </span>
                  </p>
                  {userAnswers[i] !== q.answer && (
                    <p>
                      Correct Answer:{" "}
                      <span style={{ color: "green" }}>
                        {q.options[q.answer]}
                      </span>
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
    </div></>
  );
}
