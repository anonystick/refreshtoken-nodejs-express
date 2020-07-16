var express = require('express');
var router = express.Router();


router.use(require('../middleware/checkToken'))
/* GET users listing. */
router.get('/', function (req, res) {
  const users = [{
    username: 'Cr7',
    team: 'Juve',
  }, {
    username: 'Messi',
    team: 'Barca',
  }]
  res.json({ status: 'success', elements: users })
})

module.exports = router;
