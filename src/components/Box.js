import React, { Component } from 'react';
import NewBoxForm from './NewBoxForm';
import './styles/Box.css';

class Box extends Component{
    state = {
        edit: false
    }

    onSubmit = (newEntry) => {
        this.setState({edit: false});
        this.props.onEditSubmit(newEntry);
    }

    activeEditBox = () => {
        this.setState({edit: true});
    }

    handleDelete = () => {
        this.props.onDeleteTodo(this.props.id);
    }

    render(){
        const toRender = <>
                            <span>{this.props.todo}</span>
                            <div className="Box-buttons">
                                <button onClick={this.activeEditBox} type="button">Edit</button>
                                <button onClick={this.handleDelete} type="button">Delete</button>
                            </div>
                        </>;
        
        const editForm = <NewBoxForm className="Box-edit-form" typeForm="Edit ToDo" value="Edit ToDo" boxId={this.props.id} onSubmit={this.onSubmit} />;
        return(
            <div className="Box">
                {this.state.edit ? editForm : toRender}
            </div>
        );
    }
}

export default Box;