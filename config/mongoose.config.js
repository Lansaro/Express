const mongoose = require('mongoose');

mongoose
    .connect('mongodb://localhost/jokes_may_22', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Established a connection to the database'))
    .catch((err) => console.log('Something wrong with connection to the DB ', err));