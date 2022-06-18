const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json(), express.urlencoded({extended: true}));
app.use(cors());
app.use(express.json());

require('./config/mongoose.config');
const JokeRoutes = require('./routes/joke.routes');
JokeRoutes(app);

app.listen(8000, () => console.log('Server is running on port 8000'));