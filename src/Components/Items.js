import React, {Component} from 'react';
import Entry from './Entry';
import PropTypes from 'prop-types';

class Items extends Component {
	render(){
		return this.props.todos.map((item) => (
			<Entry key = {item.id} info = {item} toggleComplete = {this.props.toggleComplete} delete = {this.props.delete}/>
		));
	}
}

Items.propTypes = {
	todos: PropTypes.array.isRequired
}

export default Items;