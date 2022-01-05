import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import '../containers/App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

function App() {

	const [users, setUsers] = useState([])
	const [searchfield, setSearchfield] = useState('')

	useEffect(()=> {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => {setUsers(users)});
	},[])

	const onSearchChange = (event) => {
		setSearchfield(event.target.value)
	}
	const filteredUsers = users.filter(user => {
		return user.name.toLowerCase().includes(searchfield.toLowerCase());
	})
	return (
		<div className='tc'>
			<h1 className='f1'>Big City Paws</h1>
			<div
			style={{background: 'url(bg.jpeg) center',
				backgroundSize: 'cover'}}
				>
				<SearchBox searchChange={onSearchChange}/>
				<Scroll>
					<ErrorBoundary>
						<CardList users = {filteredUsers}/>	
					</ErrorBoundary>
				</Scroll>
			</div>
		</div>
	);
}

export default App;