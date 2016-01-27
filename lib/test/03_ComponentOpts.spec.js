import expect from 'expect';
import {ComponentConf} from '../';

class SomeComponent extends ComponentConf {}

describe('ComponentConf class', () => {
  it('should have a "propTypes.conf" property', () => {
    expect(ComponentConf.propTypes).toExist();
    expect(ComponentConf.propTypes.conf).toExist();
  });

  it('instance should have a "conf" method', () => {
    const component = new ComponentConf();
    expect(component.conf).toBeA('function');
  });
});

describe('Component extending ComponentConf', () => {
  it('should have a "propTypes.conf" property', () => {
    expect(SomeComponent.propTypes).toExist();
    expect(SomeComponent.propTypes.conf).toExist();
  });

  it('instance should have a "conf" method', () => {
    const component = new SomeComponent();
    expect(component.conf).toBeA('function');
  });
});
