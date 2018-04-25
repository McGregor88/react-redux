import React, { Component } from 'react'

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  componentWillMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => this.setState({
        posts: data
      }));
  }

  render() {
    const postItems = this.state.posts.map(post => (
      <li key={post.id} className="posts-list-item">
        <h3 className="posts-list-item__title">{post.title}</h3>
        <p className="posts-list-item__body">{post.body}</p>
      </li>
    ));
    return (
      <div className="posts-container">
        <h2 className="posts-heading">Posts</h2>
        <ul className="posts-list">
          {postItems}
        </ul>
      </div>
    );
  }
}

export default Posts;