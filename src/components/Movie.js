import PropTypes from "prop-types";
import { Link } from "react-router-dom";


function Movie({id, coverImg, title, summary, genres}) {
  return (
  <div>
    <a href={`/movie/${id}`}>
      <img src={coverImg} />
    </a>
    <h2>
      <Link to={`/movie/${id}`}>{title}</Link>
    </h2>
    <p>{summary}</p>
    <ul>
      {genres === null ? "" : genres.map((genre) => <li key={genre}>{genre}</li>)} 
    </ul>
</div>)
}
// 부모(App.js)에서 프로퍼티 값을 전달받아 함수를 실행하고 해당 내용을 <Movie /> 컴포넌트로 랜더링

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired, // stringd을 가진 array
}

export default Movie;