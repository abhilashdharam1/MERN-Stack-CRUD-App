import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index'; 

let Button = ({ getPosts, data }) => (
    <div>
        <button onClick={() => getPosts()}>Get News</button>
        { data ? data.map((i, index) => <li key={index}>{i}</li>) : ''}
    </div>
);

const mapStateToProps = (state) => ({ data: state.data})
const mapDispatchToProps = { getPosts: fetchPosts }

Button = connect(mapStateToProps, mapDispatchToProps)(Button)

export default Button;