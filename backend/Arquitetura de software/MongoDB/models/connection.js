const { MongoClient } = require('mongodb');

const OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

let db = null;

const connection = () => {
    return db
    ? Promise.resolve(db)
    : MongoClient.connect(process.env.DB_URL, OPTIONS)
    .then((conn) => conn.db(process.env.DB_NAME))
};

module.exports = connection;
