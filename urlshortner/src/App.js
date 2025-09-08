import React from "react";
import { BrowserRouter as Router, Route,Routes} from "react-router-dom";
import NavBar from "./components/NavBar";
import UrlShortener from "./components/UrlShortener";
import UrlList from "./components/UrlList";
import NotFound from "./components/NotFound";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <NavBar />
        <Routes>
          <Route path="/" element={<UrlShortener />} />
          <Route path="/urls" element={<UrlList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
