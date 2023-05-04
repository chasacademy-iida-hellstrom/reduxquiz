import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home.jsx";
import Navbar from "./Navbar.jsx";
import Admin from "./Admin.jsx";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
