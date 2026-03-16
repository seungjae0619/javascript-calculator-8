import { Console } from "@woowacourse/mission-utils";
import { CALCULATOR_MESSAGE } from "./constants/constants.js";
import { extractDelimiter, parser } from "./utils/Parser.js";

class App {
  async run() {
    try {
      const input = await Console.readLineAsync(
        CALCULATOR_MESSAGE.START_MESSAGE,
      );

      const { delimiter, expression } = extractDelimiter(input);
      const numberArray = parser(delimiter, expression);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default App;
