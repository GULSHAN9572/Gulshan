let emp ={
    id: 101,
    name: 'Gulshan',
    age: 24
};
let keys = Object.keys(emp);
console.log(keys);

let values =Object.values(emp);
console.log(values);

let entries = Object.entries(emp);
console.log(entries);

// Object.freeze(emp);  // freeze kar dene se koi value update nhi hita he
Object.seal(emp);  // seel me sifr update allow rahega ,add ya remove nhi .
emp.id = 100;
console.log(emp);

let o = Object.assign({},emp);
console.log(o);