"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var resource_1 = __importDefault(require("./resource"));
var Users = (function (_super) {
    __extends(Users, _super);
    function Users(client) {
        var _this = _super.call(this, client, {
            path: '/admin/realms/{realm}/users',
            getUrlParams: function () { return ({
                realm: client.realmName
            }); },
            getBaseUrl: function () { return client.baseUrl; }
        }) || this;
        _this.find = _this.makeRequest({
            method: 'GET'
        });
        _this.create = _this.makeRequest({
            method: 'POST'
        });
        _this.findOne = _this.makeRequest({
            method: 'GET',
            path: '/{id}',
            urlParamKeys: ['id'],
            catchNotFound: true
        });
        _this.update = _this.makeUpdateRequest({
            method: 'PUT',
            path: '/{id}',
            urlParamKeys: ['id']
        });
        _this.del = _this.makeRequest({
            method: 'DELETE',
            path: '/{id}',
            urlParamKeys: ['id']
        });
        _this.listRoleMappings = _this.makeRequest({
            method: 'GET',
            path: '/{id}/role-mappings',
            urlParamKeys: ['id']
        });
        _this.addRealmRoleMappings = _this.makeRequest({
            method: 'POST',
            path: '/{id}/role-mappings/realm',
            urlParamKeys: ['id'],
            payloadKey: 'roles'
        });
        _this.listRealmRoleMappings = _this.makeRequest({
            method: 'GET',
            path: '/{id}/role-mappings/realm',
            urlParamKeys: ['id']
        });
        _this.delRealmRoleMappings = _this.makeRequest({
            method: 'DELETE',
            path: '/{id}/role-mappings/realm',
            urlParamKeys: ['id'],
            payloadKey: 'roles'
        });
        _this.listAvailableRealmRoleMappings = _this.makeRequest({
            method: 'GET',
            path: '/{id}/role-mappings/realm/available',
            urlParamKeys: ['id']
        });
        _this.listClientRoleMappings = _this.makeRequest({
            method: 'GET',
            path: '/{id}/role-mappings/clients/{clientUniqueId}',
            urlParamKeys: ['id', 'clientUniqueId']
        });
        _this.addClientRoleMappings = _this.makeRequest({
            method: 'POST',
            path: '/{id}/role-mappings/clients/{clientUniqueId}',
            urlParamKeys: ['id', 'clientUniqueId'],
            payloadKey: 'roles'
        });
        _this.delClientRoleMappings = _this.makeRequest({
            method: 'DELETE',
            path: '/{id}/role-mappings/clients/{clientUniqueId}',
            urlParamKeys: ['id', 'clientUniqueId'],
            payloadKey: 'roles'
        });
        _this.listAvailableClientRoleMappings = _this.makeRequest({
            method: 'GET',
            path: '/{id}/role-mappings/clients/{clientUniqueId}/available',
            urlParamKeys: ['id', 'clientUniqueId']
        });
        _this.executeActionsEmail = _this.makeRequest({
            method: 'PUT',
            path: '/{id}/execute-actions-email',
            urlParamKeys: ['id'],
            payloadKey: 'actions',
            queryParamKeys: ['lifespan', 'redirectUri', 'clientId'],
            keyTransform: {
                clientId: 'client_id',
                redirectUri: 'redirect_uri'
            }
        });
        _this.listGroups = _this.makeRequest({
            method: 'GET',
            path: '/{id}/groups',
            urlParamKeys: ['id']
        });
        _this.addToGroup = _this.makeRequest({
            method: 'PUT',
            path: '/{id}/groups/{groupId}',
            urlParamKeys: ['id', 'groupId']
        });
        _this.delFromGroup = _this.makeRequest({
            method: 'DELETE',
            path: '/{id}/groups/{groupId}',
            urlParamKeys: ['id', 'groupId']
        });
        _this.listFederatedIdentities = _this.makeRequest({
            method: 'GET',
            path: '/{id}/federated-identity',
            urlParamKeys: ['id']
        });
        _this.addToFederatedIdentity = _this.makeRequest({
            method: 'POST',
            path: '/{id}/federated-identity/{federatedIdentityId}',
            urlParamKeys: ['id', 'federatedIdentityId'],
            payloadKey: 'federatedIdentity'
        });
        _this.delFromFederatedIdentity = _this.makeRequest({
            method: 'DELETE',
            path: '/{id}/federated-identity/{federatedIdentityId}',
            urlParamKeys: ['id', 'federatedIdentityId']
        });
        _this.removeTotp = _this.makeRequest({
            method: 'PUT',
            path: '/{id}/remove-totp',
            urlParamKeys: ['id']
        });
        _this.resetPassword = _this.makeRequest({
            method: 'PUT',
            path: '/{id}/reset-password',
            urlParamKeys: ['id'],
            payloadKey: 'credential'
        });
        _this.sendVerifyEmail = _this.makeRequest({
            method: 'PUT',
            path: '/{id}/send-verify-email',
            urlParamKeys: ['id'],
            queryParamKeys: ['clientId', 'redirectUri'],
            keyTransform: {
                clientId: 'client_id',
                redirectUri: 'redirect_uri'
            }
        });
        return _this;
    }
    return Users;
}(resource_1["default"]));
exports.Users = Users;
//# sourceMappingURL=users.js.map