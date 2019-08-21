import React from 'react';
import axios from 'axios';

class NewFriend extends React.Component {
	state = {
		friends: {
			id: '',
			name: '',
			age: '',
			email: ''
		}
	}

	handleChange = e => {
		this.setState({
			friends: {
				...this.state.friends,
				[ e.target.name ]: e.target.value
			}
		});
	};

	// handleSubmit = e => {
	// 	console.log('Submit button clicked!')
	// 	e.preventDefault();
	// 	axios
	// 		.post('http://localhost:5000/api/friends', this.state.friends)
	// 		.then(res => {
	// 			console.log('Submit Friend', res)
	// 		})
	// 		.catch(err => {
	// 			console.log('Error', err.response)
	// 		})
	// }

	render() {
		return (
			<div onSubmit={ this.handleSubmit }>
				<form>
					<input
						type='text'
						name='name'
						value={ this.state.friends.name }
						onChange={ this.handleChange }
					/>
					<input
						type='age'
						name='age'
						value={ this.state.friends.age }
						onChange={ this.handleChange }
					/>
					<input
						type='email'
						name='email'
						value={ this.state.friends.email }
						onChange={ this.handleChange }
					/>
					<button>Add Friend</button>
				</form>
			</div>
		)
	}
}

export default NewFriend;