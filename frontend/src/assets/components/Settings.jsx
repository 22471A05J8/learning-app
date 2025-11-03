import React, { useState, useEffect } from "react";
import Dashboard from "./SidebarDashboard";
import DashboardLayout from "./Dashboard";

const Settings= () => {
  const [darkMode, setDarkMode] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [mobileNotifications, setMobileNotifications] = useState(true);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const settings = {
      darkMode,
      emailNotifications,
      mobileNotifications,
    };
    console.log("Saved settings:", settings);
    alert("Settings saved!");
  };

  return (
    <><DashboardLayout/>
      <style>{`
        :root {
          --bg-color: #ffffff;
          --text-color: #222222;
          --card-bg: #f5f5f5;
          --border-color: #cccccc;
          --btn-bg: #007bff;
          --btn-color: #ffffff;
        }

        .dark {
          --bg-color: #121212;
          --text-color: #ffffff;
          --card-bg: #1e1e1e;
          --border-color: #333333;
          --btn-bg: #1a73e8;
          --btn-color: #ffffff;
        }

        body {
          background-color: var(--bg-color);
          color: var(--text-color);
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
        }

        .settings-container {
          max-width: 400px;
          margin: 60px auto;
          background-color: var(--card-bg);
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .settings-container h2 {
          text-align: center;
          margin-bottom: 25px;
          font-size: 24px;
        }

        .setting-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 15px 0;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 10px;
        }

        .setting-row label {
          font-size: 16px;
        }

        .setting-row input[type="checkbox"] {
          width: 20px;
          height: 20px;
          accent-color: var(--btn-bg);
        }

        .save-btn {
          margin-top: 25px;
          width: 100%;
          padding: 10px;
          font-size: 16px;
          background-color: var(--btn-bg);
          color: var(--btn-color);
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        .save-btn:hover {
          background-color: #0056b3;
        }
      `}</style>

      <div className="settings-container">
        <h2>Settings</h2>

        <form onSubmit={handleSubmit}>
          <div className="setting-row">
            <label htmlFor="darkMode">Dark Mode</label>
            <input
              type="checkbox"
              id="darkMode"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
          </div>

          <div className="setting-row">
            <label htmlFor="emailNotifications">Email Notifications</label>
            <input
              type="checkbox"
              id="emailNotifications"
              checked={emailNotifications}
              onChange={() =>
                setEmailNotifications(!emailNotifications)
              }
            />
          </div>

          <div className="setting-row">
            <label htmlFor="mobileNotifications">Mobile Notifications</label>
            <input
              type="checkbox"
              id="mobileNotifications"
              checked={mobileNotifications}
              onChange={() =>
                setMobileNotifications(!mobileNotifications)
              }
            />
          </div>

          <button type="submit" className="save-btn">
            Save Settings
          </button>
        </form>
      </div>
    </>
  );
};

export default Settings;
