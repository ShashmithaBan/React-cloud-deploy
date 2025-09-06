import logo from "./logo.svg";
import "./App.css";
import Homepage from "./components/homepage/Homepage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SmallDog from "./components/smalldog/SmallDog";
import DogDetails from "./components/dogdetails/DogDetails";

function App() {
  return (
    <>
    <Router>
     
      

    
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/dog/smalldog" element={<SmallDog />} />
        <Route path="/dog/largedog/shibainusepia" element={<DogDetails />} />
        
      </Routes>

     
      <Footer />
    </Router>
    </>
  );
}

export default App;
