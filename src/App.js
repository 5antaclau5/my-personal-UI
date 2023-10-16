import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home.js';
import About from './pages/About/About.js';
import Contact from './pages/Contact/Contact.js';
import MasterPage from './components/MasterPage/MasterPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MasterPage><Home /></MasterPage>} />
        <Route path="/about" element={<MasterPage><About /></MasterPage>} />
        <Route path="/contact" element={<MasterPage><Contact /></MasterPage>} />
      </Routes>
    </Router>
  );
}

export default App;
