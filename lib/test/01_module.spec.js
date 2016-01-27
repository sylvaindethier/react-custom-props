import expect from 'expect';
import conf, {PropTypesConf, ComponentConf} from '../';

describe('module', () => {
  it('should expose a default function (conf)', () => {
    expect(conf).toBeA('function');
  });

  it('should expose a "PropTypesConf" property', () => {
    expect(PropTypesConf).toNotBe(undefined);
  });

  it('should expose a "ComponentConf" property', () => {
    expect(ComponentConf).toNotBe(undefined);
  });
});
