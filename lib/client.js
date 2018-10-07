"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var auth_1 = require("./utils/auth");
var constants_1 = require("./utils/constants");
var users_1 = require("./resources/users");
var groups_1 = require("./resources/groups");
var roles_1 = require("./resources/roles");
var clients_1 = require("./resources/clients");
var realms_1 = require("./resources/realms");
var identityProviders_1 = require("./resources/identityProviders");
var components_1 = require("./resources/components");
var KeycloakAdminClient = (function () {
    function KeycloakAdminClient(connectionConfig) {
        this.baseUrl =
            (connectionConfig && connectionConfig.baseUrl) || constants_1.defaultBaseUrl;
        this.realmName =
            (connectionConfig && connectionConfig.realmName) || constants_1.defaultRealm;
        this.requestConfig = connectionConfig && connectionConfig.requestConfig;
        this.users = new users_1.Users(this);
        this.groups = new groups_1.Groups(this);
        this.roles = new roles_1.Roles(this);
        this.clients = new clients_1.Clients(this);
        this.realms = new realms_1.Realms(this);
        this.identityProviders = new identityProviders_1.IdentityProviders(this);
        this.components = new components_1.Components(this);
    }
    KeycloakAdminClient.prototype.auth = function (credentials) {
        return __awaiter(this, void 0, void 0, function () {
            var accessToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, auth_1.getToken({
                            baseUrl: this.baseUrl,
                            realmName: this.realmName,
                            credentials: credentials,
                            requestConfig: this.requestConfig
                        })];
                    case 1:
                        accessToken = (_a.sent()).accessToken;
                        this.accessToken = accessToken;
                        return [2];
                }
            });
        });
    };
    KeycloakAdminClient.prototype.setAccessToken = function (token) {
        this.accessToken = token;
    };
    KeycloakAdminClient.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    KeycloakAdminClient.prototype.getRequestConfig = function () {
        return this.requestConfig;
    };
    KeycloakAdminClient.prototype.setConfig = function (connectionConfig) {
        if (typeof connectionConfig.baseUrl === 'string' &&
            connectionConfig.baseUrl) {
            this.baseUrl = connectionConfig.baseUrl;
        }
        if (typeof connectionConfig.realmName === 'string' &&
            connectionConfig.realmName) {
            this.realmName = connectionConfig.realmName;
        }
    };
    return KeycloakAdminClient;
}());
exports.KeycloakAdminClient = KeycloakAdminClient;
//# sourceMappingURL=client.js.map