const Joke = require('../models/joke.model');

const getAllJokes = (req, res) => {
    Joke.find()
        .then((allJokes) => {
            res.json(allJokes)
        })
        .catch((err) => res.status(400).json(err));
};

const createNewJoke = (req, res) => {
    Joke.create(req.body)
        .then((newJoke) => {
            res.json(newJoke)
        })
        .catch((err) => res.status(400).json(err));
};

const getOneJoke = (req, res) => {
    Joke.findOne({_id: req.params.id})
        .then((joke) => {
            res.json(joke)
        })
        .catch((err) => res.status(400).json(err));
};

const updateOneJoke = (req, res) => {
    Joke.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
        .then((updatedJoke) => res.json(updatedJoke))
        .catch((err) => res.status(400).json(err));
};

const deleteOneJoke = (req, res) => {
    Joke.deleteOne({_id: req.params.id})
        .then((mongooseResponse) => res.json(mongooseResponse))
        .catch((err) => res.status(400).json(err));
};

module.exports = {
    getAllJokes,
    createNewJoke,
    getOneJoke,
    updateOneJoke,
    deleteOneJoke
}