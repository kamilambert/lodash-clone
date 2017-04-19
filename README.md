# 32 Common JS Utility Functions [Lodash]

## Array

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

### compact
Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.

#### Arguments
array (Array): The array to compact.

#### Returns
(Array): Returns the new array of filtered values.

#### Examples
```
_.compact([0, 1, false, 2, '', 3]);
// => [1, 2, 3]
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

### dropRight
Creates a slice of array with n elements dropped from the end.

#### Arguments
array (Array): The array to query.
[n=1] (number): The number of elements to drop.

#### Returns
(Array): Returns the slice of array.

#### Examples
```
_.dropRight([1, 2, 3]);
// => [1, 2]

_.dropRight([1, 2, 3], 2);
// => [1]

_.dropRight([1, 2, 3], 5);
// => []

_.dropRight([1, 2, 3], 0);
// => [1, 2, 3]
```

### head
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

### initial
Gets all but the last element of array.

#### Arguments
array (Array): The array to query.

#### Returns
(Array): Returns the slice of array.

#### Examples
```
_.initial([1, 2, 3]);
// => [1, 2]
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

### nth
Gets the element at index n of array. If n is negative, the nth element from the end is returned.

#### Arguments
array (Array): The array to query.
[n=0] (number): The index of the element to return.

#### Returns
(x): Returns the nth element of array.

#### Examples
```
var array = ['a', 'b', 'c', 'd'];

_.nth(array, 1);
// => 'b'

_.nth(array, -2);
// => 'c';
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

### pullAll
This method is like pull except that it accepts an array of values to remove.

Note: Unlike difference, this method mutates array.

#### Arguments
array (Array): The array to modify.
values (Array): The values to remove.

#### Returns
(Array): Returns array.

#### Examples
```
var array = ['a', 'b', 'c', 'a', 'b', 'c'];

_.pullAll(array, ['a', 'c']);
console.log(array);
// => ['b', 'b']
```

### pullAt
Removes elements from array corresponding to indexes and returns an array of removed elements.

Note: Unlike at, this method mutates array.

#### Arguments
array (Array): The array to modify.
[indexes] (...(number|number[])): The indexes of elements to remove.

#### Returns
(Array): Returns the new array of removed elements.

#### Examples
```
var array = ['a', 'b', 'c', 'd'];
var pulled = _.pullAt(array, [1, 3]);

console.log(array);
// => ['a', 'c']

console.log(pulled);
// => ['b', 'd']
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

## Lang

### isBoolean
Checks if value is classified as a boolean primitive or object.

#### Arguments
value (x): The value to check.

#### Returns
(boolean): Returns true if value is a boolean, else false.

#### Example
```
_.isBoolean(false);
// => true

_.isBoolean(null);
// => false
```

### isEqual
Performs a deep comparison between two values to determine if they are equivalent.

#### Arguments
value (x): The value to compare.
other (x): The other value to compare.

#### Returns
(boolean): Returns true if the values are equivalent, else false.

#### Example
```
var object = { 'a': 1 };
var other = { 'a': 1 };

_.isEqual(object, other);
// => true

object === other;
// => false
```

### isNull
Checks if value is null.

#### Arguments
value (x): The value to check.

#### Returns
(boolean): Returns true if value is null, else false.

#### Example
```
_.isNull(null);
// => true

_.isNull(void 0);
// => false
```

## Math

### add
Adds two numbers

#### Arguments
augend (number): The first number in an addition. <br>
addend (number): The second number in an addition.

#### Returns
(number): Returns the total.

#### Example
```
_.add(6, 4);
// => 10
```

### divide
Divides two numbers

#### Arguments
dividend (number): The first number in a division. <br>
divisor (number): The second number in a division.

#### Returns
(number): Returns the quotient.

#### Example
```
_.divide(6, 4);
// => 1.5
```

### max
Computes the maximum value of array. If array is empty or falsey, undefined is returned.

#### Arguments
array (Array): The array to iterate over.

#### Returns
(x): Returns the maximum value.

#### Example
```
_.max([4, 2, 8, 6]);
// => 8

_.max([]);
// => undefined
```

### maxBy
This method is like .max except that it accepts iteratee which is invoked for each element in array to generate the criterion by which the value is ranked. The iteratee is invoked with one argument: (value).

#### Arguments
array (Array): The array to iterate over. <br>
[iteratee=.identity] (Function): The iteratee invoked per element.

#### Returns
Returns the maximum value.

#### Example
```
var objects = [{ 'n': 1 }, { 'n': 2 }];

_.maxBy(objects, function(o) { return o.n; });
// => { 'n': 2 }

// The `_.property` iteratee shorthand.
_.maxBy(objects, 'n');
// => { 'n': 2 }
```

### mean
Computes the mean of the values in array.

#### Arguments
array (Array): The array to iterate over.

#### Returns
(number): Returns the mean.

#### Example
```
_.mean([4, 2, 8, 6]);
// => 5
```

### min
Computes the minimum value of array. If array is empty or falsey, undefined is returned.

#### Arguments
array (Array): The array to iterate over.

#### Returns
(x): Returns the minimum value.

#### Example
```
_.min([4, 2, 8, 6]);
// => 2

_.min([]);
// => undefined
```

### multiply
Multiply two numbers.

#### Arguments
multiplier (number): The first number in a multiplication. <br>
multiplicand (number): The second number in a multiplication.

#### Returns
(number): Returns the product.

#### Example
```
_.multiply(6, 4);
// => 24
```

### subtract
Subtract two numbers.

#### Arguments
minuend (number): The first number in a subtraction. <br>
subtrahend (number): The second number in a subtraction.

#### Returns
(number): Returns the difference.

#### Example
```
_.subtract(6, 4);
// => 2
```

### sum
Computes the sum of the values in array.

#### Arguments
array (Array): The array to iterate over.

#### Returns
(number): Returns the sum.

#### Example
```
_.sum([4, 2, 8, 6]);
// => 20
```

## string

### startsWith
Checks if string starts with the given target string.

#### Arguments
[string=''] (string): The string to inspect. <br>
[target] (string): The string to search for. <br>
[position=0] (number): The position to search from.

#### Returns
(boolean): Returns true if string starts with target, else false.

#### Example
```
_.startsWith('abc', 'a');
// => true

_.startsWith('abc', 'b');
// => false

_.startsWith('abc', 'b', 1);
// => true
```

### trim
Removes leading and trailing whitespace or specified characters from string.

#### Arguments
[string=''] (string): The string to trim. <br>
[chars=whitespace] (string): The characters to trim.

#### Returns
(string): Returns the trimmed string.

#### Example
```
_.trim('  abc  ');
// => 'abc'

_.trim('-_-abc-_-', '_-');
// => 'abc'

_.map(['  foo  ', '  bar  '], _.trim);
// => ['foo', 'bar']
```
