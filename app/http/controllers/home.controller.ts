import {Request, Response} from "express";

export class HomeController {

    /**
     * 
     * @param request
     * @param response
     */
    static index ( request : Request, response : Response) {
        response.render("home/welcome", { title : "Welcome Title" })
    }
}