


//-----------------------------------------------------------------------------------------------------------------------------
module.exports.to_snake_case = function(key) {
  return key.replace(/[^a-zA-Z0-9]/g, '_').toLowerCase();
}

//-----------------------------------------------------------------------------------------------------------------------------
module.exports.toCamelCase = function(key) {
  var parts = key.split(/[^a-zA-Z0-9]/);
  var first = parts.shift();
  return parts.reduce(function(s, part) {
    return s + toUpperWord(part);
  }, first);
}

//-----------------------------------------------------------------------------------------------------------------------------
/**
 * Returns the word with the first char uppercased.
 *
 * @param {*} str
 */
const toUpperWord = module.exports.toUpperWord = function(s) {
  if (s.length === 0) { return s; }

  return s[0].toUpperCase() + s.substring(1);
}

//-----------------------------------------------------------------------------------------------------------------------------
/**
 * Returns the word with the first char lowercased.
 *
 * @param {*} s
 */
const toLowerWord = module.exports.toLowerWord = function(s) {
  if (s.length === 0) { return s; }

  return s[0].toLowerCase() + s.substring(1);
};

//-----------------------------------------------------------------------------------------------------------------------------
/**
 * Split on newline for both *nix and Windows.
 *
 * @param {*} string
 * @returns
 */
module.exports.splitLn = function(string) {
  return string.split(/\r?\n/g);
};

// //-----------------------------------------------------------------------------------------------------------------------------
// /**
//  * Returns the word with the first char uppercased.
//  *
//  * @param {*} str
//  */
// module.exports.toUpperWord = function(str) {
//   return str[0].toUpperCase() + sg.rest(str).join('');
// };

//-----------------------------------------------------------------------------------------------------------------------------
/**
 * Returns if the string or char is lower case.
 *
 * @param {*} str
 * @returns
 */
module.exports.isLowerCase = function(str) {
  return str === str.toLowerCase();
};

//-----------------------------------------------------------------------------------------------------------------------------
/**
 * Returns if the string or char is upper case.
 *
 * @param {*} str
 * @returns
 */
module.exports.isUpperCase = function(str) {
  return str === str.toUpperCase();
};

//-----------------------------------------------------------------------------------------------------------------------------
/**
 * Returns true if the string startsWith any of the strings in the Array.
 *
 * @param {*} str   - The string to test.
 * @param {*} arr   - The list of strings.
 *
 * @returns {boolean} - true if the string starts with any of the items in the `arr`
 */
module.exports.startsWithOneOf = function(str, arr) {
  for (let s of arr) {
    if (str.startsWith(s)) {
      return true;
    }
  }

  return false;
};

// --------------------------------------------------------------------------------------------------------------------
/**
 * Splits the string as normal, but only makes `count` splits.
 *
 * @param str
 * @param count
 * @param sep
 */
module.exports.splitN = function (str, count, sep = '/') {
  let result = [];
  let rest =  str.split(sep);
  let item;

  while (result.length < count && (rest.length > 0)) {
    [item, ...rest] = rest;
    result = [...result, item];
  }

  return [result, rest.join(sep)];
};


// --------------------------------------------------------------------------------------------------------------------
module.exports.lastOf = function (str, sep) {
  const parts = str.split(sep);
  if (parts.length > 1) {
    return parts[parts.length - 1];
  }
}

// --------------------------------------------------------------------------------------------------------------------
module.exports.pad = function(x, len, ch_ =null) {
  const ch = (ch_ !== null) ? ch_ : (typeof x === 'number') ? '0' : ' ';

  let result = ''+x;
  while (result.length < len) {
    result = ch + result;
  }

  return result;
}

