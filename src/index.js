// VendingMachine {
// 	IceAmericanoCount,
//   hotAmericanoCount,
//   todos
// }

// class VendingMachine {
// 	iceAmericanoCount;
// 	hotAmericanoCount;
// 	todos;
// }

/**
 * 자판기 객체를 생성하는 함수
 * @constructor
 * @param {number} IceAmericanoCount - 가지고 있는 아이스 아메리카노 갯수
 * @param {number} hotAmericanoCount - 가지고 있는 따듯한 아메리카노 갯수
 */
function VendingMachine(iceAmericanoCount, hotAmericanoCount) {
  /** @member {number} iceAmericanoCount 차가운 아메리카노의 갯수 */
  this.iceAmericanoCount;
  /** @member {number} hotAmericanoCount 따듯한 아메리카노의 갯수 */
  this.hotAmericanoCount;
  /** @member {Array} todos 로그들이 저장되는 배열*/
  this.todos;
}

/**
 * 금액을 넣으면 아메리카노를 구입하는 로그를 볼 수 있다.
 * @param {number} inputMoney - 자판기에 투입한 금액
 * @return {boolean} Always returns false.
 */
VendingMachine.prototype.getItem = function (inputMoney) {};

/**
 * 자판기에 아메리카노를 추가하는 메서드
 * @param {string} americanoType - 자판기에 투입한 금액
 * @param {number} inputCount - 추가하는 상품의 갯수
 * @return {boolean} Always returns false.
 */
VendingMachine.prototype.addItem = function (americanoType, inputCount) {};
