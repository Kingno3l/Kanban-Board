import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Mission from './components/Mission';

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/mission" element={<Mission />} />
      </Routes>
    </>
  );
}

export default App;
