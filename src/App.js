import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Games from './Components/Games/Games';
import Work from './Components/Work/Work';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='games' element={<Games />} />
          <Route path='work' element={<Work />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div >
  );
}

export default App;
