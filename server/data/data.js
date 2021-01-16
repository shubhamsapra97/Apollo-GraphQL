const {ObjectId} = require("mongodb");
const {getDb} = require("../utils/mongoUtil");

const findOneProduct = async (args) => {
    return await getDb().collection("product").findOne({...args});
}

const createProduct = async args => {
    await getDb().collection("product").insertOne({...args});
}

const updateProduct = async args => {
    const {id, data} = args;

    await getDb().collection("product").updateOne({
        _id: ObjectId(id)
    }, {
        "$set": {...data}
    });
}

module.exports = {
    findOneProduct,
    createProduct,
    updateProduct,
};
