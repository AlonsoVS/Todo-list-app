import React, {Component} from 'react';
import { v4 as uuidv4 } from 'uuid';
import './styles/NewBoxForm.css';

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
            <div className="NewBoxForm">
                {this.props.typeForm === "New ToDo" && <h3>{this.props.typeForm}</h3>}
                <form onSubmit={this.handleSubmit} onChange={this.handleChange} name={this.props.typeForm}>
                    <label>
                        <input type="text" placeholder={this.props.typeForm}/>
                    </label>
                    <button type="submit" >{this.props.value}</button>
                </form>
            </div>
        );
    }
}

export default NewBoxForm;