let nb1 = document.getElementById("nb1");
let nb2 = document.getElementById("nb2");
let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let mes = document.getElementById("alert");
let digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

convert()

function convert() {
    let error = ["","","",""]
    //check if input is correct
    for (const d of nb1.value) {
        if (digits.slice(0,b1.value).includes(d)) {
            error[0] = ""
        }else {
            error[0] = "This number is not include in base "+b1.value+"."  
            break     
        }
    }

    if (b1.value < 2 || b1.value > 36) {
        error[1] = "The base1 must is between 2 and 36."      
    }

    if (b2.value < 2 || b2.value > 36) {
        error[2] = "The base2 must is between 2 and 36."        
    }

    if (b1.value == undefined || b2.value == undefined || nb1.value === ""){
        error[3] = "Insert data in all editable inputs."
    }
    //show error
    mes.textContent = ""
    for (const e of error) {
        if (e !== "") {
            mes.innerHTML += "> "+ e + "</br>"
        }
    }

    if (mes.textContent === "") {
        mes.hidden = true
    }else {
        mes.hidden = false
    }

    //convert now
    let incnb1 = [0]
    let cvnb1 = []
    let anb1 = (nb1.value).split("")
    let incnb2 = [0]
    let cvnb2 = []
    for (let i = 0; i < anb1.length; i++) {
       cvnb1.push(digits.indexOf(anb1[i]))
    }
    cvnb1.reverse()
    while (incnb1.join("") != cvnb1.join("") && mes.textContent == "") {
        for (let b = 0; b < incnb1.length; b++) {
            if (b == 0) {
                incnb1[b] += 1
            }
            if (incnb1[b] == b1.value) {
                incnb1[b] = 0
                if (incnb1[b+1] == undefined) {
                    incnb1.push(0)
                }
                incnb1[b+1] += 1
            }
        
        }
        for (let b = 0; b < incnb2.length; b++) {
            if (b == 0) {
                incnb2[b] += 1
            }
            if (incnb2[b] == b2.value) {
                incnb2[b] = 0
                if (incnb2[b+1] == undefined) {
                    incnb2.push(0)
                }
                incnb2[b+1] += 1
            }
        }
    }


    //show result
    if (mes.textContent == "") {
        incnb2.reverse()
        for (let i = 0; i < incnb2.length; i++) {
            cvnb2.push(digits[incnb2[i]])
        }
        nb2.value = cvnb2.join("")
    }else{
        nb2.value = "Error"
    }
    
};

nb1.oninput = () => {nb1.value = nb1.value.toUpperCase();convert()};
b1.oninput = () => {convert()};
b2.oninput = () => {convert()};