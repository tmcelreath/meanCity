'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Rat = mongoose.model('Rat');
   // _ = require('lodash');

/**
 * Show a rat
 */
exports.show = function(req, res) {
    res.jsonp(req.article);
};

/**
 * List of Rats
 */
exports.all = function(req, res) {
    Rat.find().exec(function(err, rats) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(rats);
        }
    });
};
