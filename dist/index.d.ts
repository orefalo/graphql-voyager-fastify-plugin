/// <reference types="node" />
import type { FastifyPluginCallback } from 'fastify';
import { GraphQLVoyagerRenderOptions } from './graphql-voyager';
export interface GraphQLVoyagerFastifyPluginOptions extends GraphQLVoyagerRenderOptions {
    /**
     * URL to set as the server endpoint.
     *
     * By default is `/graphql`
     */
    endpointUrl?: string;
    /**
     * URL to be used as a base for relative URLs and hosting needed static files.
     *
     * By default is `/voyager/`
     */
    baseUrl?: string;
    /**
     * Path in which GraphQL Voyager will be accesible.
     *
     * By default is `/voyager`
     */
    path?: string;
}
declare const _default: FastifyPluginCallback<GraphQLVoyagerFastifyPluginOptions, import("http").Server>;
export default _default;
