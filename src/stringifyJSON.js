// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function (obj) {
  // your code goes here

  if (typeof obj === 'string') {
    return "\"" + obj + "\"";
  } else if (typeof obj === 'function' || typeof obj === 'undefined') {
    return undefined;
  } else if (typeof obj === 'number' || typeof obj === 'boolean' || typeof obj === null) {
    return String(obj);
  }

  if (obj === null) {
    return String(obj);
  }

  if (Array.isArray(obj)) {
    var arr = [];
    for (var i = 0; i < obj.length; i++) {
      if (stringifyJSON(obj[i]) === undefined) {
        arr.push('null');
      } else {
        arr.push(stringifyJSON(obj[i]))
      }
    }
    return '[' + arr + ']';
  } else {
    var str = '';
    for (var key in obj) {
      if (str !== '') {
        str += ",";
      }

      if (stringifyJSON(obj[key]) !== undefined) {
        str += stringifyJSON(key) + ":" + stringifyJSON(obj[key]);
      }
    }
    return "{" + str + "}";
  }
};