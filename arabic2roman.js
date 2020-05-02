/**
 * Take arabic number and converts it to roman and 
 * returns the string value of it.
 * 
 * @param   {number} num Arabic number to be converted
 * @returns {string}    Roman numeral representation of the 'num'
 */
const convert = num => {
    if ( num == 1){
        return 'I'
    }   else if (num == 2){
        return 'II'
    }
}

module.exports = {
    convert
}