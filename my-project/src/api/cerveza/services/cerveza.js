'use strict';

/**
 * cerveza service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cerveza.cerveza');
