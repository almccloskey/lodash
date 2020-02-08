const _ = {
  clamp(number, lower, upper){
    let lowerClampedValue = Math.max(number, lower);
    let clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  },
  inRange(number, start, end){
    if (end === undefined) {
      end = start;
      start = 0
    } if (start > end) {
      let temp = end;
      end = start;
      start = temp;
    }
    const isInRange = start <= number && number < end
    return isInRange
  },
  words(string){
    let stringArr = string.split(' ')
    return stringArr
  },
   pad(string, length){
    if (length <= string.length){
      return string
    };
    let padStart = Math.floor((length - string.length) / 2);
    let padEnd = length - (string.length + padStart);
    let newString = `${' '.repeat(padStart)}${string}${' '.repeat(padEnd)}` 
    return newString
  },
  has(object, key){
    const hasValue = object[key];
      if (hasValue !== undefined) {
        return true
      } return false;
    return hasValue  
  },
  invert(object){
    let invertedObject = {};
    for (let key in object) {
      const originalValue = object[key];
      invertedObject = {originalValue : key}
    };
    return invertedObject;
  },
  findKey(object, predicate){
    for (let key in object) {
      const value = object[key];
      const predicateReturnValue = predicate(value);
      if (predicateReturnValue === true){
        return key
      }
    }
    return undefined;
  },
  drop(array, n){
    if (n === undefined){
      n = 1
    }
    let newArray = array.slice(n)
    return newArray
  },
  dropWhile(array, predicate){
  	let dropNumber = array.findIndex((el, idx) => {
  		return !predicate(el, idx, array);
  	});
  	let droppedArray = this.drop(array, dropNumber)
  	return droppedArray
  },
  chunk(array, size){
  	if(size === undefined){
  		size = 1
  	};
  	let finalArray = [];
  	for (var i = 0; i < array.length; i += size) {
  		let arrayChunk = array.slice(i, i + size);
  		finalArray.push(arrayChunk);
  	}
  	return finalArray
  },
}




// Do not write or modify code below this line.
module.exports = _;
