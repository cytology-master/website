import { createHash } from 'crypto'
import User from '../model/user'

export const singup = function(req, res) { // Sing up
    if(!req.body) return res.sendStatus(400) // Stopping operation when no body
    // Getting information
    const name = req.body.name
    const email = req.body.email
    const password = createHash('sha256').update(req.body.passwd).digest("base64")
    if(find(name).exec(function(err, user){ // Checking username identify
        if(err) {
            console.log(err)
            return false
        } else {
            return user === null // Checking for null(username wasn't alredy taken)
        }
    })) {
        // Createing user & saving it
        const user = new User({'name': name, 'email': email, 'password': password})
        return user.save(function(err) {
            if(err) return console.log(err)
            res.redirect("/users")
        })
    }
    res.sendStatus(400)
}
const find = function(name) {
    return User.findOne({name: name})
}