import { createHash } from 'crypto'
import User from '../model/user'

export const singup = function(req, res) {
    if(!req.body) return res.sendStatus(400)
    console.log(req.body)
    const name = req.body.name
    const email = req.body.email
    const password = createHash('sha256').update(req.body.passwd).digest("base64")
    const user = new User({'name': name, 'email': email, 'password': password})
    console.log(user)
    user.save(function(err) {
        if(err) return console.log(err)
        res.redirect("/usr")
    })
}