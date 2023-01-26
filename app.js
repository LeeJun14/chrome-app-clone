const title = document.querySelector("div.hello h1");

function titleClick() {
    title.style.color = "blue";
}
function titleMouseEnter() {
    title.innerText = "Mouse is here!";
}
function titleMouseLeave() {
    title.innerText = "Mouse is gone!";
}

title.addEventListener("click", titleClick);
title.addEventListener("mouseenter", titleMouseEnter);
title.addEventListener("mouseleave", titleMouseLeave);



