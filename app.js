const h1 = document.querySelector("div.hello h1");

function h1Click() {
    const defaultColor = h1.style.color;
    let newColor;
    if (defaultColor === "blue") {
        newColor = "tomato";
    } else {
        newColor = "blue"
    }
    h1.style.color = newColor;
}


h1.addEventListener("click", h1Click);
