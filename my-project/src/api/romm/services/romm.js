'use strict';

/**
 * romm service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::romm.romm');
