
import {Routes,Route} from 'react-router-dom'
import './App.css';
import Home from '../src/pages/Home'
import ModeChoice from './pages/ModeChoice';
function App() {
  return (
      <>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/modechoice" element={<ModeChoice />} />
        </Routes> 
      </>
  );
}

export default App;
