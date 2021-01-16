const {
    addProduct,
    editProduct,
    deleteProduct
} = require("./resolver");

const resolvers = {
    Query: {

    },
    Mutation: {
        addProduct: (parent, args) => addProduct(args),
        editProduct: (parent, args) => editProduct(args),
        deleteProduct: (parent, args) => deleteProduct(args)
    }
};

const apolloData = {resolvers};

module.exports = {apolloData};
