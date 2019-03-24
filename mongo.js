const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const env = require('./env/environment');

const mongoUri = `mongodb://${env.accountName}:${env.key}@${env.accountName}.documents.azure.com:${env.port}/${env.databaseName}?ssl=true`;

function connect() {
    mongoose.set('debug', true);
    return mongoose.connect(mongoUri, { useNewUrlParser: true})
    .then(() => {
        console.log("Successfully connected to the database");    
    }).catch(err => {
        console.log('Could not connect to the database. Exiting now...', err);
        process.exit();
    });
}
module.exports = {
    connect,
    mongoose
};