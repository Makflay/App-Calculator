import React, { Component } from 'react';

class CalcField extends Component {
    constructor(props) {
        super(props)
        this.state = {
            disabledInput: true
        }
    }
    render() {
        let {totalResult} = this.props;
        let {preResult} = this.props;
        return (
            <div className='calc-control form-group'>
                <input className='result' type="text" disabled={this.state.disabledInput} defaultValue={totalResult}></input>
                <input className='preResult' disabled={this.state.disabledInput} defaultValue={preResult}></input>
            </div>
        )
    }
}

export default CalcField;