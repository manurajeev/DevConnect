const express = require('express');
const mongoose= require('mongoose');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');



//DB Config
const db = require('./config/keys').mongoURI;

//Connect to mongoDB
mongoose.
    connect(db).
    then(() => console.log('MongoDB is up and running')).
    catch(err => console.log(err));

const app = express();

//User routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);





app.get('/',(req,res) => res.send('Hello there!!'));

const port = process.env.port || 5000;

app.listen(port, () => console.log(`Server is running on ${port}`));