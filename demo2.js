//local vs global scope
//Memory heap
let i = 0;
function foo(){
  let j = 10;
  bar()
  i+=j;
  console.log(i);
}

function bar(){
  let j = 20;
  baz()
  i+=j;
  console.log(i);
}

function baz(){
  let j = 30;
  i+=30;
  console.log(i);
}

foo();
console.log('the end', i)
//node demo1.js   - main starts running demo1 file
//V8 internal consist of 2 parts
//Stack is - LIFO
//Call stack will push a function on stack when called, will pop() when function returns.


/* Call stack      Memory Heap(Space in RAM to store variables)


                    ADD4 -> baz
                    ADD3 -> bar
                    ADD2 -> foo
                    ADD1 -> i = 60
main()
*/

/*
30
50
60
the end 60
*/
