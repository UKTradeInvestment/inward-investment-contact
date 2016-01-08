'use strict';

var hof = require('hof');
var wizard = hof.wizard;
var mixins = hof.mixins;
var i18nFuture = hof.i18n;
var router = require('express').Router();
var path = require('path');
var _ = require('underscore');
var addDefaultAttributes = require('../../lib/field-default-attributes');

var fields = _.extend({}, addDefaultAttributes(require('../common/fields/')),
  addDefaultAttributes(require('./fields/')));
var i18n = i18nFuture({
  path: path.resolve(__dirname, './translations/__lng__/__ns__.json')
});

router.use(mixins(fields, {
  translate: i18n.translate.bind(i18n)
}));

router.use('/contact-ukti/', wizard(require('./steps'), fields, {
  controller: require('hof').controllers.base,
  templatePath: path.resolve(__dirname, 'views'),
  translate: i18n.translate.bind(i18n),
  params: '/:action?'
}));

module.exports = router;
