var login_users = []

export const addId = function(id) {
    login_users.push(id)
}

export const removeId = function(id) {
    login_users = login_users.filter(function(val){
        return val !== id
    })
}
export const hasId = function(id) {
    return login_users.includes(id)
}
export const getList = () => {return login_users}