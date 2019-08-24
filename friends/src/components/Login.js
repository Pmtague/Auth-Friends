import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class Login extends React.Component {
	state = {
		credentials: {
			username: '',
			password: ''
		}
	};

	handleChange = e => {
		this.setState({
			credentials: {
				...this.state.credentials,
				[ e.target.name ]: e.target.value
			}
		});
	};

	login = e => {
		e.preventDefault();
		axiosWithAuth()
			.post('http://localhost:5000/api/login', this.state.credentials)
			.then(res => {
				console.log('Login', res.data)
				localStorage.setItem('token', res.data.payload);
				this.props.history.push('/friendsList');
			})
			.catch(err => {
				console.log('Login error', err.response)
			})
	};

	render() {
		return (
			<div>
				<form className='login-form' onSubmit={ this.login }>
					<label>
						Username
						<input
							type='text'
							name='username'
							placeholder='pmtague'
							value={ this.state.credentials.username }
							onChange={ this.handleChange }
						/>
					</label>
					<label>
						Password
						<input
							type='password'
							name='password'
							placeholder='Top secret access code'
							value={ this.state.credentials.password }
							onChange={ this.handleChange }
						/>
					</label>
					<button>Log In</button>
				</form>
			</div>
		)
	}
}

export default Login;