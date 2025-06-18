// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Tensorbase from 'tensorbase';

const client = new Tensorbase({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource chat', () => {
  // skipped: tests are disabled for the time being
  test.skip('generateCompletion: only required params', async () => {
    const responsePromise = client.chat.generateCompletion({ messages: [{}], model: 'model' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('generateCompletion: required and optional params', async () => {
    const response = await client.chat.generateCompletion({
      messages: [{ content: 'content', name: 'name', role: 'system', tool_calls: [{}] }],
      model: 'model',
      max_tokens: 0,
      stream: true,
      temperature: 0,
      tool_choice: 'tool_choice',
      tools: [{}],
    });
  });
});
