import React, {Component} from 'react'

class AddEntry extends Component{
	state = {
		title: ''
	}

	onChange = (e) => this.setState({title: e.target.value});

	onSubmit = (e) => {
		e.preventDefault();
		this.props.addEntry(this.state.title);
		this.setState({title: ''});
	}

	render(){
		return(
			<div>
				<form onSubmit = {this.onSubmit} style = {formStyle}>
					<input
						type = 'text'
						name = 'title'
						placeholder = 'New Entry'
						value = {this.state.title}
						onChange = {this.onChange}
					/>
					<input
						type = 'submit'
						value = 'Submit'

					/>
				</form>
			</div>
		);
	}
}

const formStyle = {
	textAlign: 'center'
}

export default AddEntry