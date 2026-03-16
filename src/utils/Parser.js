import { ERROR_MESSAGE } from "../constants/constants";
import { isInvalidFormat } from "./Validator";

export function extractDelimiter(input) {
  if (input.startsWith("//")) {
    const delimiter = input.split("\\n")[0].slice(2);
    const expression = input.split("\\n")[1];

    return {
      delimiter,
      expression,
    };
  }
  return {
    delimiter: /[,:]/,
    expression: input,
  };
}

export function parser(delimiter, expression) {
  return expression.split(delimiter).map(Number);
}
