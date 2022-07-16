import express from "express";
import {HomeController} from "../app/http/controllers/home.controller";

/**
 *
 * Web based routes are proceeded here
 *
 */

const Router = express.Router()

Router.get("/",HomeController.index)

module.exports = Router