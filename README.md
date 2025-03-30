# Exercise 3 (FP: Zero To Monad - Workshop)

In this exercise, you will fill out the implementation of `compute()` (and add other functions, as necessary) to adhere to the following requirements:

1. accepts an array of values (named `tokens`) as its first parameter, which may include:
    - numbers (`3`, `-7`)
    - arithmetic operators (`"+"`, `"-"`, `"*"`, `"/"`)
    - grouping operators (`"("`, `")"`)
2. the values in this array represent math operations in "infix order" (e.g., `2 + 3 * 4` -- which results in `14`)
3. compute the result of all the math operations (as if entered into a calculator), respecting the grouping precedence as well as operator precedence -- (multiplication/division are higher precedence than addition/subtration) -- and otherwise operates left-to-right
4. If unexpected values or operators (e.g., unbalanced parentheses) are encountered, throw an error
5. HINT: you will need to implement something like a recursive-descent parser; this is fairly challenging and advanced, so don't feel bad if the domain of this exercise is beyond your knowledge

## Tests

The `runTests(compute)` call invokes the tests (in `./test.js`). It should complete with no failures listed.

## License

All code and documentation are (c) 2025 Kyle Simpson and released under the [MIT License](http://getify.mit-license.org/). A copy of the MIT License [is also included](LICENSE.txt).
