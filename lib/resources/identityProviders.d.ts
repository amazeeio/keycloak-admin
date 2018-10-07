import Resource from './resource';
import IdentityProviderRepresentation from '../defs/identityProviderRepresentation';
import { KeycloakAdminClient } from '../client';
export declare class IdentityProviders extends Resource<{
    realm?: string;
}> {
    find: (payload?: void & {
        realm?: string;
    }) => Promise<IdentityProviderRepresentation[]>;
    create: (payload?: IdentityProviderRepresentation & {
        realm?: string;
    }) => Promise<void>;
    findOne: (payload?: {
        alias: string;
    } & {
        realm?: string;
    }) => Promise<IdentityProviderRepresentation>;
    update: (query: {
        alias: string;
    } & {
        realm?: string;
    }, payload: IdentityProviderRepresentation) => Promise<void>;
    del: (payload?: {
        alias: string;
    } & {
        realm?: string;
    }) => Promise<void>;
    constructor(client: KeycloakAdminClient);
}
