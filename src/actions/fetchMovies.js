import { fetchMoviesPending, fetchMoviesSuccess, fetchMoviesError } from './index';
import api from '../api/index';

export function fetchMoviesList() {
    return function(dispatch) {
        dispatch(fetchMoviesPending());
        api.getAllMovies().then((res) => {
            dispatch(fetchMoviesSuccess(res.data));
            return res.data;
        }).catch(error => {
            dispatch(fetchMoviesError(error));
        });
    }
}