import { expect } from '@open-wc/testing';

import { apiCall } from '../src/common/utils';

describe('apiCall', () => {
  it('should return parsed json when called against correct api absolute api url', async function() {
    const data = await apiCall('https://swapi.co/api/films/1');
    expect(data).to.have.property('title');
  });

  it('should return parsed json when called against correct partial api url', async function() {
    const data = await apiCall('/films/1');
    expect(data).to.have.property('title');
  });

  it('should throw error response when called against incorrect api url', async function() {
    let errorResponse;
    try {
      await apiCall('/hello-world');
    } catch (error) {
      errorResponse = error;
    }
    expect(errorResponse).to.be.an.instanceof(Response);
  });
});
