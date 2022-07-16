import express from "express"
import * as core from "express-serve-static-core"
import * as dotenv from "dotenv"
import {TypeOrmConfig} from "./config/database";
import {Auth} from "./app/http/middleware/auth";
import {SocketConfig} from "./config/socket";
import {openServer} from "./index";
import {SocketConnection} from "./app/http/services/socket";

export class Server {

    app: core.Application = express();

    /**
     *
     * Server Startup Function
     *
     */
    InitializeServer () {
        dotenv.config( { path : __dirname + "/.env"} )
        Server.Init()
    }

    /**
     *
     * Initialize Startup Module Here
     *
     */
    private static Init () {
        TypeOrmConfig.Init().then( async () => {
            Auth.InitializeAuth()
            SocketConfig.Init( openServer )
            SocketConnection.Connect()
        })
    }
}