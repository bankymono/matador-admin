module.exports.numberWithComma = function(x) {
    return x?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

// Convert a number to a string with commas taking into account decimal point
// export default function numberWithCommasDecimal(x) {
//     return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
// }