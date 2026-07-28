import { Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Details';
import Propos from './pages/Apropos';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';


export default function App(){
  return(
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/logement/:id" element={<Detail />} />
        <Route path="/Apropos" element={<Propos />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path='*' element={<NotFound />} /> 
    </Routes>
    
  );
}