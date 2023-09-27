function myFunction() {
    let a = +prompt("Enter first number:", 2);
    let b = +prompt("Enter second number:", 2);

    alert(a + '+' + b + '=' + (a + b)
        + '\n' +
        a + '-' + b + '=' + (a - b)
        + '\n' +
        a + '*' + b + '=' + (a * b)
        + '\n' +
        a + '/' + b + '=' + (a / b)
    );
}
