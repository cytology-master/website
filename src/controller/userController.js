import User from "../model/user"
import { getList, hasId, removeId } from "../model/online"

export const singup = function(request, response) {
    response.render("form.hbs", {
        "other_styles": ["form"],
        "placeholder": true,
        "use_awesome": true,
        "other_scripts": ["form"]
    })
}
export const dashboard = function(request, response) {
    var id = request.session.userid
    if(id === undefined) {
        id = request.query.userid
        if(hasId(id)) {
            removeId(id)
            request.session.userid = id
        } else {
            id = undefined
        }
    }
    if(id === undefined) return response.redirect("/users/singup")
    response.send("Success!")
}