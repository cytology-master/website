function validateRequired(el) {
    if(isRequired(el)) {
        var valid = isEmpty(el)
        if (!valid) {
            setErrorMessage(el, "This field is required")
        }
        return valid
    }
    return true
}

function isRequired(el) {
    return ((typeof el.required == "boolean") && el.required || (typeof el.required == "string"))
}

function isEmpty(el) {
    return !el.valid || el.value == el.placeholder;
}