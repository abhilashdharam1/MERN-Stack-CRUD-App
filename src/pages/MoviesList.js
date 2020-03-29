import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactTable from 'react-table-6';
import { fetchMoviesList } from '../actions/fetchMovies';
import 'react-table-6/react-table.css'
import { getMovies, getMoviesPending, getMoviesError } from '../reducers/moviesReducer';

class MoviesList extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {
        this.props.fetchMovies();
    }
    render() {
        const { error, movies, pending } = this.props;
        const columns = [
            {
                Header: 'ID',
                accessor: '_id',
                filterable: true,
            },
            {
                Header: 'Name',
                accessor: 'name',
                filterable: true,
            },
            {
                Header: 'Rating',
                accessor: 'rating',
                filterable: true,
            },
            {
                Header: 'Time',
                accessor: 'time',
                Cell: props => <span>{props.value.join(' / ')}</span>,
            },
        ];
        return (
            <div>
                <p>In this page you'll see the list of movies</p>
                {pending && 'Loading ....'}
                {error && 'Page Failed to Load'}
                {movies && 
                <ReactTable
                        data={movies}
                        columns={columns}
                        loading={pending}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                }
            </div>
        )
    }
}

 const mapStateToProps = (state) => ({
     error: getMoviesError(state),
     movies: getMovies(state),
     pending: getMoviesPending(state)
 });

 const mapDispatchToProps = (dispatch) => bindActionCreators({ fetchMovies: fetchMoviesList }, dispatch);

 export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);

// export default MoviesList;