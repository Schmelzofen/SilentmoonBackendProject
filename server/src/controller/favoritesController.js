const { connect } = require("../db/connection")
const ObjectId = require("mongodb").ObjectId

const DUMMY_PRODUCTS = []

async function addFavoritesController(req, res) {
    const db = await connect()
    const { id, src, name, userId } = req.body;
    console.log(req.body)
    const createdProduct = {
        id,
        src,
        name,
    };
    const findUser = await db.collection("silentmoon").updateOne({ _id: ObjectId(userId) }, { $addToSet: { favorites: createdProduct } }, { upsert: true })
    res.status(200).json({ message: "ok", list: DUMMY_PRODUCTS });
}

async function getFavoritesController(req, res) {
    const db = await connect()
    const id = req.params.id
    console.log(id)
    const favoriteList = await db.collection("silentmoon").findOne({ _id: ObjectId(id) })
    console.log(favoriteList.favorites)
    res.status(200).json({ message: "ok", list: favoriteList.favorites });
}

module.exports = { addFavoritesController, getFavoritesController }