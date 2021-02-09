/* * ************************************************************ 
 * Date: 2 Sep, 2018
 * programmer: Shani Mahadeva <shani.mahadeva@blumatter.com>
 * Company : BluMatter Inc.
 * Javascript file ap.js
 * *************************************************************** */



// Lib
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const routes = require("./routes");

// Deps
// App Setup
const app = express();
app.enable('strict routing');
app.use(cors());
// Post data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Compression
app.use(require('compression')({threshold: 2048}));

// Request Logging
app.use(require('morgan')(
    function (tokens, req, res) {
        return [
            new Date().toISOString(),
            tokens.method(req, res),
            tokens.url(req, res),
            tokens.status(req, res),
            "'IP",
            tokens['remote-addr'](req,res),
            "GOT",
            tokens.res(req, res, 'content-length'), 
            "bytes IN",
            tokens['response-time'](req, res)+"ms'"
        ].join(' ');
    },{
        skip : function(req,res){  return req.url.match(/^\/(js|css|html|img)/); }
    })
);

    
routes.init(app);

// Crash event handling
process.on('unhandledRejection', (reason, p) => { 
    console.log("APP",reason);
});

process.on('uncaughtException', (err) => { 
    console.log("APP",err);
});
