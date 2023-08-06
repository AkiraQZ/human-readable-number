module.exports = function toReadable (num) {
    const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const thousands = ['', 'thousand', 'million', 'billion', 'trillion'];


    if (num === 0) {
        return 'zero';
    }

function convert(number) {
    let chunk = '';
    if (number >= 100) {
        chunk += units[Math.floor(number / 100)] + ' hundred ';
        number %= 100;
    }
    if (number >= 20) {
        chunk += tens[Math.floor(number / 10)] + ' ';
        number %= 10;
    }
    if (number >= 10) {
        chunk += teens[number - 10] + ' ';
        number = 0;
    }
    if (number > 0) {
        chunk += units[number] + ' ';
    }
    return chunk;
}

return convert(num).trim()

}
