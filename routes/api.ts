import * as express from 'express'

/**
 *
 * API based routes are proceeded here
 *
 */

const Router = express.Router()

Router.get(  '/', (req, res) => {
    res.status(200).json({
        "status"  : "ok",
        "message" : "Yes API is working"
    })
})

module.exports = Router