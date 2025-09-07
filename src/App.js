import "./App.css";
import Homepage from "./components/homepage/Homepage";
import Footer from "./components/footer/Footer";
import SmallDog from "./components/smalldog/SmallDog";
import DogDetails from "./components/dogdetails/DogDetails";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/dog/smalldog" element={<SmallDog />} />
        <Route path="/dog/largedog/shibainusepia" element={<DogDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;