'use strict';

var should = require('chai').should();
var gamecore = require('../');

describe('#versionGuard', function() {
  it('global._gamecore should be defined', function() {
    should.equal(global._gamecore, gamecore.version);
  });

  it('throw an error if version is already defined', function() {
    (function() {
      gamecore.versionGuard('version');
    }).should.throw('More than one instance of gamecore');
  });
});
