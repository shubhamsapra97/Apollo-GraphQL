const _ = require("lodash");
const {ObjectId} = require('mongodb');
const {
    removeNoneList,
    removeNoneObject
} = require("../utils/utils");
const {
    findOneProduct,
    createProduct,
    updateProduct,
    removeProduct,
    getProductsData
} = require("../data/data");

const addProduct = async data => {
    const {name, price, imageUrl} = data;

    const validInsertData = removeNoneList([name, price, imageUrl]);
    if (validInsertData.length < 3) {
        return {
            message: "Invalid Arguments"
        }
    }
    try {
        const productDetails = await findOneProduct({name});
        if (productDetails) {
            return {
                message: "Product with same name already exists!"
            };
        }

        await createProduct({
            name,
            price,
            imageUrl
        });

        return {
            message: "Product created successfully!",
        };

    } catch(err) {
        return {
            message: "Something went wrong!",
        };
    }
};

const editProduct = async data => {
    const {id, name, price, imageUrl} = data;

    const validUpdatedData = removeNoneObject({name, price, imageUrl});
    if (Object.keys(validUpdatedData).length == 0) {
        return {
            message: "Invalid Arguments"
        }
    }

    try {

        // Note:
        // not checking for product(to be updated) to exist
        // because FE won't have the id of the product
        // if it doesn't exist

        if (name) {
            const productDetails = await findOneProduct({name});
            if (productDetails) {
                return {
                    message: `Product updation failed. Product 
                    with  same name already exists!`
                };
            }
        }

        await updateProduct({
            id,
            data: {...validUpdatedData}
        });

        return {
            message: "Product updated successfully!",
        };

    } catch(err) {
        return {
            message: "Something went wrong!",
        };
    }
};

const deleteProduct = async data => {
    const {id} = data;

    try {

        const productDetails = await findOneProduct({_id: ObjectId(id)});
        if (!productDetails) {
            return {
                message: "Product not found!"
            };
        }

        await removeProduct({id});

        return {
            message: "Product deleted successfully!",
        };

    } catch(err) {
        return {
            message: "Something went wrong!",
        };
    }
};

const getProducts = async data => {
    let {sortBy, offset, limit} = data;

    if (!limit) limit = 5;
    if (!offset) offset = 0;
    if (!sortBy) sortBy = "name";

    sortBy = sortBy.toLowerCase();
    try {
        return await getProductsData({sortBy, offset, limit});
    } catch(err) {
        return {
            message: "Something went wrong!"
        };
    }
};

module.exports = {
    getProducts,
    addProduct,
    editProduct,
    deleteProduct
};
