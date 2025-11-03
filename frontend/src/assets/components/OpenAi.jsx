import React, { useState } from 'react';

const techSuggestions = {
  web: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind', 'Next.js'],
  mobile: ['React Native', 'Flutter', 'Kotlin', 'Swift'],
  backend: ['Node.js', 'Express', 'Django', 'Spring Boot'],
  ai: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn'],
  data: ['SQL', 'MongoDB', 'Firebase', 'PostgreSQL'],
  java: ['Java SE', 'Spring Boot', 'Hibernate'],
  c: ['C', 'C++', 'Data Structures'],
  python: ['Python Basics', 'Pandas', 'Django', 'FastAPI'],
  android: ['Android Studio', 'Kotlin', 'Jetpack Compose']
};

export default function TechAI() {
  const [input, setInput] = useState('');
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value.toLowerCase();
    setInput(value);

    const matchedKey = Object.keys(techSuggestions).find(key =>
      value.includes(key)
    );

    if (matchedKey) {
      setResults(techSuggestions[matchedKey]);
    } else {
      setResults([]);
    }
  };

  return (
    <div style={styles.container}>
      <h2>AI Tech Recommender</h2>
      <input
        type="text"
        placeholder="Type a domain like 'web', 'ai', 'java'..."
        value={input}
        onChange={handleChange}
        style={styles.input}
      />
      <div style={styles.suggestions}>
        {results.length > 0 ? (
          results.map((tech, index) => (
            <div key={index} style={styles.chip}>
              {tech}
            </div>
          ))
        ) : (
          input && <p style={{ color: '#999' }}>No suggestions found.</p>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '30px',
    maxWidth: '500px',
    margin: '50px auto',
    backgroundColor: '#f4f4f4',
    borderRadius: '10px',
    textAlign: 'center',
    boxShadow: '0 0 15px rgba(0,0,0,0.1)'
  },
  input: {
    padding: '10px',
    width: '100%',
    borderRadius: '5px',
    border: '1px solid #ccc',
    marginBottom: '20px',
    fontSize: '16px'
  },
  suggestions: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    justifyContent: 'center'
  },
  chip: {
    padding: '8px 14px',
    backgroundColor: '#007bff',
    color: '#fff',
    borderRadius: '20px',
    fontSize: '14px'
  }
};
