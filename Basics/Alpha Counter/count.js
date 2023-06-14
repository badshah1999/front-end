function count(type){
    let str
    let count=1
    let res
    str = document.getElementById("wordinput").value.trim()
    if(str==''){
        count=0
    }
    switch (type) {
        case "word":
            for (let index = 0; index < str.length-1; index++) {
                if ((str.charAt(index)==' ') && (str.charAt(index+1)!='')) {
                count++
                }
        }
        break;
        case "char":
            for (let index = 0; index < str.length-1; index++) {
                if ((str.charAt(index)!=' ')) {
                count++
                }
            }
        default:
            break;
    }
    res = document.getElementById("result")
    res.innerHTML=count
}
// function count() {
//     const str = document.getElementById("wordinput").value.trim();
//     let count = 0;
    
//     if (str !== "") {
//       count = str.split(/\s+/).length;
//     }
    
//     let res = document.getElementById("result");
//     res.innerHTML = count;
//   }