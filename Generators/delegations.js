function* g1() {
    yield 2;
    yield 3;
    yield 4;
  }
  
  function* g2() {
    yield 1;
    yield* g1();
    yield 5;
  }
  
  const gen = g2();
  
  console.log(gen.next()); // {value: 1, done: false}
  console.log(gen.next()); // {value: 2, done: false}
  console.log(gen.next()); // {value: 3, done: false}
  console.log(gen.next()); // {value: 4, done: false}
  console.log(gen.next()); // {value: 5, done: false}
  console.log(gen.next()); // {value: undefined, done: true}

  function* g3(...args) {
    yield* [1, 2];
    yield* "34";
    yield* args;
  }
  
  const gen2 = g3(5, 6);
  
  console.log(gen2.next()); // {value: 1, done: false}
  console.log(gen2.next()); // {value: 2, done: false}
  console.log(gen2.next()); // {value: "3", done: false}
  console.log(gen2.next()); // {value: "4", done: false}
  console.log(gen2.next()); // {value: 5, done: false}
  console.log(gen2.next()); // {value: 6, done: false}
  console.log(gen2.next()); // {value: undefined, done: true}  