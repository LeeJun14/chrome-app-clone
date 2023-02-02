const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const secondss = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${secondss}`;
}

getClock()
setInterval(getClock, 1000);