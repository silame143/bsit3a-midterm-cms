'use strict';

/**
 * student-grade service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::student-grade.student-grade');
