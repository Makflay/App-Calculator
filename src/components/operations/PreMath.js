import {Math} from './Math';

export function PreMath(preCalc, task) {
    console.log(task);
    let validFirstOperand = false;
    let firstOperand = "";
    let operator = "";
    let secondOperand = "";
    let result = [];
    //0. Проверяем pre на пустую строку и Делаем из строки массив
    let arr = task.split("");
    console.log(arr);
    if(preCalc === '') {
        //1. запускаем math с начала строки
        //1.2 Запускаем цикл по массиву.
        for(let key in arr){
            if(validFirstOperand === true){
                //пушим операнд 2
                secondOperand += arr[key];
            }
            else if(arr[key] === ".") {
                if(validFirstOperand === true){
                    //пушим операнд 2
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
        //1.3 Пушим 2 операнда и оператор
        // console.log('Пушим 2 операнда и оператор');
        // console.log('firstOperand ' + firstOperand);
        // console.log('operator ' + operator);
        // console.log('secondOperand ' + secondOperand);
        //1.4 Проверяем на наличие второго операнда
        if(secondOperand === ''){
            return result.join("");
        } else {
            Math(firstOperand, secondOperand, operator, result);
            //console.log('Result после Math: ' + result);
            return result.join("");
        }
    } else {
        console.log('Работаем с не пустым preCalc')
        //2. запускаем цикл с конца строки
        arr.reverse();
        // console.log('arr после reverse()');
        // console.log(arr);
        firstOperand = preCalc;
        for(let key in arr) {
            //2.1 При условии найденого операнда прерываем цикл
            if(isNaN(arr[key] - 1) === true) {
                operator += arr[key];
                break;
            }
            else if(arr[key] === ".") {
                secondOperand += arr[key];
            } else {
                //2.2 Пушим второй операнд
                secondOperand += arr[key];
            }
        }
        secondOperand = secondOperand.split("");
        secondOperand.reverse();
        secondOperand = secondOperand.join("");
        // console.log('firstOperand ' + firstOperand);
        // console.log('operator ' + operator);
        // console.log('secondOperand main ' + secondOperand);
        Math(firstOperand, secondOperand, operator, result);
        console.log('Result после Math: ' + result);
        return result.join("");
    }
}