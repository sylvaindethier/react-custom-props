import expect from 'expect';
import conf, {PropTypesConf, ComponentConf} from '../../ReactConfProps';

describe('module', () => {
  it('should expose a default function (conf)', () => {
    expect(conf).toBeA('function');
  });

  it('should expose a "PropTypesOpts" property', () => {
    expect(PropTypesConf).toNotBe(undefined);
  });

  it('should expose a "ComponentOpts" property', () => {
    expect(ComponentConf).toNotBe(undefined);
  });
});
