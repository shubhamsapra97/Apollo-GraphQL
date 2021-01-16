const {ObjectId} = require("mongodb");
const {getDb} = require("../utils/mongoUtil");

const findOneProduct = async (args) => {
    return await getDb().collection("product").findOne({...args});
}

const createProduct = async args => {
    await getDb().collection("product").insertOne({...args});
}

module.exports = {
    findOneProduct,
    createProduct,
};
