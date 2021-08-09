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

// Connection withoout .env
// const { MongoClient } = require('mongodb');

// const MONGO_DB_URL = 'mongodb://127.0.0.1:27017';

// let schema = null;

// async function connection() {
//   if (schema) return Promise.resolve(schema);
//   return MongoClient
//     .connect(MONGO_DB_URL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     })
//     .then((conn) => conn.db('model_example'))
//     .then((dbSchema) => {
//       schema = dbSchema;
//       return schema;
//     })
//     .catch((err) => {
//       console.error(err);
//     });
// }

// module.exports = connection;
