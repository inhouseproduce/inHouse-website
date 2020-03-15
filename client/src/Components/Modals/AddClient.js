import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Modal, Button } from 'react-bootstrap';

// Forms
import Forms from '../Forms';

// Actions 
import { createClient } from '../../store/actions/create';

class Modals extends Component {
    state = {
        form: {}
    };

    handleInput = e => {
        let { name, value } = e.target;
        this.setState({
            ...this.state,
            form: {
                ...this.state.form,
                [name]: value
            }
        });
    };

    handleSubmit = () => {
        this.props.CreateNewClient(this.state.form);
        this.props.modalSwitch(); // Close modal
        this.setState({ form: {} }); // Empty form list
    };

    render() {
        return (
            <Modal show={this.props.state.add} onHide={this.props.modalSwitch}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Client</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Forms.AddClientForm handleInput={this.handleInput} />
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={this.props.modalSwitch} variant='secondary'>Close</Button>
                    <Button onClick={this.handleSubmit} variant='primary'>Save changes</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        CreateNewClient: e => dispatch(createClient(e))
    }
};

export default connect(null, mapDispatchToProps)(Modals);