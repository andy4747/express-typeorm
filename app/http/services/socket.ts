import {SocketConfig} from "../../../config/socket";

export class SocketConnection {

    static Connect(){
        SocketConfig.io.on("connection", ( socket : any ) => {
            // Do What You Want On Connection
        })
    }
}