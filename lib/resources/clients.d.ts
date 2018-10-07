import Resource from './resource';
import ClientRepresentation from '../defs/clientRepresentation';
import { KeycloakAdminClient } from '../client';
import RoleRepresentation from '../defs/roleRepresentation';
import UserRepresentation from '../defs/userRepresentation';
import CredentialRepresentation from '../defs/credentialRepresentation';
export interface ClientQuery {
    clientId?: string;
    viewableOnly?: boolean;
}
export declare class Clients extends Resource<{
    realm?: string;
}> {
    find: (payload?: ClientQuery & {
        realm?: string;
    }) => Promise<ClientRepresentation[]>;
    create: (payload?: ClientRepresentation & {
        realm?: string;
    }) => Promise<void>;
    findOne: (payload?: {
        id: string;
    } & {
        realm?: string;
    }) => Promise<ClientRepresentation>;
    update: (query: {
        id: string;
    } & {
        realm?: string;
    }, payload: ClientRepresentation) => Promise<void>;
    del: (payload?: {
        id: string;
    } & {
        realm?: string;
    }) => Promise<void>;
    createRole: (payload?: RoleRepresentation & {
        realm?: string;
    }) => Promise<void>;
    listRoles: (payload?: {
        id: string;
    } & {
        realm?: string;
    }) => Promise<RoleRepresentation[]>;
    findRole: (payload?: {
        id: string;
        roleName: string;
    } & {
        realm?: string;
    }) => Promise<RoleRepresentation>;
    updateRole: (query: {
        id: string;
        roleName: string;
    } & {
        realm?: string;
    }, payload: RoleRepresentation) => Promise<void>;
    delRole: (payload?: {
        id: string;
        roleName: string;
    } & {
        realm?: string;
    }) => Promise<void>;
    findUsersWithRole: (payload?: {
        id: string;
        roleName: string;
        first?: number;
        max?: number;
    } & {
        realm?: string;
    }) => Promise<UserRepresentation[]>;
    getServiceAccountUser: (payload?: {
        id: string;
    } & {
        realm?: string;
    }) => Promise<UserRepresentation>;
    generateNewClientSecret: (payload?: {
        id: string;
    } & {
        realm?: string;
    }) => Promise<void>;
    getClientSecret: (payload?: {
        id: string;
    } & {
        realm?: string;
    }) => Promise<CredentialRepresentation>;
    constructor(client: KeycloakAdminClient);
}
