const { fakerDE } = require('@faker-js/faker');

for (let i = 0; i < 10; i++) {
    console.log(fakerDE.finance.iban());
}

for (let i = 0; i < 10; i++) {
    console.log(fakerDE.animal.fish());
}

for (let i = 0; i < 10; i++) {
    console.log(fakerDE.color.rgb());
}

for (let i = 0; i < 10; i++) {
    console.log(fakerDE.person.fullName());
}

for (let i = 0; i < 10; i++) {
    console.log(fakerDE.number.hex());
}

for (let i = 0; i < 10; i++) {
    console.log(fakerDE.vehicle.bicycle());
}