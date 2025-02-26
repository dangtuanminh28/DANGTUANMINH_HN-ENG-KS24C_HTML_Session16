let a = +prompt("Mời nhập số thứ 1");
let b = +prompt("Mời nhập số thứ 2");

if( num1 > num2 ) {
    let numberRandom = Math.floor(Math.random() * (a - b + 1)) + b;
    document.write(numberRandom);
} else {
    let numberRandom = Math.floor(Math.random() * (b - a + 1)) + a;
    document.write(numberRandom);
}