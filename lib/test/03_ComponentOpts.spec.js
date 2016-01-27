import expect from 'expect';
import { ComponentOpts } from '../';

class SomeComponent extends ComponentOpts {}

describe('ComponentOpts class', () => {
  it('should have a "propTypes.opts" property', () => {
    expect(ComponentOpts.propTypes).toExist();
    expect(ComponentOpts.propTypes.opts).toExist();
  });

  it('instance should have a "opts" method', () => {
    const component = new ComponentOpts();
    expect(component.opts).toBeA('function');
  });
});

describe('Component extending ComponentOpts', () => {
  it('should have a "propTypes.opts" property', () => {
    expect(SomeComponent.propTypes).toExist();
    expect(SomeComponent.propTypes.opts).toExist();
  });

  it('instance should have a "opts" method', () => {
    const component = new SomeComponent();
    expect(component.opts).toBeA('function');
  });
});
