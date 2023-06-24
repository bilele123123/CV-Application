import React, { Component } from 'react';

class PracticalExperience extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            companyName: '',
            newCompanyName: '',
            title: '',
            newTitle: '',
            task: '',
            newTask: '',
            dateStart: '',
            newDateStart: '',
            dateEnd: '',
            newDateEnd: ''
        };
    }

    handleEditClick = () => {
        const { companyName, title, task, dateStart, dateEnd } = this.state;
        this.setState({
            editing: true,
            newCompanyName: companyName,
            newTitle: title,
            newTask: task,
            newDateStart: dateStart,
            newDateEnd: dateEnd
        });
    };

    handleSaveClick = () => {
        const { newCompanyName, newTitle, newTask, newDateStart, newDateEnd } = this.state;
        this.setState({
            editing: false,
            companyName: newCompanyName,
            title: newTitle,
            task: newTask,
            dateStart: newDateStart,
            dateEnd: newDateEnd
        });
    };

    handleInputChange = (event, field) => {
        this.setState({
            [field]: event.target.value
        });
    };

    render() {
        const { editing, companyName, newCompanyName, title, newTitle, task, newTask, dateStart, newDateStart, dateEnd, newDateEnd } = this.state;
        const { showEditButtons } = this.props;

        return (
            <div className='container-practicalExp'>
                <div className='practicalExp-header'>
                    <h2>Practical Experience</h2>
                </div>
                {editing ? (
                    <div className='practicalExp-content'>
                        <div className='input-group'>
                            <label>Company Name:</label>
                            <input className='input-field' placeholder='Enter company name' type='text' value={newCompanyName} onChange={(e) => this.handleInputChange(e, 'newCompanyName')} />
                        </div>
                        <div className='input-group'>
                            <label>Title:</label>
                            <input className='input-field' placeholder='Enter your job title' type='text' value={newTitle} onChange={(e) => this.handleInputChange(e, 'newTitle')} />
                        </div>
                        <div className='input-group'>
                            <label>Main Tasks:</label>
                            <textarea className='input-field' placeholder='Enter main tasks' value={newTask} onChange={(e) => this.handleInputChange(e, 'newTask')} />
                        </div>
                        <div className='input-group'>
                            <label>Start Date:</label>
                            <input className='input-field' placeholder='Enter start date' type='text' value={newDateStart} onChange={(e) => this.handleInputChange(e, 'newDateStart')} />
                        </div>
                        <div className='input-group'>
                            <label>End Date:</label>
                            <input className='input-field' placeholder='Enter end date' type='text' value={newDateEnd} onChange={(e) => this.handleInputChange(e, 'newDateEnd')} />
                        </div>
                        <div className='btn-group'>
                            {showEditButtons && (
                                <button className='submitBTN' onClick={this.handleSaveClick}>
                                    Save
                                </button>
                            )}
                        </div>
                    </div>
                ) : (
                    <div className='practicalExp-input'>
                        <div className='input-group'>
                            <label>Company Name:</label>
                            <span className='input-value'>{companyName}</span>
                        </div>
                        <div className='input-group'>
                            <label>Title:</label>
                            <span className='input-value'>{title}</span>
                        </div>
                        <div className='input-group'>
                            <label>Main Tasks:</label>
                            <span className='input-value'>{task}</span>
                        </div>
                        <div className='input-group'>
                            <label>Start Date:</label>
                            <span className='input-value'>{dateStart}</span>
                        </div>
                        <div className='input-group'>
                            <label>End Date:</label>
                            <span className='input-value'>{dateEnd}</span>
                        </div>
                        {showEditButtons && (
                            <div className='btn-group'>
                                <button className='editBTN' onClick={this.handleEditClick}>Edit</button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        );
    }
}

export default PracticalExperience;
