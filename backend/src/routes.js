const express = require('express');

const OngCotroller = require('./controllers/OngController')
const IncidentCotroller = require('./controllers/IncidentController')
const ProfileCotroller = require('./controllers/ProfileController')
const SessionCotroller = require('./controllers/SessionController')

const routes = express.Router();

routes.post('/sessions', SessionCotroller.create);

routes.get('/ongs', OngCotroller.index);
routes.post('/ongs', OngCotroller.create);

routes.get('/profile', ProfileCotroller.index);

routes.get('/incidents', IncidentCotroller.index);
routes.post('/incidents', IncidentCotroller.create);
routes.delete('/incidents/:id', IncidentCotroller.delete);

module.exports = routes;