import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import '../containers/App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			users: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({ users: users}))
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	}

	render() {
		const filteredUsers = this.state.users.filter(user => {
			return user.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		return (
			<div className='tc'>
				<h1 className='f1'>Big City Paws</h1>
				<div
				style={{background: 'url(bg.jpeg) center',
  				backgroundSize: 'cover'}}
  				>
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
						<ErrorBoundary>
							<CardList users = {filteredUsers}/>	
						</ErrorBoundary>
					</Scroll>
				</div>
			</div>
		);
	}
}

export default App;