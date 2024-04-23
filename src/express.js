var mixin = require('merge-descriptors');
var proto = require("./app")
var http = require('http');
var fs = require('fs');
var path = require('path');
var mime = require('mime');

exports = module.exports = createApplication;

function createApplication() {
    let app = function(req,res,next) {
        app.handle(req,res,next)
    };

    mixin(app,proto,false);

    var req = Object.create(http.IncomingMessage.prototype);
    var res = Object.create(http.ServerResponse.prototype)

    res.send = function (body) {
        if(typeof body === 'object') {
            this.json(body)
        }
        else if(typeof body === 'string') {
            this.setHeader('Content-Type', 'text/plain');
            this.end(body,'utf8');
        }
        return this;
    }
    
    
    res.json = function (body) {
        this.setHeader('Content-Type', 'application/json');
        return this.send(JSON.stringify(body))
    }

    res.sendFile = function sendFile(path, options, callback) {
      var done = callback;
      var req = this.req;
      var res = this;
      var next = req.next;

      if (!path) {
        throw new TypeError('path argument is required to res.sendFile');
      }

      options = options || {};
      options.maxAge = options.maxAge || 0;
      
      var file = path;
      var type = mime.lookup(file);

      fs.readFile(file, function(err, buf) {
        if (err) {
          if (err.code === 'ENOENT') {
            next();
          } else {
            next(err);
          }
          return;
        }

        res.setHeader('Content-Type', type);
        res.setHeader('Content-Length', buf.length);
        res.end(buf);
      });
    };

    app.request = Object.create(req,{
        app : {
            configurable: true, enumerable: true, writable: true, value: app
        }
    });

    app.response = Object.create(res,{
        app : {
            configurable: true, enumerable: true, writable: true, value: app
        }
    });

    app.init();
    return app;
}

exports.application = proto;
