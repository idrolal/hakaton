import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useAsyncError } from "react-router-dom";
import { fetchData } from '../../store/api/requestApi';

function ProfilePage() {
	const [edit, setEdit] = useState(false)
	const { user } = useSelector((state) => { return state.user })
	// const user = { userName: 'User' }
	const [name, setName] = useState(user.userName)

	const onChangeName = (event) => {
		setName(event.target.value)
	}
	const handleNameChange = (name) => {
		fetchData({ url: '/user/updateName', method: 'PUT', data: { userName: name, id: user.id }, })
		setEdit(false)
	}

	return (
		<div>
			<h1>Личный кабинет</h1>
			{edit ? (
				<div>
					<form onSubmit={handleNameChange}>
						<input type="text" name="newName" onChange={onChangeName} value={name} />
					</form>
				</div>
			) : (
				<div onClick={() => { setEdit(true) }} style={{ cursor: 'pointer' }} >Поменять имя пользователя</div>
			)}
			<Link to='/user/game' ><h2>Посмотреть персонажей</h2></Link>
			<Link to={`/game/${user.id}`}><h1>Начать игру</h1></Link>
		</div>
	);
}

export default ProfilePage;
