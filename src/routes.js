const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

// Rota principal teste
routes.get('/', (req, res) => {
    return res.json({'message': 'Hello world!'});
});

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.delete('/devs', DevController.destroy);

routes.get('/search', SearchController.index);

module.exports = routes;