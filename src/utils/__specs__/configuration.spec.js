/**
 * @jest-environment node
 */

import * as config from '../configuration';

describe('Configuration', () => {
  it('Manage Configuration', () => {
    config.setConfiguration('configItem1', 'value1');
    config.setConfiguration('configItem2', 'value2');
    config.getConfiguration('configItem2');
    config.unsetConfiguration('configItem2');
    let properties = [{ configItem: 'Value3' }, { configItem: 'Value5' }];
    config.setAll(properties);
  });
  expect(() => { config.getConfiguration('configItem2'); }).toThrow();
});
