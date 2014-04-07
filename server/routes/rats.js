'use strict';

// Articles routes use articles controller
var rats = require('../controllers/rats');

module.exports = function(app) {
    app.get('/rats', rats.all);
};