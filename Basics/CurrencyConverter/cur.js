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
        console.log(opt)
        fromcurr.innerHTML+=opt
        tocurr.innerHTML+=opt
    }
}
btn.addEventListener('click',()=>{
    let val1 = fromcurr.value
    let val2 =tocurr.value
    let inputval = initial.value
    if(val1==val2){
        alert("Please choose different currencies")
    }
    else{
        const host = 'api.frankfurter.app';
        fetch(`https://${host}/latest?amount=${inputval}&from=${val1}&to=${val2}`)
        .then(resp => resp.json())
        .then((data) => {
            finalResult.value=data.rates[val2]
    });
    }
})