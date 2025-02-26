let a = +prompt("Mời bạn nhập số thứ nhất:");
let b = +prompt("Mời bạn nhập số thứ hai:");
let c = +prompt("Mời bạn nhập số thứ ba:");

if (a > b) {
    if (a > c) {
        document.write("Số lớn nhất trong 3 số là:" + a);
    }
    else {
        document.write("Số lớn nhất trong 3 số là:" + c);
    }
}
else {
    if (b > c) {
        document.write("Số lớn nhất trong 3 số là:" + b);
    }
    else {
        document.write("Số lớn nhất trong 3 số là:" + c);
    }
}