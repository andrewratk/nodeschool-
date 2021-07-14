const a = 1,
  b = 2,
  c = 3;

(() => {
  const b = 5,
    c = 6;
  (() => {
    const b = 8;
    console.log(`a: ${a}, b: ${b}, c: ${c}`);
    (() => {
      const a = 7,
        c = 9;
      (() => {
        const a = 1,
          c = 8;
      })();
    })();
  })();
})();
