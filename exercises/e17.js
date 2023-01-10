export function minBy(array, cb) {
  let minimum = Infinity;
  let index;
  for (let element of array) {
    if (cb(element) < minimum) {
      minimum  = cb(element);
      index = array.indexOf(element);
    } 
  }
  return array[index];
}

export function maxBy(array, cb) {
  let maximum = -Infinity;
  let index;
  for (let element of array) {
    if (cb(element) > maximum) {
      maximum  = cb(element);
      index = array.indexOf(element);
    } 
  }
  return array[index];
}

