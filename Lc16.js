var filter = function (arr, fn) {
  return arr.reduce((result, value, index) => {
    if (fn(value, index)) {
      result.push(value);
    }
    return result;
  }, []);
};
let arr = [2, 3, 10, 30, 40, 50, 30, 20];
console.log(filter(arr))
