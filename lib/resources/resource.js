"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
exports.__esModule = true;
var agent_1 = require("./agent");
var Resource = (function () {
    function Resource(client, settings) {
        if (settings === void 0) { settings = {}; }
        var _this = this;
        this.makeRequest = function (args) {
            return _this.agent.request(args);
        };
        this.makeUpdateRequest = function (args) {
            return _this.agent.updateRequest(args);
        };
        this.agent = new agent_1.Agent(__assign({ client: client }, settings));
    }
    return Resource;
}());
exports["default"] = Resource;
//# sourceMappingURL=resource.js.map