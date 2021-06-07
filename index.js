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
