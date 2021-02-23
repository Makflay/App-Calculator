export function Math(a, b, operand, result) {
    // console.log('Что приходит в Math:');
    // console.log(a);
    // console.log(b);
    // console.log(operand);
    // console.log(result);
    //var something = 300; --> var percent = something*100/total
    //Y * (X / 100)
    let computation;
    switch (operand) {
        case "-":
            computation = Number(a) - Number(b);
            break;
        case "/":
            computation = Number(a) / Number(b);
            break;
        case "%":
            computation = Number(a) * (Number(b) / 100);
            break;
        case "*":
            computation = Number(a) * Number(b);
            break;
        default:
            computation = Number(a) + Number(b);
    }
    if(Number.isInteger(Number(computation)) === false) {
        //console.log('computation: ' + computation);
        return result.push(Number(computation).toFixed(2));
    } else {
        return result.push(computation);
    }
}