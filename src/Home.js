import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import './Home.css'; // Our custom CSS
// import './ScrollSpy.min.css'; // Assuming this is a CSS file
import spaceBackground from "./images/Space-Background.png"; 
import flipCardImage from './images/7715988c-75f4-4639-9ff6-0a98ab54e499.png';

const Home = () => {
    return (
        <div>
            {/* Start  of Home page */}
            
            {/* Main Content */}
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12" style={{ minHeight: '100vh', color: 'white', textAlign: 'center', marginTop: '0vh', backgroundImage: `url(${spaceBackground})`, backgroundSize: 'cover' }}>
                        <h1 style={{ marginTop: '45vh' }}>Welcome amiGO,</h1>
                        <h2>Lets get started today!</h2>
                    </div>
                    

                </div>

                {/* ... rest of our rows and columns ... */}

                <div className="row">
                    <div className="col-lg-6" style={{ minHeight: '100vh', color: 'white', textAlign: 'center', marginTop: '25vh' }}>
                        <h1>Personalize</h1>
                        <p style={{ fontSize: '30px' }}>
                            Personalize your own flip card! Share your card with others! Show off and keep track of your progress!
                        </p>
                    </div>
                    <div className="col-lg-6" style={{ minHeight: '100vh', color: 'white', textAlign: 'center' }}>
                        <div className="flip" style={{ marginTop: '10vh' }}>
                            <div className="front" style={{ backgroundImage: `url(${flipCardImage})` }}>
                                <h1 className="text-shadow" style={{ marginTop: '20vh', color: 'white' }}>Danny's Flip Card</h1>
                            </div>
                            <div className="back">
                                {/* ... flip card back content ... */}
                            </div>
                        </div>
                    </div>
                </div>

                {/* ... remaining rows ... */}

            </div>

            {/* Footer */}
            <div className="row">
                <div className="col-lg-12" style={{ textAlign: 'center', color: 'white', minHeight: '15vh' }}>Contact</div>
            </div>
        </div>
    );
};

export default Home;
