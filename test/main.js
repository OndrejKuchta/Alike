// Generated by CoffeeScript 1.6.3
(function() {
  var nearestNeighbor, should;

  should = require('should');

  nearestNeighbor = require('../lib/main');

  describe('K Nearest Neighbor', function() {
    describe('arguments', function() {
      it('should be at least 2', function() {
        (function() {
          return nearestNeighbor();
        }).should.throwError('Expecting at least 2 arguments');
        return (function() {
          return nearestNeighbor(1);
        }).should.throwError('Expecting at least 2 arguments');
      });
      it('should accept 2 or 3', function() {
        (function() {
          return nearestNeighbor({
            a: 1
          }, [
            {
              a: 2
            }
          ]);
        }).should.not.throwError();
        return (function() {
          return nearestNeighbor({
            a: 1
          }, [
            {
              a: 2
            }, {
              a: 3
            }
          ], {
            option: false
          });
        }).should.not.throwError();
      });
      it('should accept objects only', function() {
        return (function() {
          return nearestNeighbor(1, 2);
        }).should.throwError('Expecting object arguments');
      });
      it('should not accept null as objects', function() {
        return (function() {
          return nearestNeighbor(null, null);
        }).should.throwError('Expecting object arguments');
      });
      it('should only accept array as second argument', function() {
        return (function() {
          return nearestNeighbor({
            a: 1
          }, {
            a: 2
          });
        }).should.throwError('Expecting an array as second argument');
      });
      return it('should assert that all attributes in subject is present in object', function() {
        return (function() {
          return nearestNeighbor({
            a: 1
          }, [
            {
              a: 2
            }, {
              b: 3
            }
          ]);
        }).should.throwError("Missing attribute 'a' in '{\"b\":3}'");
      });
    });
    return describe('for simple cases', function() {
      it('should return an empty object/array if no Y', function() {
        return nearestNeighbor({
          a: 1
        }, []).should.eql([]);
      });
      it('should return nearest neighbor with single dimension', function() {
        return nearestNeighbor({
          a: 1
        }, [
          {
            a: 1
          }, {
            a: 2
          }
        ], {
          k: 1
        }).should.eql([
          {
            a: 1
          }
        ]);
      });
      it('should return 2 nearest neighbors (in order) with single dimension', function() {
        return nearestNeighbor({
          a: 1
        }, [
          {
            a: 1
          }, {
            a: 3
          }, {
            a: 0
          }
        ], {
          k: 2
        }).should.eql([
          {
            a: 1
          }, {
            a: 0
          }
        ]);
      });
      it('should accept a key parameter for objects', function() {
        return nearestNeighbor({
          a: 1
        }, [
          {
            x: {
              a: 1
            }
          }, {
            x: {
              a: 2
            }
          }
        ], {
          k: 1,
          key: function(o) {
            return o.x;
          }
        }).should.eql([
          {
            x: {
              a: 1
            }
          }
        ]);
      });
      it('should accept a key parameter for nested objects', function() {
        return nearestNeighbor({
          a: 1
        }, [
          {
            x: {
              y: {
                a: 1
              }
            }
          }, {
            x: {
              y: {
                a: 2
              }
            }
          }
        ], {
          k: 1,
          key: function(o) {
            return o.x.y;
          }
        }).should.eql([
          {
            x: {
              y: {
                a: 1
              }
            }
          }
        ]);
      });
      it('should accept filter parameter', function() {
        return nearestNeighbor({
          a: 1
        }, [
          {
            a: 1
          }, {
            a: 3
          }, {
            a: 0
          }
        ], {
          k: 2,
          filter: function(o) {
            return o.a > 0;
          }
        }).should.eql([
          {
            a: 1
          }, {
            a: 3
          }
        ]);
      });
      it('should accept return empty array if filters all', function() {
        return nearestNeighbor({
          a: 1
        }, [
          {
            a: 1
          }, {
            a: 3
          }, {
            a: 0
          }
        ], {
          k: 2,
          filter: function(o) {
            return o.a > 10;
          }
        }).should.eql([]);
      });
      it('should default to unlimited if no k is provided', function() {
        return nearestNeighbor({
          a: 1
        }, [
          {
            a: 1
          }, {
            a: 2
          }, {
            a: 3
          }
        ]).should.eql([
          {
            a: 1
          }, {
            a: 2
          }, {
            a: 3
          }
        ]);
      });
      return it('should return distances if debug option is provided', function() {
        return nearestNeighbor({
          a: 0,
          b: 0
        }, [
          {
            a: 3,
            b: 4
          }
        ], {
          debug: true
        }).should.eql([
          {
            a: 3,
            b: 4,
            debug: {
              distance: 25,
              details: {
                a: 9,
                b: 16
              }
            }
          }
        ]);
      });
    });
  });

}).call(this);
