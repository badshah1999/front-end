function convert(){
    const inch  = Number(document.getElementById("cminput").value)
    if(inch>=0 && inch != ''){
    const cm = inch*2.54
    const res = document.getElementById("result")
    res.innerHTML=cm.toFixed(2)+" "+"cm"
    }
}