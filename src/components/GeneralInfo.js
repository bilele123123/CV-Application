import React, { Component } from 'react';

class GeneralInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            name: 'First and Last',
            newName: '',
            email: 'email@example.com',
            newEmail: '',
            phoneNumber: '123-456-7890',
            newPhoneNumber: ''
        };
    }
    handleEditClick = () => {
        this.setState({
            editing: true,
            newName: this.state.name,
            newEmail: this.state.email,
            newPhoneNumber: this.state.phoneNumber
        });
    };

    handleSaveClick = () => {
        this.setState({
            editing: false,
            name: this.state.newName,
            email: this.state.newEmail,
            phoneNumber: this.state.newPhoneNumber
        });
    };

    handleInputChange = (event, field) => {
        this.setState({
            [field]: event.target.value
        });
    };

    render() {
        const { editing, name, newName, email, newEmail, phoneNumber, newPhoneNumber } = this.state;

        return (
            <div>
                <h2>General Information</h2>
                {editing ? (
                    <div>
                        <label>Name:
                            <input type="text" value={newName} onChange={(e) => this.handleInputChange(e, 'newName')} />
                        </label>
                        <label>
                            Email:
                            <input type="text" value={newEmail} onChange={(e) => this.handleInputChange(e, 'newEmail')} />
                        </label>
                        <label>
                            Phone Number:
                            <input type="text" value={newPhoneNumber} onChange={(e) => this.handleInputChange(e, 'newPhoneNumber')} />
                        </label>
                        <button onClick={this.handleSaveClick}>Save</button>
                    </div>
                ) : (
                    <div>
                        <p>Name: {name}</p>
                        <p>Email: {email}</p>
                        <p>Phone Number: {phoneNumber}</p>
                        <button onClick={this.handleEditClick}>Edit</button>
                    </div>
                )}
            </div>
        )
    }
}

export default GeneralInfo;