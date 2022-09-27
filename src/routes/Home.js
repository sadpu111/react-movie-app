import {useState, useEffect} from "react"
import Movie from "../components/Movie";
import styles from "./Home.module.css";

function Home() {

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
      await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.9&sort_by=year`)
      ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovioes();
  }, []);
  return (
<div>
  {loading ? <h1 className={styles.loader}>Loading...</h1> : 
  <div className={styles.container}>{movies.map(movie =>
    (
    <Movie 
        key={movie.id}
        id={movie.id}
        coverImg={movie.medium_cover_image}
        title={movie.title}
        genres={movie.genres} /> 
    ))}
   </div>}
</div>
  )

}



export default Home;