let f = () => {
  console.log("clicked");
  setTimeout(g, 3000)
  console.log("done");
};

let g = () => {
  console.log('from g, done')
};

f();
