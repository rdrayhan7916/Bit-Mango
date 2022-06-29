import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Games from './Components/Games/Games';
import Work from './Components/Work/Work';
import Publishing from './Components/Publishing/Publishing';
import Jobs from './Components/Home/Jobs/Jobs';
import Contact from './Components/Contacts/Contact';
import Dashboard from './Components/Admin/Dashboard/Dashboard';
import Addgame from './Components/Admin/AddGame/Addgame';
import AddFetureGame from './Components/Admin/AddFetureGame/AddFetureGame';
import AddCEO from './Components/Admin/AddCEO/AddCEO';
import AddCOO from './Components/Admin/AddCOO/AddCOO';
import Addcore from './Components/Admin/AddCore/Addcore';
import AddHistory from './Components/Admin/AddHistory/AddHistory';
import DeleteGame from './Components/Admin/DeleteGame/DeleteGame';

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
          <Route path='publishing' element={<Publishing />} />
          <Route path='jobs' element={<Jobs />} />
          <Route path='contact' element={<Contact />} />
          <Route path='admin' element={<Dashboard />}>
            <Route path='' element={<Addgame />} />
            <Route path='addgame' element={<Addgame />} />
            <Route path='deletegame' element={<DeleteGame />} />
            <Route path='addfgame' element={<AddFetureGame />} />
            <Route path='addceo' element={<AddCEO />} />
            <Route path='addcoo' element={<AddCOO />} />
            <Route path='addcore' element={<Addcore />} />
            <Route path='addhistory' element={<AddHistory />} />
          </Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div >
  );
}

export default App;
