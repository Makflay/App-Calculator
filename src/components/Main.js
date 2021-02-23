import React, { Component } from 'react';
import CalcField from './CalcField';
import CalcFunctional from './CalcFunctional';
import {PreMath} from './operations/PreMath';

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            totalResult: "",
            preResult: "",
            update: false,
            haveResult: false
        }
        this.onEvent = this.onEvent.bind(this);
    }

    componentDidMount() {
        this.timerID = setTimeout(
            () => this.updatePre(),
            6000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    updatePre() {
        console.log(this.state.update)
        if(this.state.update === false) {
            console.log('оставляем старые данные');
        } else {
            if(isFinite(PreMath(this.state.preResult, this.state.totalResult)) || PreMath(this.state.preResult, this.state.totalResult) !== NaN) {
                this.setState({preResult: PreMath(this.state.preResult, this.state.totalResult), update: false})
            } else {
                alert('Ошибка! Ввод некорректных данных');
                this.setState({preResult: "", totalResult: "", update: false})
            }
        }
    }

    onEvent = (action) => {
        console.log(action);
        switch (action) {
            case "all_clear":
                this.setState({
                    totalResult: "",
                    preResult: "",
                    update: false,
                    haveResult: false
                })
                break;
            case "del_symbol":
            case "Backspace":
            case "Delete":
                if(this.state.totalResult.length === 0) {
                    alert('Список операндов пуст, нечего удалять!');
                } else {
                    this.delSymbol();
                }
                break;
            case "%":
                if(this.state.totalResult.length === 0 || this.state.totalResult === "-") {
                    alert('Вы не добавили цифру, чтобы использовать вычисление процента!');
                } else {
                    this.setState({
                        totalResult: this.state.totalResult + action,
                        update: false,
                        haveResult: false
                    })
                }
                break;
            case "/":
                if(this.state.totalResult.length === 0 || this.state.totalResult === "-") {
                    alert('Вы не добавили цифру, чтобы использовать деление!');
                } else {
                    this.setState({
                        totalResult: this.state.totalResult + action,
                        update: false,
                        haveResult: false
                    })
                }
                break;
            case "*":
                if(this.state.totalResult.length === 0 || this.state.totalResult === "-") {
                    alert('Вы не добавили цифру, чтобы использовать умножение!');
                } else {
                    this.setState({
                        totalResult: this.state.totalResult + action,
                        update: false,
                        haveResult: false
                    })
                }
                break;
            case "+":
                if(this.state.totalResult.length === 0 || this.state.totalResult === "-") {
                    alert('Вы не добавили цифру, чтобы использовать сложение!');
                } else {
                    this.setState({
                        totalResult: this.state.totalResult + action,
                        update: false,
                        haveResult: false
                    })
                }
                break;
            case "=":
            case "Enter":
                if(this.state.totalResult.length === 0 || this.state.totalResult === "-") {
                    alert('Вы не добавили цифру, чтобы использовать вычисление!');
                } else {
                    if(isFinite(PreMath('', this.state.totalResult)) && PreMath('', this.state.totalResult) !== NaN && isFinite(PreMath(this.state.preResult, this.state.totalResult)) && PreMath(this.state.preResult, this.state.totalResult) !== NaN) {
                        console.log(PreMath(this.state.preResult, this.state.totalResult) === NaN);
                        console.log('if work!')
                        this.setState({totalResult: PreMath('', this.state.totalResult), update: false, haveResult: true, preResult: ""})
                    } else {
                        alert('Ошибка! Ввод некорректных данных');
                        this.setState({preResult: "", totalResult: "", update: false})
                    }
                }
                //     this.setState({
                //     //totalResult: PreMath(this.state.preResult, this.state.totalResult),
                //         totalResult: this.state.preResult,
                //         preResult: "",
                //         update: false,
                //         haveResult: true
                //     })
                // }
                break;
            case "-":
                this.setState({totalResult: this.state.totalResult + action, haveResult: false })
                break;
            case ".":
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
                if(this.state.haveResult === true) {
                    this.setState({
                        totalResult: "",
                        preResult: "",
                    }, () => {
                        this.setState({totalResult: this.state.totalResult + action, haveResult: false })
                    })
                } else {
                    this.setState({totalResult: this.state.totalResult + action, update: true, haveResult: false});
                    this.componentDidMount();
                }
                break;
            default:
                break;
        }
    }
    delSymbol = () => {
        let arr = this.state.totalResult.split("");
        arr.splice(arr.length - 1, arr.length);
        this.setState({
            totalResult: arr.join(""),
            update: false
        })
    }

    render() {
        return (
            <div className="calculator-body">
                <CalcField totalResult={this.state.totalResult} preResult={this.state.preResult} />
                <CalcFunctional onClick={this.onEvent} componentDidMount={this.onEvent} />
            </div>
        );
    }
}

export default Main;