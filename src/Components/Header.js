import { Link } from "react-router-dom";
import "./Header.css"
function Header(){
    return(
        <div className="header">
            <Link to="/"><img className="header__image" alt="" src={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"}/></Link>
            <Link className="link" to="/movies/popular">Popular</Link>
            <Link className="link" to="/movies/top_rated">Top Rated</Link>
            <Link className="link" to="/movies/upcoming">Upcoming</Link>
        </div>
    )
}
export default Header;