function unChacked() {
    let check = document.getElementById("check");
    if (check.checked) {
        check.checked = false;
    }
}

let screen = document.querySelector(".outer3");
let scr = document.querySelector(".outer2");
let scre = document.querySelector(".outer4");
let sc = document.querySelector(".navbar");

screen.addEventListener("click", unChacked);
scr.addEventListener("click", unChacked);
scre.addEventListener("click", unChacked);
sc.addEventListener("click", unChacked);

function h3Show() {
    if (h3.style.display = "none") {
        h3.style.display = "block";
        h3.style.transitionend = "2s linear"
    }
}
function h3Hide() {
    if (h3.style.display != "none") {
        h3.style.display = "none";
    }
}
let btnmem = document.querySelector(".btnmem");
let h3 = document.querySelector(".histry h3");
let btnmem2 = document.querySelector(".btnmem2");
btnmem.addEventListener("mouseover", h3Show);
btnmem.addEventListener("mouseout", h3Hide);
btnmem2.addEventListener("mouseover", h3Show);
btnmem2.addEventListener("mouseout", h3Hide);

let ouh4 = document.querySelector(".hdel");
let outh4 = document.querySelector(".hdels")
function sho() {
    if (outh4.style.display = "none") {
        outh4.style.display = "block"
    }
}

function hid() {
    if (outh4.style.display = "block") {
        outh4.style.display = "none";
    }
}
ouh4.addEventListener("mouseout", hid);
ouh4.addEventListener("mouseover", sho);

let min = document.querySelector("#min");
let mini = document.querySelector(".mini");
min.addEventListener("mouseover", function () {
    if (mini.style.display = "none") {
        mini.style.display = "block";
    }
})
min.addEventListener("mouseout", function () {
    if (mini.style.display = "block") {
        mini.style.display = "none";
    }
})

let btnhist = document.querySelector(".btnhist");
let h3a = document.querySelector(".memory h3");

btnhist.addEventListener("mouseover", function () {
    if (h3a.style.display = "none") {
        h3a.style.display = "block";
    }
})
btnhist.addEventListener("mouseout", function () {
    if (h3a.style.display = "block") {
        h3a.style.display = "none";
    }
})
let btnhist2 = document.querySelector(".btnhist2");
btnhist2.addEventListener("mouseover", function () {
    if (h3a.style.display = "none") {
        h3a.style.display = "block";
    }
})
btnhist2.addEventListener("mouseout", function () {
    if (h3a.style.display = "block") {
        h3a.style.display = "none";
    }
})

let btn4 = document.querySelector(".btn4");
btn4.innerText = "DEL";

let input = document.getElementById("number");
let buttons = document.querySelectorAll(".btns");


let string = "";
let arr = Array.from(buttons);
arr.forEach(buttons => {
    buttons.addEventListener("click", (e) => {
        if (e.target.innerText == "=") {
            string = eval(string);
            input.value = string;
        }
        else if (e.target.innerText == 'CE') {
            string = "";
            input.value = string;
        }
        else if (e.target.innerText == "DEL") {
            string = string.substring(0, string.length - 1);
            input.value = string;
        }
        else if (e.target.innerText == 'C') {
            string = "0";
            input.value = string;
            string = "";
        }
        else if (e.target.input == "%") {
            string = "btn not working";
            input.value = string;
        }

        else {
            string += e.target.innerText;
            input.value = string;
        }
    })
})
