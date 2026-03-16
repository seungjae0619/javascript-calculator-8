import { Console } from "@woowacourse/mission-utils";
import { CALCULATOR_MESSAGE } from "./constants/constants.js";
import { Calculator } from "./calculator/Calculator.js";

class App {
  async run() {
    try {
      const input = await Console.readLineAsync(
        CALCULATOR_MESSAGE.START_MESSAGE,
      );

      const calculator = new Calculator(input);

      const result = calculator.calculate();

      Console.print(`${CALCULATOR_MESSAGE.RESULT_MESSAGE}${result}`);
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default App;
