const object = {a: 5, s: 7, d: 9}
function objectProperties(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(`${key}: ${obj[key]}`)
    }
  }
}
objectProperties(object);