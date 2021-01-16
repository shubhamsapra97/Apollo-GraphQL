import React from "react";
import { useQuery } from '@apollo/client';
import {GET_PRODUCT_LIST} from "./queries/getProductList";

const ProductList = () => {

    const { loading, error, data } = useQuery(GET_PRODUCT_LIST, {
        variables: {
            limit: 5,
            offset: 0,
            sortBy: "NAME"
        },
        fetchPolicy: "cache-and-network"
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    if (!data.getProducts.length) return <p>No Products!</p>;

    return data.getProducts.map(({ name, price, imageUrl }) => (
        <div key={name}>
          <p>
            Name: {name}
          </p>
          <p>
            Price: {price}
          </p>
          <p>
            Url: {imageUrl}
          </p>
        </div>
      ));

}

export default ProductList;