import React from 'react';
import Card from './Card';

const CardList = ({ users }) => {
	return (
		<div className="flex flex-wrap flex-start justify-center">
	    	{
	    		users.map((user, i) => {
					return (
						<Card
							key={i}
							id={users[i].id}
							name={users[i].name}
							year={users[i].year}
							description={users[i].description}
						/>
					);
				})
	    	}
	    </div>
	);
}

export default CardList;