function setErrorMessage(el, message) {
    $(el).data('errorMessage', message)
}
function showErrorMessage(el) {
    var $el = $(el)
    var $errorContainer = $el.siblings(".error")
    if (!$errorContainer.length) {
        $errorContainer = $('<span class="error"></span>').insertAfter($el)
    }
    $errorContainer.text($el.data('errorMessage'))
}
function removeeErrorMessage() {
    $(el).data('errorMessage', '')
    $(el).siblings(".error").remove()
}