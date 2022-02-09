import { createHash } from "crypto"
const users = []
export default class User {
    constructor(name, surname, username, email, password, bio, age) {
        this.name = name
        this.surname = surname
        this.username = username
        this.email = email
        this.bio = bio
        this.age = age
        this.passHash = createHash('sha1')
        this.passHash.update(password)
    }
    save() {
        users.push(this)
    }
    static getAll() {
        return users
    }
}