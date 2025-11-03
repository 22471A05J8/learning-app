import React from 'react';
import DashboardLayout from './Dashboard';

const VideoUI = () => {
  const videos = [
    {
      title: 'Learn React in 10 Minutes',
      url: 'https://www.youtube.com/embed/Tn6-PIqc4UM',
    },
    {
      title: 'JavaScript Crash Course',
      url: 'https://www.youtube.com/embed/hdI2bqOjy3c',
    },
    {
      title: 'Responsive Web Design',
      url: 'https://www.youtube.com/embed/srvUrASNj0s',
    },
    {
      title: 'C Programming for Beginners',
      url: 'https://www.youtube.com/embed/KJgsSFOSQv0',
    },
    {
      title: 'C++ Full Course - Beginner to Advanced',
      url: 'https://www.youtube.com/embed/vLnPwxZdW4Y',
    },
    {
      title: 'Java Tutorial for Beginners',
      url: 'https://www.youtube.com/embed/grEKMHGYyns',
    },
    {
      title: 'Web Development Full Course',
      url: 'https://www.youtube.com/embed/Zftx68K-1D4',
    },
    {
      title: 'Android Development for Beginners',
      url: 'https://www.youtube.com/embed/fis26HvvDII',
    },
    {
      title: 'Python Full Course for Beginners',
      url: 'https://www.youtube.com/embed/_uQrJ0TkZlc',
    },
  ];

  return (
    <>
      <DashboardLayout />
      <div style={styles.container}>
        <h1 style={styles.heading}>Featured Videos</h1>
        <div style={styles.grid}>
          {videos.map((video, index) => (
            <div key={index} style={styles.card}>
              <div style={styles.videoWrapper}>
                <iframe
                  src={video.url}
                  title={video.title}
                  allowFullScreen
                  style={styles.iframe}
                ></iframe>
              </div>
              <h2 style={styles.title}>{video.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const styles = {
  container: {
    padding: '40px 20px',
    backgroundColor: 'black',
    minHeight: '100vh',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '30px',
    color: 'white',
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '30px',
    justifyContent: 'center',
  },
  card: {
    width: '100%',
    maxWidth: '400px',
    backgroundColor: '#fff',
    borderRadius: '12px',
    padding: '16px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  },
  videoWrapper: {
    position: 'relative',
    paddingBottom: '56.25%',
    height: 0,
    overflow: 'hidden',
    borderRadius: '8px',
  },
  iframe: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    border: 'none',
  },
  title: {
    marginTop: '15px',
    fontSize: '1rem',
    color: '#555',
  },
};

export default VideoUI;
