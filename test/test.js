const has = require('../index');

const expect = chai.expect;

describe('has()', () => {
  it('should return true when the property is present', () => {
    expect(has(Object.prototype, 'hasOwnProperty')).to.equal(true);
  });

  it('should return false when the property is not present', () => {
    expect(has({}, 'prop')).to.equal(false);
  });

  it('should return true when the property is present and the protype chain hasbeen altered', () => {
    const obj = { a: 1 };

    obj.hasOwnProperty = () => false;

    expect(has(obj, 'a')).to.equal(true);
  });

  it('should return false when the property is not present and the protype chain hasbeen altered', () => {
    const obj = {};

    obj.hasOwnProperty = () => true;

    expect(has(obj, 'd')).to.equal(false);
  });
});
