function Movie({ id, title, year, synopsis }) {
  return (
    <div className="Movie">
      <p>{id}</p>
      <h1>Title: {title}</h1>
      <h2>Year: {year}</h2>
      <h3>Synopsis: {synopsis}</h3>
    </div>
  );
}
export default Movie;
