const {
    addProduct,
} = require("./resolver");

const resolvers = {
    Query: {

    },
    Mutation: {
        addProduct: (parent, args) => addProduct(args),
    }
};

const apolloData = {resolvers};

module.exports = {apolloData};
