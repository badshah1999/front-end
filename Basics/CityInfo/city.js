const button = document.querySelector('button')
button.addEventListener('click',display)
let population=0;
let resdiv = document.createElement('div')
resdiv.id='result'
document.getElementById('root').appendChild(resdiv)
function display(){
    console.log('clicked')
    const input = document.getElementById("city")
    const city = input.options[input.selectedIndex].value
    //console.log(city)
    switch (city) {
        case "Coimbatore":
            population=100
            break;
        case "Bengaluru":
            population=200
            break;
        case "Delhi":
            population=250
            break;
        default:
            break;
    }
    let text = `the city ${city} has population of ${population}`
    // console.log(text)
    document.getElementById('result').innerHTML=text
}