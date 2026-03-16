import { ERROR_MESSAGE } from "../constants/constants.js";
import { extractDelimiter, parser } from "../utils/Parser.js";
import { isNegative, isNotNumber } from "../utils/Validator.js";

export class Calculator {
  #input;
  #numbers;

  constructor(input) {
    this.#input = input;
    this.#initialize();
  }

  #initialize() {
    if (!isInvalidFormat(input)) {
      throw new Error(ERROR_MESSAGE.ERR_INVALD_FORMAT);
    }

    const { delimiter, expression } = extractDelimiter(this.#input);

    this.#numbers = parser(delimiter, expression);

    if (isNegative(this.#numbers)) {
      throw new Error(ERROR_MESSAGE.ERR_NEGATIVE);
    } else if (isNotNumber(this.#numbers)) {
      throw new Error(ERROR_MESSAGE.ERR_NOT_NUMBER);
    }
  }

  calculate() {
    return this.#numbers.reduce((acc, cur) => acc + cur, 0);
  }
}
