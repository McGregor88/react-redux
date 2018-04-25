import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';

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
    this.props.createPost(post);
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

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
};

export default connect(null, { createPost })(PostForm);