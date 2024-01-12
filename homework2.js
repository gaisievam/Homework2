const shop = 'Intertop';
let cAddress = 6368;
let office = {
    id: 1,
    customerName: 'Maral',
    city: 'Oral',
    sale: true,
    amount: 1000,
    country: null,
};

delete office.city;
delete office['amount'];
console.log(office);

office.newCustomer = 'Aruzhan';
office['phonenumber'] = 87774455123;
console.log(office);

//2
let vehicle ={
    brandName: 'BMW',
    model: 'X5',
}

vehicle.model = 'sClass';
console.log(vehicle);

delete vehicle.model;
console.log(vehicle);

//3
let salaries = {
	Aroo: 100,
	Dalida: 160,
	Samat: 130
}

let sum = 0;
for(let key in salaries){
    sum += salaries[key];
}

console.log("Вся зарплата = ", sum, "тг.");