const express = require("express");
const cors = require('cors');
const app = express();
const {PORT} = require("./config");
const {logErrors, errorHandler, boomErrorHandler} = require('./middlewares/error.handler');
app.use(express.json());
const whiteList = [
  'http://localhost:8080'
];
const options = {
  origin: (origin, callback) => {
    if (whiteList.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('no permitido.'));
    }
  }
}
app.use(cors(options));

const routerApi = require('./routes');
routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Listening in the PORT: ${PORT}`));

