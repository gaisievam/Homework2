const cName = "Maral";
let cAddress = 6368;
let pickle = {
    id: 1,
    price: 200,
    name: "pickle",
    type: vegetable,
    isEatable: true,
    amount: 1000,
};

let apple = {
    id: 2,
    price: 300,
    name: "apple",
    type: fruit,
    isEatable: true,
    amount: 20000,
};


//console.log(`New Order from ${cName}`)
for(let i = 0; i < 100; i++){
    pickle[`oreder ${i}`] = false;
}
console.log(pickle);

const products = [
    {
      id: 1,
      price: 500,
      name: 'pickle',
      type: 'vegetable',
      eatable: true,
      drinkable: undefined,
      amount: 10000,
    },
    {
      id: 2,
      price: 1250,
      name: 'apple',
      type: 'fruit',
      eatable: true,
      drinkable: undefined,
      left: 30,
    },
    {
      id: 23,
      price: 120,
      name: 'orange juice',
      type: 'juice',
      drinkable: true,
      eatable: true,
      left: 30,
    },
  ];


  for(let i = 0; i < products.length; i++){
    console.log(`name: ${products[i].name}, price: ${products[i].price}, drinkable: ${products[i].drinkable}`);
  }