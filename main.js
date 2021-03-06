'use strict';

// Polyfills
require('es6-promise').polyfill();
if (!GLOBAL.fetch) {
	GLOBAL.fetch = require('node-fetch');
}

// Exp… apex.js
const λ = require('apex.js');

// Useful stuff
λ.logger = require('@financial-times/n-logger').default;
λ.raven = require('@financial-times/n-raven');
λ.metrics = require('./metrics');

λ.logger.info({ event: 'LAMBDA_START', nodeVersion: process.version });


module.exports = λ;
