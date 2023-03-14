import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Trafalgar from './Pages/main/Trafalgar';


function App() {
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
