const h1 = document.querySelector("div.hello h1");

function h1Click() {
    h1.style.color = "blue";
}

function h1MouseEnter() {
    h1.innerText = "Mouse is here!";
}

function h1MouseLeave() {
    h1.innerText = "Mouse is gone!";
}

function windowResize() {
    document.body.style.backgroundColor = "tomato"
}

function windowCopy() {
    alert("copier!");
}

function windowOffline() {
    alert("SOS no WIFI");
}

function windowOnline() {
    alert("ALL GOOD!");
}

h1.addEventListener("click", h1Click);
h1.addEventListener("mouseenter", h1MouseEnter);
h1.addEventListener("mouseleave", h1MouseLeave);

window.addEventListener("resize", windowResize);
window.addEventListener("copy", windowCopy);
window.addEventListener("offline", windowOffline);
window.addEventListener("online", windowOnline);



