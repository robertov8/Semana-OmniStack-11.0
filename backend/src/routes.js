const routes = require('express').Router();
const { celebrate, Segments, Joi } = require('celebrate');

const OngValidator = require('./validators/OngsValidator');
const ProfileValidator = require('./validators/ProfileValidator');
const IncidentValidator = require('./validators/IncidentValidator');

const SessionController = require('./controllers/SessionController');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngValidator.create(), OngController.create);

routes.get('/profile', ProfileValidator.index(), ProfileController.index);

routes.get('/incidents', IncidentValidator.index(), IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete(
  '/incidents/:id',
  IncidentValidator.delete(),
  IncidentController.delete
);

module.exports = routes;
