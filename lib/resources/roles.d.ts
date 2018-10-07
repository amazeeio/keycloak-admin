import Resource from './resource';
import RoleRepresentation from '../defs/roleRepresentation';
import { KeycloakAdminClient } from '../client';
export declare class Roles extends Resource<{
    realm?: string;
}> {
    find: (payload?: void & {
        realm?: string;
    }) => Promise<RoleRepresentation[]>;
    create: (payload?: RoleRepresentation & {
        realm?: string;
    }) => Promise<void>;
    findOneByName: (payload?: {
        name: string;
    } & {
        realm?: string;
    }) => Promise<RoleRepresentation>;
    updateByName: (query: {
        name: string;
    } & {
        realm?: string;
    }, payload: RoleRepresentation) => Promise<void>;
    delByName: (payload?: {
        name: string;
    } & {
        realm?: string;
    }) => Promise<void>;
    findOneById: (payload?: {
        id: string;
    } & {
        realm?: string;
    }) => Promise<RoleRepresentation>;
    updateById: (query: {
        id: string;
    } & {
        realm?: string;
    }, payload: RoleRepresentation) => Promise<void>;
    delById: (payload?: {
        id: string;
    } & {
        realm?: string;
    }) => Promise<void>;
    constructor(client: KeycloakAdminClient);
}
