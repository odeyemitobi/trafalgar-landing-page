import "./App.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Trafalgar from './Pages/main/Trafalgar';


function App() {
  Aos.init({
    duration: 1800,
    offset: 100,
  });

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Trafalgar />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
