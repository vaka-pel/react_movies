import './Movie.css';

function Movie(props)
{
	return (
		<div className="card">
			<img src={props.Poster} alt={props.imdbID} />
			<div>
				<h3>{ props.Title }</h3>
				<div>{ props.Year } <span>{ props.Type }</span></div>
			</div>
		</div>
	)
}
export default Movie;