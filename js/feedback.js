document.addEventListener('DOMContentLoaded', function() {

    let textos = document.querySelector('input[type="text"]')


    function update() {
        submit = document.querySelector('input[type="submit"]')

        if(textos.value == '') {
            submit.disabled = true
        } else {
            submit.disabled = false
        }
    }

    textos.addEventListener('input', function() {
        update()
    })
    
    update()


})