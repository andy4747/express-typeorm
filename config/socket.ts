export class SocketConfig{

    static io : any

    static Init( server : any ){
        return this.io = require("socket.io")(server, {
            cors : {
                origin : "*"
            }
        })
    }
}