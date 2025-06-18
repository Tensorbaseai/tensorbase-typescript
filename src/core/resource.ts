// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Tensorbase } from '../client';

export abstract class APIResource {
  protected _client: Tensorbase;

  constructor(client: Tensorbase) {
    this._client = client;
  }
}
