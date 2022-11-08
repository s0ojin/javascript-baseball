const MissionUtils = require('@woowacourse/mission-utils');
const InputValidation = require('./utils/InputValidation');
const CompareNumber = require('./utils/CompareNumber');

class App {
  constructor() {
    this.InputValidation = new InputValidation();
    this.printGreeting();
  }

  printGreeting() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.getUserNumber();
  }

  makeRandomNumber() {
    let randomNumSet = new Set();
    while (true) {
      randomNumSet.add(MissionUtils.Random.pickNumberInRange(1, 9));
      if (randomNumSet.size === 3) {
        break;
      }
    }
    return Array.from(randomNumSet);
  }

  getUserNumber() {
    let userNumber = [];
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', answer => {
      if (this.InputValidation.isValidInput(answer)) {
        userNumber = answer.split('');
        this.printResult(this.makeRandomNumber(), userNumber);
      }
    });
  }

  printResult(computerNumber, userNumber) {
    const [strike, ball, nothing] = CompareNumber(computerNumber, userNumber);
    console.log(strike, ball, nothing);
  }
}

new App();

module.exports = App;
