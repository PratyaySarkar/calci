function display(num) {
    var n = document.getElementById('textbox');

    if (num === 'C') {
        n.value = null;
        n.placeholder = 0;
    }

    else if (num === '%' || num === '_')
        (n.value.length < 1) ? n.placeholder = 0 : (num === '%') ? n.value = eval(Number(n.value) / 100) : n.value = -n.value;

    else if (num === '.') {
        if (n.value.slice(n.value.length - 1, n.value.length) !== '.') {
            if (n.value.length < 1)
                n.value = '0';
            n.value += num;
        }
    }

    else if (num === 'B')
        n.value = n.value.slice(0, (n.value.length) - 1);

    else if (num === '/' || num === 'X' || num === '-' || num === '+') {
        if (['+', '-', '*', '/'].includes(n.value.slice(n.value.length - 1, n.value.length)) === false)
            (n.value.length < 1) ? n.placeholder = 0 : (num === 'X') ? n.value += '*' : n.value += num;
    }
    else
        n.value += num;
}


function calculate() {
    var n = document.getElementById('textbox');
    (n.value.length < 1) ? n.placeholder = 0 : n.value = eval(n.value);
}

document.addEventListener('keydown', function (e) {
    key = e.key;
    console.log(key);
    for (var i = 0; i <= 9; i++)
        if (key == i) display(key);
    if (key === 'Enter') calculate();
    if (key === 'Delete') display('C');
    if (key === 'Backspace') display('B');
    if (key === '.') display('.');
    if (key === '%') display('%');
    if (key === '+') display('+');
    if (key === '-') display('-');
    if (key === '*') display('X');
    if (key === '/') display('/');
});