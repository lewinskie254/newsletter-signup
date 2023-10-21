const modal = document.querySelector('.modal')
const input = document.getElementById('email')
const dangerToggle = document.querySelector('.form input')
const validEmail = document.querySelector('.dark')
const subscribe= document.querySelector('.subscribe')
const dismiss = document.querySelector('.dismiss')
const incomplete = document.querySelector('.incomplete ')
const spanContent = document.querySelector('.sent-mail')


var regex = /^([a-zA-Z0-9\.-]+)@([[a-zA-Z0-9\.-]+).([a-z]{2,20})(\.[a-z]{2,8})$/

subscribe.addEventListener('click', ()=>{
    const inputValue = input.value 
    if(!regex.test(inputValue)){
        validEmail.classList.remove('dark')
        validEmail.classList.add('error')
        dangerToggle.classList.add('danger')
        
    }else {
        incomplete.classList.add('hide')
        modal.classList.remove('modal')
        modal.classList.add('successful')
        spanContent.textContent = inputValue
    }
})

input.addEventListener('keyup', (e)=>{
    e.preventDefault()
    validEmail.classList.add('dark')
    validEmail.classList.remove('error')
    dangerToggle.classList.remove('danger')
})


dismiss.addEventListener('click', ()=>{
        validEmail.classList.add('dark')
        validEmail.classList.remove('error')
        dangerToggle.classList.remove('danger')
        modal.classList.add('modal')
        modal.classList.remove('successful')
        incomplete.classList.add('incomplete')
        incomplete.classList.remove('hide')
        input.value  = ''
})