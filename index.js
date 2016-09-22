/**
 * Shortcut for Object.hasOwnProperty
 * @param {*} obj Object
 * @param {string} prop Property name
 * @returns {boolean}
 */
function hasProp(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = hasProp;
