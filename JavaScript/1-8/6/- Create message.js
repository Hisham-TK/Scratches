function createMessage(a, s = []) {
  return addSpace();
}
function addSpace(s) {
  return s + ' ';
}
console.log(
  createMessage('Hello')('World!')('how')('are')('you?')(),
  'Hello World! how are you?'
);
