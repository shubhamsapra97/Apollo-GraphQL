const { ApolloServer } = require('apollo-server');
const {apolloData} = require("./graphql/core");
const {connectToMongoServer} = require('./utils/mongoUtil');

connectToMongoServer();

const server = new ApolloServer({ ...apolloData });
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
