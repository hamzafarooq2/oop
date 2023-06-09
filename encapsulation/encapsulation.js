//  We refer this kind of implementation as procedural
//  programming, because we have varibales on one side
// and functions on other side, they are decoupled. issue(
//  function have so many parameters)

let baseSalary = 30000;
let overtime = 10;
let rate = 20;

function getWage(baseSalary, overtime, rate) {
  return baseSalary + overtime * rate;
}

// Now this is object oriented programming, this is
// better beacause, look wage function have no parameters
// functions with fewer parameter is easy to maintain

let employee = {
  baseSalary: 30000,
  overtime: 10,
  rate: 20,
  getWage: function () {
    return this.baseSalary + this.overtime * this.rate;
  },
};
