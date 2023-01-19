function plus(a, b) {
    console.log(a + b);
}
function minus(a, b) {
    console.log(a - b);
}

plus(8, 60); 
minus(100, 50);

const player = {
    name: "jun",
    sayHello: function(otherPersonsName) {
        console.log("Hello " + otherPersonsName + " nice to meet you!");
    },
};

player.sayHello("song");