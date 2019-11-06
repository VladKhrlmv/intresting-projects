function getHistory() {
    return document.querySelector('.history-value').textContent;
}

function printHistory(num) {
    document.querySelector('.history-value').textContent = num;
}

function printOutput(num) {
    if (num == "") {
        document.querySelector('.output-value').textContent = num;
    } else {
        document.querySelector('.output-value').textContent = getFormatedNumber(num);
    }
}

function getOutput() {
    return document.querySelector('.output-value').textContent;
}

function getFormatedNumber(num) {
    if (num =="-") {
        return '';
    }
    var n = Number(num);
    var val = n.toLocaleString("en");
    return val;
}

function reverseFormat(num) {
    return Number(num.replace(/,/g,''));
}

var operator = document.getElementsByClassName('operator');
for (var i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', function() {
        if (this.id == "clear") {
            printOutput("");
            printHistory("");
        }
        if (this.id == "backspace") {
            var output = reverseFormat(getOutput()).toString();
            if (output) {
                output = output.substr(0, output.length-1);
                printOutput(output);
            }
        } else {
            var output = getOutput();
            let history = getHistory();
            if (output == "" && history != "") {
                if (isNaN(history[history.length-1])) {
                    history = history.substr(0, history.length-1);
                }
            }
            if (output != "" || history != "") {
                output = output == "" ? output : reverseFormat(output);
                history += output;
                if(this.id == "=") {
                    let result = eval(history);
                    printOutput(result);
                    printHistory('');
                } else {
                    history += this.id;
                    printHistory(history);
                    printOutput('');
                }
            }
        }
    });
}

var number = document.getElementsByClassName('number');
for (var i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function() {
        var output = reverseFormat(getOutput());
        if (output != NaN) {
            output = output + this.id;
            printOutput(output);
        }
    });
}
