import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Filme from './pages/Filme';
import Header from './components/Header';
import Erro from "./pages/Erro/Erro";
import Favoritos from './pages/Favoritos/Favoritos';




function RoutesApp(){
    return (
        <BrowserRouter>
        <Header/>
        <Favoritos/>
        <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="/filme/:id" element={ <Filme/> } />
            
            
            
            <Route path="*" element={ <Erro/> } />
        </Routes>

        
        </BrowserRouter>
        
    );
}


export default RoutesApp;



