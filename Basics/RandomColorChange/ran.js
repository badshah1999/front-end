let btn = document.getElementById('btn')
let color = document.getElementById('color')
let body = document.getElementById('body')
let rn=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
btn.addEventListener('click',colorChange)


function colorChange(){
    let hexValue='#'
    for (let index = 1; index <=6; index++) {
        hexValue=hexValue+randomHex()
    }
    //console.log(hexValue)
    body.style.backgroundColor=hexValue
    color.innerHTML=hexValue
}

function randomHex(){
    let random = Math.floor(Math.random()*16)
    //console.log(random)
    return rn[random]
}