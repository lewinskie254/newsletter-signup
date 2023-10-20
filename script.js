const modal = document.querySelector('.modal')
const input = document.getElementById('email')
const dangerToggle = document.querySelector('.form input')
const validEmail = document.querySelector('.dark')
const subscribe= document.querySelector('.subscribe')
const dismiss = document.querySelector('.dismiss')
const incomplete = document.querySelector('.incomplete ')


subscribe.addEventListener('click', ()=>{
    const inputValue = input.value 
    if(!inputValue.includes('@' && '.')){
        validEmail.classList.remove('dark')
        validEmail.classList.add('error')
        dangerToggle.classList.add('danger')
        
    }else {
        incomplete.classList.add('hide')
        modal.classList.remove('modal')
        modal.classList.add('successful')
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