import React from 'react';
import './Login.css'; // Importing the CSS file
import { Link } from "react-router-dom";

export const LoginPage = () => {
  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // You can call your login function here or handle the login logic
  };

  return (
    <section>
      <div className="form-box">
        <div className="form-value">
          <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div className="inputbox">
              <ion-icon name="mail-outline"></ion-icon>
              <input type="email" required />
              <label>Email</label>
            </div>
            <div className="inputbox">
              <ion-icon name="lock-closed-outline"></ion-icon>
              <input type="password" required id="userPass" />
              <label>Password</label>
            </div>
            <div className="forget">
              <label>
                {/* <input type="checkbox" />Remember Me */}
                {/* <a href="#">Forget Password</a> */}
              </label>
            </div>
            <button type="submit">Log in</button>
            <div className="register">
              <p>Don't have an account? - 
                <Link to="/register"> Register</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export const Registration = () => {
    // Function to handle form submission
    const handleSubmit = (event) => {
      event.preventDefault();
      // You can call your login function here or handle the login logic
    };

    const termsandConditions = " Terms & Conditions";
  
    return (
    <section>
        <div className="form-box">
            <div className="form-value">
                <form onSubmit={handleSubmit}>
                    <h2 style={{ marginTop: '2vh' }}>Register</h2>
                    <div className="inputbox">
                        <ion-icon name="mail-outline"></ion-icon>
                        <input type="email" required />
                        <label>Email</label>
                    </div>
                    <div className="inputbox">
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <input type="password" required id="userInput1" />
                        <label>Create a Password</label>
                    </div>
                    <div className="inputbox">
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <input type="password" required id="userInput2" />
                        <label>Re-enter Password</label>
                    </div>
                    <div className="forget">
                        <label>
                            <input type="checkbox" />Accept - 
                            <a href="#">{termsandConditions}</a>
                        </label>
                    </div>
                    <button type="submit">Create Account</button>
                    <div className="register">
                        <Link to="/login">
                          <button type="submit">Create with Google</button>
                        </Link>
                        <p style={{ paddingBottom: '1vh' }}>
                            {/* Create with <a href="#">Google</a> */}
                        </p>
                    </div>
                </form>
            </div>
        </div>
    </section>
    );
  };

// export default LoginPage;
