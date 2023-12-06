import Navbar from "./Components/NavBar/Navbar";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Landing from "./Pages/Landing/Landing";
import About from "./Pages/About/About";
import SignUp from "./Pages/SignUp/SignUp";
import CreateShipment from "./Pages/NewShipment/CreateShipment";
<<<<<<< HEAD
import Shipments from "./Pages/Shipments/Shipments";
=======
import ShipmentDetails from "./Pages/ShipmentDetails/ShipmentDetails";
>>>>>>> 70043d3a6ca2b940ec922021dc4e00be950855a7
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/home" />
          <Route element={<Landing />} path="/" />
          <Route element={<SignUp />} path="/sign-up" />
          <Route element={<CreateShipment />} path="/new-shipment" />
          <Route element={<ShipmentDetails />} path="/shipment/:sh_id" />
          <Route path="/about" element={<About />}></Route>
          <Route path="/shipments" element={<Shipments />}></Route>


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
