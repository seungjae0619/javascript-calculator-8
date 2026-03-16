import { REGEX } from "../constants/constants";

export function isNegative(number) {
  return number.some((value) => value < 0);
}

export function isNotNumber(number) {
  return number.some((value) => isNaN(value));
}

export function isInvalidFormat(string) {
  return !REGEX.CUSTOM_DELIMITER.test(string);
}
