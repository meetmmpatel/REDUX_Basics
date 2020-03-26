import React, { Component } from "react";
import { connect } from "react-redux";

class AddPost extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: " "
		};
	}

	handleChange = event => {
		this.setState({ value: event.target.value });
	};

	handleSubmit = event => {
		event.preventDefault();
		this.props.dispatch({
			type: "ADD_POST",
			payload: { id: this.state.postID, title: this.state.value }
		});
		this.setState({ postID: this.state.postID + 1 });
	};

	componentDidMount() { 
		fetch("https://jsonplaceholder.typicode.com/posts").then(response => response.json()).then(json => { 
			this.props.dispatch({
				type: "LOAD_POSTS",
				payload: json
			});
		});
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input
						type="text"
						value={this.state.value}
						onChange={this.handleChange}
					></input>
					<button type="submit" onClick={this.handleSubmit}>
						Add Post
					</button>
					AddPost
				</form>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { posts: state.posts };
};

const mapDispatchToProps = dispatch => {
	return { dispatch };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);
