/*
function as variables.
functions can be treated like a variable
in JS,, functions are first class citizens(like data types).
*/

function f(){
  console.log('Hi there');
  return [5, 6, 7, {name: 'Abhishek'}, 9, 10];
}

let x = f()

//f takes some data types, does some processing and returns some data type
// like everytihng in js can be represented via a variable, lly functions can be represented as varibles.

let g = function (i, j, k) {
  console.log('blah', i+j+k);
}

g(10, 20 , 30)

//always use variables to store/refer functions
/*
Hosit -> javascript will hoist your varibales on global scope, but will not assign a value. Value will be assigned at runtime(when code actually runs)
call stack          heap

f() f() g()
                    Add3 -> g
                    Add2 -> x
                    Add1 - f
main()
*/
