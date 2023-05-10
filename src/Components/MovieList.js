
import { Link, useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import axios from "axios";
import "./MovieList.css";

function MovieList(){
    const {type}=useParams()
    console.log(type)

    const [movies,setmovies]=useState([])

    useEffect(()=>{
       axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`).then(
        (response)=>{
            // console.log(response.data.results)
            setmovies(response.data.results)
        },
        (error)=>{
            console.log(error)
        }
       )
    },[])
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/${type}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`).then(
            (response)=>{
                console.log(response.data.results)
                setmovies(response.data.results)
            },(error)=>{
                console.log(error)
            }
        )
    },[type])
    const showMovieList=()=>{
        return movies.map((movie)=>{
            return(
                    <Link  to={`/movie/${movie.id}`} key={movie.id} className="col-lg-4 botm-margn ">
                        <div className="transperent_block " style={{backgroundColor:"#cccccc"}}>
                            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} className="img-responsive" alt=""/>
                        <div className="black_hover_block">
                            <div className="blur"></div>
                            <div className="black_hover_block_text">
                                <h5 className="titl-h5">{movie.original_title}</h5>
                                <ul className="pad0 bg_black">
                                    <p>Rating:{movie.vote_average}</p>
                                    <p>Date:{movie.release_date}</p>
                                </ul>
                                <p>{movie.overview}</p>
                            </div>
                        </div>
                        </div>
                    </Link>

                    
                // </div>
                // </div>
           
                // <Link to={`/movie/${movie.id}`} key={movie.id}>
                //     <div>
                //         {movie.id}
                //     </div>
                //     <div className="posterImage">
                //         <img style={{width:"200px"}} src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt=""></img>
                //     </div>
                //     <div className="posterTitle">
                //         <span>{movie.original_title}</span>
                //         <p>{movie.release_date}</p>
                //         <p>{movie.vote_average}</p>
                //     </div>
                //     <div className="posterDescription">
                //         <p>{movie.overview}</p>
                //     </div>  
                // </Link>
              )
        })
    }

    return(
        <div>
            <div className="container">
                <div className="row">
                    {showMovieList()}
                </div>
            </div>
        </div>
    )
}
export default MovieList;