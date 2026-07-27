import { Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
// import Contact from './pages/Contact';
// import NotFound from './pages/NotFound';
// import Projects from './pages/Projects';

export default function App(){
  return(
    <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/Contact' element={<Contact />} />
        <Route path='/Projects' element={<Projects/>} />
        <Route path='*' element={<NotFound />} /> */}
    </Routes>
    
  );
}