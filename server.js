const express = require("express");
const app = express();
const faker = require("faker");
const port = 8000;

// DECLARE MAIN ENTITIES
let newUser, newCompany;

app.get("/api", (req, res) => {
    res.json({ message: "Fake Server is running..." });
});

// CREATING USER
const createUser = () => {
    return {
        _id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.phoneNumber(),
    };
};

// CREATING COMPANY
const createCompany = () => {
    return {
        _id: faker.datatype.uuid(),
        name: faker.company.companyName(),
        address: {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country(),
        },
    };
};

// GETTING ALL USERS
app.get("/api/users", (req, res) => {
    res.json({ message: { users } });
});

// GETTING ALL COMPANIES
app.get("/api/companies", (req, res) => {
    res.json({ message: { companies } });
});

// CREATE NEW USER
app.get("/api/users/new", (req, res) => {
    newUser = createUser();
    res.json(newUser);
});

// CREATE NEW COMPANY
app.get("/api/companies/new", (req, res) => {
    newCompany = createCompany();
    res.json(newCompany);
});

// RETURN NEW USER AND COMPANY (already generated)
app.get("/api/user/company", (req, res) => {
    const currentObj = {
        user: newUser,
        company: newCompany,
    };
    res.json(currentObj);
});

// MUST HAVE AT THE END TO RUN SERVER
const server = app.listen(port, () => console.log(`Server is running on ${server.address().port}!`));