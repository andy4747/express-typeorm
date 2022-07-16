import {Server} from "./server"
import hbs from "hbs"
import path from "path"
import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import session from "express-session";
import passport from "passport";
import cors from "cors"
import {CorsConfig} from "./config/cors";

const server    = new Server()
const app       = server.app

export const openServer = app.listen( process.env.APP_PORT || 5000, () => {

    const staticPath    =   path.join( __dirname, "/" );
    const viewPath      =   path.join( __dirname, "/resources/views" );
    const partialPath   =   path.join( __dirname, "/resources/views/partials" );
    const hbsUtils      =   require("hbs-utils")(hbs)

    app.set("view engine", "hbs")
    app.set("views", viewPath)
    app.set('view options', { layout: 'app' });

    app.use( express.static(staticPath) )
    app.use( bodyParser.urlencoded( { extended : true } ))
    app.use( bodyParser.json() )
    app.use( cookieParser() )
    app.use( cors(CorsConfig.Init()) )
    app.use( session({
        secret: "someKey",
        resave: false,
        saveUninitialized: false,
        cookie: { maxAge : 500 * 60 * 60 * 1000 }
    }))
    app.use( passport.initialize() )
    app.use( passport.session() )

    hbsUtils.registerPartials( partialPath );
    hbsUtils.registerWatchedPartials( partialPath );

    app.use( "/api", require("./routes/api") )
    app.use( require("./routes/web") )

    server.InitializeServer()
})