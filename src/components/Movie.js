import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const Movie = ({ id, coverImage, title, summary, genres }) => (
  <div>
    <img src={coverImage} alt={title} />
    <h2>
      <Link to={`/movie/${id}`}>{title} </Link>
    </h2>
    <p>{summary}</p>
    <ul>{genres && genres.map((g) => <li key={g}>{g}</li>)}</ul>
  </div>
);

export default Movie;
