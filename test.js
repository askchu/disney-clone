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



let mobile_view = window.matchMedia("(max-width: 770px)");
let small_ipad_view = window.matchMedia("(min-width: 771px) and (max-width: 1024px");
let big_ipad_view = window.matchMedia("(min-width: 1025px)");
let desktop_view = window.matchMedia("(min-width: 1440px)");

// New to Disney+

// Count
let number1 = 0

// Input
const slide1 = document.querySelector("#slide1");
const slide2 = document.querySelector("#slide2");
const slide3 = document.querySelector("#slide3");

// Controls
const move1 = document.querySelectorAll(".move1");

// Films
const film1 = document.querySelector("#film1");
const film2 = document.querySelector("#film2");
const film3 = document.querySelector("#film3");
const film4 = document.querySelector("#film4");
const film5 = document.querySelector("#film5");
const film6 = document.querySelector("#film6");
const film7 = document.querySelector("#film7");
const film8 = document.querySelector("#film8");
const film9 = document.querySelector("#film9");
const film10 = document.querySelector("#film10");
const film11 = document.querySelector("#film11");

carousel(move1[1], move1[0], slide1, slide2, slide3, number1, film1, film2, film3, film4, film5, film6, film7, film8, film9, film10, film11);

// Because you watched Moana

// Count
let number2 = 0;

// Input
const slide4 = document.querySelector("#slide4");
const slide5 = document.querySelector("#slide5");
const slide6 = document.querySelector("#slide6");

// Controls
const move2 = document.querySelectorAll(".move2");

// Films
const film12 = document.querySelector("#film12");
const film13 = document.querySelector("#film13");
const film14 = document.querySelector("#film14");
const film15 = document.querySelector("#film15");
const film16 = document.querySelector("#film16");
const film17 = document.querySelector("#film17");
const film18 = document.querySelector("#film18");
const film19 = document.querySelector("#film19");
const film20 = document.querySelector("#film20");
const film21 = document.querySelector("#film21");
const film22 = document.querySelector("#film22");

carousel(move2[1], move2[0], slide4, slide5, slide6, number2, film12, film13, film14, film15, film16, film17, film18, film19, film20, film21, film22);





function carousel(moveRight, moveLeft, s1, s2, s3, number, f1, f2, f3, f4, f5, f6, f7, f8, f9, f10, f11) {
    let mobile_view = window.matchMedia("(max-width: 770px)");
    let small_ipad_view = window.matchMedia("(min-width: 771px) and (max-width: 1024px");
    let big_ipad_view = window.matchMedia("(min-width: 1025px)");
    let desktop_view = window.matchMedia("(min-width: 1440px)");

    if (mobile_view.matches) {

        if (slide1.checked == true) {
            f1.style.transform = "translateX(0%)";
            f2.style.transform = "translateX(120%)";
            f3.style.opacity = "0.5";
            f3.style.pointerEvents = "none";
            f3.style.transform = "translateX(240%)";
            f4.style.transform = "translateX(360%)";
            f5.style.transform = "translateX(480%)";
            f6.style.transform = "translateX(600%)";
            f7.style.transform = "translateX(600%)";
            f8.style.transform = "translateX(600%)";
            f9.style.transform = "translateX(600%)";
            f10.style.transform = "translateX(600%)";
            f11.style.transform = "translateX(600%)";
        }


        moveRight.addEventListener('click', () => {
            number++;
            // console.log(number)
            if (number == 0) {
                f1.style.transform = "translateX(0%)";
                f2.style.transform = "translateX(120%)";
                f3.style.transform = "translateX(240%)";
                f3.style.opacity = "0.5";
                f3.style.pointerEvents = "none";
                f4.style.transform = "translateX(360%)";
                f5.style.transform = "translateX(480%)";
                f6.style.transform = "translateX(600%)";
                f7.style.transform = "translateX(600%)";
                f8.style.transform = "translateX(600%)";
                f9.style.transform = "translateX(600%)";
                f10.style.transform = "translateX(600%)";
                f11.style.transform = "translateX(600%)";
                s1.checked = true;
                s2.checked = false;
                s3.checked = false;
            }
            if (number == 1) {
                f1.style.transform = "translateX(-240%)";
                f2.style.transform = "translateX(-140%)";
                f3.style.transform = "translateX(0%)";
                f3.style.opacity = "1";
                f4.style.transform = "translateX(120%)";
                f5.style.transform = "translateX(240%)";
                f5.style.opacity = "0.5";
                f5.style.pointerEvents = "none";
                f6.style.transform = "translateX(360%)";
                f7.style.transform = "translateX(600%)";
                f8.style.transform = "translateX(600%)";
                f9.style.transform = "translateX(600%)";
                f10.style.transform = "translateX(600%)";
                f11.style.transform = "translateX(600%)";
                s1.checked = false;
                s2.checked = true;
                s3.checked = false;

            }
            if (number == 2) {
                f1.style.transform = "translateX(-240%)";
                f2.style.transform = "translateX(-240%)";
                f3.style.transform = "translateX(-140%)";
                f4.style.transform = "translateX(-140%)";
                f5.style.transform = "translateX(0%)";
                f5.style.opacity = "1";
                f6.style.transform = "translateX(120%)";
                f7.style.transform = "translateX(240%)";
                f7.style.opacity = "0.5";
                f7.style.pointerEvents = "none";
                f8.style.transform = "translateX(360%)";
                f9.style.transform = "translateX(480%)";
                f10.style.transform = "translateX(600%)";
                f11.style.transform = "translateX(600%)";
                s1.checked = false;
                s2.checked = true;
                s3.checked = false;
            }
            if (number == 3) {
                f1.style.transform = "translateX(-240%)";
                f2.style.transform = "translateX(-240%)";
                f3.style.transform = "translateX(-240%)";
                f4.style.transform = "translateX(-240%)";
                f5.style.transform = "translateX(-240%)";
                f5.style.opacity = "1";
                f6.style.transform = "translateX(-140%)";
                f7.style.transform = "translateX(0%)";
                f7.style.opacity = "1";
                f7.style.pointerEvents = "auto";
                f8.style.transform = "translateX(120%)";
                f9.style.transform = "translateX(240%)";
                f9.style.opacity = "0.5";
                f9.style.pointerEvents = "none";
                f10.style.transform = "translateX(360%)";
                f11.style.transform = "translateX(360%)";
                s1.checked = false;
                s2.checked = true;
                s3.checked = false;
            }
            if (number == 4) {
                f1.style.transform = "translateX(-240%)";
                f2.style.transform = "translateX(-240%)";
                f3.style.transform = "translateX(-240%)";
                f4.style.transform = "translateX(-240%)";
                f5.style.transform = "translateX(-240%)";
                f6.style.transform = "translateX(-240%)";
                f7.style.transform = "translateX(-240%)";
                f8.style.transform = "translateX(-140%)";
                f9.style.opacity = "1";
                f9.style.pointerEvents = "auto";
                f9.style.transform = "translateX(0%)";
                f10.style.transform = "translateX(120%)";
                f11.style.transform = "translateX(240%)";
                f11.style.opacity = "0.5";
                f11.style.pointerEvents = "none";
                s1.checked = false;
                s2.checked = true;
                s3.checked = false;
            }
            if (number == 5) {
                f1.style.transform = "translateX(-240%)";
                f2.style.transform = "translateX(-240%)";
                f3.style.transform = "translateX(-240%)";
                f4.style.transform = "translateX(-240%)";
                f5.style.transform = "translateX(-240%)";
                f6.style.transform = "translateX(-240%)";
                f7.style.transform = "translateX(-240%)";
                f8.style.transform = "translateX(-240%)";
                f9.style.transform = "translateX(-240%)";
                f10.style.transform = "translateX(-140%)";
                f11.style.transform = "translateX(0%)";
                f11.style.opacity = "1";
                f11.style.pointerEvents = "auto";
                s1.checked = false;
                s2.checked = false;
                s3.checked = true;
            }
            if (number > 5) { number = 5; }
        })

        moveLeft.addEventListener('click', () => {
            number--;
            // console.log(number)
            if (number == 0) {
                f1.style.transform = "translateX(0%)";
                f2.style.transform = "translateX(120%)";
                f3.style.transform = "translateX(240%)";
                f3.style.opacity = "0.5";
                f3.style.pointerEvents = "none";
                f4.style.transform = "translateX(360%)";
                f5.style.transform = "translateX(480%)";
                f6.style.transform = "translateX(600%)";
                f7.style.transform = "translateX(600%)";
                f8.style.transform = "translateX(600%)";
                f9.style.transform = "translateX(600%)";
                f10.style.transform = "translateX(600%)";
                f11.style.transform = "translateX(600%)";
                s1.checked = true;
                s2.checked = false;
                s3.checked = false;
            }
            if (number == 1) {
                f1.style.transform = "translateX(-240%)";
                f2.style.transform = "translateX(-140%)";
                f3.style.transform = "translateX(0%)";
                f3.style.opacity = "1";
                f4.style.transform = "translateX(120%)";
                f5.style.transform = "translateX(240%)";
                f5.style.opacity = "0.5";
                f5.style.pointerEvents = "none";
                f6.style.transform = "translateX(360%)";
                f7.style.transform = "translateX(600%)";
                f8.style.transform = "translateX(600%)";
                f9.style.transform = "translateX(600%)";
                f10.style.transform = "translateX(600%)";
                f11.style.transform = "translateX(600%)";
                s1.checked = false;
                s2.checked = true;
                s3.checked = false;

            }
            if (number == 2) {
                f1.style.transform = "translateX(-240%)";
                f2.style.transform = "translateX(-240%)";
                f3.style.transform = "translateX(-140%)";
                f4.style.transform = "translateX(-140%)";
                f5.style.transform = "translateX(0%)";
                f5.style.opacity = "1";
                f6.style.transform = "translateX(120%)";
                f7.style.transform = "translateX(240%)";
                f7.style.opacity = "0.5";
                f7.style.pointerEvents = "none";
                f8.style.transform = "translateX(360%)";
                f9.style.transform = "translateX(480%)";
                f10.style.transform = "translateX(600%)";
                f11.style.transform = "translateX(600%)";
                s1.checked = false;
                s2.checked = true;
                s3.checked = false;
            }
            if (number == 3) {
                f1.style.transform = "translateX(-240%)";
                f2.style.transform = "translateX(-240%)";
                f3.style.transform = "translateX(-240%)";
                f4.style.transform = "translateX(-240%)";
                f5.style.transform = "translateX(-240%)";
                f5.style.opacity = "1";
                f6.style.transform = "translateX(-140%)";
                f7.style.transform = "translateX(0%)";
                f7.style.opacity = "1";
                f7.style.pointerEvents = "auto";
                f8.style.transform = "translateX(120%)";
                f9.style.transform = "translateX(240%)";
                f9.style.opacity = "0.5";
                f9.style.pointerEvents = "none";
                f10.style.transform = "translateX(360%)";
                f11.style.transform = "translateX(360%)";
                s1.checked = false;
                s2.checked = true;
                s3.checked = false;
            }
            if (number == 4) {
                f1.style.transform = "translateX(-240%)";
                f2.style.transform = "translateX(-240%)";
                f3.style.transform = "translateX(-240%)";
                f4.style.transform = "translateX(-240%)";
                f5.style.transform = "translateX(-240%)";
                f6.style.transform = "translateX(-240%)";
                f7.style.transform = "translateX(-240%)";
                f8.style.transform = "translateX(-140%)";
                f9.style.opacity = "1";
                f9.style.pointerEvents = "auto";
                f9.style.transform = "translateX(0%)";
                f10.style.transform = "translateX(120%)";
                f11.style.transform = "translateX(240%)";
                f11.style.opacity = "0.5";
                f11.style.pointerEvents = "none";
                s1.checked = false;
                s2.checked = true;
                s3.checked = false;
            }
            if (number == 5) {
                f1.style.transform = "translateX(-240%)";
                f2.style.transform = "translateX(-240%)";
                f3.style.transform = "translateX(-240%)";
                f4.style.transform = "translateX(-240%)";
                f5.style.transform = "translateX(-240%)";
                f6.style.transform = "translateX(-240%)";
                f7.style.transform = "translateX(-240%)";
                f8.style.transform = "translateX(-240%)";
                f9.style.transform = "translateX(-240%)";
                f10.style.transform = "translateX(-140%)";
                f11.style.transform = "translateX(0%)";
                f11.style.opacity = "1";
                f11.style.pointerEvents = "auto";
                s1.checked = false;
                s2.checked = false;
                s3.checked = true;
            }
            if (number <= 0) { number = 0; }
        })
    }

    // IPAD VIEW

    if (small_ipad_view.matches) {
        console.log("small ipad view")
        if (s1.checked == true) {
            f1.style.transform = "translateX(0%)";
            f2.style.transform = "translateX(120%)";
            f3.style.transform = "translateX(240%)";
            f4.style.opacity = "0.5";
            f4.style.pointerEvents = "none";
            f4.style.transform = "translateX(360%)";
            f5.style.transform = "translateX(480%)";
            f6.style.transform = "translateX(600%)";
            f7.style.transform = "translateX(600%)";
            f8.style.transform = "translateX(600%)";
            f9.style.transform = "translateX(600%)";
            f10.style.transform = "translateX(600%)";
            f11.style.transform = "translateX(600%)";
        }


        moveRight.addEventListener('click', () => {
            number++;
            console.log(number)
            if (number == 0) {
                f1.style.transform = "translateX(0%)";
                f2.style.transform = "translateX(120%)";
                f3.style.transform = "translateX(240%)";
                f4.style.opacity = "0.5";
                f4.style.pointerEvents = "none";
                f4.style.transform = "translateX(360%)";
                f5.style.transform = "translateX(480%)";
                f6.style.transform = "translateX(600%)";
                f7.style.transform = "translateX(600%)";
                f8.style.transform = "translateX(600%)";
                f9.style.transform = "translateX(600%)";
                f10.style.transform = "translateX(600%)";
                f11.style.transform = "translateX(600%)";
                s1.checked = true;
                s2.checked = false;
                s3.checked = false;
            }
            if (number == 1) {
                f1.style.transform = "translateX(-360%)";
                f2.style.transform = "translateX(-240%)";
                f3.style.transform = "translateX(-120%)";
                f3.style.opacity = "0.5";
                f3.style.pointerEvents = "none";
                f4.style.transform = "translateX(0%)";
                f4.style.opacity = "1";
                f4.style.pointerEvents = "auto";
                f5.style.transform = "translateX(120%)";
                f6.style.transform = "translateX(240%)";
                f7.style.transform = "translateX(360%)";
                f7.style.opacity = "0.5";
                f7.style.pointerEvents = "none";
                f8.style.transform = "translateX(480%)";
                f9.style.transform = "translateX(600%)";
                f10.style.transform = "translateX(600%)";
                f11.style.transform = "translateX(600%)";
                s1.checked = false;
                s2.checked = true;
                s3.checked = false;

            }
            if (number == 2) {
                f1.style.transform = "translateX(-240%)";
                f2.style.transform = "translateX(-240%)";
                f3.style.transform = "translateX(-240%)";
                f4.style.transform = "translateX(-240%)";
                f5.style.transform = "translateX(-240%)";
                f6.style.transform = "translateX(-120%)";
                f6.style.opacity = "0.5";
                f6.style.pointerEvents = "none";
                f7.style.opacity = "1";
                f7.style.pointerEvents = "auto";
                f7.style.transform = "translateX(0%)";
                f8.style.transform = "translateX(120%)";
                f9.style.transform = "translateX(240%)";
                f9.style.opacity = "1";
                f9.style.pointerEvents = "auto";
                f10.style.opacity = "0.5";
                f10.style.pointerEvents = "none";
                f10.style.transform = "translateX(360%)";
                f11.style.transform = "translateX(480%)";
                s1.checked = false;
                s2.checked = true;
                s3.checked = false;
            }
            if (number == 3) {
                f1.style.transform = "translateX(-240%)";
                f2.style.transform = "translateX(-240%)";
                f3.style.transform = "translateX(-240%)";
                f4.style.transform = "translateX(-240%)";
                f5.style.transform = "translateX(-240%)";
                f6.style.transform = "translateX(-240%)";
                f7.style.transform = "translateX(-240%)";
                f8.style.transform = "translateX(-240%)";
                f9.style.transform = "translateX(-120%)";
                f9.style.opacity = "0.5";
                f9.style.pointerEvents = "none";
                f10.style.opacity = "1";
                f10.style.pointerEvents = "auto";
                f10.style.transform = "translateX(0%)";
                f11.style.transform = "translateX(120%)";
                s1.checked = false;
                s2.checked = false;
                s3.checked = true;
            }
            if (number > 3) { number = 3; }
        })

        moveLeft.addEventListener('click', () => {
            number--;
            console.log(number)
            if (number == 0) {
                f1.style.transform = "translateX(0%)";
                f2.style.transform = "translateX(120%)";
                f3.style.transform = "translateX(240%)";
                f4.style.opacity = "0.5";
                f4.style.pointerEvents = "none";
                f4.style.transform = "translateX(360%)";
                f5.style.transform = "translateX(480%)";
                f6.style.transform = "translateX(600%)";
                f7.style.transform = "translateX(600%)";
                f8.style.transform = "translateX(600%)";
                f9.style.transform = "translateX(600%)";
                f10.style.transform = "translateX(600%)";
                f11.style.transform = "translateX(600%)";
                s1.checked = true;
                s2.checked = false;
                s3.checked = false;
            }
            if (number == 1) {
                f1.style.transform = "translateX(-360%)";
                f2.style.transform = "translateX(-240%)";
                f3.style.transform = "translateX(-120%)";
                f3.style.opacity = "0.5";
                f3.style.pointerEvents = "none";
                f4.style.transform = "translateX(0%)";
                f4.style.opacity = "1";
                f4.style.pointerEvents = "auto";
                f5.style.transform = "translateX(120%)";
                f6.style.transform = "translateX(240%)";
                f7.style.transform = "translateX(360%)";
                f7.style.opacity = "0.5";
                f7.style.pointerEvents = "none";
                f8.style.transform = "translateX(480%)";
                f9.style.transform = "translateX(600%)";
                f10.style.transform = "translateX(600%)";
                f11.style.transform = "translateX(600%)";
                s1.checked = false;
                s2.checked = true;
                s3.checked = false;

            }
            if (number == 2) {
                f1.style.transform = "translateX(-240%)";
                f2.style.transform = "translateX(-240%)";
                f3.style.transform = "translateX(-240%)";
                f4.style.transform = "translateX(-240%)";
                f5.style.transform = "translateX(-240%)";
                f6.style.transform = "translateX(-120%)";
                f6.style.opacity = "0.5";
                f6.style.pointerEvents = "none";
                f7.style.opacity = "1";
                f7.style.pointerEvents = "auto";
                f7.style.transform = "translateX(0%)";
                f8.style.transform = "translateX(120%)";
                f9.style.transform = "translateX(240%)";
                f9.style.opacity = "1";
                f9.style.pointerEvents = "auto";
                f10.style.opacity = "0.5";
                f10.style.pointerEvents = "none";
                f10.style.transform = "translateX(360%)";
                f11.style.transform = "translateX(480%)";
                s1.checked = false;
                s2.checked = true;
                s3.checked = false;
            }
            if (number == 3) {
                f1.style.transform = "translateX(-240%)";
                f2.style.transform = "translateX(-240%)";
                f3.style.transform = "translateX(-240%)";
                f4.style.transform = "translateX(-240%)";
                f5.style.transform = "translateX(-240%)";
                f6.style.transform = "translateX(-240%)";
                f7.style.transform = "translateX(-240%)";
                f8.style.transform = "translateX(-240%)";
                f9.style.transform = "translateX(-120%)";
                f9.style.opacity = "0.5";
                f9.style.pointerEvents = "none";
                f10.style.opacity = "1";
                f10.style.pointerEvents = "auto";
                f10.style.transform = "translateX(0%)";
                f11.style.transform = "translateX(120%)";
                s1.checked = false;
                s2.checked = false;
                s3.checked = true;
            }
            if (number <= 0) { number = 0; }
        })
    }


    // BIG IPAD VIEW

    if (big_ipad_view.matches) {
        console.log("big ipad view")
        if (s1.checked == true) {
            f1.style.transform = "translateX(0%)";
            f2.style.transform = "translateX(120%)";
            f3.style.transform = "translateX(240%)";
            f4.style.transform = "translateX(360%)";
            f5.style.transform = "translateX(480%)";
            f5.style.pointerEvents = "none";
            f5.style.opacity = "0.5";
            f6.style.transform = "translateX(600%)";
            f7.style.transform = "translateX(600%)";
            f8.style.transform = "translateX(600%)";
            f9.style.transform = "translateX(600%)";
            f10.style.transform = "translateX(600%)";
            f11.style.transform = "translateX(600%)";
        }


        moveRight.addEventListener('click', () => {
            number++;
            console.log(number)
            if (number == 0) {
                f1.style.transform = "translateX(0%)";
                f2.style.transform = "translateX(120%)";
                f3.style.transform = "translateX(240%)";
                f4.style.transform = "translateX(360%)";
                f5.style.transform = "translateX(480%)";
                f5.style.opacity = "0.5";
                f5.style.pointerEvents = "none";
                f6.style.transform = "translateX(600%)";
                f7.style.transform = "translateX(600%)";
                f8.style.transform = "translateX(600%)";
                f9.style.transform = "translateX(600%)";
                f10.style.transform = "translateX(600%)";
                f11.style.transform = "translateX(600%)";

                s1.checked = true;
                s2.checked = false;
                s3.checked = false;
            }
            if (number == 1) {
                f1.style.transform = "translateX(-480%)";
                f2.style.transform = "translateX(-360%)";
                f3.style.transform = "translateX(-240%)";
                f4.style.transform = "translateX(-180%)";
                f5.style.transform = "translateX(0%)";
                f5.style.opacity = "1";
                f5.style.pointerEvents = "auto";
                f6.style.transform = "translateX(120%)";
                f7.style.transform = "translateX(240%)";
                f8.style.transform = "translateX(360%)";
                f9.style.transform = "translateX(480%)";
                f9.style.opacity = "0.5";
                f9.style.pointerEvents = "none";
                f10.style.transform = "translateX(600%)";
                f11.style.transform = "translateX(600%)";
                s1.checked = false;
                s2.checked = true;
                s3.checked = false;
            }
            if (number == 2) {
                f1.style.transform = "translateX(-240%)";
                f2.style.transform = "translateX(-240%)";
                f3.style.transform = "translateX(-240%)";
                f4.style.transform = "translateX(-240%)";
                f5.style.transform = "translateX(-240%)";
                f6.style.transform = "translateX(-240%)";
                f7.style.transform = "translateX(-240%)";
                f8.style.transform = "translateX(-180%)";
                f9.style.transform = "translateX(0%)";
                f9.style.opacity = "1";
                f9.style.pointerEvents = "auto";
                f10.style.transform = "translateX(120%)";
                f11.style.transform = "translateX(240%)";
                s1.checked = false;
                s2.checked = true;
                s3.checked = false;
            }
            if (number > 2) { number = 2; }
        })

        moveLeft.addEventListener('click', () => {
            number--;
            console.log(number)
            if (number == 0) {
                f1.style.transform = "translateX(0%)";
                f2.style.transform = "translateX(120%)";
                f3.style.transform = "translateX(240%)";
                f4.style.transform = "translateX(360%)";
                f5.style.transform = "translateX(480%)";
                f5.style.opacity = "0.5";
                f5.style.pointerEvents = "none";
                f6.style.transform = "translateX(600%)";
                f7.style.transform = "translateX(600%)";
                f8.style.transform = "translateX(600%)";
                f9.style.transform = "translateX(600%)";
                f10.style.transform = "translateX(600%)";
                f11.style.transform = "translateX(600%)";

                s1.checked = true;
                s2.checked = false;
                s3.checked = false;
            }
            if (number == 1) {
                f1.style.transform = "translateX(-480%)";
                f2.style.transform = "translateX(-360%)";
                f3.style.transform = "translateX(-240%)";
                f4.style.transform = "translateX(-180%)";
                f5.style.transform = "translateX(0%)";
                f5.style.opacity = "1";
                f5.style.pointerEvents = "auto";
                f6.style.transform = "translateX(120%)";
                f7.style.transform = "translateX(240%)";
                f8.style.transform = "translateX(360%)";
                f9.style.transform = "translateX(480%)";
                f9.style.opacity = "0.5";
                f9.style.pointerEvents = "none";
                f10.style.transform = "translateX(600%)";
                f11.style.transform = "translateX(600%)";
                s1.checked = false;
                s2.checked = true;
                s3.checked = false;
            }
            if (number == 2) {
                f1.style.transform = "translateX(-240%)";
                f2.style.transform = "translateX(-240%)";
                f3.style.transform = "translateX(-240%)";
                f4.style.transform = "translateX(-240%)";
                f5.style.transform = "translateX(-240%)";
                f6.style.transform = "translateX(-240%)";
                f7.style.transform = "translateX(-240%)";
                f8.style.transform = "translateX(-180%)";
                f9.style.transform = "translateX(0%)";
                f9.style.opacity = "1";
                f9.style.pointerEvents = "auto";
                f10.style.transform = "translateX(120%)";
                f11.style.transform = "translateX(240%)";
                s1.checked = false;
                s2.checked = true;
                s3.checked = false;
            }
            if (number <= 0) { number = 0; }
        })
    }
}



// MOBILE VIEW 

// if (mobile_view.matches) {

//     if (slide1.checked == true) {
//         film1.style.transform = "translateX(0%)";
//         film2.style.transform = "translateX(120%)";
//         film3.style.opacity = "0.5";
//         film3.style.pointerEvents = "none";
//         film3.style.transform = "translateX(240%)";
//         film4.style.transform = "translateX(360%)";
//         film5.style.transform = "translateX(480%)";
//         film6.style.transform = "translateX(600%)";
//         film7.style.transform = "translateX(600%)";
//        film8.style.transform = "translateX(600%)";
//         film9.style.transform = "translateX(600%)";
//         film10.style.transform = "translateX(600%)";
//         film11.style.transform = "translateX(600%)";
//     }


//     span[1].addEventListener('click', () => {
//         number++;
//         console.log(number)
//         if (number == 0) {
//             film1.style.transform = "translateX(0%)";
//             film2.style.transform = "translateX(120%)";
//             film3.style.transform = "translateX(240%)";
//             film3.style.opacity = "0.5";
//             film3.style.pointerEvents = "none";
//             film4.style.transform = "translateX(360%)";
//             film5.style.transform = "translateX(480%)";
//             film6.style.transform = "translateX(600%)";
//             film7.style.transform = "translateX(600%)";
//            film8.style.transform = "translateX(600%)";
//             film9.style.transform = "translateX(600%)";
//             film10.style.transform = "translateX(600%)";
//             film11.style.transform = "translateX(600%)";
//             slide1.checked = true;
//             slide2.checked = false;
//             slide3.checked = false;
//         }
//         if (number == 1) {
//             film1.style.transform = "translateX(-240%)";
//             film2.style.transform = "translateX(-120%)";
//             film3.style.transform = "translateX(0%)";
//             film3.style.opacity = "1";
//             film4.style.transform = "translateX(120%)";
//             film5.style.transform = "translateX(240%)";
//             film5.style.opacity = "0.5";
//             film5.style.pointerEvents = "none";
//             film6.style.transform = "translateX(360%)";
//             film7.style.transform = "translateX(600%)";
//             film8.style.transform = "translateX(600%)";
//             film9.style.transform = "translateX(600%)";
//             film10.style.transform = "translateX(600%)";
//             film11.style.transform = "translateX(600%)";
//             slide1.checked = false;
//             slide2.checked = true;
//             slide3.checked = false;

//         }
//         if (number == 2) {
//             film1.style.transform = "translateX(-240%)";
//             film2.style.transform = "translateX(-240%)";
//             film3.style.transform = "translateX(-120%)";
//             film4.style.transform = "translateX(-120%)";
//             film5.style.transform = "translateX(0%)";
//             film5.style.opacity = "1";
//             film6.style.transform = "translateX(120%)";
//             film7.style.transform = "translateX(240%)";
//             film7.style.opacity = "0.5";
//             film7.style.pointerEvents = "none";
//             film8.style.transform = "translateX(360%)";
//             film9.style.transform = "translateX(480%)";
//             film10.style.transform = "translateX(600%)";
//             film11.style.transform = "translateX(600%)";
//             slide1.checked = false;
//             slide2.checked = true;
//             slide3.checked = false;
//         }
//         if (number == 3) {
//             film1.style.transform = "translateX(-240%)";
//             film2.style.transform = "translateX(-240%)";
//             film3.style.transform = "translateX(-240%)";
//             film4.style.transform = "translateX(-240%)";
//             film5.style.transform = "translateX(-240%)";
//             film5.style.opacity = "1";
//             film6.style.transform = "translateX(-120%)";
//             film7.style.transform = "translateX(0%)";
//             film7.style.opacity = "1";
//             film7.style.pointerEvents = "auto";
//             film8.style.transform = "translateX(120%)";
//             film9.style.transform = "translateX(240%)";
//             film9.style.opacity = "0.5";
//             film9.style.pointerEvents = "none";
//             film10.style.transform = "translateX(360%)";
//             film11.style.transform = "translateX(360%)";
//             slide1.checked = false;
//             slide2.checked = true;
//             slide3.checked = false;
//         }
//         if (number == 4) {
//             film1.style.transform = "translateX(-240%)";
//             film2.style.transform = "translateX(-240%)";
//             film3.style.transform = "translateX(-240%)";
//             film4.style.transform = "translateX(-240%)";
//             film5.style.transform = "translateX(-240%)";
//             film6.style.transform = "translateX(-120%)";
//             film7.style.transform = "translateX(-240%)";
//             film8.style.transform = "translateX(-120%)";
//             film9.style.opacity = "1";
//             film9.style.pointerEvents = "auto";
//             film9.style.transform = "translateX(0%)";
//             film10.style.transform = "translateX(120%)";
//             film11.style.transform = "translateX(240%)";
//             film11.style.opacity = "0.5";
//             film11.style.pointerEvents = "none";
//             slide1.checked = false;
//             slide2.checked = true;
//             slide3.checked = false;
//         }
//         if (number == 5) {
//             film1.style.transform = "translateX(-240%)";
//             film2.style.transform = "translateX(-240%)";
//             film3.style.transform = "translateX(-240%)";
//             film4.style.transform = "translateX(-240%)";
//             film5.style.transform = "translateX(-240%)";
//             film6.style.transform = "translateX(-240%)";
//             film7.style.transform = "translateX(-240%)";
//             film8.style.transform = "translateX(-240%)";
//             film9.style.transform = "translateX(-240%)";
//             film10.style.transform = "translateX(-120%)";
//             film11.style.transform = "translateX(0%)";
//             film11.style.opacity = "1";
//             film11.style.pointerEvents = "auto";
//             slide1.checked = false;
//             slide2.checked = false;
//             slide3.checked = true;
//         }
//         if (number > 5) { number = 5; }
//     })

//     span[0].addEventListener('click', () => {
//         number--;
//         console.log(number)
//         if (number == 0) {
//             film1.style.transform = "translateX(0%)";
//             film2.style.transform = "translateX(120%)";
//             film3.style.transform = "translateX(240%)";
//             film3.style.opacity = "0.5";
//             film3.style.pointerEvents = "none";
//             film4.style.transform = "translateX(360%)";
//             film5.style.transform = "translateX(480%)";
//             film6.style.transform = "translateX(600%)";
//             film7.style.transform = "translateX(600%)";
//             film8.style.transform = "translateX(600%)";
//             film9.style.transform = "translateX(600%)";
//             film10.style.transform = "translateX(600%)";
//             film11.style.transform = "translateX(600%)";
//             slide1.checked = true;
//             slide2.checked = false;
//             slide3.checked = false;
//         }
//         if (number == 1) {
//             film1.style.transform = "translateX(-240%)";
//             film2.style.transform = "translateX(-120%)";
//             film3.style.transform = "translateX(0%)";
//             film3.style.opacity = "1";
//             film4.style.transform = "translateX(120%)";
//             film5.style.transform = "translateX(240%)";
//             film5.style.opacity = "0.5";
//             film5.style.pointerEvents = "none";
//             film6.style.transform = "translateX(360%)";
//             film7.style.transform = "translateX(600%)";
//             film8.style.transform = "translateX(600%)";
//             film9.style.transform = "translateX(600%)";
//             film10.style.transform = "translateX(600%)";
//             film11.style.transform = "translateX(600%)";
//             slide1.checked = false;
//             slide2.checked = true;
//             slide3.checked = false;

//         }
//         if (number == 2) {
//             film1.style.transform = "translateX(-240%)";
//             film2.style.transform = "translateX(-240%)";
//             film3.style.transform = "translateX(-120%)";
//             film4.style.transform = "translateX(-120%)";
//             film5.style.transform = "translateX(0%)";
//             film5.style.opacity = "1";
//             film6.style.transform = "translateX(120%)";
//             film7.style.transform = "translateX(240%)";
//             film7.style.opacity = "0.5";
//             film7.style.pointerEvents = "none";
//             film8.style.transform = "translateX(360%)";
//             film9.style.transform = "translateX(480%)";
//             film10.style.transform = "translateX(600%)";
//             film11.style.transform = "translateX(600%)";
//             slide1.checked = false;
//             slide2.checked = true;
//             slide3.checked = false;
//         }
//         if (number == 3) {
//             film1.style.transform = "translateX(-240%)";
//             film2.style.transform = "translateX(-240%)";
//             film3.style.transform = "translateX(-240%)";
//             film4.style.transform = "translateX(-240%)";
//             film5.style.transform = "translateX(-240%)";
//             film5.style.opacity = "1";
//             film6.style.transform = "translateX(-120%)";
//             film7.style.transform = "translateX(0%)";
//             film7.style.opacity = "1";
//             film7.style.pointerEvents = "auto";
//             film8.style.transform = "translateX(120%)";
//             film9.style.transform = "translateX(240%)";
//             film9.style.opacity = "0.5";
//             film9.style.pointerEvents = "none";
//             film10.style.transform = "translateX(360%)";
//             film11.style.transform = "translateX(360%)";
//             slide1.checked = false;
//             slide2.checked = true;
//             slide3.checked = false;
//         }
//         if (number == 4) {
//             film1.style.transform = "translateX(-240%)";
//             film2.style.transform = "translateX(-240%)";
//             film3.style.transform = "translateX(-240%)";
//             film4.style.transform = "translateX(-240%)";
//             film5.style.transform = "translateX(-240%)";
//             film6.style.transform = "translateX(-120%)";
//             film7.style.transform = "translateX(-240%)";
//             film8.style.transform = "translateX(-120%)";
//             film9.style.opacity = "1";
//             film9.style.pointerEvents = "auto";
//             film9.style.transform = "translateX(0%)";
//             film10.style.transform = "translateX(120%)";
//             film11.style.transform = "translateX(240%)";
//             film11.style.opacity = "0.5";
//             film11.style.pointerEvents = "none";
//             slide1.checked = false;
//             slide2.checked = true;
//             slide3.checked = false;
//         }
//         if (number == 5) {
//             film1.style.transform = "translateX(-240%)";
//             film2.style.transform = "translateX(-240%)";
//             film3.style.transform = "translateX(-240%)";
//             film4.style.transform = "translateX(-240%)";
//             film5.style.transform = "translateX(-240%)";
//             film6.style.transform = "translateX(-240%)";
//             film7.style.transform = "translateX(-240%)";
//             film8.style.transform = "translateX(-240%)";
//             film9.style.transform = "translateX(-240%)";
//             film10.style.transform = "translateX(-120%)";
//             film11.style.transform = "translateX(0%)";
//             film11.style.opacity = "1";
//             film11.style.pointerEvents = "auto";
//             slide1.checked = false;
//             slide2.checked = false;
//             slide3.checked = true;
//         }
//         if (number <= 0) { number = 0; }
//     })
// }

// // IPAD VIEW

// if (small_ipad_view.matches) {
//     console.log("small ipad view")
//     if (slide1.checked == true) {
//         film1.style.transform = "translateX(0%)";
//         film2.style.transform = "translateX(120%)";
//         film3.style.transform = "translateX(240%)";
//         film4.style.opacity = "0.5";
//         film4.style.pointerEvents = "none";
//         film4.style.transform = "translateX(360%)";
//         film5.style.transform = "translateX(480%)";
//         film6.style.transform = "translateX(600%)";
//         film7.style.transform = "translateX(600%)";
//         film8.style.transform = "translateX(600%)";
//         film9.style.transform = "translateX(600%)";
//         film10.style.transform = "translateX(600%)";
//         film11.style.transform = "translateX(600%)";
//     }


//     span[1].addEventListener('click', () => {
//         number++;
//         console.log(number)
//         if (number == 0) {
//             film1.style.transform = "translateX(0%)";
//             film2.style.transform = "translateX(120%)";
//             film3.style.transform = "translateX(240%)";
//             film4.style.opacity = "0.5";
//             film4.style.pointerEvents = "none";
//             film4.style.transform = "translateX(360%)";
//             film5.style.transform = "translateX(480%)";
//             film6.style.transform = "translateX(600%)";
//             film7.style.transform = "translateX(600%)";
//             film8.style.transform = "translateX(600%)";
//             film9.style.transform = "translateX(600%)";
//             film10.style.transform = "translateX(600%)";
//             film11.style.transform = "translateX(600%)";
//             slide1.checked = true;
//             slide2.checked = false;
//             slide3.checked = false;
//         }
//         if (number == 1) {
//             film1.style.transform = "translateX(-360%)";
//             film2.style.transform = "translateX(-240%)";
//             film3.style.transform = "translateX(-120%)";
//             film3.style.opacity = "0.5";
//             film3.style.pointerEvents = "none";
//             film4.style.transform = "translateX(0%)";
//             film4.style.opacity = "1";
//             film4.style.pointerEvents = "auto";
//             film5.style.transform = "translateX(120%)";
//             film6.style.transform = "translateX(240%)";
//             film7.style.transform = "translateX(360%)";
//             film7.style.opacity = "0.5";
//             film7.style.pointerEvents = "none";
//             film8.style.transform = "translateX(480%)";
//             film9.style.transform = "translateX(600%)";
//             film10.style.transform = "translateX(600%)";
//             film11.style.transform = "translateX(600%)";
//             slide1.checked = false;
//             slide2.checked = true;
//             slide3.checked = false;

//         }
//         if (number == 2) {
//             film1.style.transform = "translateX(-240%)";
//             film2.style.transform = "translateX(-240%)";
//             film3.style.transform = "translateX(-240%)";
//             film4.style.transform = "translateX(-240%)";
//             film5.style.transform = "translateX(-240%)";
//             film6.style.transform = "translateX(-120%)";
//             film6.style.opacity = "0.5";
//             film6.style.pointerEvents = "none";
//             film7.style.opacity = "1";
//             film7.style.pointerEvents = "auto";
//             film7.style.transform = "translateX(0%)";
//             film8.style.transform = "translateX(120%)";
//             film9.style.transform = "translateX(240%)";
//             film9.style.opacity = "1";
//             film9.style.pointerEvents = "auto";
//             film10.style.opacity = "0.5";
//             film10.style.pointerEvents = "none";
//             film10.style.transform = "translateX(360%)";
//             film11.style.transform = "translateX(480%)";
//             slide1.checked = false;
//             slide2.checked = true;
//             slide3.checked = false;
//         }
//         if (number == 3) {
//             film1.style.transform = "translateX(-240%)";
//             film2.style.transform = "translateX(-240%)";
//             film3.style.transform = "translateX(-240%)";
//             film4.style.transform = "translateX(-240%)";
//             film5.style.transform = "translateX(-240%)";
//             film6.style.transform = "translateX(-240%)";
//             film7.style.transform = "translateX(-240%)";
//             film8.style.transform = "translateX(-240%)";
//             film9.style.transform = "translateX(-120%)";
//             film9.style.opacity = "0.5";
//             film9.style.pointerEvents = "none";
//             film10.style.opacity = "1";
//             film10.style.pointerEvents = "auto";
//             film10.style.transform = "translateX(0%)";
//             film11.style.transform = "translateX(120%)";
//             slide1.checked = false;
//             slide2.checked = false;
//             slide3.checked = true;
//         }
//         if (number > 3) { number = 3; }
//     })

//     span[0].addEventListener('click', () => {
//         number--;
//         console.log(number)
//         if (number == 0) {
//             film1.style.transform = "translateX(0%)";
//             film2.style.transform = "translateX(120%)";
//             film3.style.transform = "translateX(240%)";
//             film4.style.opacity = "0.5";
//             film4.style.pointerEvents = "none";
//             film4.style.transform = "translateX(360%)";
//             film5.style.transform = "translateX(480%)";
//             film6.style.transform = "translateX(600%)";
//             film7.style.transform = "translateX(600%)";
//             film8.style.transform = "translateX(600%)";
//             film9.style.transform = "translateX(600%)";
//             film10.style.transform = "translateX(600%)";
//             film11.style.transform = "translateX(600%)";
//             slide1.checked = true;
//             slide2.checked = false;
//             slide3.checked = false;
//         }
//         if (number == 1) {
//             film1.style.transform = "translateX(-360%)";
//             film2.style.transform = "translateX(-240%)";
//             film3.style.transform = "translateX(-120%)";
//             film3.style.opacity = "0.5";
//             film3.style.pointerEvents = "none";
//             film4.style.transform = "translateX(0%)";
//             film4.style.opacity = "1";
//             film4.style.pointerEvents = "auto";
//             film5.style.transform = "translateX(120%)";
//             film6.style.transform = "translateX(240%)";
//             film7.style.transform = "translateX(360%)";
//             film7.style.opacity = "0.5";
//             film7.style.pointerEvents = "none";
//             film8.style.transform = "translateX(480%)";
//             film9.style.transform = "translateX(600%)";
//             film10.style.transform = "translateX(600%)";
//             film11.style.transform = "translateX(600%)";
//             slide1.checked = false;
//             slide2.checked = true;
//             slide3.checked = false;

//         }
//         if (number == 2) {
//             film1.style.transform = "translateX(-240%)";
//             film2.style.transform = "translateX(-240%)";
//             film3.style.transform = "translateX(-240%)";
//             film4.style.transform = "translateX(-240%)";
//             film5.style.transform = "translateX(-240%)";
//             film6.style.transform = "translateX(-120%)";
//             film6.style.opacity = "0.5";
//             film6.style.pointerEvents = "none";
//             film7.style.opacity = "1";
//             film7.style.pointerEvents = "auto";
//             film7.style.transform = "translateX(0%)";
//             film8.style.transform = "translateX(120%)";
//             film9.style.transform = "translateX(240%)";
//             film9.style.opacity = "1";
//             film9.style.pointerEvents = "auto";
//             film10.style.opacity = "0.5";
//             film10.style.pointerEvents = "none";
//             film10.style.transform = "translateX(360%)";
//             film11.style.transform = "translateX(480%)";
//             slide1.checked = false;
//             slide2.checked = true;
//             slide3.checked = false;
//         }
//         if (number == 3) {
//             film1.style.transform = "translateX(-240%)";
//             film2.style.transform = "translateX(-240%)";
//             film3.style.transform = "translateX(-240%)";
//             film4.style.transform = "translateX(-240%)";
//             film5.style.transform = "translateX(-240%)";
//             film6.style.transform = "translateX(-240%)";
//             film7.style.transform = "translateX(-240%)";
//             film8.style.transform = "translateX(-240%)";
//             film9.style.transform = "translateX(-120%)";
//             film9.style.opacity = "0.5";
//             film9.style.pointerEvents = "none";
//             film10.style.opacity = "1";
//             film10.style.pointerEvents = "auto";
//             film10.style.transform = "translateX(0%)";
//             film11.style.transform = "translateX(120%)";
//             slide1.checked = false;
//             slide2.checked = false;
//             slide3.checked = true;
//         }
//         if (number <= 0) { number = 0; }
//     })
// }


// // BIG IPAD VIEW

// if (big_ipad_view.matches) {
//     console.log("big ipad view")
//     if (slide1.checked == true) {
//         film1.style.transform = "translateX(0%)";
//         film2.style.transform = "translateX(120%)";
//         film3.style.transform = "translateX(240%)";
//         film4.style.transform = "translateX(360%)";
//         film5.style.transform = "translateX(480%)";
//         film5.style.pointerEvents = "none";
//         film5.style.opacity = "0.5";
//         film6.style.transform = "translateX(600%)";
//         film7.style.transform = "translateX(600%)";
//         film8.style.transform = "translateX(600%)";
//         film9.style.transform = "translateX(600%)";
//         film10.style.transform = "translateX(600%)";
//         film11.style.transform = "translateX(600%)";
//     }


//     span[1].addEventListener('click', () => {
//         number++;
//         console.log(number)
//         if (number == 0) {
//             film1.style.transform = "translateX(0%)";
//             film2.style.transform = "translateX(120%)";
//             film3.style.transform = "translateX(240%)";
//             film4.style.transform = "translateX(360%)";
//             film5.style.transform = "translateX(480%)";
//             film5.style.opacity = "0.5";
//             film5.style.pointerEvents = "none";
//             film6.style.transform = "translateX(600%)";
//             film7.style.transform = "translateX(600%)";
//             film8.style.transform = "translateX(600%)";
//             film9.style.transform = "translateX(600%)";
//             film10.style.transform = "translateX(600%)";
//             film11.style.transform = "translateX(600%)";

//             slide1.checked = true;
//             slide2.checked = false;
//             slide3.checked = false;
//         }
//         if (number == 1) {
//             film1.style.transform = "translateX(-480%)";
//             film2.style.transform = "translateX(-360%)";
//             film3.style.transform = "translateX(-240%)";
//             film4.style.transform = "translateX(-180%)";
//             film5.style.transform = "translateX(0%)";
//             film5.style.opacity = "1";
//             film5.style.pointerEvents = "auto";
//             film6.style.transform = "translateX(120%)";
//             film7.style.transform = "translateX(240%)";
//             film8.style.transform = "translateX(360%)";
//             film9.style.transform = "translateX(480%)";
//             film9.style.opacity = "0.5";
//             film9.style.pointerEvents = "none";
//             film10.style.transform = "translateX(600%)";
//             film11.style.transform = "translateX(600%)";
//             slide1.checked = false;
//             slide2.checked = true;
//             slide3.checked = false;
//         }
//         if (number == 2) {
//             film1.style.transform = "translateX(-240%)";
//             film2.style.transform = "translateX(-240%)";
//             film3.style.transform = "translateX(-240%)";
//             film4.style.transform = "translateX(-240%)";
//             film5.style.transform = "translateX(-240%)";
//             film6.style.transform = "translateX(-240%)";
//             film7.style.transform = "translateX(-240%)";
//             film8.style.transform = "translateX(-180%)";
//             film9.style.transform = "translateX(0%)";
//             film9.style.opacity = "1";
//             film9.style.pointerEvents = "auto";
//             film10.style.transform = "translateX(120%)";
//             film11.style.transform = "translateX(240%)";
//             slide1.checked = false;
//             slide2.checked = true;
//             slide3.checked = false;
//         }
//         if (number > 2) { number = 2; }
//     })

//     span[0].addEventListener('click', () => {
//         number--;
//         console.log(number)
//         if (number == 0) {
//             film1.style.transform = "translateX(0%)";
//             film2.style.transform = "translateX(120%)";
//             film3.style.transform = "translateX(240%)";
//             film4.style.transform = "translateX(360%)";
//             film5.style.transform = "translateX(480%)";
//             film5.style.opacity = "0.5";
//             film5.style.pointerEvents = "none";
//             film6.style.transform = "translateX(600%)";
//             film7.style.transform = "translateX(600%)";
//             film8.style.transform = "translateX(600%)";
//             film9.style.transform = "translateX(600%)";
//             film10.style.transform = "translateX(600%)";
//             film11.style.transform = "translateX(600%)";

//             slide1.checked = true;
//             slide2.checked = false;
//             slide3.checked = false;
//         }
//         if (number == 1) {
//             film1.style.transform = "translateX(-480%)";
//             film2.style.transform = "translateX(-360%)";
//             film3.style.transform = "translateX(-240%)";
//             film4.style.transform = "translateX(-180%)";
//             film5.style.transform = "translateX(0%)";
//             film5.style.opacity = "1";
//             film5.style.pointerEvents = "auto";
//             film6.style.transform = "translateX(120%)";
//             film7.style.transform = "translateX(240%)";
//             film8.style.transform = "translateX(360%)";
//             film9.style.transform = "translateX(480%)";
//             film9.style.opacity = "0.5";
//             film9.style.pointerEvents = "none";
//             film10.style.transform = "translateX(600%)";
//             film11.style.transform = "translateX(600%)";
//             slide1.checked = false;
//             slide2.checked = true;
//             slide3.checked = false;
//         }
//         if (number == 2) {
//             film1.style.transform = "translateX(-240%)";
//             film2.style.transform = "translateX(-240%)";
//             film3.style.transform = "translateX(-240%)";
//             film4.style.transform = "translateX(-240%)";
//             film5.style.transform = "translateX(-240%)";
//             film6.style.transform = "translateX(-240%)";
//             film7.style.transform = "translateX(-240%)";
//             film8.style.transform = "translateX(-180%)";
//             film9.style.transform = "translateX(0%)";
//             film9.style.opacity = "1";
//             film9.style.pointerEvents = "auto";
//             film10.style.transform = "translateX(120%)";
//             film11.style.transform = "translateX(240%)";
//             slide1.checked = false;
//             slide2.checked = true;
//             slide3.checked = false;
//         }
//         if (number <= 0) { number = 0; }
//     })
// }