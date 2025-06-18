// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Images extends APIResource {
  /**
   * Generate images from text
   */
  generate(body: ImageGenerateParams, options?: RequestOptions): APIPromise<ImageGenerateResponse> {
    return this._client.post('/v1/images/generations', { body, ...options });
  }
}

export interface ImageGenerateResponse {
  created?: number;

  data?: Array<ImageGenerateResponse.Data>;
}

export namespace ImageGenerateResponse {
  export interface Data {
    url?: string;
  }
}

export interface ImageGenerateParams {
  model: string;

  prompt: string;

  n?: number;

  response_format?: string;

  size?: string;
}

export declare namespace Images {
  export {
    type ImageGenerateResponse as ImageGenerateResponse,
    type ImageGenerateParams as ImageGenerateParams,
  };
}
