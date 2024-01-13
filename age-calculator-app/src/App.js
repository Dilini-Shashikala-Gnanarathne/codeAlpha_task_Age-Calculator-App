import React, { useState } from 'react';
import './App.css'; 

function App() {
  const [birthDate, setBirthDate] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [ageResult, setAgeResult] = useState('');

  const calculateDiff = () => {
    let date_1 = birthDate;
    let date_2 = currentDate;

    if (!date_2) {
      date_2 = new Date().toJSON().slice(0, 10);
    }

    let dob = new Date(date_1);
    let cdate = new Date(date_2);

    let diff = new Date(cdate.getTime() - dob.getTime());
    let output = document.getElementById('showAge');
    output.id = 'showAge';

    if (isNaN(diff) || !date_1) {
      setAgeResult('Please select date first!');
      return;
    }

    if (date_1 > date_2) {
      setAgeResult('Invalid Input!');
      return;
    }

    date_1 = new Date(date_1).toLocaleString().slice(0, 3);
    date_2 = new Date(date_2).toLocaleString().slice(0, 3);

    if (date_1 === date_2) {
      setAgeResult(
        "<h5>Happy Birthday To You</h5>" +
          "<br>" +
          "Your Age" +
          "<br>" +
          " " +
          "Years : " +
          Number(diff.getUTCFullYear() - 1970) +
          "<br>" +
          " " +
          "Months : " +
          diff.getMonth() +
          "<br>" +
          " " +
          "Days : " +
          Number(diff.getUTCDate() - 1)
      );
      return;
    }

    setAgeResult(
      'Your Age' +
        '<br>' +
        ' ' +
        'Years : ' +
        Number(diff.getUTCFullYear() - 1970) +
        '<br>' +
        ' ' +
        'Months : ' +
        diff.getMonth() +
        '<br>' +
        ' ' +
        'Days : ' +
        Number(diff.getUTCDate() - 1)
    );
  };

  const resetDates = () => {
    setBirthDate('');
    setCurrentDate('');
    setAgeResult('Hi!<br>Calculate Your Age');
  };

  return (
    <div id="AppBody">
      <form>
        <h1 id="AppName">Age Calculator</h1>
        <p>
          Birth Date:
          <input
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            required
          />
        </p>
        <p>
          Current Date:
          <input
            type="date"
            value={currentDate}
            onChange={(e) => setCurrentDate(e.target.value)}
          />
        </p>
        <input
          type="button"
          id="calBIrth"
          value="Calculate"
          onClick={calculateDiff}
        />
        <button type="button" onClick={resetDates} id="resBIrth">
          Reset
        </button>
        <p
          id="showAge"
          
          dangerouslySetInnerHTML={{ __html: ageResult }}
        ></p>
      </form>
    </div>
  );
}

export default App;
