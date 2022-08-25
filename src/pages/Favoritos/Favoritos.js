import {Link} from 'react-router-dom';
import api from '../../services/api';
import { useEffect, useState } from 'react';
import './Favoritos.css';

function Favoritos(){
    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState([true]);



    useEffect(()=>{
        async function loadFilmes(){
            const response = await api.get('/movie/top_rated', {
                params:{
                    api_key: "b78efd176603c3a37f5658c9bee05854",
                    language: "pt-BR",
                    page:1,
                }
            })


            // console.log(response.data.results);

            setFilmes(response.data.results.slice(0,10))
            setLoading();
        }

            loadFilmes();

    }, [])

if(loading){
    return(
        <div className='loading'>
            <h2>Carregando filmes...</h2>
        </div>
    )
}





    return (
        <div className='container-Favoritos'>
        <div className='lista-filme-favoritos'>
           {filmes.map((filme)=>{
            return(
                <article>
                    
                    <strong key={filme.id}>{filme.title}</strong>
                    <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title}/>
                    <Link to={`/filme/${filme.id}`}>Acessar</Link>
               
                </article>
                
            )
           })}

        </div>
        
    </div>
    )
}


export default Favoritos;