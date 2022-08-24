import './Erro.css';
import { Link } from 'react-router-dom';

function Erro(){
    return(
        <div className='notFound'>
            <h1>404</h1>
           <h2>Página não Encontrada!</h2>
        <Link to= '/'>Assista à todos os filmes</Link>
        </div>
    )
}


export default Erro;