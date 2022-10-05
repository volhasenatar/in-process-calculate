let a = ''; // first number
let b = ''; // second number
let sign = ''; //знак операции
let finish = false; 

const digit = ['0', '1', '2','3','4','5','6','7','8','9',','];
const action = ['/', 'x','-','+','%' ];


//экран
const out = document.querySelector('.calc-screen p');

function clearAll() {
    a = ''; // first number
    b = ''; // second number
    sign = ''; //знак операции
    finish = false; 
    out.textContent = 0;
}

document.querySelector('.ac').addEventListener('click', clearAll);

document.querySelector('.buttons').addEventListener('click', function(event) {
    //нажата не кнопка
    if(!event.target.classList.contains('btn')) return;
    //нажата кнопка AC
    if(event.target.classList.contains('ac')) return;
    // очистка экрана при нажатии кнопки
    out.textContent = '';

    //получаю нажатую кнопку
    const key = event.target.textContent;

    //если нажата кнопка 0-9 и ,
    if (digit.includes(key)) {
        if (b === '' && sign === '') {
            a += key;
            console.log (a,b,sign)
            //выводим на экран
            out.textContent = a;
        }
        else if (a !== '' && b !== '' && finish) {
            b = key;
            finish = false;
            out.textContent = b;
        }
        else {
            b += key;
            out.textContent = b;
        }
        console.table (a,b,sign);
            return
    }

    //если нажата кнопка + - / x
    if (action.includes(key)) {
        sign = key;
        console.table (a,b,sign);
        //выводим на экран
        out.textContent = sign;
        return
    }


    //нажата =
    if (key === '=') {
        if (b === '') {
            b = a;
        }
        switch (sign) {
            case '+':
                a = (+a) + (+b);
                break;

            case '-':
                a = a - b;
                break; 

            case 'x':
                a = a * b;
                break; 

            case '/':
                if (b === '0') {
                    out.textContent = 'Error';
                    return;
                }
                a = a / b;
                break;
            case '%':
                if (b === ''){
                    a = a / 100; 
                } else {
                a = (a * b) / 100;}
                break;
        }
        finish = true;
        out.textContent = a;
        console.table (a,b,sign);
    }
})
