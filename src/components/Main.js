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
            haveResult: false,
            haveOperator: false
        }
        this.onEvent = this.onEvent.bind(this);
    }

    updatePre() {
        if(isFinite(PreMath(this.state.totalResult))) {
            this.setState({preResult: PreMath(this.state.totalResult)})
        } else {
            alert('Ошибка! Ввод некорректных данных');
            this.setState({preResult: "", totalResult: ""})
        }
    }

    onEvent = (action) => {
        //console.log(action);
        switch (action) {
            case "all_clear":
                this.setState({
                    totalResult: "",
                    preResult: "",
                    haveResult: false,
                    haveOperator: false
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
                } else if(this.state.preResult === '') {
                    alert('Перед вычесление процента необходимо добавить оператор.')
                } else {
                    this.setState({
                        totalResult: this.state.totalResult + action,
                        haveResult: false,
                    }, () => {
                        this.updatePre();
                    })
                }
                break;
            case "/":
                if(this.state.totalResult.length === 0 || this.state.totalResult === "-") {
                    alert('Вы не добавили цифру, чтобы использовать деление!');
                } else if(this.state.haveOperator === true) {
                    alert('Оператор уже добавлен! Сделаейте выражение, чтобы начать работу с другим оператором.')
                } else if(this.state.preResult !== '') {
                    this.setState({totalResult: this.state.preResult + action})
                } else {
                    this.setState({
                        totalResult: this.state.totalResult + action,
                        haveResult: false,
                        haveOperator: true
                    })
                }
                break;
            case "*":
                if(this.state.totalResult.length === 0 || this.state.totalResult === "-") {
                    alert('Вы не добавили цифру, чтобы использовать умножение!');
                } else if(this.state.haveOperator === true) {
                    alert('Оператор уже добавлен! Сделаейте выражение, чтобы начать работу с другим оператором.')
                } else if(this.state.preResult !== '') {
                    this.setState({totalResult: this.state.preResult + action})
                } else {
                    this.setState({
                        totalResult: this.state.totalResult + action,
                        haveResult: false,
                        haveOperator: true
                    })
                }
                break;
            case "+":
                if(this.state.totalResult.length === 0 || this.state.totalResult === "-") {
                    alert('Вы не добавили цифру, чтобы использовать сложение!');
                } else if(this.state.haveOperator === true) {
                    alert('Оператор уже добавлен! Сделаейте выражение, чтобы начать работу с другим оператором.')
                } else if(this.state.preResult !== '') {
                    this.setState({totalResult: this.state.preResult + action})
                } else {
                    this.setState({
                        totalResult: this.state.totalResult + action,
                        haveResult: false,
                        haveOperator: true
                    })
                }
                break;
            case "=":
            case "Enter":
                if(this.state.totalResult.length === 0 || this.state.totalResult === "-") {
                    alert('Вы не добавили цифру, чтобы использовать вычисление!');
                }  else {
                    this.setState({
                    //totalResult: PreMath(this.state.preResult, this.state.totalResult),
                        totalResult: this.state.preResult,
                        preResult: "",
                        haveResult: true,
                        haveOperator: false
                    })
                }
                break;
            case "-":
                if(this.state.haveOperator === true) {
                    alert('Оператор уже добавлен! Сделаейте выражение, чтобы начать работу с другим оператором.')
                } else if(this.state.preResult !== '') {
                    this.setState({totalResult: this.state.preResult + action})
                } else {
                    this.setState({totalResult: this.state.totalResult + action, haveResult: false, haveOperator: true })
                }
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
                        this.setState({totalResult: this.state.totalResult + action, haveResult: false, haveOperator: false}, () => {
                            this.updatePre();
                        })
                    })
                } else {
                    this.setState({totalResult: this.state.totalResult + action, haveResult: false, haveOperator: false}, () => {
                        this.updatePre();
                    });
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