import React from "react";
import './index.css';
import Navbar from './Components/Navbar';
import Travel from './Components/Travel';
import Traveller from './Components/Traveller';
import History from './Components/History';
import Visite from './Components/Visite';
import Worldtravel from './Components/Worldtravel';
import Footer  from './Components/Footer';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Travel />
      <Traveller />
      <History />
      <Visite />
      <Worldtravel />
      <Footer />
    </div>
  );
}

export default App;
