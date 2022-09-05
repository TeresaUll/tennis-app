const mongoose = require('mongoose');
//const url = 'mongodb://localhost/angular-auth';
const url = 'mongodb+srv://tbonetcosta:teresamarta@cluster0.scnjfdg.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('Database is connected'))
    .catch(err => console.log(err));
    