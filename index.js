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
let count1 = 0

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
const film12 = document.querySelector("#film12");
const film13 = document.querySelector("#film13");
const film14 = document.querySelector("#film14");
const film15 = document.querySelector("#film15");

carousel(move1[1], move1[0], slide1, slide2, slide3, count1, film1, film2, film3, film4, film5, film6, film7, film8, film9, film10, film11, film12, film13, film14, film15);

// Because You Watched Moana

// Count
let count2 = 0

// Input
const slide4 = document.querySelector("#slide4");
const slide5 = document.querySelector("#slide5");
const slide6 = document.querySelector("#slide6");

// Controls
const move2 = document.querySelectorAll(".move2");

// Films
const film16 = document.querySelector("#film16");
const film17 = document.querySelector("#film17");
const film18 = document.querySelector("#film18");
const film19 = document.querySelector("#film19");
const film20 = document.querySelector("#film20");
const film21 = document.querySelector("#film21");
const film22 = document.querySelector("#film22");
const film23 = document.querySelector("#film23");
const film24 = document.querySelector("#film24");
const film25 = document.querySelector("#film25");
const film26 = document.querySelector("#film26");
const film27 = document.querySelector("#film27");
const film28 = document.querySelector("#film28");
const film29 = document.querySelector("#film29");
const film30 = document.querySelector("#film30");

carousel(move2[1], move2[0], slide4, slide5, slide6, count2, film16, film17, film18, film19, film20, film21, film22, film23, film24, film25, film26, film27, film28, film29, film30)

// Recommended For You

// Count
let count3 = 0

// Input
const slide7 = document.querySelector("#slide7");
const slide8 = document.querySelector("#slide8");
const slide9 = document.querySelector("#slide9");

// Controls
const move3 = document.querySelectorAll(".move3");

// Films
const film31 = document.querySelector("#film31");
const film32 = document.querySelector("#film32");
const film33 = document.querySelector("#film33");
const film34 = document.querySelector("#film34");
const film35 = document.querySelector("#film35");
const film36 = document.querySelector("#film36");
const film37 = document.querySelector("#film37");
const film38 = document.querySelector("#film38");
const film39 = document.querySelector("#film39");
const film40 = document.querySelector("#film40");
const film41 = document.querySelector("#film41");
const film42 = document.querySelector("#film42");
const film43 = document.querySelector("#film43");
const film44 = document.querySelector("#film44");
const film45 = document.querySelector("#film45");

carousel(move3[1], move3[0], slide7, slide8, slide9, count3, film31, film32, film33, film34, film35, film36, film37, film38, film39, film40, film41, film42, film43, film44, film45)


function carousel(moveRight, moveLeft, s1, s2, s3, number, f1, f2, f3, f4, f5, f6, f7, f8, f9, f10, f11, f12, f13, f14, f15) {
    let mobile_view = window.matchMedia("(max-width: 770px)");
    let small_ipad_view = window.matchMedia("(min-width: 771px) and (max-width: 1024px");
    let big_ipad_view = window.matchMedia("(min-width: 1025px) and (max-width: 1439px");
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
            f12.style.transform = "translateX(600%)";
            f13.style.transform = "translateX(600%)";
            f14.style.transform = "translateX(600%)";
            f15.style.transform = "translateX(600%)";
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
                f12.style.transform = "translateX(600%)";
                f13.style.transform = "translateX(600%)";
                f14.style.transform = "translateX(600%)";
                f15.style.transform = "translateX(600%)";
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
                f12.style.transform = "translateX(600%)";
                f13.style.transform = "translateX(600%)";
                f14.style.transform = "translateX(600%)";
                f15.style.transform = "translateX(600%)";
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
                f12.style.transform = "translateX(600%)";
                f13.style.transform = "translateX(600%)";
                f14.style.transform = "translateX(600%)";
                f15.style.transform = "translateX(600%)";
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
                f12.style.transform = "translateX(480%)";
                f13.style.transform = "translateX(600%)";
                f14.style.transform = "translateX(600%)";
                f15.style.transform = "translateX(600%)";
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
                f12.style.transform = "translateX(360%)";
                f13.style.transform = "translateX(480%)";
                f14.style.transform = "translateX(600%)";
                f15.style.transform = "translateX(600%)";
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
                f12.style.transform = "translateX(120%)";
                f13.style.transform = "translateX(240%)";
                f13.style.opacity = "0.5";
                f13.style.pointerEvents = "none";
                f14.style.transform = "translateX(360%)";
                f15.style.transform = "translateX(480%)";
                s1.checked = false;
                s2.checked = true;
                s3.checked = false;
            }
            if (number == 6) {
                f1.style.transform = "translateX(-240%)";
                f2.style.transform = "translateX(-240%)";
                f3.style.transform = "translateX(-240%)";
                f4.style.transform = "translateX(-240%)";
                f5.style.transform = "translateX(-240%)";
                f6.style.transform = "translateX(-240%)";
                f7.style.transform = "translateX(-240%)";
                f8.style.transform = "translateX(-240%)";
                f9.style.transform = "translateX(-240%)";
                f10.style.transform = "translateX(-240%)";
                f11.style.transform = "translateX(-240%)";
                f12.style.transform = "translateX(-140%)";
                f13.style.transform = "translateX(0%)";
                f13.style.opacity = "1";
                f13.style.pointerEvents = "auto";
                f14.style.transform = "translateX(120%)";
                f15.style.transform = "translateX(240%)";
                f15.style.opacity = "0.5";
                f15.style.pointerEvents = "none";
                s1.checked = false;
                s2.checked = true;
                s3.checked = false;
            }
            if (number == 7) {
                f1.style.transform = "translateX(-240%)";
                f2.style.transform = "translateX(-240%)";
                f3.style.transform = "translateX(-240%)";
                f4.style.transform = "translateX(-240%)";
                f5.style.transform = "translateX(-240%)";
                f6.style.transform = "translateX(-240%)";
                f7.style.transform = "translateX(-240%)";
                f8.style.transform = "translateX(-240%)";
                f9.style.transform = "translateX(-240%)";
                f10.style.transform = "translateX(-240%)";
                f11.style.transform = "translateX(-240%)";
                f12.style.transform = "translateX(-240%)";
                f13.style.transform = "translateX(-240%)";
                f14.style.transform = "translateX(-140%)";
                f15.style.transform = "translateX(0%)";
                f15.style.opacity = "1";
                f15.style.pointerEvents = "auto";
                s1.checked = false;
                s2.checked = false;
                s3.checked = true;
            }
            if (number > 7) { number = 7; }
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
                f12.style.transform = "translateX(600%)";
                f13.style.transform = "translateX(600%)";
                f14.style.transform = "translateX(600%)";
                f15.style.transform = "translateX(600%)";
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
                f12.style.transform = "translateX(600%)";
                f13.style.transform = "translateX(600%)";
                f14.style.transform = "translateX(600%)";
                f15.style.transform = "translateX(600%)";
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
                f12.style.transform = "translateX(600%)";
                f13.style.transform = "translateX(600%)";
                f14.style.transform = "translateX(600%)";
                f15.style.transform = "translateX(600%)";
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
                f12.style.transform = "translateX(480%)";
                f13.style.transform = "translateX(600%)";
                f14.style.transform = "translateX(600%)";
                f15.style.transform = "translateX(600%)";
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
                f12.style.transform = "translateX(360%)";
                f13.style.transform = "translateX(480%)";
                f14.style.transform = "translateX(600%)";
                f15.style.transform = "translateX(600%)";
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
                f12.style.transform = "translateX(120%)";
                f13.style.transform = "translateX(240%)";
                f13.style.opacity = "0.5";
                f13.style.pointerEvents = "none";
                f14.style.transform = "translateX(360%)";
                f15.style.transform = "translateX(480%)";
                s1.checked = false;
                s2.checked = true;
                s3.checked = false;
            }
            if (number == 6) {
                f1.style.transform = "translateX(-240%)";
                f2.style.transform = "translateX(-240%)";
                f3.style.transform = "translateX(-240%)";
                f4.style.transform = "translateX(-240%)";
                f5.style.transform = "translateX(-240%)";
                f6.style.transform = "translateX(-240%)";
                f7.style.transform = "translateX(-240%)";
                f8.style.transform = "translateX(-240%)";
                f9.style.transform = "translateX(-240%)";
                f10.style.transform = "translateX(-240%)";
                f11.style.transform = "translateX(-240%)";
                f12.style.transform = "translateX(-140%)";
                f13.style.transform = "translateX(0%)";
                f13.style.opacity = "1";
                f13.style.pointerEvents = "auto";
                f14.style.transform = "translateX(120%)";
                f15.style.transform = "translateX(240%)";
                f15.style.opacity = "0.5";
                f15.style.pointerEvents = "none";
                s1.checked = false;
                s2.checked = true;
                s3.checked = false;
            }
            if (number == 7) {
                f1.style.transform = "translateX(-240%)";
                f2.style.transform = "translateX(-240%)";
                f3.style.transform = "translateX(-240%)";
                f4.style.transform = "translateX(-240%)";
                f5.style.transform = "translateX(-240%)";
                f6.style.transform = "translateX(-240%)";
                f7.style.transform = "translateX(-240%)";
                f8.style.transform = "translateX(-240%)";
                f9.style.transform = "translateX(-240%)";
                f10.style.transform = "translateX(-240%)";
                f11.style.transform = "translateX(-240%)";
                f12.style.transform = "translateX(-240%)";
                f13.style.transform = "translateX(-240%)";
                f14.style.transform = "translateX(-140%)";
                f15.style.transform = "translateX(0%)";
                f15.style.opacity = "1";
                f15.style.pointerEvents = "auto";
                s1.checked = false;
                s2.checked = false;
                s3.checked = true;
            }
            if (number <= 0) { number = 0; }
        })
    }

    // IPAD VIEW

    if (small_ipad_view.matches) {
        // console.log("small ipad view")
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
            f12.style.transform = "translateX(600%)";
            f13.style.transform = "translateX(600%)";
            f14.style.transform = "translateX(600%)";
            f15.style.transform = "translateX(600%)";
        }


        moveRight.addEventListener('click', () => {
            number++;
            // console.log(number)
            if (number == 0) {
                f1.style.transform = "translateX(0%)";
                f2.style.transform = "translateX(120%)";
                f3.style.transform = "translateX(240%)";
                f3.style.opacity = "1";
                f3.style.pointerEvents = "auto";
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
                f12.style.transform = "translateX(600%)";
                f13.style.transform = "translateX(600%)";
                f14.style.transform = "translateX(600%)";
                f15.style.transform = "translateX(600%)";
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
                f6.style.opacity = "1";
                f6.style.pointerEvents = "auto";
                f7.style.transform = "translateX(360%)";
                f7.style.opacity = "0.5";
                f7.style.pointerEvents = "none";
                f8.style.transform = "translateX(480%)";
                f9.style.transform = "translateX(600%)";
                f10.style.transform = "translateX(600%)";
                f11.style.transform = "translateX(600%)";
                f12.style.transform = "translateX(600%)";
                f13.style.transform = "translateX(600%)";
                f14.style.transform = "translateX(600%)";
                f15.style.transform = "translateX(600%)";
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
                f12.style.transform = "translateX(600%)";
                f13.style.transform = "translateX(600%)";
                f14.style.transform = "translateX(600%)";
                f15.style.transform = "translateX(600%)";
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
                f12.style.transform = "translateX(240%)";
                f12.style.opacity = "1";
                f12.style.pointerEvents = "auto";
                f13.style.transform = "translateX(360%)";
                f13.style.opacity = "0.5";
                f13.style.pointerEvents = "none";
                f14.style.transform = "translateX(480%)";
                f15.style.transform = "translateX(600%)";
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
                f8.style.transform = "translateX(-240%)";
                f9.style.transform = "translateX(-240%)";
                f10.style.transform = "translateX(-240%)";
                f11.style.transform = "translateX(-240%)";
                f12.style.transform = "translateX(-120%)";
                f12.style.opacity = "0.5";
                f12.style.pointerEvents = "none";
                f13.style.transform = "translateX(0%)";
                f13.style.opacity = "1";
                f13.style.pointerEvents = "auto";
                f14.style.transform = "translateX(120%)";
                f15.style.transform = "translateX(240%)";
                s1.checked = false;
                s2.checked = false;
                s3.checked = true;
            }
            if (number > 4) { number = 4; }
        })

        moveLeft.addEventListener('click', () => {
            number--;
            // console.log(number)
            if (number == 0) {
                f1.style.transform = "translateX(0%)";
                f2.style.transform = "translateX(120%)";
                f3.style.transform = "translateX(240%)";
                f3.style.opacity = "1";
                f3.style.pointerEvents = "auto";
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
                f12.style.transform = "translateX(600%)";
                f13.style.transform = "translateX(600%)";
                f14.style.transform = "translateX(600%)";
                f15.style.transform = "translateX(600%)";
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
                f6.style.opacity = "1";
                f6.style.pointerEvents = "auto";
                f7.style.transform = "translateX(360%)";
                f7.style.opacity = "0.5";
                f7.style.pointerEvents = "none";
                f8.style.transform = "translateX(480%)";
                f9.style.transform = "translateX(600%)";
                f10.style.transform = "translateX(600%)";
                f11.style.transform = "translateX(600%)";
                f12.style.transform = "translateX(600%)";
                f13.style.transform = "translateX(600%)";
                f14.style.transform = "translateX(600%)";
                f15.style.transform = "translateX(600%)";
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
                f12.style.transform = "translateX(600%)";
                f13.style.transform = "translateX(600%)";
                f14.style.transform = "translateX(600%)";
                f15.style.transform = "translateX(600%)";
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
                f12.style.transform = "translateX(240%)";
                f12.style.opacity = "1";
                f12.style.pointerEvents = "auto";
                f13.style.transform = "translateX(360%)";
                f13.style.opacity = "0.5";
                f13.style.pointerEvents = "none";
                f14.style.transform = "translateX(480%)";
                f15.style.transform = "translateX(600%)";
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
                f8.style.transform = "translateX(-240%)";
                f9.style.transform = "translateX(-240%)";
                f10.style.transform = "translateX(-240%)";
                f11.style.transform = "translateX(-240%)";
                f12.style.transform = "translateX(-120%)";
                f12.style.opacity = "0.5";
                f12.style.pointerEvents = "none";
                f13.style.transform = "translateX(0%)";
                f13.style.opacity = "1";
                f13.style.pointerEvents = "auto";
                f14.style.transform = "translateX(120%)";
                f15.style.transform = "translateX(240%)";
                s1.checked = false;
                s2.checked = false;
                s3.checked = true;
            }
            if (number <= 0) { number = 0; }
        })
    }


    // BIG IPAD VIEW

    if (big_ipad_view.matches) {
        // console.log("big ipad view")
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
            f12.style.transform = "translateX(600%)";
            f13.style.transform = "translateX(600%)";
            f14.style.transform = "translateX(600%)";
            f15.style.transform = "translateX(600%)";

        }


        moveRight.addEventListener('click', () => {
            number++;
            // console.log(number)
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
                f12.style.transform = "translateX(600%)";
                f13.style.transform = "translateX(600%)";
                f14.style.transform = "translateX(600%)";
                f15.style.transform = "translateX(600%)";
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
                f12.style.transform = "translateX(600%)";
                f13.style.transform = "translateX(600%)";
                f14.style.transform = "translateX(600%)";
                f15.style.transform = "translateX(600%)";
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
                f12.style.transform = "translateX(360%)";
                f13.style.transform = "translateX(480%)";
                f13.style.opacity = "0.5";
                f13.style.pointerEvents = "none";
                f14.style.transform = "translateX(600%)";
                f15.style.transform = "translateX(600%)";
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
                f9.style.transform = "translateX(-240%)";
                f10.style.transform = "translateX(-240%)";
                f11.style.transform = "translateX(-240%)";
                f12.style.transform = "translateX(-240%)";
                f13.style.transform = "translateX(0%)";
                f13.style.opacity = "1";
                f13.style.pointerEvents = "auto";
                f14.style.transform = "translateX(120%)";
                f15.style.transform = "translateX(240%)";
                s1.checked = false;
                s2.checked = true;
                s3.checked = false;
            }
            if (number > 3) { number = 3; }
        })

        moveLeft.addEventListener('click', () => {
            number--;
            // console.log(number)
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
                f12.style.transform = "translateX(600%)";
                f13.style.transform = "translateX(600%)";
                f14.style.transform = "translateX(600%)";
                f15.style.transform = "translateX(600%)";
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
                f12.style.transform = "translateX(600%)";
                f13.style.transform = "translateX(600%)";
                f14.style.transform = "translateX(600%)";
                f15.style.transform = "translateX(600%)";
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
                f12.style.transform = "translateX(360%)";
                f13.style.transform = "translateX(480%)";
                f13.style.opacity = "0.5";
                f13.style.pointerEvents = "none";
                f14.style.transform = "translateX(600%)";
                f15.style.transform = "translateX(600%)";
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
                f9.style.transform = "translateX(-240%)";
                f10.style.transform = "translateX(-240%)";
                f11.style.transform = "translateX(-240%)";
                f12.style.transform = "translateX(-240%)";
                f13.style.transform = "translateX(0%)";
                f13.style.opacity = "1";
                f13.style.pointerEvents = "auto";
                f14.style.transform = "translateX(120%)";
                f15.style.transform = "translateX(240%)";
                s1.checked = false;
                s2.checked = true;
                s3.checked = false;
            }
            if (number <= 0) { number = 0; }
        })
    }

    // DESKTOP VIEW

    if (desktop_view.matches) {
        // console.log("desktop view")
        if (s1.checked == true) {
            f1.style.transform = "translateX(0%)";
            f2.style.transform = "translateX(120%)";
            f3.style.transform = "translateX(240%)";
            f4.style.transform = "translateX(360%)";
            f5.style.transform = "translateX(480%)";
            f6.style.pointerEvents = "none";
            f6.style.opacity = "0.5";
            f6.style.transform = "translateX(600%)";
            f7.style.transform = "translateX(720%)";
            f8.style.transform = "translateX(720%)";
            f9.style.transform = "translateX(720%)";
            f10.style.transform = "translateX(720%)";
            f11.style.transform = "translateX(720%)";
            f12.style.transform = "translateX(720%)";
            f13.style.transform = "translateX(720%)";
            f14.style.transform = "translateX(720%)";
            f15.style.transform = "translateX(720%)";
        }


        moveRight.addEventListener('click', () => {
            number++;
            // console.log(number)
            if (number == 0) {
                f1.style.transform = "translateX(0%)";
                f2.style.transform = "translateX(120%)";
                f3.style.transform = "translateX(240%)";
                f4.style.transform = "translateX(360%)";
                f5.style.transform = "translateX(480%)";
                f6.style.pointerEvents = "none";
                f6.style.opacity = "0.5";
                f6.style.transform = "translateX(600%)";
                f7.style.transform = "translateX(720%)";
                f8.style.transform = "translateX(720%)";
                f9.style.transform = "translateX(720%)";
                f10.style.transform = "translateX(720%)";
                f11.style.transform = "translateX(720%)";
                f12.style.transform = "translateX(720%)";
                f13.style.transform = "translateX(720%)";
                f14.style.transform = "translateX(720%)";
                f15.style.transform = "translateX(720%)";
                s1.checked = true;
                s2.checked = false;
                s3.checked = false;
            }
            if (number == 1) {
                f1.style.transform = "translateX(-480%)";
                f2.style.transform = "translateX(-360%)";
                f3.style.transform = "translateX(-240%)";
                f4.style.transform = "translateX(-150%)";
                f5.style.transform = "translateX(-150%)";
                f6.style.opacity = "1";
                f6.style.pointerEvents = "auto";
                f6.style.transform = "translateX(0%)";
                f7.style.transform = "translateX(120%)";
                f8.style.transform = "translateX(240%)";
                f9.style.transform = "translateX(360%)";
                f10.style.transform = "translateX(480%)";
                f11.style.transform = "translateX(600%)";
                f11.style.pointerEvents = "none";
                f11.style.opacity = "0.5";
                f12.style.transform = "translateX(720%)";
                f13.style.transform = "translateX(720%)";
                f14.style.transform = "translateX(720%)";
                f15.style.transform = "translateX(720%)";
                s1.checked = false;
                s2.checked = true;
                s3.checked = false;
            }
            if (number == 2) {
                f1.style.transform = "translateX(-480%)";
                f2.style.transform = "translateX(-360%)";
                f3.style.transform = "translateX(-240%)";
                f4.style.transform = "translateX(-150%)";
                f5.style.transform = "translateX(-150%)";
                f6.style.transform = "translateX(-360%)";
                f7.style.transform = "translateX(-240%)";
                f8.style.transform = "translateX(-150%)";
                f9.style.transform = "translateX(-150%)";
                f10.style.transform = "translateX(-150%)";
                f11.style.transform = "translateX(0%)";
                f11.style.pointerEvents = "auto";
                f11.style.opacity = "1";
                f12.style.transform = "translateX(120%)";
                f13.style.transform = "translateX(240%)";
                f14.style.transform = "translateX(360%)";
                f15.style.transform = "translateX(480%)";
                s1.checked = false;
                s2.checked = true;
                s3.checked = false;
            }
            if (number > 2) { number = 2; }
        })

        moveLeft.addEventListener('click', () => {
            number--;
            // console.log(number)
            if (number == 0) {
                f1.style.transform = "translateX(0%)";
                f2.style.transform = "translateX(120%)";
                f3.style.transform = "translateX(240%)";
                f4.style.transform = "translateX(360%)";
                f5.style.transform = "translateX(480%)";
                f6.style.pointerEvents = "none";
                f6.style.opacity = "0.5";
                f6.style.transform = "translateX(600%)";
                f7.style.transform = "translateX(720%)";
                f8.style.transform = "translateX(720%)";
                f9.style.transform = "translateX(720%)";
                f10.style.transform = "translateX(720%)";
                f11.style.transform = "translateX(720%)";
                f12.style.transform = "translateX(720%)";
                f13.style.transform = "translateX(720%)";
                f14.style.transform = "translateX(720%)";
                f15.style.transform = "translateX(720%)";
                s1.checked = true;
                s2.checked = false;
                s3.checked = false;
            }
            if (number == 1) {
                f1.style.transform = "translateX(-480%)";
                f2.style.transform = "translateX(-360%)";
                f3.style.transform = "translateX(-240%)";
                f4.style.transform = "translateX(-150%)";
                f5.style.transform = "translateX(-150%)";
                f6.style.opacity = "1";
                f6.style.pointerEvents = "auto";
                f6.style.transform = "translateX(0%)";
                f7.style.transform = "translateX(120%)";
                f8.style.transform = "translateX(240%)";
                f9.style.transform = "translateX(360%)";
                f10.style.transform = "translateX(480%)";
                f11.style.transform = "translateX(600%)";
                f11.style.pointerEvents = "none";
                f11.style.opacity = "0.5";
                f12.style.transform = "translateX(720%)";
                f13.style.transform = "translateX(720%)";
                f14.style.transform = "translateX(720%)";
                f15.style.transform = "translateX(720%)";
                s1.checked = false;
                s2.checked = true;
                s3.checked = false;
            }
            if (number == 2) {
                f1.style.transform = "translateX(-480%)";
                f2.style.transform = "translateX(-360%)";
                f3.style.transform = "translateX(-240%)";
                f4.style.transform = "translateX(-150%)";
                f5.style.transform = "translateX(-150%)";
                f6.style.transform = "translateX(-360%)";
                f7.style.transform = "translateX(-240%)";
                f8.style.transform = "translateX(-150%)";
                f9.style.transform = "translateX(-150%)";
                f10.style.transform = "translateX(-150%)";
                f11.style.transform = "translateX(0%)";
                f11.style.pointerEvents = "auto";
                f11.style.opacity = "1";
                f12.style.transform = "translateX(120%)";
                f13.style.transform = "translateX(240%)";
                f14.style.transform = "translateX(360%)";
                f15.style.transform = "translateX(480%)";
                s1.checked = false;
                s2.checked = true;
                s3.checked = false;
            }
            if (number <= 0) { number = 0; }
        })
    }


}
