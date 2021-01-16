import { gql } from '@apollo/client';

export const GET_PRODUCT_LIST = gql`
    query getProductList(
        $limit: Int,
        $offset: Int,
        $sortBy: SortBy
    ) {
        getProducts(
            limit: $limit
            offset: $offset
            sortBy: $sortBy
        ) {
            name
            price
            imageUrl
        }
    }
`;