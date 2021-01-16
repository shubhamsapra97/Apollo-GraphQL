const { ApolloServer } = require('apollo-server');
const {connectToServer} = require('./utils/mongoUtil');

connectToServer();

const server = new ApolloServer({ });
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
