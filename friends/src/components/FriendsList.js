import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class FriendsList extends React.Component {
	state = {
		friends: [],
		loading: true
	}

	componentDidMount() {
		this.getData();
	}

	getData = () => {
		axiosWithAuth()
			.get('http://localhost:5000/api/friends')
			.then(res => {
				console.log('Results', res.data)
				this.setState({
					friends: res.data
				});
			})
			.catch(err => {
				console.log("Error", err.response)
			})
	}

	render() {
		return (
			<div className='friends-list'>
				{ this.state.friends.length > 0 ?
				this.state.friends.map(friend => (
					<div key={ friend.id }>
						<h3>{ friend.name }</h3>
						<p>Age: { friend.age }</p>
						<p>Email: { friend.email }</p>
					</div>
				)): null}
				<button onClick={ () => {
					localStorage.clear() 
					this.props.history.push('/login');
				}}>Log Out</button>
			</div>
		)
	}
}

export default FriendsList;