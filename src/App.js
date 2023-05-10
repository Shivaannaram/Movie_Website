import {Route, BrowserRouter as Router, Routes} from'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Header from './Components/Header';
import MovieList from './Components/MovieList';
import MovieDetails from './Components/MovieDetails';

function App() {
  return (
    <div className="App">
        <Router>
            <Header/>
              <Routes>
                    <Route index element={<Home/>}></Route>
                    <Route path="/movies/:type" element={<MovieList/>}></Route>
                    <Route path="/*" element={<h1>Error Page</h1>}></Route>
                    <Route path="/movie/:id" element={<MovieDetails/>}></Route>
              </Routes>
        </Router>
    </div>
  );
}

export default App;
