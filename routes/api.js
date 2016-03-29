'use strict';

var express = require('express');
var router = express.Router();
var validateUrl = require('../helpers/validateUrl');
var saveAndGenerate = require('../helpers/saveAndGenerate');

var Url = require('../models/Url');

router.get('/', indexController);

router.get('/new', indexController);

router.get('/new/*', shortController);

function indexController(req, res) {
    // index should show basic instructions
    res.render('index', {host: req.hostname});
}

function shortController(req, res) {
    var origUrl = req.params[0];
    console.log(origUrl);
    if (validateUrl(origUrl)) {
        // save and generate urls
        saveAndGenerate(origUrl, req.protocol, req.hostname, res);
    } else {
        res.json({error: 'invalid url'});
    }
    
}

module.exports = router;