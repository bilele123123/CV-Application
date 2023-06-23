import React, { Component } from 'react';

class GeneralInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            name: '',
            newName: '',
            email: '',
            newEmail: '',
            phoneNumber: '',
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
            <div className='container-genInfo'>
                <div className='genInfo-header'>
                    <h2>General Information</h2>
                </div>
                {editing ? (
                    <div className='genInfo-content'>
                        <div className='input-group'>
                            <label>Name:</label>
                            <input className='input-field' placeholder='Enter your first and last' type="text" value={newName} onChange={(e) => this.handleInputChange(e, 'newName')} />
                        </div>
                        <div className='input-group'>
                            <label>Email:</label>
                            <input className='input-field' placeholder='Enter your email' type="text" value={newEmail} onChange={(e) => this.handleInputChange(e, 'newEmail')} />
                        </div>
                        <div className='input-group'>
                            <label>Phone Number:</label>
                            <input className='input-field' placeholder='Enter your phone number' type="number" value={newPhoneNumber} onChange={(e) => this.handleInputChange(e, 'newPhoneNumber')} />
                        </div>
                        <div className='btn-group'>
                            <button className='saveBTN' onClick={this.handleSaveClick}>Save</button>
                        </div>
                    </div>
                ) : (
                    <div className='genInfo-input'>
                        <div className='input-group'>
                            <label>Name:</label>
                            <span className='input-value'>{name}</span>
                        </div>
                        <div className='input-group'>
                            <label>Email:</label>
                            <span className='input-value'>{email}</span>
                        </div>
                        <div className='input-group'>
                            <label>Phone Number:</label>
                            <span className='input-value'>{phoneNumber}</span>
                        </div>
                        <button className='editBTN' onClick={this.handleEditClick}>Edit</button>
                    </div>
                )}
            </div>
        )
    }
}

export default GeneralInfo;