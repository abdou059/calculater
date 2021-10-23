var myClear = document.querySelector('.clear');
var myValue = document.querySelector('.val');
var myBtn = document.getElementsByClassName('input'); // [ ]
var shekelToDolar = document.querySelector('.shekelToDolar');
var dolarToShekel = document.querySelector('.dolarToShekel');
var shekelToEuro = document.querySelector('.shekelToEuro');
var euroToShekel = document.querySelector('.euroToShekel');

myClear.onclick = () => {
    myValue.value = '';
};

var arrayOfOp = ['-', '+', '/', 'x', '='];
var opCunt = 0;

for (i = 0; i < myBtn.length; i++) {
    myBtn[i].onclick = function () {
        if (arrayOfOp.includes(this.value)) {
            opCunt++;
            if (opCunt > 1) {
                var thisOp = '';

                for (i = 0; i < arrayOfOp.length; i++) {
                    if (myValue.value.indexOf(arrayOfOp[i]) !== -1) {
                        thisOp = arrayOfOp[i];
                        break;
                    }
                }

                var arrayOfNam = myValue.value.split(thisOp); // ["",""]
                var resultForTowNum = 0;
                if (thisOp === '+') {
                    resultForTowNum = parseFloat(arrayOfNam[0]) + parseFloat(arrayOfNam[1]);
                } else if (thisOp === '-') {
                    resultForTowNum = parseFloat(arrayOfNam[0]) - parseFloat(arrayOfNam[1]);
                } else if (thisOp === 'x') {
                    resultForTowNum = parseFloat(arrayOfNam[0]) * parseFloat(arrayOfNam[1]);
                } else if (thisOp === '/') {
                    resultForTowNum = parseFloat(arrayOfNam[0]) / parseFloat(arrayOfNam[1]);
                }
                if (this.value === '=') {
                    opCunt--;
                }
                myValue.value = resultForTowNum;
                opCunt--;
            }
        }

        if (this.value !== '=') {
            // result without equal
            myValue.value += this.value;
        }
    };
}

del.onclick = function () {
    myValue.value = myValue.value.substring(0, myValue.value.length - 1);
};

shekelToDolar.onclick = function () {
    myValue.value = parseFloat(myValue.value) / 3.3;
};

dolarToShekel.onclick = function() {
    myValue.value = parseFloat(myValue.value) * 3.3;
};

shekelToEuro.onclick = function () {
    myValue.value = parseFloat(myValue.value) / 3.94;
};

euroToShekel.onclick = function () {
    myValue.value = parseFloat(myValue.value) * 3.94;
};