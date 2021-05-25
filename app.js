const headImg = document.querySelector("#head-img");
const name = document.querySelector("#name");
const intro = document.querySelector("#intro");
const mainContent = document.querySelector("#main-content");

// Checks for scroll UP or DOWN
let lastScrollTop = 0;

// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
// window.addEventListener("scroll", function () { // or window.addEventListener("scroll"....
//     var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
//     if (st > lastScrollTop) {
//         console.log("Scrolled Down")
//     } else {
//         console.log("Scrolled Up")
//     }
//     lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
// }, false);

//Make sure the images are loaded before execution
window.addEventListener("load", () => {
    intro.style.height = `calc(100vh - ${headImg.clientHeight}px - ${name.clientHeight}px)`;
    mainContent.style.height = `calc(100vh - ${name.clientHeight}px)`;
})