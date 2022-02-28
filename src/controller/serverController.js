import { createHash } from 'crypto'
import { login_users } from '../model/online'
import User from '../model/user'

export const login = function(req, res) { // Log in
    if(!req.body) return res.sendStatus(400) // Stopping operation when no body
    // Getting information
    const name = req.body.name
    const password = createHash('sha256').update(req.body.passwd).digest("base64")
    find(name).exec(function(err, user){ // Checking information
        if(err) {
            res.sendStatus(500)
            return console.log(err)
        } else {
            if((user !== null) && (user.password == password)) { // When password is  valid
                login_users.push(user._id)
                console.log(login_users)
                res.redirect("/users")
            } else res.sendStatus(400)
        }
    })
}


export const singup = function(req, res) { // Sing up
    if(!req.body) return res.sendStatus(400) // Stopping operation when no body
    // Getting information
    const name = req.body.name
    const email = req.body.email
    const password = createHash('sha256').update(req.body.passwd).digest("base64")
    find(name).exec(function(err, usr){ // Checking username identify
        if(err) {
            res.sendStatus(500)
            return console.log(err)
        } else {
            if(usr === null) { // Checking for null(username wasn't alredy taken)
                // Createing user & saving it
                const user = new User({'name': name, 'email': email, 'password': password})
                user.save(function(err) {
                    if(err) {
                        res.sendStatus(500)
                        return console.log(err)
                    }
                    login_users.push(user._id)
                    console.log(login_users)
                    res.redirect("/users")
                })
            } else res.sendStatus(400)
        }
    })
}
const find = function(name) {
    return User.findOne({name: name})
}