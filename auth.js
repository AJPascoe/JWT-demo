const bcrypt = require("bcrypt");
const ExtractJWT = require("passport-jwt").ExtractJWT;
const JWTStrategy = require("passport-jwt"). Strategy;
const LocalStrategy = require("passport-local").Strategy;

const User = require("./models/user");

const register = async(name, pasword, done) =>{
    const saltRounds = 10;

    try{
        if(!name){
            throw new Error("A name was not provided");
        }
        const salt = await bcrypt.genSalt(saltRounds);
        const hash = await bcrypt.hash(password, salt);
        const user = await user.build({name, passwordHash: hash});
        try{
            await user.save();
            done(null, user);
        } catch (error){
            return done(null, {});
        }

    } catch(error){
        done(error);
    }
};
const verify = async(token, done) => {
    try{
        done(null, token.user);
    } catch(error){
        done(error);
    }
};
const login = () => {};

const verifyStrategy = new JWTStrategy({
    secretOrKey: process.env.SECRET_KEY, 
    jwtFromRequest: ExtractJwt.fromUrlQuerryParameter("secret_token")
}, verify);
const registerStrategy = new LocalStrategy({usernameField: 'name', passwordField: 'password'}, register);

module.exports ={
    registerStrategy,
    verifyStrategy,
}