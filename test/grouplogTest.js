'use strict';

describe('Group log', function() {

    let group = require('../index');
    
    describe('Group logging tests', function() {
        it('should output test string', function(done) {
            group.log('test').output;
            done();
        });
        it('should output a test string group', function(done) {
            group.log('test').start.end.output;
            done();
        });
        it('should output a multiline test string group', function(done) {
            group.log('test start').start.output;
            group.log('test').mid.output;
            group.log('test end').end.output;
            done();
        });
        it('should output a multiline test string group with dividers', function(done) {
            group.log('test start').start.output;
            group.log('test').div.output;
            group.log('test end').div.end.output;
            done();
        });
    });

});