
export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const SELECT_CHANNEL = 'SELECT_CHANNEL';
export const FETCH_MOVIES_PENDING = 'FETCH_MOVIES_PENDING';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_ERROR = 'FETCH_MOVIES_ERROR';

export const getChannel = channel => ({
    type: SELECT_CHANNEL,
    channel,
});

const requestPosts = () => ({
    type: REQUEST_POSTS
});

const receivedPosts = (json) => ({
    type: RECEIVE_POSTS,
    data: json.data,
});

export const fetchMoviesPending = () => ({
    type: FETCH_MOVIES_PENDING
});

export const fetchMoviesSuccess = (response) => ({
    type: FETCH_MOVIES_SUCCESS,
    movies: response.data
});

export const fetchMoviesError = (error) => ({
    type: FETCH_MOVIES_ERROR,
    error: error
});

export function fetchPosts() {
    return function(dispatch) {
        dispatch(requestPosts());
        return fetch('/api/getList').then(
            response => response.json()
        ).then((json) => {
            dispatch(receivedPosts(json));
        });
    }
}
