import "./App.css";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Pollpage from "./components/Pollpage";
import Results from "./components/Results";


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/pollpage" element={<Pollpage />} />
          <Route path="/results" element={<Results />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
