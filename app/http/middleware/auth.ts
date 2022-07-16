import passport from "passport";
import {PassportConfig} from "../../../config/passport";
import {User} from "../../entities/User";

export class Auth{

    /**
     *
     * @constructor
     */
    static InitializeAuth () {
        PassportConfig.Init( passport,
             async ( email : string ) => await this.getUserByEmail( email ),
            async ( user_id : number ) => await this.getUserByID( user_id )
        )
    }

    /**
     *
     * @param email
     * @private
     */
    private static async getUserByEmail( email : string) {
        return await User.findOneBy( { email } )
    }

    /**
     *
     * @param user_id
     * @private
     */
    private static async getUserByID ( user_id : number ){
        return await User.findOneBy( { user_id } )
    }
}