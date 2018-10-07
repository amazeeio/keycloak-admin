import Resource from './resource';
import RealmRepresentation from '../defs/realmRepresentation';
import { KeycloakAdminClient } from '../client';
export declare class Realms extends Resource {
    find: (payload?: void & {}) => Promise<RealmRepresentation[]>;
    create: (payload?: RealmRepresentation) => Promise<void>;
    findOne: (payload?: {
        realm: string;
    }) => Promise<RealmRepresentation>;
    update: (query: {
        realm: string;
    }, payload: RealmRepresentation) => Promise<void>;
    del: (payload?: {
        realm: string;
    }) => Promise<void>;
    constructor(client: KeycloakAdminClient);
}
