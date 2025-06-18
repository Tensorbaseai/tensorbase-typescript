// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Models extends APIResource {
  /**
   * Get model details
   */
  retrieve(model: string, options?: RequestOptions): APIPromise<ModelRetrieveResponse> {
    return this._client.get(path`/models/${model}`, options);
  }

  /**
   * List all models
   */
  list(options?: RequestOptions): APIPromise<ModelListResponse> {
    return this._client.get('/models', options);
  }
}

export interface ModelRetrieveResponse {
  data?: unknown;
}

export interface ModelListResponse {
  data?: Array<ModelListResponse.Data>;

  object?: string;
}

export namespace ModelListResponse {
  export interface Data {
    id?: string;

    input_token_price?: number;

    is_active?: boolean;

    name?: string;

    object?: string;

    output_token_price?: number;
  }
}

export declare namespace Models {
  export { type ModelRetrieveResponse as ModelRetrieveResponse, type ModelListResponse as ModelListResponse };
}
