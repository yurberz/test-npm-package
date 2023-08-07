"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumOfNumbers = void 0;
function sumOfNumbers(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}
exports.sumOfNumbers = sumOfNumbers;
