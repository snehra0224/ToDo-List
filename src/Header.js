import React from 'react';

function Header() {
	return(
		<header style = {headerStyle}>
			<h1>ToDo List </h1>
		</header>
	)
}

const headerStyle = {
	font: 'Arial',
	textAlign: 'center'
}

export default Header;