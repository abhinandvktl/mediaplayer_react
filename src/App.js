import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Landingpage from './pages/Landingpage';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Watchhistory from './pages/Watchhistory';

function App() {
  return (
    <>
      <Header/>

      <div className='container m-5'>

        <Routes>

          <Route path='/' element={<Landingpage/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/watchhistory' element={<Watchhistory/>} />


        </Routes>

        
      </div>



      <Footer/>
    </>
  );
}

export default App;
