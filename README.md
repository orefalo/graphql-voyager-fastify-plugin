# graphql-voyager-fastify-plugin

This is a [**Fastify Plugin**](https://www.fastify.io/docs/master/Plugins/) for hosting an instance of **GraphQL Voyager**, with support for **TypeScript**, and tested for **Fastify v3**.

## Install

```sh
pnpm install graphql-voyager-fastify-plugin
```

## Usage

```ts
import fastify from 'fastify'
import GraphQLVoyagerFastify from 'graphql-voyager-fastify-plugin'

const app = fastify()

// ...

app.register(GraphQLVoyagerFastify, {
  /**
   * All these are the defaults.
   */
  path: '/voyager',
  baseURL: '/voyager/',
  endpointURL: '/graphql',
});

// ...

// Voyager available at localhost:3000/voyager
app.listen(3000);
```

## References

Heavily based on [Altair](https://github.com/altair-graphql/altair) Fastify Plugin and this [repo by bdatdo0601](https://github.com/bdatdo0601/graphql-api-starter/blob/master/src/plugins/voyager/index.js)
