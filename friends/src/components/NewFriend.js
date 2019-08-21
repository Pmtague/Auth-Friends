import React from 'react';
import { Form, Field, withFormik } from 'formik';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const NewFriend = () => {

	return (
		<div>
			<Form>
				<label>
					Name
					<Field
						type='text'
						name='name'
						placeholder='Hope Brett'
					/>
				</label>
				<label>
					Age
					<Field
						type='age'
						name='age'
						placeholder='34'
					/>
				</label>
				<label>
					Email
					<Field
						type='email'
						name='email'
						placeholder='hope@brett.com'
					/>
				</label>
				<button type='submit'>Add Friend</button>
			</Form>
		</div>
	)
}

const NewFriendFormik = withFormik({

	mapStateToProps({name, age, email}) {
		return {
			id: Date.now() || '',
			name: name || '',
			age: age || '',
			email: email || '',
		}
	},

	handleSubmit(values) {
		console.log('Add Friend', values)
		axiosWithAuth()
			.post('http://localhost:5000/api/friends', values)

			.then(res => {
				console.log('Submit Friend', res)
			})

			.catch(err => {
				console.log('Submit Friend Error', err.response)
			})
	}
})(NewFriend)

export default NewFriendFormik;