const {
    addProduct,
    editProduct,
} = require("./resolver");

const resolvers = {
    Query: {

    },
    Mutation: {
        addProduct: (parent, args) => addProduct(args),
        editProduct: (parent, args) => editProduct(args),
    }
};

const apolloData = {resolvers};

module.exports = {apolloData};
