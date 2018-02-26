var express = require('express');
var router = express.Router();
// const swaggerUi = require('swagger-ui-express');
// const YAML = require('yamljs');
// const swaggerDocument = YAML.load('../swagger/booking_admin.yaml');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

router.get('/createzone', function(req, res, next) {
  res.render('createzone', { title: 'Create Zone' });
});

module.exports = router;
