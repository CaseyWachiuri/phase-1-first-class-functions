function receivesAFunction(dosth) {
  return dosth();
}

function returnsANamedFunction() {
  return function hello() {};
}

function returnsAnAnonymousFunction() {
  return function() {};
}
