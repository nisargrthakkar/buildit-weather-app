/**
 * @jest-environment node
 */

import fetch from 'fetch-mock';
import * as api from '../api';
import * as configuration from '../configuration';

const API_ROOT = 'https://rc.playven.com/api/';
const SIMPLE_ENDPOINT = '/endpoint';
const ERROR_ENDPOINT = '/cant/touch/this';
const PROTECTED_ENDPOINT = '/nothing/to/see/here';
const FAILING_ENDPOINT = '/broken';
const SIMPLE_RESPONSE = { foo: 'bar' };

describe('API', () => {
  beforeEach(() => {
    // jest 16 still breaks Promises...
    global.Promise = require.requireActual('promise');
    configuration.setConfiguration('API_ROOT', API_ROOT);
    fetch
      .mock(API_ROOT + SIMPLE_ENDPOINT, { status: 200, body: SIMPLE_RESPONSE })
      .mock(API_ROOT + ERROR_ENDPOINT, { status: 400, body: { message: 'errorEndpoint' } })
      .mock(API_ROOT + PROTECTED_ENDPOINT, { status: 403 })
      .mock(API_ROOT + FAILING_ENDPOINT, { status: 500 }); // don't specify body to test default message
  });

  afterEach(() => {
    fetch.restore();
    configuration.unsetConfiguration('API_ROOT');
  });

  // generate basic tests for basic HTTP methods
  for (const method of ['get', 'put', 'post', 'del']) {

    const body = { foo: 'bar' };

    // create a function that calls the corresponding method on the API module
    const apiMethod = method === 'put' || method === 'post'
      ? path => api[method](path, body, false)
      : path => api[method](path, false);

    describe(method, () => {
      it('should fetch() the given endpoint', async () => {
        await apiMethod(SIMPLE_ENDPOINT);
        expect(fetch.lastUrl()).toBe(`${API_ROOT}${SIMPLE_ENDPOINT}`);
      });

      if (method === 'put' || method === 'post') {
        it('should send the body for PUT and POST requests', async () => {
          await apiMethod(SIMPLE_ENDPOINT);
          expect(fetch.lastOptions().body).toBe(JSON.stringify(body));
        });
      }

      it('should return the response body when calling a valid JSON endpoint', async () => {
        expect(await apiMethod(SIMPLE_ENDPOINT)).toEqual({ status: 200, data: SIMPLE_RESPONSE });
        expect(fetch.called()).toBe(true);
      });
    });
  }

  describe('url', () => {
    it('generates a full url from a path using API_ROOT configuration value', async () => {
      expect(api.url('foobar')).toEqual(API_ROOT + '/foobar');
    });

    it('generates a full url with leading forward slash', async () => {
      expect(api.url('/foobar')).toEqual(API_ROOT + '/foobar');
    });
  });
});

async function getError(thunk) {
  try {
    await thunk();
    return null;
  } catch (e) {
    return e;
  }
}
