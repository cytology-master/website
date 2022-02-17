var validateType = {
    "phone": function(el) {
        const valid = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(el.value)
        if(!valid) {
            setErrorMessage(el, "Phone number must be like this: +7(903)888-88-88")
        }
        return valid
    },
    "number": function(el) {
        const valid = /^\d+$/.test(el.value)
        if(!valid) {
            setErrorMessage(el, "Phone number must be like this: +7(903)888-88-88")
        }
        return valid
    }
}
function validateTypes(el) {
    if(!el.value) return true

    var type = $(el).data('type') || el.getAttribute('type')
    if(typeof validateType[type] === 'function') {
        return validateType[type](el)
    } else {
        return true
    }
}