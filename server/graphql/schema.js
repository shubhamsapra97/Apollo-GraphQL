const { gql } = require('apollo-server');

const typeDefs = gql`
    type Product {
        _id: ID!
        name: String!
        price: String!
        imageUrl: String!
    }

    type Status {
        message: String!
    }

    enum SortBy {
        NAME
        PRICE
    }

    type Query {
        getProducts(
            sortBy: SortBy,
            offset: Int,
            limit: Int
        ): [Product]
    }

    type Mutation {
        addProduct(
            name: String!,
            price: Int!,
            imageUrl: String!
        ): Status

        editProduct(
            id: String!,
            name: String,
            price: Int,
            imageUrl: String
        ): Status

        deleteProduct(
            id: String!
        ): Status
    }
`;

module.exports = typeDefs;