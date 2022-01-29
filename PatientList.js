const patients = [];
for (let i = 0; i < 100; i++) {
    var faker = require('faker');

    var randomName = faker.name.findName();
    var randombirth = faker.date.past();
    //var randomSex = faker.name.findName();
    var randomAddress = faker.address.streetAddress();
    var randomCity = faker.address.city();
    var randomState = faker.address.state();
    var randomCountry = faker.address.country();
    var randombirth = faker.date.past();
    var randombirth = faker.date.past();

    let patient = {
        name: `${randomName}`,
        birth: `${randombirth}`,
        Sex: 'Male',
        streetAddress: `${randomAddress}`,
        city: `${randomCity}`,
        state: `${randomState}`,
        country: `${randomCountry}`,
    };

    patients.push(patient);
}
export { patients };
