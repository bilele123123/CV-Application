import React, { Component } from 'react';

class EducationalExperience extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            schoolName: this.props.initialSchoolName || '',
            major: this.props.initialMajor || '',
            startDate: this.props.initialStartDate || '',
            endDate: this.props.initialEndDate || ''
        };
    }

    handleEditClick = () => {
        const { schoolName, major, startDate, endDate } = this.state;
        this.setState({
            editing: true,
            newName: schoolName,
            newMajor: major,
            newStartDate: startDate,
            newEndDate: endDate
        });
    };

    handleSaveClick = () => {
        const { newName, newMajor, newStartDate, newEndDate } = this.state;
        this.setState({
            editing: false,
            schoolName: newName,
            major: newMajor,
            startDate: newStartDate,
            endDate: newEndDate
        });
    };

    handleInputChange = (event, field) => {
        this.setState({
            [field]: event.target.value
        });
    };

    render() {
        const { editing, schoolName, newName, major, newMajor, startDate, newStartDate, endDate, newEndDate } = this.state;
        const { showEditButtons } = this.props;

        return (
            <div className='container-genInfo'>
                <div className='genInfo-header'>
                    <h2>Educational Experience</h2>
                </div>
                {editing ? (
                    <div className='genInfo-content'>
                        <div className='input-group'>
                            <label>Institution Name:</label>
                            <input className='input-field' placeholder='Enter your school name' type='text' value={newName} onChange={(e) => this.handleInputChange(e, 'newName')} />
                        </div>
                        <div className='input-group'>
                            <label>Major:</label>
                            <input className='input-field' placeholder='Enter your major' type='text' value={newMajor} onChange={(e) => this.handleInputChange(e, 'newMajor')} />
                        </div>
                        <div className='input-group'>
                            <label>Start Date:</label>
                            <input className='input-field' placeholder='Enter start date' type='text' value={newStartDate} onChange={(e) => this.handleInputChange(e, 'newStartDate')} />
                        </div>
                        <div className='input-group'>
                            <label>End Date:</label>
                            <input className='input-field' placeholder='Enter end date' type='text' value={newEndDate} onChange={(e) => this.handleInputChange(e, 'newEndDate')} />
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
                    <div className='genInfo-input'>
                        <div className='input-group'>
                            <label>Institution Name:</label>
                            <span className='input-value'>{schoolName}</span>
                        </div>
                        <div className='input-group'>
                            <label>Major:</label>
                            <span className='input-value'>{major}</span>
                        </div>
                        <div className='input-group'>
                            <label>Start Date:</label>
                            <span className='input-value'>{startDate}</span>
                        </div>
                        <div className='input-group'>
                            <label>End Date:</label>
                            <span className='input-value'>{endDate}</span>
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

export default EducationalExperience;
