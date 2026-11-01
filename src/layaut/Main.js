import './Main.css';
import React from 'react';
import Preloader from '../components/Preloader';
import MovieList from '../components/MovieList';
import Search from '../components/Search';

class Main extends React.Component
{
	state =
		{
			movies:[]
		}
	componentDidMount()
	{
	fetch(`https://www.omdbapi.com/?s=matrix&apikey=f4a91ff4`)
		.then(response => response.json())
		.then(data => this.setState({ movies: data.Search }));
	}
	searchMovie = (str) =>
	{
	fetch(`https://www.omdbapi.com/?s=${str}&apikey=f4a91ff4`)
		.then(response => response.json())
		.then(data => this.setState({ movies: data.Search }));
	}
	render()
	{

		return (
			<div className="main">
				<Search searchMovie={this.searchMovie} />
				{
					this.state.movies.length === 0 ? <Preloader/> : 
					<MovieList movies={this.state.movies } />
				}
		</div>
		)
	}
}
export default Main;