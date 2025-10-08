const express = require('express');
require('./src/db/mongoose');
const appController = require('./appcontroller');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(appController);

app.listen(port, () => {
    console.log('Server is running on port ' + port);
});
