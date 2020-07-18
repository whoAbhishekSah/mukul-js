//v8 call stack

function foo(){
  bar()
  console.log('foo');
}

function bar(){
  baz()
  console.log('bar');
}

function baz(){
  console.log('baz');
}

foo();
console.log('the end')
//node demo1.js   - main starts running demo1 file
//V8 internal consist of 2 parts
//Stack is - LIFO
//Call stack will push a function on stack when called, will pop() when function returns.


/* Call stack      Memory Heap(Space in RAM to store variables)
main()
*/


//baz
//bar
//foo
//the end
