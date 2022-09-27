import { useEffect } from "react";
import { useParams } from "react-router-dom"; // <Route path="/movie/:id" element={<Detail />}> 에서 변수(:id) 값만 호출
import styles from "./Detail.module.css";

function Detail () {
  const {id} = useParams();
  const getMovie = async () => {
    const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
    console.log(json);
  }
  useEffect(() => {
    getMovie()
  }, [])
  return <div className={styles.body}>
  <h1>Detail</h1>
  </div>
}

export default Detail;