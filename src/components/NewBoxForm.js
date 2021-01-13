import React, {Component} from 'react';

class NewBoxForm extends Component {
    state = {
        newTodo: ''
    };

    handleChange = evt => {
        this.setState({
            ...this.state,
            newTodo: evt.target.value
        });
    }

    handleSubmit = event => {
        this.props.onSubmit(this.state.newTodo);
        event.preventDefault();
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit} onChange={this.handleChange} name="Create New ToDo">
                <label>
                    <input type="text" placeholder="New ToDo"/>
                </label>
                <input type="submit" value="Add"/>
            </form>
        );
    }
}

export default NewBoxForm;