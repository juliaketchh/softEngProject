import { useState } from 'react';
import { signInWithGoogle  } from './authentication';
import { auth } from './config/firebase';

const Navbar = () => {
    
    // const signIn = () => {
    //     Auth.signInWithGoogle();
    // };
    //const signLink = signInWithGoogle();
    const [email, setEmail] = useState("");

    console.log("ello m8!!")
    console.log(auth?.currentUser?.email);

    return (  
        <div>
            // <nav className="navbar">
            //     <h1>The Dojo Blag</h1>
            //     <div className="links"></div>
            //         <a href="/">Home</a>
            //         <a href="/create">New Blog</a>
            //         {/* <a href="#" onClick={(e) => {
            //             e.preventDefault(); // Prevent default link behavior
            //             signInWithGoogle();
            //         }}>Log in with Google!</a> */}
            //         <button onClick={signInWithGoogle}> Log in with Google!</button>
            //         <input placeholder="yoo" onChange={(e) => setEmail(e.target.value)} />
            // </nav>

            {/* Navigation Bar */}
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: 'rgba(36, 45, 57, 1)', backgroundImage: "linear-gradient(109.6deg, rgb(36, 45, 57) 11.2%, rgb(16, 37, 60) 51.2%, rgb(0, 0, 0) 98.6%)" }}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#" style={{ color: 'white' }}>amiGO - NEWWWWW!</a>
                    {/* Rest of the navbar */}
                </div>
            </nav>


            <nav className="navbar navbar-expand-lg" style={{ position: 'sticky', top: 0, zIndex: 1000, backgroundColor: 'rgba(36, 45, 57, 1)', backgroundImage: "linear-gradient(109.6deg, rgb(36, 45, 57) 11.2%, rgb(16, 37, 60) 51.2%, rgb(0, 0, 0) 98.6%)" }}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#" style={{ color: 'white' }}>amiGO test</a>
                    {/* Rest of the navbar */}
                </div>
            </nav>






        </div>





    );
}
 
export default Navbar;