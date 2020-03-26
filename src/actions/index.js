export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const SELECT_CHANNEL = 'SELECT_CHANNEL';

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

export function fetchPosts() {
    return function(dispatch) {
        dispatch(requestPosts());
        return fetch('/api/getList').then(
            response => response.json()
        ).then((json) => {
            dispatch(receivedPosts(json));
        })
    }
}