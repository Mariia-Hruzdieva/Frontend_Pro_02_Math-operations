let a;
let b;
let c;

a = +prompt('Введіть перше число');
if (isNaN(a)) {
    alert('Значення не є числом');
} else {
    b = +prompt('Введіть друге число');
    if (isNaN(b)) {
        alert('Значення не є числом');
    } else {
        c = +prompt('Введіть третє число');
        if (isNaN(c)) {
            alert('Значення не є числом');
        } else {
            const res = (a + b + c) / 3;
            alert('Середнє арифметичне = ' + res);
        }
    }
}






