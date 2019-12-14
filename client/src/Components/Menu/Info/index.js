import React, { Component } from 'react';
import { Input } from 'antd';

class Info extends Component {
    constructor(props){
        super(props);

        this.state={};

        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(e){
        let { name, value } = e.target;
        this.setState({
            ...this.state,
            [this.props.name]: {
                ...this.state[this.props.name],
                [name]: value
            }
        }, () => {
            this.props.handleInput(this.state);
        });
    }

    render() {
        return (
            <div>
                <Input placeholder='Client Name' name='client_name' className='my-1'
                    onChange={this.handleInput}/>

                <Input placeholder='Client Location' name='client_location' className='my-1'
                    onChange={this.handleInput} />
            </div>
        );
    };
};

export default Info;