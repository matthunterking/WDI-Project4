const port = process.env.PORT || 4000;
const env = process.env.NODE_ENV || 'dev';
const dbURI = process.env.MONGOD_UI || `mongodb://localhost/lovelocator-${env}`;
const secret = process.env.SECRET || 'loveisallaround';

module.exports = { port, dbURI, secret, env };
