export function Math(a, b, operand, result) {
    // console.log('What comes in Math:');
    // console.log('a: ' + a);
    // console.log('b: ' + b);
    // console.log('operand: ' + operand);
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
        return result.push(Number(computation).toFixed(2));
    } else {
        return result.push(computation);
    }
}