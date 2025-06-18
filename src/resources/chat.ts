// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Chat extends APIResource {
  /**
   * Generate chat completions
   */
  generateCompletion(
    body: ChatGenerateCompletionParams,
    options?: RequestOptions,
  ): APIPromise<ChatGenerateCompletionResponse> {
    return this._client.post('/chat/completions', { body, ...options });
  }
}

export interface ChatGenerateCompletionResponse {
  id?: string;

  choices?: Array<ChatGenerateCompletionResponse.Choice>;

  created?: number;

  model?: string;

  object?: string;

  usage?: unknown;
}

export namespace ChatGenerateCompletionResponse {
  export interface Choice {
    finish_reason?: string;

    index?: number;

    message?: unknown;
  }
}

export interface ChatGenerateCompletionParams {
  messages: Array<ChatGenerateCompletionParams.Message>;

  model: string;

  max_tokens?: number;

  stream?: boolean;

  temperature?: number;

  tool_choice?: string;

  tools?: Array<unknown>;
}

export namespace ChatGenerateCompletionParams {
  export interface Message {
    content?: string;

    name?: string;

    role?: 'system' | 'user' | 'assistant' | 'tool';

    tool_calls?: Array<unknown>;
  }
}

export declare namespace Chat {
  export {
    type ChatGenerateCompletionResponse as ChatGenerateCompletionResponse,
    type ChatGenerateCompletionParams as ChatGenerateCompletionParams,
  };
}
