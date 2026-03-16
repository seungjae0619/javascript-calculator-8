import { Console } from "@woowacourse/mission-utils";
import { CALCULATOR_MESSAGE } from "./constants/constants.js";

class App {
  async run() {
    try {
      const stringInput = await Console.readLineAsync(
        CALCULATOR_MESSAGE.START_MESSAGE,
      );
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default App;
