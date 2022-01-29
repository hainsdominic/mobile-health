

const patients = []

for (let i = 0; i < 100; i++) { 

    var faker = require('faker');

    var randomFirstName = faker.name.firstName();
    var randomLastName = faker.name.lastName();
    var randombirth = faker.date.past();
    var randomGender = faker.name.gender();
    var randomAddress = faker.address.streetAddress(); 
    var randomPhoneNumber = faker.phone.phoneNumber(); 
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

var jsonString= JSON.stringify(patient);

// let patient = JSONObject()
// patient.put('Name', randomFirstName + " " + randomLastName)
// patient.put('Birth', randombirth)
// patient.put('Gender', randomGender)
// patient.put('Address', randomAddress)
// patient.put('Phone', randomPhoneNumber)
// patient.put('Email', randomFirstName + "." + randomLastName + "@gmail.com")
// patient.put('Country', randomCountry)

patients.push(jsonString);
}
console.log(patients);