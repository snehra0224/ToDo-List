import React, {Component} from 'react';
import PropTypes from 'prop-types';


class Entry extends Component {
	getStyle = () => {
		if(!this.props.info.completed){
			return{
				background: '#C2CEF9',
				padding: '10px',
				borderBottom: '1px #ccc dotted',
				textDecoration: 'none',
				textAlign: 'left', 
				font: 'Arial'
			}
		}
		else{
			return{
				background: '#C2CEF9',
				padding: '10px',
				borderBottom: '1px #ccc dotted',
				textDecoration: 'line-through',
				textAlign: 'left',
				font: 'Arial'
			}
		}
	}

	render(){
		const {id, title} = this.props.info;
		return (
			<div style = {this.getStyle()}>
				<p>
					<input type = "checkbox" onChange = {this.props.toggleComplete.bind(this, id)}/>{' '}
					{title}
					<button style = {buttonStyle} onClick = {this.props.delete.bind(this,id)}> Delete </button>
				</p>
			</div>
		);
	}
}

Entry.propTypes = {
	info: PropTypes.object.isRequired
}

const buttonStyle = {
	background: '#e37e7e',
	color: '#fff',
	border: 'none',
	padding: '5px 10px',
	cursor: 'pointer',
	float: 'right'
}

export default Entry;