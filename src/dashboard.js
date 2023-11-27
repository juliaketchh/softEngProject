import React, { useState } from 'react';
import './dashboard.css';
import { Link } from "react-router-dom";
import { signInWithGoogle, handleClick } from './authentication';
import { auth } from './config/firebase';

export const googleSignIn3 = () => {
  handleClick();
};

export const Dashboard = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the form submission logic here
  };

  // You can also use useState to manage the form fields if needed
  // Example: const [date, setDate] = useState('');

  return (
    <section>
      <div className="dashboard-box">
        <div className="form-value">
          <form onSubmit={handleSubmit}>
            <h2 style={{ marginTop: '2vh' }}>Workout Log</h2>
            
            <div className="inputbox1">
              <ion-icon name="calendar-outline"></ion-icon>
              <input type="text" required placeholder="*Date  MM-DD-YY" />
              <label>*Date</label>
            </div>
            <div className="inputbox1">
              <ion-icon name="barbell-outline"></ion-icon>
              <input type="number" placeholder="Bench (lbs)" />
              <label>Bench</label>
            </div>
            <div className="inputbox1">
              <ion-icon name="barbell-outline"></ion-icon>
              <input type="number" placeholder="Squat (lbs)" />
              <label>Squat</label>
            </div>
            <div className="inputbox1">
              <ion-icon name="walk-outline"></ion-icon>
              <input type="number" placeholder="Cardio (minutes)" />
              <label>Cardio</label>
            </div>

            <button type="submit">Save Workout Session</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
