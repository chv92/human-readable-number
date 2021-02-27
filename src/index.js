module.exports = function toReadable(number) {
    let toTwenty = [zero, one, two, three, four, five, six, seven,
        eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen,
        seventeen, eighteen, nineteen,];
    let tens = [twenty, thirty, forty, fifty, sixty, seventy, eighty, ninety];
    let nigty = ['nine hundred ninety nine']
    let output = '';
    if (number <= 19) {
        output = toTwenty[number];
        return output;
    }
    if (number.length === 2) {
        for (let i = 0; i < number.length; i++) {
            number = number.toString();
            if (number[i + 1] === 0) {
                output = tens[number - 2];
            }
            else {
                output += output;
            }
        }
    }
    if (number.length === 3) {
        // number = number.toString();
        for (let i = 0; i < number.length; i++) {
            if (number[i + 1] === 0 && number[i + 2] === 0) {
                output = `${tens[number[i] - 2]} + 'hundret'`;

            }

            else {
                output += nigty[i];
            }
        }

        return output;

    }





}
