// closure = it is a JS that allows to retain outer variable value even after outher function is closed
// it is a JS function that rememnbers outer varaible even after the outer function is closed
function clo1() {
  function outer() {
    let count = 0;
    function inner() {
      count++;
      console.log(`count is ${count}`);
    }
    return inner;
  }
  let closure = outer();
  closure();
  closure();
}

function clo2() {
  function banking() {
    let balance = 10000;
    function addMoney(value) {
      balance = balance + value;
      return balance;
    }
    function withdraw(value) {
      balance = balance - value;
      return balance;
    }
    return { addMoney, withdraw };
  }
  let balanceData = banking();
  console.log(`i have balance`, balanceData.addMoney(10000));
  console.log(`i have balance`, balanceData.withdraw(5000));
}

clo2();
clo1();
