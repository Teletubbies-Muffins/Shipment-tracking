import Navbar from "./Components/NavBar/Navbar";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Landing from "./Pages/Landing/Landing";
import About from "./Pages/About/About";
// import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/home" />
          <Route element={<Landing />} path="/" />
          <Route element={<Home />} path="/signup" />
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
