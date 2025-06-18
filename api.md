# Tensorbase

Types:

- <code><a href="./src/resources/top-level.ts">HealthCheckResponse</a></code>

Methods:

- <code title="get /">client.<a href="./src/index.ts">healthCheck</a>() -> HealthCheckResponse</code>

# Chat

Types:

- <code><a href="./src/resources/chat.ts">ChatGenerateCompletionResponse</a></code>

Methods:

- <code title="post /chat/completions">client.chat.<a href="./src/resources/chat.ts">generateCompletion</a>({ ...params }) -> ChatGenerateCompletionResponse</code>

# Images

Types:

- <code><a href="./src/resources/images.ts">ImageGenerateResponse</a></code>

Methods:

- <code title="post /v1/images/generations">client.images.<a href="./src/resources/images.ts">generate</a>({ ...params }) -> ImageGenerateResponse</code>

# Models

Types:

- <code><a href="./src/resources/models.ts">ModelRetrieveResponse</a></code>
- <code><a href="./src/resources/models.ts">ModelListResponse</a></code>

Methods:

- <code title="get /models/{model}">client.models.<a href="./src/resources/models.ts">retrieve</a>(model) -> ModelRetrieveResponse</code>
- <code title="get /models">client.models.<a href="./src/resources/models.ts">list</a>() -> ModelListResponse</code>
