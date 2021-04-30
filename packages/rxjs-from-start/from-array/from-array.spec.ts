import {fromArray} from './from-array';

describe('fromArray', () => {
  xtest('create observable that emit the given array as separated values', (done) => {
    const numbers$ = fromArray([1,2,3,4,5]);
    
    let results = [];

    numbers$.subscribe(function next(val) {
      results = [...results, val];
    }, function error() {}, function complete() {
      expect(results).toEqual([1,2,3,4,5]);
      done();
    });
  });
});
