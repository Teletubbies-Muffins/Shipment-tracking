import Navbar from "./Components/NavBar/Navbar";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Landing from "./Pages/Landing/Landing";
import About from "./Pages/About/About";
import SignUp from "./Pages/SignUp/SignUp";
// import CreateShipment from "./Components/CreateShipment/CreateShipment";
import PrivateRoutes from "./PrivateRoutes";
import Shipments from "./Pages/Shipments/Shipments";
import ShipmentDetails from "./Pages/ShipmentDetails/ShipmentDetails";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route element={<Landing />} path="/" />
          <Route element={<SignUp />} path="/sign-up" />
          <Route element={<ShipmentDetails />} path="/shipment/:sh_id" />
          <Route element={<PrivateRoutes />}>
            <Route element={<Home />} path="/home" />
            <Route element={<Home />} path="*" />
            <Route path="/shipments" element={<Shipments />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
