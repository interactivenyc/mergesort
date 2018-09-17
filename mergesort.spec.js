describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect(split([1, 2]).length).toEqual(2);
  });
  it('is able to split an odd-numbered array', function() {
    expect(split([1, 2, 3, 4, 5])).toEqual([ [ [ 1 ], [ 2 ] ], [ [ 3 ], [ [ 4 ], [ 5 ] ] ] ]);
  });
});

describe('Merge function', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect(merge([2], [1])).toEqual([1, 2]);
  });
});

describe('MergeSort function', function() {
  it('outputs an array', function() {
    expect(Array.isArray(mergeSort([1]))).toEqual(true);
  });
  it('outputs a correctly-sorted array for an input length of 2', function() {
    expect(mergeSort([43, 26])).toEqual([26, 43]);
  })
});
