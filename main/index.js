const clip = document.querySelectorAll(".clip");
const title = document.querySelectorAll(".title");

for (let i = 0; i < clip.length; i++) {
    title[i].addEventListener('mouseenter', () => {
        clip[i].play()
    })
    clip[i].addEventListener('mouseenter', () => {
        clip[i].play()
    })
    clip[i].addEventListener('mouseout', function (e) {
        clip[i].pause()
    })
}

const span = document.querySelectorAll(".move");
const film = document.querySelectorAll(".film");
const filmInput1 = document.querySelector("#slide1")
const filmInput2 = document.querySelector("#slide2")
const filmInput3 = document.querySelector("#slide3")
let number = 0;

const film5 = document.getElementById("film5");
const film6 = document.getElementById("film6");
const film10 = document.getElementById("film10");
const film11 = document.getElementById("film11");

const info = window.getComputedStyle(film5);
console.log(info.width);
const width = parseInt(info.width);
console.log(width);
// film6.style.opacity = "0.5";
// film6.style.pointerEvents = "none";

// ONE WAY
// 
// let show_page = Math.ceil(film.length / 4);
// console.log(show_page);
// let movePer = 25.34;
// let maxMove = 203;

// let mobile_view = window.matchMedia("(max-width: 770px)");
// if (mobile_view.matches) {
//     movePer = 94;
//     maxMove = 650;
// }

// let right_mover = () => {
//     console.log(number)
//     number = number + movePer;
//     if (film == 1) { number = 0; }
//     for (let i of film) {
//         if (number > maxMove) { number = number - movePer; }
//         i.style.left = "-" + number + "%";
//     }
// }
// let left_mover = () => {
//     number = number - movePer;
//     if (number <= 0) { number = 0; }
//     for (let i of film) {
//         if (show_page > 1) {
//             i.style.left = "-" + number + "%";
//         }
//     }
// }
// span[0].onclick = () => { left_mover(); }
// span[1].onclick = () => { right_mover(); }


// span[1].addEventListener('click', () => {
//     right_mover();
// });

// SECOND WAY

span[1].addEventListener('click', () => {
    number++;
    console.log(number)
    for (let i of film) {
        if (number == 0) {
            i.style.left = "0px";
            // film6.style.opacity = "0.5";
            // filmInput1.checked = true
            // filmInput2.checked = false;
            // filmInput2.checked = false;
        }
        if (number == 1) {
            i.style.left = "-463px";
            // film5.style.opacity = "0.5";
            // film5.style.pointerEvents = "none";
            // film6.style.opacity = "1";
            // film6.style.pointerEvents = "auto";
            // film11.style.opacity = "0.5";
            // film11.style.pointerEvents = "none";
            // filmInput1.checked = false
            // filmInput2.checked = true;
            // filmInput3.checked = false;

        }
        if (number == 2) {
            i.style.left = "-926px";
            // film10.style.pointerEvents = "none";
            // film10.style.opacity = "0.5";
            // film11.style.opacity = "1";
            // filmInput1.checked = false
            // filmInput2.checked = false;
            // filmInput3.checked = true;
        }
        if (number > 2) { number = 2; }
    }
})



span[0].addEventListener('click', () => {
    number--;
    console.log(number);
    for (let i of film) {
        if (number == 0) {
            i.style.left = "0px";
            // film5.style.opacity = "1";
            // film5.style.pointerEvents = "auto";
            // film6.style.opacity = "0.5";
            // film6.style.pointerEvents = "none";
            // filmInput1.checked = true
            // filmInput2.checked = false;
            // filmInput2.checked = false;
        }
        if (number == 1) {
            i.style.left = "-463px";
            // film5.style.opacity = "0.5";
            // film6.style.opacity = "1";
            // film10.style.opacity = "1";
            // film10.style.pointerEvents = "auto";
            // film11.style.opacity = "0.5";
            // filmInput1.checked = false
            // filmInput2.checked = true;
            // filmInput3.checked = false;

        }
        if (number == 2) {
            i.style.left = "-926px";
            // film10.style.opacity = "0.5";
            // film11.style.opacity = "1";
            // filmInput1.checked = false
            // filmInput2.checked = false;
            // filmInput3.checked = true;
        }
        if (number < 0) { number = 0; }
    }
})


