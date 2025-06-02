import React from 'react';
import resume from './images/resume.pdf';

const Resume = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>📄 My Resume</h1>

      <div style={styles.buttonContainer}>
        <a href={resume} download className="download-btn" style={styles.downloadButton}>
          ⬇️ Download Resume
        </a>
      </div>

      <div style={styles.iframeContainer}>
        <iframe
          src={resume}
          title="Resume"
          style={styles.iframe}
          frameBorder="0"
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#0a0a0a',
    padding: '40px 20px',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: '32px',
    marginBottom: '20px',
    textAlign: 'center',
    color: '#7f5af0'
  },
  buttonContainer: {
    marginBottom: '20px',
  },
  downloadButton: {
    padding: '12px 24px',
    backgroundColor: '#7f5af0',
    color: 'white',
    borderRadius: '8px',
    fontWeight: 'bold',
    textDecoration: 'none',
    transition: 'all 0.2s ease-in-out',
  },
  iframeContainer: {
    width: '100%',
    maxWidth: '1000px',
    height: '80vh',
    boxShadow: '0 0 20px rgba(127, 90, 240, 0.3)',
    borderRadius: '10px',
    overflow: 'hidden',
  },
  iframe: {
    width: '100%',
    height: '100%',
  }
};

export default Resume;
