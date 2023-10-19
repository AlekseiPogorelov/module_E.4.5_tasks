const object = {a: 'red', s: 'blak', d: 'green'}
let color = 'green';

function hasProperty(color, obj) {
  const values = Object.values(obj);
  return values.includes(color);
}

console.log(hasProperty(color, object));