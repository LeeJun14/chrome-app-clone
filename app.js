const h1 = document.querySelector("div.hello h1");

function h1Click() {
    h1.classList.toggle("active");
}


h1.addEventListener("click", h1Click);
