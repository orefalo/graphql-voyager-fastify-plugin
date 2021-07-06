import type { FastifyPluginCallback } from 'fastify'
import fp from 'fastify-plugin'
import fastifyStatic from 'fastify-static'
import renderVoyagerPage, {
  GraphQLVoyagerRenderOptions,
} from './graphql-voyager'

export interface GraphQLVoyagerFastifyPluginOptions
  extends GraphQLVoyagerRenderOptions {
  /**
   * URL to set as the server endpoint.
   *
   * By default is `/graphql`
   */
  endpointUrl?: string
  /**
   * URL to be used as a base for relative URLs and hosting needed static files.
   *
   * By default is `/voyager/`
   */
  baseUrl?: string
  /**
   * Path in which GraphQL Voyager will be accesible.
   *
   * By default is `/voyager`
   */
  path?: string
}

const graphqlVoyagerFasitfyPlugin: FastifyPluginCallback<GraphQLVoyagerFastifyPluginOptions> =
  (
    fastify,
    {
      path = '/voyager',
      baseUrl = '/voyager/',
      endpointUrl = '/graphql',
      ...renderOptions
    } = {},
    done
  ) => {
    fastify.register(fastifyStatic, {
      //TODO
      root: '/dist',
      prefix: baseUrl,
    })

    const voyagerPage = renderVoyagerPage({
      baseUrl,
      endpointUrl,
      ...renderOptions,
    })

    fastify.get(path, (_req, res) => {
      res.type('text/html').send(voyagerPage)
    })

    done()
  }

export default fp(graphqlVoyagerFasitfyPlugin, {
  fastify: '>= 3.x',
  name: 'graphql-voyager-fastify-plugin',
})
