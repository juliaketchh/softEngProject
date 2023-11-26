// Organize App in this file

import Navbar from './Navbar';
import Home from './Home';
import { Auth } from "./authentication";

function App() {

  // const title = "App Component";

  return (
    <div className="App">
      {/* <Auth /> */}
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
