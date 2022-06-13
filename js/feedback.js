

document.addEventListener('DOMContentLoaded', function() {

    let numero = document.querySelector('input[type="number"]')
    let texto = document.querySelector('input[type="text"]')

    function update() {
        submit = document.querySelector('input[type="submit"]')

        if(texto.value == ''|| numero.value == '') {
            submit.disabled = true
        } else {
            submit.disabled = false
        }
    }

    texto.addEventListener('input', function() {
        update()
    })

    numero.addEventListener('input', function() {
        update()
    })

    update()


})