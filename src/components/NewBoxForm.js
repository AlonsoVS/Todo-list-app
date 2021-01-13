import React, {Component} from 'react';

class NewBoxForm extends Component {
    render() {
        return(
            <form >
                <label>
                    <input type="text" placeholder="New Todo"/>
                    <button type="submit">Submit</button>
                </label>
            </form>
        );
    }
}

export default NewBoxForm;