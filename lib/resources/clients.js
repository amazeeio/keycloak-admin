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
var Clients = (function (_super) {
    __extends(Clients, _super);
    function Clients(client) {
        var _this = _super.call(this, client, {
            path: '/admin/realms/{realm}/clients',
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
        _this.createRole = _this.makeRequest({
            method: 'POST',
            path: '/{id}/roles',
            urlParamKeys: ['id']
        });
        _this.listRoles = _this.makeRequest({
            method: 'GET',
            path: '/{id}/roles',
            urlParamKeys: ['id']
        });
        _this.findRole = _this.makeRequest({
            method: 'GET',
            path: '/{id}/roles/{roleName}',
            urlParamKeys: ['id', 'roleName'],
            catchNotFound: true
        });
        _this.updateRole = _this.makeUpdateRequest({
            method: 'PUT',
            path: '/{id}/roles/{roleName}',
            urlParamKeys: ['id', 'roleName']
        });
        _this.delRole = _this.makeRequest({
            method: 'DELETE',
            path: '/{id}/roles/{roleName}',
            urlParamKeys: ['id', 'roleName']
        });
        _this.findUsersWithRole = _this.makeRequest({
            method: 'GET',
            path: '/{id}/roles/{roleName}/users',
            urlParamKeys: ['id', 'roleName']
        });
        _this.getServiceAccountUser = _this.makeRequest({
            method: 'GET',
            path: '/{id}/service-account-user',
            urlParamKeys: ['id']
        });
        _this.generateNewClientSecret = _this.makeRequest({
            method: 'POST',
            path: '/{id}/client-secret',
            urlParamKeys: ['id']
        });
        _this.getClientSecret = _this.makeRequest({
            method: 'GET',
            path: '/{id}/client-secret',
            urlParamKeys: ['id']
        });
        return _this;
    }
    return Clients;
}(resource_1["default"]));
exports.Clients = Clients;
//# sourceMappingURL=clients.js.map