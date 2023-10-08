const arr1 = [3, 2, 1];
const arr2 = [6, 5, 4];
function newArr() {
  [...arr1, ...arr2];
}
console.log(newArr);
