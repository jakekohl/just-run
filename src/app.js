var app = exports = module.exports = {};

app.init = function() {
    this.cache = {};
    this.engines = {};
    this.settings = {}

    //for holding the application router
    this._router = undefined;
};