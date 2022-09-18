import {useState, useEffect} from "react"

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
/*   useEffect(() =>{
    fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)
    .then((response) => response.json())
    .then((json) => {
      setMovies(json.data.movies);
      setLoading(false)})
  }, []); */ 
  const getMovioes = async () => { // 위의 .then과 같은 기능
    const json = await (
      await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)
      ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovioes();
  }, []);
  console.log(movies);
  return (
<div>
  {loading ? <h1>Loading...</h1> : <div>{movies.map(movie => <div key={movie.id}>
    <img src={movie.medium_cover_image} />
    <h2>{movie.title}</h2>
    <p>{movie.summary}</p>
    <ul>
      {movie.genres === null ? "" : movie.genres.map((genre) => <li key={genre}>{genre}</li>)} 
    </ul>
  </div>)}</div>}
</div>
  )
}

export default App;
