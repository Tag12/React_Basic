import "./App.css";
import Navbar from "./components/Navbar";
import Introduction from "./pages/Introduction";
import Team from "./pages/Team";
import About from "./pages/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Introduction/>} />
          <Route path="/team" exact element={<Team/>} />
          <Route path="/about" exact element={<About/>} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
