import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import AddPost from "./AddPost";
function App({ posts }) {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<AddPost />
				<ul>
					{posts.map(post => (
						<li key={post.id}>{post.title}</li>
					))}
				</ul>
			</header>
		</div>
	);
}

const mapStateToProps = state => {
	return { posts: state.posts };
};

export default connect(mapStateToProps)(App);
