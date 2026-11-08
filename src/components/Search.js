import './Search.css';
import React from "react";

 class Search extends React.Component
{
	 state =
		 {
			 search: "",
			 type: "all",
			 page: 1
		 }
	 handleKey = (event) =>
	 {
		//console.log(`Search.handleKey:\t${event.key}`);
		 if (event.key === 'Enter')
		 {
			console.log(`Search.handleKey:\t${this.state.search}`);
			this.props.searchMovie(this.state.search, this.state.type);
		 }
	 }
	 handleFilter = (event) =>
	 {
		 this.setState
			 (
				 () => ({ type:		event.target.dataset.type }),
				 () => ({ search:	this.props.searchMovie(this.state.search, this.state.type)})
		 )
	 }
	 prevPage = () =>
	 {
		 this.setState
		 (
				 () => (this.state.page > 1 ? { page: this.state.page - 1 } : { page: 1 }),
				 () => { this.props.searchMovie(this.state.search, this.state.type, this.state.page)}
		 )
	 }
	 nextPage = () =>
	 {
		 this.setState
		 (
				 () => ({ page: this.state.page + 1 }),
				 () => { this.props.searchMovie(this.state.search, this.state.type, this.state.page)}
		 )
	 }

	 render()
	 {
		 let itemsPerPage = 10;
		 let totalPages = Math.ceil(this.props.totalCount / itemsPerPage);
		 let number = [];
		 for (let i = 0; i < totalPages; i++)
			 number.push(i+1);
		 return (
			 <>
				 <div className="search">
					 <input type="search"
						 placeholder="Поиск" 
						 value={this.state.search}
						 onChange={(e) => this.setState({ search: e.target.value })}
						 onKeyUp={this.handleKey}
					 />
					 <button className="btn"
						 onClick=
						 {
							 () => this.props.searchMovie(this.state.search, this.state.type)
						 }
						 >
						&#128269;
					 </button>
				 </div>
				 <div className="radio">
					 <input type="radio"
						 name="type"
						 id="radio-all"
						 data-type="all"
						 checked={this.state.type === 'all'}
						 onChange={ this.handleFilter }
					 />
					 <label htmlFor="radio-all">All</label>
					 <input type="radio"
						 name="type"
						 id="radio-movie"
						 data-type="movie"
						 checked={this.state.type === 'movie'}
						 onChange={ this.handleFilter }
					 />
					 <label htmlFor="radio-all">Movies</label>
					 <input type="radio"
						 name="type"
						 id="radio-series"
						 data-type="series"
						 checked={this.state.type === 'series'}
						 onChange={ this.handleFilter }
					 />
					 <label htmlFor="radio-all">Series</label>
					 <input type="radio"
						 name="type"
						 id="radio-game"
						 data-type="game"
						 checked={this.state.type === 'game'}
						 onChange={ this.handleFilter }
					 />
					 <label htmlFor="radio-all">Games</label>
					 
					
				 </div>
				 <div className="pagination">
					 <button className="btn" onClick={this.prevPage }>
						Prev
					 </button>
					 <div className="items">
						 {
							 number.slice(0, totalPages)
								 .map
								 (
									 (element, index) =>
									 (
										 <button className={element === this.state.page ? "btn-current-page" : ""}>
											 { element }
										 </button>
									)
							 )	
						 }
					 </div>
					 <button className="btn" onClick={this.nextPage }>
						Next
					 </button>
				 </div>
			 </>

		 )
	 }
}
export default Search;