// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';

const App = () => {
  return (
    <Router>

      <nav className="bg-[#0D0D0D] text-white px-6 py-4 shadow-md flex justify-between items-center"
      style={{ fontFamily: 'Arial, sans-serif',
        fontSize: '1rem',
        lineHeight: '1.5',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#0D0D0D',
        color: '#FFFFFF',
        padding: '1rem 1.5rem',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        borderRadius: '0.5rem',
        transition: 'background-color 0.3s ease',
       }}>
        <h1 className="text-xl font-bold " style={{
          fontFamily: 'Arial, sans-serif',
          fontSize: '1.5rem',
          lineHeight: '2rem',
          color: '#FFFFFF',
          margin: 0,
          transition: 'color 0.3s ease',
        }}>🎬 Movie Explorer</h1>
        <div className="flex gap-6 text-sm font-medium">
          <Link to="/" className="hover:text-gray-300"
          style={{
            fontFamily: 'Arial, sans-serif',
            fontSize: '1rem',
            lineHeight: '1.5',
            color: '#FFFFFF',
            textDecoration: 'none',
            marginRight: '2rem',
          }}>Home</Link>
          <Link to="/search" className="hover:text-gray-300"
          style={{
            fontFamily: 'Arial, sans-serif',
            fontSize: '1rem',
            lineHeight: '1.5',
            color: '#FFFFFF',
            textDecoration: 'none',
            transition: 'color 0.3s ease',
          
          }}>Search</Link>
        </div>
      </nav>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
  );
};

export default App;
