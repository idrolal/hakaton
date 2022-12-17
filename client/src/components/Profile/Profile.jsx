import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
function ProfilePage() {
	const [edit, setEdit] = useState(false)

	const handleEdit = () => {
		setEdit(true)
	}

	const handleNameChange = () => {

	}


	return (
		<div>
			<h1>Личный кабинет</h1>
			{edit ? (
				<div>
					<input type="text" onSubmit={handleNameChange} placeholder={'user.userName'} />
				</div>
			) : (
				<div onClick={() => { setEdit(true) }} pointer >Поменять имя пользователя</div>
			)}
			<Link to='/user/game' ><h2>Посмотреть персонажей</h2></Link>
			<Link to={`/game/${'user.id'}`}><h1>Начать игру</h1></Link>
		</div>
	);
}

export default ProfilePage;
