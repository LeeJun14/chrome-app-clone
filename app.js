const h1 = document.querySelector("div.hello h1");

function h1Click() {
    const clickClass = "active";
    if(h1.className === clickClass) {
        h1.className = ""; 
    } else {
        h1.className = clickClass;
    }
}


h1.addEventListener("click", h1Click);
