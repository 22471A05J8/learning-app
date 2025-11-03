import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import { PieChart, Pie, Cell, Legend } from "recharts";
import "react-calendar/dist/Calendar.css";
import "./SidebarDashboard.css";
import DashboardLayout from "./Dashboard";

const COLORS = ["#00C49F", "#FF8042"];

const timeSpentLog = {
  "2025-06-01": "1h 20m",
  "2025-06-02": "45m",
  "2025-06-03": "2h 10m",
  "2025-06-04": "1h 5m",
};

const Dashboard = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [javaResult, setJavaResult] = useState(null);
  const [pythonResult, setPythonResult] = useState(null);
  const [cResult, setCResult] = useState(null);
  const [htmlResult, setHtmlResult] = useState(null);

  const formatDate = (date) => date.toISOString().split("T")[0];
  const timeSpent = timeSpentLog[formatDate(selectedDate)] || "No data";

  useEffect(() => {
    const loadResult = (key, setter) => {
      const result = localStorage.getItem(key);
      if (result) {
        const parsed = JSON.parse(result);
        setter([
          { name: "Correct", value: parsed.correct },
          { name: "Incorrect", value: parsed.incorrect },
        ]);
      }
    };

    loadResult("quizResult_java", setJavaResult);
    loadResult("quizResult_python", setPythonResult);
    loadResult("quizResult_c", setCResult);
    loadResult("quizResult_html", setHtmlResult);
  }, []);

  const renderPieChart = (title, result, keyPrefix) => (
    <div className="chart-block">
      <h3>{title}</h3>
      {result ? (
        <PieChart width={250} height={250}>
          <Pie
            data={result}
            cx="50%"
            cy="50%"
            label
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {result.map((entry, index) => (
              <Cell key={`${keyPrefix}-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      ) : (
        <p style={{ fontStyle: "italic", color: "#888" }}>No quiz attempted yet</p>
      )}
    </div>
  );

  return (
    <>
      <DashboardLayout />
      <div className="dashboard-layout">
        <div className="left-panel">
          {renderPieChart("📊 Java Quiz Performance", javaResult, "java")}
          {renderPieChart("🐍 Python Quiz Performance", pythonResult, "python")}
          {renderPieChart("💻 C Quiz Performance", cResult, "c")}
          {renderPieChart("🌐 HTML Quiz Performance", htmlResult, "html")}
        </div>

        <div className="right-panel">
          <h3>📅 Study Calendar</h3>
          <Calendar onChange={setSelectedDate} value={selectedDate} />
          <p>
            <strong>Date:</strong> {selectedDate.toDateString()}
          </p>
          <p>
            <strong>Time Spent:</strong> {timeSpent}
          </p>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
