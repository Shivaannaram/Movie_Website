
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import axios from 'axios';
import { useEffect,useState} from "react";
import MovieList from "./MovieList";

function Home(){
// `https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`
    const [popularMovies,setPopularMovies]=useState([])
    useEffect(()=>{
        axios.get("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US").then(
            (response)=>{
                console.log(response.data.results);
                setPopularMovies(response.data.results)
            },
            (error)=>{
                console.log(error)
            }
        )
    },[])
    
//-----------------------------------------------------------------------------------------------------------------------
    const showCarousel=()=>{
        return popularMovies.map((movie)=>{
                return(
                    <div key={movie.id}>
                        <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt=""></img>
                        <div className="movie_name">
                            {movie.original_title}
                        </div>
                    </div>
                )
        })
    }

    return(
        <div>
           
            <Carousel autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
            showThumbs={false}
            transitionTime={1}>
                {
                    showCarousel()
                }
            </Carousel>
            <MovieList/>
        </div>
    )
}
export default Home;