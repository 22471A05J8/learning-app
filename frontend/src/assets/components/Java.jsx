import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import "./htmlquiz.css"; // Reusing your CSS
import DashboardLayout from "./Dashboard";

const javaQuestions = [
  {
    question: "Which of these is a valid keyword in Java?",
    options: ["interface", "unsigned", "friend", "typeof"],
    answer: 0,
  },
  {
    question: "What is the size of an int in Java?",
    options: ["2 bytes", "4 bytes", "8 bytes", "Depends on system"],
    answer: 1,
  },
  {
    question: "Which method is the entry point of a Java program?",
    options: ["start()", "main()", "run()", "init()"],
    answer: 1,
  },
  {
    question: "Which operator is used for bitwise AND in Java?",
    options: ["&&", "&", "|", "||"],
    answer: 1,
  },
  {
    question: "Which keyword is used to inherit a class in Java?",
    options: ["this", "super", "extends", "implements"],
    answer: 2,
  },
  {
    question: "Which of the following is not an access modifier?",
    options: ["protected", "public", "private", "void"],
    answer: 3,
  },
  {
    question: "What is the base class of all classes in Java?",
    options: ["Object", "Class", "Main", "Base"],
    answer: 0,
  },
  {
    question: "Which keyword is used to prevent inheritance?",
    options: ["final", "static", "private", "const"],
    answer: 0,
  },
  {
    question: "Which loop is guaranteed to execute at least once?",
    options: ["while", "for", "do-while", "foreach"],
    answer: 2,
  },
  {
    question: "What does JVM stand for?",
    options: [
      "Java Virtual Memory",
      "Java Verified Machine",
      "Java Virtual Machine",
      "Joint Virtual Method",
    ],
    answer: 2,
  },
  {
    question: "Which package contains Scanner class?",
    options: ["java.io", "java.util", "java.lang", "java.text"],
    answer: 1,
  },
  {
    question: "Which keyword is used to handle exceptions?",
    options: ["catch", "final", "throw", "try"],
    answer: 3,
  },
  {
    question: "What is bytecode?",
    options: [
      "Code compiled for JVM",
      "Binary code",
      "Native code",
      "Scripted code",
    ],
    answer: 0,
  },
  {
    question: "Which data type is used to create a variable that stores text?",
    options: ["myString", "String", "string", "Txt"],
    answer: 1,
  },
  {
    question: "Which method can be used to find the length of a string?",
    options: ["length()", "getSize()", "getLength()", "size()"],
    answer: 0,
  },
  {
    question: "Which symbol is used for single-line comments in Java?",
    options: ["//", "/*", "#", "--"],
    answer: 0,
  },
  {
    question: "Which interface is implemented by ArrayList?",
    options: ["List", "Set", "Map", "Collection"],
    answer: 0,
  },
  {
    question: "Which one is not a primitive type?",
    options: ["int", "float", "String", "boolean"],
    answer: 2,
  },
  {
    question: "Which of the following is true about constructors?",
    options: [
      "They can return values",
      "They have a return type",
      "They initialize objects",
      "They are static",
    ],
    answer: 2,
  },
  {
    question: "Which keyword is used to create a subclass?",
    options: ["implements", "extends", "inherits", "instanceof"],
    answer: 1,
  },
];

const COLORS = ["#00C49F", "#FF8042"];

export default function JavaQuiz() {
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
        selected === javaQuestions[currentQ].answer &&
        userAnswers[currentQ] !== selected
      ) {
        setScore(score + 1);
      }

      if (currentQ < javaQuestions.length - 1) {
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
    { name: "Wrong", value: javaQuestions.length - score },
  ];

  return (<><DashboardLayout/>
    <div className="quiz-container">
      {!showResult ? (
        <>
          <div className="quiz-header">
            <h2>
              Question {currentQ + 1} of {javaQuestions.length}
            </h2>
            <div className="timer">Time Left: {formatTime(timeLeft)}</div>
          </div>
          <p className="question-text">
            Q{currentQ + 1}. {javaQuestions[currentQ].question}
          </p>
          <div className="options-list">
            {javaQuestions[currentQ].options.map((option, index) => (
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
              {currentQ === javaQuestions.length - 1 ? "Submit" : "Next"}
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
              {javaQuestions.length}
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
              {javaQuestions.map((q, i) => (
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
