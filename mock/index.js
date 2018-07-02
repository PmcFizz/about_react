let express = require('express');
let app = express();
let common = require('./common/index');

common.getCommonApi(app);

app.listen(4000, function () {
  console.log('HTTP server at localhost: 4000');
})