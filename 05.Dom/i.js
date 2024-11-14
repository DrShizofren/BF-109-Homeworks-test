//Task1
// let fontSize = 32
// function increaseFontSize(){
    
//     fontSize += 3
//     document.querySelector("h1").style.fontSize = fontSize + "px"
// }
// function decreasefontdsize(){
    
//     fontSize -= 3
//     document.querySelector("h1").style.fontSize = fontSize + "px"
// }

//Task3
// let a
// let b
// let symbol;
// function add (){
//     symbol = "+"
// }
// function sub (){
//     symbol = "-"
// }
// function div (){
//     symbol = "/"
// }
// function mul (){
//     symbol = "*"
// }
// function reset (){
//     document.getElementById("value1").value = ""
//     document.getElementById("value2").value = ""
//     symbol = ""
//     document.getElementById("number").textContent = 0
// }

// function calculator1 (){
//     a = +document.getElementById("value1").value
    
    
// }
// function calculator2 (){
//     b = +document.getElementById("value2").value
//     switch(symbol){
//         case "+":
//             result = a + b
//             break;
//         case "-":
//             result = a - b
//             break;
//         case "/":
//             result = a / b
//             break;
//         case "*":
//             result = a * b
//             break;
        
//         default:
//             console.log("errror");
            
//     }
//     document.getElementById("number").textContent = result
    
// }

function show(){
    let a = document.getElementById('sidebar')
    a.style.left = "0"
    
}
function close(){
    let b = document.getElementById('sidebar')
    b.style.left = "-250px"
}