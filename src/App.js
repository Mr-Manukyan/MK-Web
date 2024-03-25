import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Header } from './Components/Header/Header';
import { Footer } from './Components/Footer/Footer';
import { HomePage } from './Components/Pages/HomePage/HomePage';
import { AboutMePage } from './Components/Pages/AboutMePage/AboutMePage';
import { SkillsPage } from './Components/Pages/SkillsPage/SkillsPage';
import { PortFolioPage } from './Components/Pages/PortFolioPage/PortFolioPage';
import { ContactMePage } from './Components/Pages/ContactMePage/ContactMePage';

import './App.css';


const App = () => {

  const location = useLocation()

  return (
    <div className='container'>
      <Header />
      <AnimatePresence mode='wait' initial={false}>
        <Routes key={location.pathname} location={location} >

          <Route exact path={'/'} element={<HomePage />} />
          <Route exact path='/aboutMe' element={<AboutMePage />} />
          <Route exact path='/skills' element={<SkillsPage />} />
          <Route exact path='/portfolio' element={<PortFolioPage />} />
          <Route exact path='/contactMe' element={<ContactMePage />} />

          {/* <Route path='*' element={<NotFound />} /> */}
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
