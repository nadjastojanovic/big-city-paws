import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
	return (
		<div className='pa2'>
			<input
				style={{backgroundColor: '#F0E3CD'}}
				className='pa3 ba b--brown'
				type='search'
				placeholder='Search users'
				onChange={searchChange}
			/>
		</div>
	);
}

export default SearchBox;