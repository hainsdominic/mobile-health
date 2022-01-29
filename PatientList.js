

const patients = []

for (let i = 0; i < 100; i++) { 

    const { v4: uuidv4 } = require('uuid')
    let faker = require('faker');

    let randomFirstName = faker.name.firstName();
    let randomLastName = faker.name.lastName();
    let randomPatientID = uuidv4();
    let randomProfession = faker.name.jobType();
    let randombirth = faker.date.past();
    let randomSex = (Math.random()>0.5)? "Male" : "Female";
    let randomAddress = faker.address.streetAddress(); 
    let randomPhoneNumber = faker.phone.phoneNumber(); 
    let randomCountry = faker.address.country(); 
    let randomHeight = Math.floor(Math.random() * (195 - 145 + 1)) + 145; 
    let randomWeight = Math.floor(Math.random() * (100 - 50 + 1)) + 50; 
    let randomBMI = randomWeight/((randomHeight/100)**2);
    let randomSmoker = (Math.random()>0.3)? "Yes" : "No";
    let randomExercise = (Math.random()>0.5)? "Yes" : "No";
    let BMiStatus;
    if (randomBMI < 18.5) {
        BMiStatus = "Underweight";
    }
    else if (18.5 <= randomBMI <= 24.9) {
        BMiStatus = "Normal weight";
    }
    else if (25 <= randomBMI <= 29.9) {
        BMiStatus = "Overweight";
    }
    else {
        BMiStatus = "Obesity";
    }
let patient = 

{
    "First Name" : randomFirstName,
    "Last Name": randomLastName,
    "Patient ID": randomPatientID,
    "Job Title": randomProfession,
    "Birth": randombirth,
    "Sex": randomSex,
    "Height": randomHeight,
    "Weight": randomWeight,
    "BMI": randomBMI.toPrecision(3) + " (" + BMiStatus + ")",
    "Smoker": randomSmoker,
    "Exercise": randomExercise,
    "Address": randomAddress,
    "Phone": randomPhoneNumber,
    "Email": randomFirstName + "." + randomLastName + "@gmail.com",
    "Country": randomCountry,

}

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