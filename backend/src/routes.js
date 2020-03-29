const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const OngCotroller = require('./controllers/OngController')
const IncidentCotroller = require('./controllers/IncidentController')
const ProfileCotroller = require('./controllers/ProfileController')
const SessionCotroller = require('./controllers/SessionController')

const routes = express.Router();

routes.post('/sessions',celebrate({
  [Segments.BODY]: Joi.object().keys({
    id: Joi.string().required(),
  })
}), SessionCotroller.create);

routes.get('/ongs', OngCotroller.index);

routes.post('/ongs', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    whatsapp: Joi.string().required().min(10).max(11),
    city: Joi.string().required(),
    uf: Joi.string().required().length(2),

  })
}), OngCotroller.create);

routes.get('/profile', celebrate({
  [Segments.HEADERS]:Joi.object({
    authorization: Joi.string().required(),
  }).unknown(),
}), ProfileCotroller.index);

routes.get('/incidents', celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number(),
  })
}), IncidentCotroller.index);

routes.post('/incidents', celebrate({
  [Segments.HEADERS]:Joi.object({
    authorization: Joi.string().required(),
  }).unknown(),

  [Segments.BODY]: Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().required(),
    value: Joi.number().required(), 
  })
}), IncidentCotroller.create);

routes.delete('/incidents/:id', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required(),
  })
}), IncidentCotroller.delete);

module.exports = routes;