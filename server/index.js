require("dotenv").config()
const express = require("express")
const { routes } = require("./src/routes/crmRoutes")
const app = express()
const helmet = require("helmet")
const cors = require("cors")
const bodyParser = require("body-parser")
const jsonwebtoken = require("jsonwebtoken")


app.use(cors())
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb' }));
app.use(helmet())

app.use((req, res, next) => {
    if (req.headers && req.headers.authorization && req.headers.authorization.split(" ")[0] === "JWT") {
        jsonwebtoken.verify(req.headers.authorization.split(" ")[1], process.env.SECRETKEY, (err, decode) => {
            req.user = err ? undefined : decode
            next()
        })
    } else {
        req.user = undefined
        next()
    }
})

routes(app)

const PORT = process.env.PORT || 5000
app.listen(PORT, function () {
    console.log("Listening on port " + PORT)
})