"use strict";
var sf = require('sf');

var Module = function (sf, node, options) {
    this._construct(sf, node, options);
};
Module.prototype = sf.createModulePrototype();
Module.prototype.name = "module";
Module.prototype._construct = function (sf, node, options) {

};

Module.prototype.die = function () {

};

module.exports = Module;