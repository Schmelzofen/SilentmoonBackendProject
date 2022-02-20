const { getPlaylistByMood, getPlaylistById, getPlaylistMeditation, getPlaylistYoga } = require("../controller/spotifyController")
const { registrationController, loginController, loginRequired } = require("../controller/authController")
const { fileController } = require("../controller/fileController")
const { addFavoritesController, getFavoritesController } = require("../controller/favoritesController")
const { getUser } = require("../db/DAO")


const routes = (app) => {
    // Get Playlist by Mood
    app.route("/api/mood/:query")
        .get((req, res) => {
            const query = req.params.query
            getPlaylistByMood(query)
                .then((data) => res.send(data))
        })
    app.route("/api/playlist/:id")
        .get(getPlaylistById)
    // add to Favorites
    app.route("/api/favorite")
        .post(addFavoritesController)
    app.route("/api/favorite/:id")
        .get(getFavoritesController)
    // Profile Picture
    app.route("/profile/file")
        .post(fileController)
    // Get all User
    app.route("/api/user")
        .get(loginRequired, getUser)
    // Get Yoga & Meditation Music
    app.route("/api/get/yoga")
        .get(getPlaylistYoga)
    app.route("/api/get/meditation")
        .get(getPlaylistMeditation)
    // Login
    app.route("/auth/login")
        .post(loginController)
    // Registration
    app.route("/auth/registration")
        .post(registrationController)
}



module.exports = {
    routes
}