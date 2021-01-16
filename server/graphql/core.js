const typeDefs = require("./schema");
const {
    addProduct,
    editProduct,
    deleteProduct,
    getProducts,
} = require("./resolver");

const resolvers = {
    Query: {
        getProducts: (parent, args) => getProducts(args),
    },
    Mutation: {
        addProduct: (parent, args) => addProduct(args),
        editProduct: (parent, args) => editProduct(args),
        deleteProduct: (parent, args) => deleteProduct(args)
    }
};

const apolloData = {typeDefs, resolvers};

module.exports = {apolloData};
