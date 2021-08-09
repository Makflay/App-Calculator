import {Math} from './Math';
import {MathPercent} from './MathPercent';

export function PreMath(task) {
    let validFirstOperand = false;
    let firstOperand = "";
    let operator = "";
    let secondOperand = "";
    let percent = false;
    let result = [];
    let arr = task.split("");
    if(arr.indexOf("%") !== -1) {
        percent = true;
        arr.pop();
    }
    for(let key in arr){
        if(validFirstOperand === true){
            secondOperand += arr[key];
        }
        else if(arr[key] === ".") {
            if(validFirstOperand === true){
                secondOperand += arr[key];
            } else {
                firstOperand += arr[key];
            }
        }
        else if(isNaN(arr[key] - 1) === true) {
            validFirstOperand = true;
            operator += arr[key];
        } else {
            firstOperand += arr[key];
        }
    }
    if(secondOperand === ''){
        return result.join("");
    } else if(percent === true) {
        MathPercent(firstOperand, secondOperand, operator, result);
        return result.join("");
    } else {
        Math(firstOperand, secondOperand, operator, result);
        return result.join("");
    }
}