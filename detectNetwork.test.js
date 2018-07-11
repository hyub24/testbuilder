/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';
 
//describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail. 
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out. 
  // You will not be able to proceed with a failing test. 

  //it('Throws an error so it fails', function() {
    //throw new Error('Delete me!');
  //});

  //it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    //var even = function(num){
      //return num/2 === 0;
   // }
   // return even(10) === true;
  //});

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  //it('Throws an error when expected behavior does not match actual behavior', function() {
    //var even = function(num){
      //return num/2 === 0;
    //}

    //if(even(10) !== true) {
      //throw new Error('10 should be even!');
    //}
 // });
//});
var should = chai.should();
describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {
    detectNetwork('38345678901234').should.equal('Diner\'s Club');
  });

  it('has a prefix of 39 and a length of 14', function() {
    detectNetwork('39345678901234').should.equal('Diner\'s Club');
  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
//  var assert = function(isTrue) {
  //  if(!isTrue) {
    //  throw new Error('Test failed');
    //}
 // };

  it('has a prefix of 34 and a length of 15', function() {
    detectNetwork('343456789012345').should.equal('American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    detectNetwork('373456789012345').should.equal('American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  //var assert = chai.assert;
 

  it('has a prefix of 4 and a length of 13', function() {
    detectNetwork('4123456789012').should.equal('Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    detectNetwork('4123456789012345').should.equal('Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    detectNetwork('4123456789012345678').should.equal('Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  //var expect = chai.expect;
 
  it('has a prefix of 51', function() {
    detectNetwork('5112345678901234').should.equal('MasterCard');
  });
 
  it('prefix 52', function() {
    detectNetwork('5212345678901234').should.equal('MasterCard');
  });
 
  it('prefix 53', function() {
    detectNetwork('5312345678901234').should.equal('MasterCard');
  });
 

  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out 
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten 
  // these tests to pass using should syntax, refactor your tests to 
  // use either expect or should, but not both. 
  var should = chai.should();
  
  it('has a prefix of 54 and a length of 16', function() {
    detectNetwork('5412345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5512345678901234').should.equal('MasterCard');
  })
 
});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
var should=chai.should();
//var expect=chai.expect;
  it('has a prefix of 6011 and a length of 16', function() {
    detectNetwork('6011012345678901').should.equal('Discover');
  });
  it('has a prefix of 6011 and a length of 19', function() {
    detectNetwork('6011012345678901234').should.equal('Discover');
  });

  it('has a pf of 65 and length 16', function() {
    detectNetwork('6501234567890123').should.equal('Discover');
  });

  it('has a pf of 65 and length 19', function() {
    detectNetwork('6501234567890123456').should.equal('Discover');
  });

  for (var prefix = 644; prefix <=649; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function() {
        detectNetwork(prefix.toString()+'0123456789012').should.equal('Discover');
      });
      it('has a prefix of ' + prefix + ' and a length of 19', function() {
        detectNetwork(prefix.toString() + '0123456789012345').should.equal('Discover');
      });
    })(prefix)
  };
});

describe('Maestro', function() {
  // Write full test coverage for the Maestro card
var should = chai.should();
//var expect = chai.expect;

  it('has a prefix of 5018', function() {
    detectNetwork('5018012345678').should.equal('Maestro');
  });


  var lengthen = function(num) {
    var ones = '';
    for(var i=0; i<num; i++){
      ones+='1';
    }
    return ones;
  };

  for (var length = 8; length<=15; length++){
    (function(length){
      it('has a prefix of 5018 and a length of ' + (length + 4), function() {
        detectNetwork('5018'+lengthen(length)).should.equal('Maestro');
      });
      it('has a prefix of 5020 and a length of ', function() {
        detectNetwork('5020'+lengthen(length)).should.equal('Maestro');
      });
      it('has a prefix of 5038 and a length of ', function() {
        detectNetwork('5038'+lengthen(length)).should.equal('Maestro');
      });
      it('has a prefix of 6304 and a length of ', function() {
        detectNetwork('6304'+lengthen(length)).should.equal('Maestro');
      });
    })(length)
  }
});

describe('China UnionPay', function(){
  for(var length = 16; length<=19; length++){
    (function(length) {
      var num = Math.pow(10,(length-7));
      var num2 = Math.pow(10,(length-4));
      var num3 = Math.pow(10,(length-5));
      for(prefix=622126; prefix<=622925; prefix++){
        (function(prefix) {
          it('has a prefix of ' + prefix + ' and a length of ' + length, function() {
            detectNetwork(prefix.toString() + num.toString()).should.equal('China UnionPay');
          });
        })(prefix)
      }
      for(prefix = 624; prefix<=626; prefix++) {
        (function(prefix) {
          it('has a prefix of ' + prefix + ' and a length of ' + length, function() {
            detectNetwork(prefix.toString() + num2.toString()).should.equal('China UnionPay');
          });
        })(prefix)
      }
      for(prefix = 6282; prefix<=6288; prefix++) {
        (function(prefix) {
          it('has a prefix of ' + prefix + ' and a length of ' + length, function() {
            detectNetwork(prefix.toString() + num3.toString()).should.equal('China UnionPay');
          });
        })(prefix)
      }
    })(length)
  }
});

describe('Switch', function() {

  for(var length = 16; length<=19; length++){
    if(length===17){
      continue;
    }
    (function(length) {
//    var length =16;
      var number = Math.pow(10,(length-5));
      var number2 = Math.pow(10,(length-7));
      it('has a prefix of 4903 and a length of ' + length, function() {
        detectNetwork('4903'+ number.toString()).should.equal('Switch');
      });
      it('has pf of 4905 length of ' + length, function() {
        detectNetwork('4905'+ number.toString()).should.equal('Switch');
      });
      it('4911' + length, function() {
        detectNetwork('4911' + number.toString()).should.equal('Switch');
      });
      it('4936' + length, function() {
        detectNetwork('4936' + number.toString()).should.equal('Switch');
      });
      it('6333' +length, function() {
        detectNetwork('6333' + number.toString()).should.equal('Switch');
      });
      it('6759' +length, function() {
        detectNetwork('6759' + number.toString()).should.equal('Switch');
      });
      it('564182'+length, function() {
        detectNetwork('564182' + number2.toString()).should.equal('Switch');
      });
      it('633110', function() {
        detectNetwork('633110' + number2.toString()).should.equal('Switch');
      });
    })(length)
  }
});
