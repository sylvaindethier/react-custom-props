var expect = require('expect');
var ComponentConf = require('../react-confprops').ComponentConf;

/**
 * SomeComponent extends ComponentConf
 */
function SomeComponent() {
  ComponentConf.apply(this, arguments);
}
SomeComponent.prototype = Object.create(ComponentConf.prototype);
SomeComponent.prototype.constructor = SomeComponent;
SomeComponent.propTypes = ComponentConf.propTypes;

describe('ComponentConf class', function() {
  it('should have a "propTypes.conf" property', function() {
    expect(ComponentConf.propTypes).toExist();
    expect(ComponentConf.propTypes.conf).toExist();
  });

  it('instance should have a "getConfProps" method ("conf" alias)', function() {
    var component = new ComponentConf();
    expect(component.getConfProps).toBeA('function');
    expect(component.conf).toBe(component.getConfProps);
  });
});

describe('Component extending ComponentConf', function() {
  it('should have a "propTypes.conf" property', function() {
    expect(SomeComponent.propTypes).toExist();
    expect(SomeComponent.propTypes.conf).toExist();
  });

  it('instance should have a "getConfProps" method ("conf" alias)', function() {
    var component = new SomeComponent();
    expect(component.getConfProps).toBeA('function');
    expect(component.conf).toBe(component.getConfProps);
  });
});
