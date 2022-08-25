const express = require('express');
const app = express();
const cors = require('cors');
require('./database');

app.listen(3000);
console.log('server on port', 3000);


// settings
app.set('port', process.env.PORT || 4000)

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use('/api', require('./routes/index'));

app.listen(app.get('port'));
console.log('Server on port', app.get('port'));
