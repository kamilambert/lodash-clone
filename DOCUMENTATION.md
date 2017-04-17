# 37 Common JS Utility Functions [Lodash]

## Array

### indexOf
Gets the index at which the first occurrence of value is found in array using SameValueZero for equality comparisons. If fromIndex is negative, it's used as the offset from the end of array.

#### Arguments
array (Array): The array to inspect.
value (x): The value to search for.
[fromIndex=0] (number): The index to search from.

#### Returns
(number): Returns the index of the matched value, else -1.

#### Example
```
_.indexOf([1, 2, 1, 2], 2);
// => 1

// Search from the `fromIndex`.
_.indexOf([1, 2, 1, 2], 2, 2);
// => 3
```

### slice
Creates a slice of array from start up to, but not including, end.

Note: This method is used instead of Array#slice to ensure dense arrays are returned.

#### Arguments
array (Array): The array to slice.
[start=0] (number): The start position.
[end=array.length] (number): The end position.

#### Returns
(Array): Returns the slice of array.

#### Example
```
var a = ['zero', 'one', 'two', 'three'];
var sliced = a.slice(1, 3);

console.log(a);      // ['zero', 'one', 'two', 'three']
console.log(sliced); // ['one', 'two']
```

### chunk
Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.

#### Arguments
array (Array): The array to process.
[size=1] (number): The length of each chunk

#### Returns
(Array): Returns the new array of chunks.

#### Example
```
_.chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]

_.chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]
```
### concat
Creates a new array concatenating array with any additional arrays and/or values.

#### Arguments
array (Array): The array to concatenate.
[values] (...x): The values to concatenate.

#### Returns
(Array): Returns the new concatenated array.

#### Example
```
var array = [1];
var other = _.concat(array, 2, [3], [[4]]);

console.log(other);
// => [1, 2, 3, [4]]

console.log(array);
// => [1]
```

### difference
Creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons. The order and references of result values are determined by the first array.

Note: Unlike ```_.pullAll```, this method returns a new array.

#### Arguments
array (Array): The array to inspect.
[values] (...Array): The values to exclude.

#### Returns
(Array): Returns the new array of filtered values.

#### Example
```
_.difference([2, 1], [2, 3]);
// => [1]
```

### drop
Creates a slice of array with n elements dropped from the beginning.

#### Arguments
array (Array): The array to query.
[n=1] (number): The number of elements to drop.

#### Returns
(Array): Returns the slice of array.

#### Example
```
_.drop([1, 2, 3]);
// => [2, 3]

_.drop([1, 2, 3], 2);
// => [3]

_.drop([1, 2, 3], 5);
// => []

_.drop([1, 2, 3], 0);
// => [1, 2, 3]
```

### fill
Fills elements of array with value from start up to, but not including, end.

Note: This method mutates array.

#### Arguments
array (Array): The array to fill.
value (x): The value to fill array with.
[start=0] (number): The start position.
[end=array.length] (number): The end position.

#### Returns
(Array): Returns array.

#### Example
```
var array = [1, 2, 3];

_.fill(array, 'a');
console.log(array);
// => ['a', 'a', 'a']

_.fill(Array(3), 2);
// => [2, 2, 2]

_.fill([4, 6, 8, 10], '*', 1, 3);
// => [4, '*', '*', 10]
```
### findIndex
This method is like .find except that it returns the index of the first element predicate returns truthy for instead of the element itself.

#### Arguments
array (Array): The array to inspect.
[predicate=.identity] (Function): The function invoked per iteration.
[fromIndex=0] (number): The index to search from.

#### Returns
(number): Returns the index of the found element, else -1.

#### Example
```
var users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true }
];

_.findIndex(users, function(o) { return o.user == 'barney'; });
// => 0

// The `_.matches` iteratee shorthand.
_.findIndex(users, { 'user': 'fred', 'active': false });
// => 1

// The `_.matchesProperty` iteratee shorthand.
_.findIndex(users, ['active', false]);
// => 0

// The `_.property` iteratee shorthand.
_.findIndex(users, 'active');
// => 2
```

### flatten
Flattens array a single level deep.

#### Arguments
array (Array): The array to flatten.

#### Returns
(Array): Returns the new flattened array.

#### Example
```
_.flatten([1, [2, [3, [4]], 5]]);
// => [1, 2, [3, [4]], 5]
```

### join
Converts all elements in array into a string separated by separator.

#### Arguments
array (Array): The array to convert.
[separator=','] (string): The element separator.

#### Returns
(string): Returns the joined string.

#### Example
```
_.join(['a', 'b', 'c'], '~');
// => 'a~b~c'
```

### remove
Removes all elements from array that predicate returns truthy for and returns an array of the removed elements. The predicate is invoked with three arguments: (value, index, array).

#### Arguments
array (Array): The array to modify.
[predicate=.identity] (Function): The function invoked per iteration.

#### Returns
(Array): Returns the new array of removed elements.

#### Example
```
var array = [1, 2, 3, 4];
var evens = _.remove(array, function(n) {
  return n % 2 == 0;
});

console.log(array);
// => [1, 3]

console.log(evens);
// => [2, 4]
```

### reverse
Reverses array so that the first element becomes the last, the second element becomes the second to last, and so on.

#### Arguments
array (Array): The array to modify.

#### Returns
(Array): Returns array.

#### Example
```
var array = [1, 2, 3];

_.reverse(array);
// => [3, 2, 1]

console.log(array);
// => [3, 2, 1]
```

### first -> head
Gets the first element of array.

#### Arguments
array (Array): The array to query.

#### Returns
(x): Returns the first element of array.

#### Example
```
_.head([1, 2, 3]);
// => 1

_.head([]);
// => undefined
```

### last
Gets the last element of array.

#### Arguments
array (Array): The array to query.

#### Returns
(x): Returns the last element of array.

#### Example
```
_.last([1, 2, 3]);
// => 3
```

### pull
Removes all given values from array using SameValueZero for equality comparisons.

Note: Unlike .without, this method mutates array. Use .remove to remove elements from an array by predicate.

#### Arguments
array (Array): The array to modify.
[values] (...x): The values to remove.

#### Returns
(Array): Returns array.

#### Example
```
var array = ['a', 'b', 'c', 'a', 'b', 'c'];

_.pull(array, 'a', 'c');
console.log(array);
// => ['b', 'b']
```

### union
Creates an array of unique values, in order, from all given arrays using SameValueZero for equality comparisons.

#### Arguments
[arrays] (...Array): The arrays to inspect.

#### Returns
(Array): Returns the new array of combined values.

#### Example
```
_.union([2], [1, 2]);
// => [2, 1]
```
