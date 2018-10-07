import { Credentials } from './utils/auth';
import { Users } from './resources/users';
import { Groups } from './resources/groups';
import { Roles } from './resources/roles';
import { Clients } from './resources/clients';
import { Realms } from './resources/realms';
import { IdentityProviders } from './resources/identityProviders';
import { Components } from './resources/components';
import { AxiosRequestConfig } from 'axios';
export interface ConnectionConfig {
    baseUrl?: string;
    realmName?: string;
    requestConfig?: AxiosRequestConfig;
}
export declare class KeycloakAdminClient {
    users: Users;
    groups: Groups;
    roles: Roles;
    clients: Clients;
    realms: Realms;
    identityProviders: IdentityProviders;
    components: Components;
    baseUrl: string;
    realmName: string;
    accessToken: string;
    private requestConfig?;
    constructor(connectionConfig?: ConnectionConfig);
    auth(credentials: Credentials): Promise<void>;
    setAccessToken(token: string): void;
    getAccessToken(): string;
    getRequestConfig(): AxiosRequestConfig;
    setConfig(connectionConfig: ConnectionConfig): void;
}
