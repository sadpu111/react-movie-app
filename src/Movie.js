function Movie({coverImg, title, summary, genres}) {
  return <div>
  <img src={coverImg} />
  <h2>{title}</h2>
  <p>{summary}</p>
  <ul>
    {genres === null ? "" : genres.map((genre) => <li key={genre}>{genre}</li>)} 
  </ul>
</div>
}
// 부모(App.js)에서 프로퍼티 값을 전달받아 함수를 실행하고 해당 내용을 <Movie /> 컴포넌트로 랜더링
export default Movie;