import Clarifai from 'clarifai';

const app = new Clarifai.App({
  apiKey: "Your API Key here",
});

const handleApiCall = (req, res) => {
  app.models
    .predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => res.status(400).json('unable to work with API'));
};

const handleImage = (req, res, db) => {
  const { id } = req.body;
  db.select('*')
    .from('users')
    .where({ id })
    .increment('entries', 1)
    .returning('entries')
    .then((entries) => res.json(entries[0]))
    .catch((err) => res.status(400).json('unable to get entries'));
};

export { handleImage, handleApiCall };
