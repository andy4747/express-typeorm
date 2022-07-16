import passportLocal from "passport-local"

export class PassportConfig{

    static Init(passport : any, getUserByEmail : any, getUserByUserID : any ){
        passport.use( new passportLocal.Strategy({ usernameField : "email"},() => {} ))
        passport.serializeUser( ( user : any, done : any ) => done(null, user.user_id ) )
        passport.deserializeUser( async ( user_id : number, done : any) => done( null, await getUserByUserID( user_id ) ) )
    }
}