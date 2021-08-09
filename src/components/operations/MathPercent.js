export function MathPercent(a, b, operand, result) {
    // console.log('What comes in MathPercent:');
    // console.log('a: ' + a);
    // console.log('b: ' + b);
    // console.log('operand: ' + operand);
    let computation;
    switch (operand) {
        case "+":
            computation = Number(a) * (Number(b) / 100);
            computation = Number(a) + Number(computation);
            break;
        default:
            computation = Number(a) * (Number(b) / 100);
    }
    if(Number.isInteger(Number(computation)) === false) {
        return result.push(Number(computation).toFixed(2));
    } else {
        return result.push(computation);
    }
}