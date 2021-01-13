import React, {Component} from 'react';
import { v4 as uuidv4 } from 'uuid';

class NewBoxForm extends Component {
    state = {
        description: '',
        id: ''
    };

    handleChange = evt => {
        this.setState({
            ...this.state,
            description: evt.target.value,
            id: this.props.boxId
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state);
    }

    render() {
        return(
            <div>
                <h3>{this.props.typeForm}</h3>
                <form onSubmit={this.handleSubmit} onChange={this.handleChange} name={this.props.typeForm}>
                    <label>
                        <input type="text" placeholder={this.props.typeForm}/>
                    </label>
                    <input type="submit" value={this.props.value}/>
                </form>
            </div>
        );
    }
}

export default NewBoxForm;