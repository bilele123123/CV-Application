import React, { Component } from 'react';
import EducationalExperience from './EducationalExperience';
import GeneralInfo from './GeneralInfo';
import PracticalExperience from './PracticalExperience';
import SubmitButton from './SubmitButton';

class CVApplication extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showEditButtons: true
        };
    }

    handleToggleEditButtons = () => {
        this.setState((prevState) => ({
            showEditButtons: !prevState.showEditButtons
        }));
    }

    render() {
        const { showEditButtons } = this.state;

        return (
            <div>
                <GeneralInfo showEditButtons={showEditButtons} />
                <div class="divider"></div>
                <EducationalExperience showEditButtons={showEditButtons} />
                <div class="divider"></div>
                <PracticalExperience showEditButtons={showEditButtons} />
                <div class="divider"></div>
                <SubmitButton
                    showEditButtons={showEditButtons}
                    onToggleEditButtons={this.handleToggleEditButtons}
                />
            </div>
        );
    }
}

export default CVApplication;
