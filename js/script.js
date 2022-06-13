

document.addEventListener('DOMContentLoaded', function() {

    let nome = document.querySelector('input[type="text"]')
    let data = document.querySelector('input[type="date"]')
    let hora = document.querySelector('input[type="time"]')


    function update() {
        submit = document.querySelector('input[type="submit"]')

        if(nome.value == '' || data.value == '' || hora.value == '') {
            submit.disabled = true
        } else {
            submit.disabled = false
        }
    }

    nome.addEventListener('input', function() {
        update()
    })

    data.addEventListener('input', function() {
        update()
    })

    hora.addEventListener('input', function() {
        update()
    })

    update()


})