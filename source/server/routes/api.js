const express = require('express'),
      router = express.Router(),
      config = require('config');

/* GET configuration variables */
router.get('/', (req, res) => {       
  res.send({"env_variables":config.util.toObject()});
});

module.exports = router;