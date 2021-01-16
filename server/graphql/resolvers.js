const _ = require("lodash");
const {ObjectId} = require('mongodb');
const {
    removeNoneList,
    removeNoneObject
} = require("../utils/utils");
const {
    findOneProduct,
    createProduct,
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

modules.exports = {
    addProduct
};
