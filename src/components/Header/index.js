import img from '../../images/logo.png'
import { toBeRequired } from '@testing-library/jest-dom/dist/matchers';
import { Link } from 'react-router-dom';
import './Header.css';



function Header(){
    return(
        <header>
            
                <Link to='/'>
                    <img src={img} alt="logo"/>
                </Link>
            <Link className='favoritos' to='/favoritos'>Meus Filmes</Link>
            
        </header>

           
            

    
    )
}

export default Header;