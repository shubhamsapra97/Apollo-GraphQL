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

const removeProduct = async args => {
    const {id} = args;

    await getDb().collection("product").deleteOne({
        _id: ObjectId(id)
    });
}

const getProductsData = async args => {
    const {sortBy, limit, offset} = args;

    return await getDb().collection("product")
        .find()
        .sort({[sortBy]: 1})
        .skip(offset)
        .limit(limit)
        .toArray();

}

module.exports = {
    findOneProduct,
    createProduct,
    updateProduct,
    removeProduct,
    getProductsData
};
