const JokesController = require('../controllers/joke.controller');

module.exports = (app) => {
    app.get('/api/jokes', JokesController.getAllJokes);
    app.post('/api/jokes', JokesController.createNewJoke);
    app.get('/api/jokes/:id', JokesController.getOneJoke);
    app.put('/api/jokes/:id', JokesController.updateOneJoke);
    app.delete('/api/jokes/:id', JokesController.deleteOneJoke);
}