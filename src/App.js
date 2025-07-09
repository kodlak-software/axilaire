

import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'
import './App.css';

function App() {
  return (
    <div className="App">
			<div className="w-full">
				<Navbar />
			</div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/About" element={<About />} />
			</Routes>
		</div>
  );
}

export default App;
