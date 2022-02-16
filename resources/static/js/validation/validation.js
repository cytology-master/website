(function() {

    for (var i = 0; i < document.forms.length; i++) {
        document.forms[i].noValidate = true
    }
    $("form").on("submit", function(e) {
        var elements = this.elements;
        var valid = {};
        var isValid, isFormValid;
        for (var i = 0, l = (elements.length - 1); i < l; i++) {
            isValid = validateRequired(elements[i]) && validateTypes(elements[i]);
            if (!isValid) showErrorMessage(elements[i]);
            else removeErrorMessage(elements[i]);
            valid[elements[i].id] = isValid;
        }

        if (!validatePasswords()) {
            showErrorMessage(document.getElementById("passwd-retype"))
            valid.password = false
        } else {
            removeErrorMessage(document.getElementById("passwd-retype"))
        }

        for(var field in valid) {
            if(!valid[field]) {
                isFormValid = false
                break
            }
            isFormValid = true
        }

        if (!isFormValid) e.preventDefault()
    })
}())