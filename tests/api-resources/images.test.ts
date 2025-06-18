// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Tensorbase from 'tensorbase';

const client = new Tensorbase({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource images', () => {
  // skipped: tests are disabled for the time being
  test.skip('generate: only required params', async () => {
    const responsePromise = client.images.generate({ model: 'model', prompt: 'prompt' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('generate: required and optional params', async () => {
    const response = await client.images.generate({
      model: 'model',
      prompt: 'prompt',
      n: 0,
      response_format: 'response_format',
      size: 'size',
    });
  });
});
