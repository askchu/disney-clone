const icons = document.querySelectorAll('.icons');

// const w = window.innerWidth;

// function reportWindowSize() {
//     const width = window.innerWidth;
//     console.log(width);
//     if (width < 1020) {
//         console.log('less than 1020px')
//         icons.textContent = "hello";
//     }
// }

// window.onresize = reportWindowSize;

// Defining event listener function
function displayWindowSize() {
    // Get width and height of the window excluding scrollbars
    var w = document.documentElement.clientWidth;
    var h = document.documentElement.clientHeight;

    // Display result inside a div element
    // document.getElementById("#icons").innerHTML = "Width: " + w + ", " + "Height: " + h;
    icons.innerHTML = w + h;
}

// Attaching the event listener function to window's resize event
window.addEventListener("resize", displayWindowSize);

// Calling the function for the first time
displayWindowSize();