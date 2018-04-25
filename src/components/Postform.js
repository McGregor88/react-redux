import React, { Component } from 'react'

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body
    }

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(post)
    })
      .then(res => res.json())
      .then(data => console.log(data));
  }

  render() {
    return (
      <div className="container">
        <h1 className="page-heading">Add Post</h1>
        <form onSubmit={this.onSubmit} className="post-form">
          <div className="post-form-inner">
            <div className="form-field">
              <label className="control-label">Title: </label>
              <input 
                type="text" 
                name="title"
                onChange={this.onChange}
                value={this.state.title} 
                className="form-control" 
                required 
              />
            </div>
            <div className="form-field">
              <label className="control-label">Body: </label>
              <textarea 
                name="body" 
                onChange={this.onChange}
                value={this.state.body}
                minLength="10" 
                required>
              </textarea>
            </div>
            <button type="submit" className="btn">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default PostForm;