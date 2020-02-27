
exports.min = function min (array) {
  if(!Array.isArray(array)||array.length==0){
    return 0;
  }
  return array.reduce((minNum, item) => (minNum>item)?item:minNum, Infinity);  
}

exports.max = function max (array) {
  if(!Array.isArray(array)||array.length==0){
    return 0;
  }
  return array.reduce((maxNum, item) => (maxNum<item)?item:maxNum, -Infinity);
}

exports.avg = function avg (array) {
  if(!Array.isArray(array)||array.length==0){
    return 0;
  }
  return array.reduce((sum, item) => sum + item, 0)/array.length;
}
