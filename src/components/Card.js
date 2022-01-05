import React from 'react';

const Card = ({ id, name, description }) => {
	return (
		<div style={{backgroundColor: '#91A6BC', borderColor: '#E3DCCC'}} className='tc br3 ba bw2 w-20 ma2 pa2 grow shadow-5'>
			<img alt={`${name}`} src={`dogs/dog${id}.jpg`} />
			<div>
				<h2 className='white f4'>{name}</h2>
				<p className='white f5'>{description}</p>
			</div>
		</div>
	);
}

export default Card;