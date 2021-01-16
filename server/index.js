const { ApolloServer } = require('apollo-server');
const {apolloData} = require("./graphql/core");
const {connectToServer} = require('./utils/mongoUtil');

connectToServer();

const server = new ApolloServer({ ...apolloData });
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
