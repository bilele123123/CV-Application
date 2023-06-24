import React, { Component } from 'react';

class SubmitButton extends Component {
    handleClick = () => {
        const { onToggleEditButtons } = this.props;
        onToggleEditButtons();
    };

    render() {
        const { showEditButtons } = this.props;

        return (
            <div className='container-submit'>
                <button className='submitBTN' onClick={this.handleClick}>
                    {showEditButtons ? 'Submit' : 'Edit'}
                </button>
            </div>
        );
    }
}

export default SubmitButton;
