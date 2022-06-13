document.addEventListener('DOMContentLoaded', function() {

    let textos = document.querySelector('input[type="text"]')
    let data = document.querySelector('input[type="date"]')


    function update() {
        submit = document.querySelector('input[type="submit"]')

        if(textos.value == '' || data.value == '') {
            submit.disabled = true
        } else {
            submit.disabled = false
        }
    }

    textos.addEventListener('input', function() {
        update()
    })

    data.addEventListener('input', function() {
        update()
    })

    update()


})