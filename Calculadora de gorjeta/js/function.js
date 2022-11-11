
document.querySelector('input[name=cinco]').addEventListener('click',()=>{
    let bill = document.querySelector('.bill input[type=text]').value
    let people = document.querySelector('.number input[type=text]').value

    var amount = (bill/100*5) / people
    var total = (bill+amount) / people

   document.querySelector('.amount h1').innerHTML = '$'+amount
    document.querySelector('.total h1').innerHTML = '$'+total

    

})

document.querySelector('input[name=dez]').addEventListener('click',()=>{
    let bill = document.querySelector('.bill input[type=text]').value
    let people = document.querySelector('.number input[type=text]').value

    var amount = (bill/100*10) / people
    var total = (bill+amount) / people

   document.querySelector('.amount h1').innerHTML = '$'+amount
    document.querySelector('.total h1').innerHTML = '$'+total

    

})

document.querySelector('input[name=quize]').addEventListener('click',()=>{
    let bill = document.querySelector('.bill input[type=text]').value
    let people = document.querySelector('.number input[type=text]').value

    var amount = (bill/100*15) / people
    var total = (bill+amount) / people

   document.querySelector('.amount h1').innerHTML = '$'+amount
    document.querySelector('.total h1').innerHTML = '$'+total

    

})

document.querySelector('input[name=vinte]').addEventListener('click',()=>{
    let bill = document.querySelector('.bill input[type=text]').value
    let people = document.querySelector('.number input[type=text]').value

    var amount = (bill/100*25) / people
    var total = (bill+amount) / people

   document.querySelector('.amount h1').innerHTML = '$'+amount
    document.querySelector('.total h1').innerHTML = '$'+total

    

})

document.querySelector('input[name=cinquenta]').addEventListener('click',()=>{
    let bill = document.querySelector('.bill input[type=text]').value
    let people = document.querySelector('.number input[type=text]').value

    var amount = (bill/100*50) / people
    var total = (bill+amount) / people

   document.querySelector('.amount h1').innerHTML = '$'+amount
    document.querySelector('.total h1').innerHTML = '$'+total

    

})

document.querySelector('.butons input[type=text]').addEventListener('submit',()=>{
    let bill = document.querySelector('.bill input[type=text]').value
    let people = document.querySelector('.number input[type=text]').value
    let porcent = document.querySelector('.butons input[type=text]')

    alert('deubom')

   document.querySelector('.amount h1').innerHTML = '$'+amount
    document.querySelector('.total h1').innerHTML = '$'+total

    

})

document.querySelector('.resultado input[type=button]').addEventListener('click',()=>{
    document.querySelector('.amount h1').innerHTML = '$0.00'
    document.querySelector('.total h1').innerHTML = '$0.00'

})