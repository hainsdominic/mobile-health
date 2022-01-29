

const patients = []

for (let i = 0; i < 100; i++) { 

    var faker = require('faker');

    var randomFirstName = faker.name.firstName();
    var randomLastName = faker.name.lastName();
    var randombirth = faker.date.past();
    var randomGender = faker.name.gender();
    var randomAddress = faker.address.streetAddress(); 
    var randomPhoneNumber = faker.phone.phoneNumber(); 
    var randomEmail = faker.internet.email();
    var randomCountry = faker.address.country(); 
  
let patient = 


{
    "Name" : randomFirstName + " " + randomLastName,
    "Birth": randombirth,
    "Gender": randomGender,
    "Address": randomAddress,
    "Phone": randomPhoneNumber,
    "Email": randomFirstName + "." + randomLastName + "@gmail.com",
    "Country": randomCountry,

};

patients.push(patient);
}
console.log(patients);