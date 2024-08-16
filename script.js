const buttons = document.querySelectorAll('button');
const display = document.getElementById('display');

buttons.forEach((item) => {
    item.onclick = () => {
        if (item.id == 'clear') {
            display.innerText = '';
        } else if (item.id == 'backspace') {
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length - 1);
        } else if (display.innerText != '' && item.id == 'equal') {
            try {
                display.innerText = eval(display.innerText);
            } catch {
                display.innerText = 'Error!';
                setTimeout(() => (display.innerText = ''), 2000);
            }
        } else if (display.innerText == '' && item.id == 'equal') {
            display.innerText = 'Empty!';
            setTimeout(() => (display.innerText = ''), 2000);
        } else {
            display.innerText += item.id;
        }
    }
});

const theme = document.querySelector('.theme-toggler');
const calculator = document.querySelector('.calculator');
let isDark = true;


