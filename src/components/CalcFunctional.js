import React, { Component } from 'react';

class CalcFunctional extends Component {
    componentDidMount() {
        document.addEventListener("keydown", (e) => {
            //console.log(e.key);
            this.props.componentDidMount(e.key)
        })
    }
    render() {
        return (
            <div className='calculator-functional'>
                <button type="button" className="all-clear btn btn-sm" value="all_clear" onClick={e => this.props.onClick(e.target.value)}>AC</button>
                <button type="button" className="operator btn btn-light waves-effect" value="del_symbol" onClick={e => this.props.onClick(e.target.value)}>&#9003;</button>
                <button type="button" className="operator btn btn-light waves-effect" value="%" onClick={e => this.props.onClick(e.target.value)}>%</button>
                <button type="button" className="operator-right btn btn-light waves-effect" value="/" onClick={e => this.props.onClick(e.target.value)}>&divide;</button>

                <button type="button" className="btn btn-light waves-effect" value="7" onClick={e => this.props.onClick(e.target.value)}>7</button>
                <button type="button" className="btn btn-light waves-effect" value="8" onClick={e => this.props.onClick(e.target.value)}>8</button>
                <button type="button" className="btn btn-light waves-effect" value="9" onClick={e => this.props.onClick(e.target.value)}>9</button>
                <button type="button" className="operator-right btn btn-light waves-effect" value="*" onClick={e => this.props.onClick(e.target.value)}>&times;</button>
    
                <button type="button" className="btn btn-light waves-effect" value="4" onClick={e => this.props.onClick(e.target.value)}>4</button>
                <button type="button" className="btn btn-light waves-effect" value="5" onClick={e => this.props.onClick(e.target.value)}>5</button>
                <button type="button" className="btn btn-light waves-effect" value="6" onClick={e => this.props.onClick(e.target.value)}>6</button>
                <button type="button" className="operator-right btn btn-light waves-effect" value="-" onClick={e => this.props.onClick(e.target.value)}>-</button>
    
                <button type="button" className="btn btn-light waves-effect" value="1" onClick={e => this.props.onClick(e.target.value)}>1</button>
                <button type="button" className="btn btn-light waves-effect" value="2" onClick={e => this.props.onClick(e.target.value)}>2</button>
                <button type="button" className="btn btn-light waves-effect" value="3" onClick={e => this.props.onClick(e.target.value)}>3</button>
                <button type="button" className="operator-right btn btn-light waves-effect" value="+" onClick={e => this.props.onClick(e.target.value)}>+</button>
    
                <button type="button" className="btn btn-light waves-effect" value="." onClick={e => this.props.onClick(e.target.value)}>.</button>
                <button type="button" className="btn btn-light waves-effect" value="0" onClick={e => this.props.onClick(e.target.value)}>0</button>
                <button type="button" className="equal btn btn btn-info" value="=" onClick={e => this.props.onClick(e.target.value)}>=</button>
            </div>
        )
    }
}

export default CalcFunctional;