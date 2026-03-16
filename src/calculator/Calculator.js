import { extractDelimiter, parser } from "../utils/Parser.js";

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
  }

  calculate() {
    return this.#numbers.reduce((acc, cur) => acc + cur, 0);
  }
}
