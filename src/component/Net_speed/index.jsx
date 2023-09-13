import React, { useState } from 'react';
import './App.css';
const speedTest = require('speedtest-net');

function NetSpeed() {
  const [downloadSpeed, setDownloadSpeed] = useState(null);
  const [uploadSpeed, setUploadSpeed] = useState(null);
  const [testing, setTesting] = useState(false);

  const runSpeedTest = () => {
    setTesting(true);
    const test = speedTest();

    test.on('data', (data) => {
      const download = (data.speeds.download / 1_000_000).toFixed(2); // Convert to Mbps
      const upload = (data.speeds.upload / 1_000_000).toFixed(2); // Convert to Mbps

      setDownloadSpeed(download);
      setUploadSpeed(upload);
      setTesting(false);
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Internet Speed Test</h1>
        {downloadSpeed !== null && uploadSpeed !== null ? (
          <div>
            <p>Your Internet Speed:</p>
            <p>
              Download: {downloadSpeed} Mbps | Upload: {uploadSpeed} Mbps
            </p>
          </div>
        ) : (
          <p>Click the button below to test your speed.</p>
        )}
        <button onClick={runSpeedTest} disabled={testing}>
          {testing ? 'Testing...' : 'Start Test'}
        </button>
      </header>
    </div>
  );
}

export default NetSpeed;
