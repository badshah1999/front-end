let fromcurr = document.querySelector('.from')
let tocurr = document.querySelector('.to')
let finalResult = document.getElementById('final')
let btn = document.querySelector('.btn')
let initial = document.getElementById('initial')

fetch("https://api.frankfurter.app/currencies")
.then(response=>response.json())
.then(response=>displayDropDown(response))

function displayDropDown(response){
    let currencies = Object.entries(response)
    for (let i = 0; i < currencies.length; i++) {
        let opt = `<option value=${currencies[i][0]}>${currencies[i][0]}</option>`
        fromcurr.innerHTML+=opt
        tocurr.innerHTML+=opt
    }
}
btn.addEventListener('click',()=>{
    let fromVal = fromcurr.value
    let toVal =tocurr.value
    let inputVal = initial.value
    if(fromVal==toVal){
        alert("Please choose different currencies")
    }
    else{
        fetch(`https://api.frankfurter.app/latest?amount=${inputVal}&from=${fromVal}&to=${toVal}`)
        .then(resp => resp.json())
        .then((data) => {
            finalResult.value=data.rates[toVal]
    })
    }
})