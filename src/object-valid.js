export default {
  // remove all the key which have value as a falsy data , except 0 .
  identify: _obj => {
    for (const key in _obj) {
      if (Object.hasOwnProperty.call(_obj, key)) {
        if (String(_obj[key]) !== "0" && !_obj[key]) {
          delete _obj[key];
        }
      }
    }
    return _obj;
  },
  // remove all the key which have value listed in 2nd array params . not work array, object .
  identifyCustomVal: (_obj, _arrayField = []) => {
    for (const key in _obj) {
      if (Object.hasOwnProperty.call(_obj, key)) {
        if (_arrayField.includes(_obj[key])) {
          delete _obj[key];
        }
      }
    }
    return _obj;
  },
};
