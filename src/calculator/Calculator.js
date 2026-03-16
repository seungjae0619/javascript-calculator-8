import { ERROR_MESSAGE } from "../constants/constants.js";
import { extractDelimiter, parser } from "../utils/Parser.js";
import { isNegative } from "../utils/Validator.js";

export class Calculator {
  #input;
  #numbers;

  constructor(input) {
    this.#input = input;
    this.#initialize();
  }

  #initialize() {
    const { delimiter, expression } = extractDelimiter(this.#input);
    this.#numbers = parser(delimiter, expression);
    if (isNegative(this.#numbers)) {
      throw new Error(ERROR_MESSAGE.INVALID_NEGATIVE);
    }
  }

  calculate() {
    return this.#numbers.reduce((acc, cur) => acc + cur, 0);
  }
}
