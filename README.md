# Quicksort

Implement an iterative (no recursive calls) version of quicksort. Use the
template I've provided in `code.js`. Test your new function; I've provided some
basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

Hint: To make quicksort iterative, think about the part of the array each
recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

-----------------------------------------------------------------------------------------

I believe my runtime to be $\Theta(n^2)$

There are only two loops for this one but both are dictated by array length.

The first is a while loop that starts the sorting section of the algorithm.  This loop will run until the holder array is empty, which in it's worst case will be until every element in the array has been check which have a runtime of $n$

Then it will enter a for loop, this for loop is dictated by the "top" variable which at it's worst would be the very last element of the array, this will create a runtime of $n$ as well.

Thus I believe that my runtime should be $\Theta(n*n)$ = $\Theta(n^2)$

I ran my analysis by Ali in lab before I turned anything in because I wanted to make sure I was thinking about this properly this time.

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice
