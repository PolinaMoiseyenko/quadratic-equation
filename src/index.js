module.exports = function solveEquation(equation) {
  // your implementation
let newEq = equation.split(' ').join(''),
    equationArray = newEq.replace('x^2', '*').replace('x', '*').split('*');
if (equationArray[0] < 0 ) {
  equationArray[0] *= (-1);
  equationArray[2] *= (-1);
  equationArray[4] *= (-1);
};
const discriminant = equationArray[2]* equationArray[2] - 4 * equationArray[0] * equationArray[4],
      sqrtDiscriminant = Math.sqrt(Math.abs(discriminant)),
      x1 = (-equationArray[2] - sqrtDiscriminant)/(2 * equationArray[0]),
      x2 = (-equationArray[2] + sqrtDiscriminant)/(2 * equationArray[0]);
let newArr = [Math.round(parseFloat(x1)), Math.round(parseFloat(x2))];
if (equationArray[0] < 0)
return newArr.sort();
else return newArr;
}
