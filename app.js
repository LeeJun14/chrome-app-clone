const player = {
    name: "jun",
    age: 19,
    from: "korea"
};

console.log(player);

/* const는 변경이 불가하지만  const 안의 값만은 변경가능*/
player.age = 18;
player.firstName = "lee";
console.log(player);