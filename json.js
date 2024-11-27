const laptop ={price: 23444, brand: 'lenovo', memory: 4};
const stringified = JSON.stringify(laptop);

console.log(laptop);
console.log(stringified);

//output:
// { price: 23444, brand: 'lenovo', memory: 4 }
// {"price":23444,"brand":"lenovo","memory":4}