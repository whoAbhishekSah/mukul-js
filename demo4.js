//function as first class citizen
//if a fn can be treated like a variable, it can be passed around as a variable in other functions

let g = function (){
  return 50
}

let h = function (a, someFunction){
  console.log(a + someFunction())
}

let e = function (a, someFunction){
  return(a + someFunction())
}
let m = function (a) {
  let b = 10;
  let c = function (){
    return 10;
  }
  let v =  a + b + c() + e(5, c) + g();
  return v;
}

h(10, g)  //g will be passed by reference
let res = m(20)
console.log(res)

